# web_app_ejs_file_localizer.py

import re
from PySide6.QtCore import QThread, Signal
from web_app_file_localizer import WebAppFileLocalizer
from error_manager import LocalizationRenderError, ResourceFileError, InvalidUserInputError

class WebAppEJSFileLocalizer(QThread, WebAppFileLocalizer):
    """
    The WebAppEJSFileLocalizer handles all EJS file-specific localization procedures.
    It inherits the WebAppFileLocalizer class and runs on its own PySide6 Thread.
    """

    localization_complete_signal = Signal(str, bool)

    def __init__(self, source_code_id, files):
        super().__init__(source_code_id)
        self.files = files

        # Regular expression patterns for identifying translatable strings in EJS files
        self.translatable_patterns = [
            re.compile(r'<%=\s*(.*?)\s*%>'),  # Matches rendered EJS content
        ]

    def run(self):
        """
        Executes the localization process in a separate thread.
        """
        try:
            self.localize_files()
        except Exception as e:
            self.localization_complete_signal.emit(f"WebAppEJSFileLocalizer Error: {str(e)}", False)

    def localize_files(self):
        """
        Localizes all the EJS files in self.files.
        """
        try:
            for ejs_file in self.files:
                self._process_ejs_file(ejs_file)
            self.localization_complete_signal.emit("Localization completed successfully.", True)
        except Exception as e:
            raise LocalizationRenderError(f"WebAppEJSFileLocalizer Error in localize_files: {str(e)}")

    def _process_ejs_file(self, ejs_file):
        """
        Processes an individual EJS file for localization.

        :param ejs_file: The path to the EJS file to process.
        """
        try:
            with open(ejs_file, 'r', encoding='utf-8') as file:
                content = file.read()

            self._mark_and_extract_strings(content, ejs_file)
        except Exception as e:
            raise LocalizationRenderError(f"WebAppEJSFileLocalizer Error in _process_ejs_file: {str(e)}")

    def _mark_and_extract_strings(self, content, ejs_file):
        """
        Marks and extracts all the translatable strings in the EJS file content and saves them to a JSON file.

        :param content: The content of the EJS file.
        :param ejs_file: The path to the EJS file being processed.
        """
        try:
            source_json = {}
            modified_content = content

            for pattern in self.translatable_patterns:
                matches = pattern.finditer(content)
                for match in matches:
                    original_string = match.group(0)
                    translatable_string = match.group(1).strip()
                    if not translatable_string:
                        continue

                    # Generate a unique key for the translatable string
                    key = self.generate_key(ejs_file)

                    # Adjust key if use_key_namespace is True
                    if self.app_settings.get('use_key_namespace', False):
                        key = key.split(':', 1)[1]  # Remove namespace_suffix from the key

                    # Save the extracted string to the JSON file
                    source_json[key] = translatable_string

                    # Replace the string in the content with "${{unique_id}}"
                    replacement_string = f"${{{{{key}}}}}"  # Ensure replacement is exactly ${{unique_id}}
                    modified_content = modified_content.replace(original_string, replacement_string)

            # Save the extracted strings to a JSON file
            if source_json:
                self.save_resource_files(source_json, ejs_file)

            # Save the modified EJS file
            self._save_ejs_file(modified_content, ejs_file)
        except Exception as e:
            raise ResourceFileError(f"WebAppEJSFileLocalizer Error in _mark_and_extract_strings: {str(e)}")

    def _save_ejs_file(self, content, ejs_file):
        """
        Saves the modified EJS file to replace the original.

        :param content: The modified content of the EJS file.
        :param ejs_file: The path to the EJS file being saved.
        """
        try:
            with open(ejs_file, 'w', encoding='utf-8') as file:
                file.write(content)
        except Exception as e:
            raise ResourceFileError(f"WebAppEJSFileLocalizer Error in _save_ejs_file: {str(e)}")
