# web_app_jsx_file_localizer.py

import re
from PySide6.QtCore import QThread, Signal
from web_app_file_localizer import WebAppFileLocalizer
from error_manager import LocalizationRenderError, ResourceFileError, InvalidUserInputError

class WebAppJSXFileLocalizer(QThread, WebAppFileLocalizer):
    """
    The WebAppJSXFileLocalizer handles all JSX file-specific localization procedures.
    It inherits the WebAppFileLocalizer class and runs on its own PySide6 Thread.
    """

    localization_complete_signal = Signal(str, bool)

    def __init__(self, source_code_id, files):
        super().__init__(source_code_id)
        self.files = files

        # Regular expression patterns for identifying translatable strings in JSX files
        self.translatable_patterns = [
            re.compile(r'(?<!{)(["\'])(?:(?=(\\?))\2.)*?\1'),  # Matches simple strings in double/single quotes not inside expressions
            re.compile(r'>{([^<>]*?)}<'),  # Matches strings between JSX tags (e.g., >Text<)
            re.compile(r'{`([^`]*?)`}')     # Matches template literals inside JSX
        ]

    def run(self):
        """
        Executes the localization process in a separate thread.
        """
        try:
            self.localize_files()
        except Exception as e:
            self.localization_complete_signal.emit(f"WebAppJSXFileLocalizer Error: {str(e)}", False)

    def localize_files(self):
        """
        Localizes all the JSX files in self.files.
        """
        try:
            for jsx_file in self.files:
                self._process_jsx_file(jsx_file)
            self.localization_complete_signal.emit("Localization completed successfully.", True)
        except Exception as e:
            raise LocalizationRenderError(f"WebAppJSXFileLocalizer Error in localize_files: {str(e)}")

    def _process_jsx_file(self, jsx_file):
        """
        Processes an individual JSX file for localization.

        :param jsx_file: The path to the JSX file to process.
        """
        try:
            with open(jsx_file, 'r', encoding='utf-8') as file:
                content = file.read()

            self._mark_and_extract_strings(content, jsx_file)
        except Exception as e:
            raise LocalizationRenderError(f"WebAppJSXFileLocalizer Error in _process_jsx_file: {str(e)}")

    def _mark_and_extract_strings(self, content, jsx_file):
        """
        Marks and extracts all the translatable strings in the JSX file content and saves them to a JSON file.

        :param content: The content of the JSX file.
        :param jsx_file: The path to the JSX file being processed.
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
                    key = self.generate_key(jsx_file)

                    # Adjust key if use_key_namespace is True
                    if self.app_settings.get('use_key_namespace', False):
                        key = key.split(':', 1)[1]  # Remove namespace_suffix from the key

                    # Save the extracted string to the JSON file
                    source_json[key] = translatable_string

                    # Replace the string in the content with "{t('key')}"
                    replacement_string = f"{{{{t('{key}')}}}}"
                    modified_content = modified_content.replace(original_string, replacement_string)

            # Save the extracted strings to a JSON file
            if source_json:
                self.save_resource_files(source_json, jsx_file)

            # Save the modified JSX file
            self._save_jsx_file(modified_content, jsx_file)
        except Exception as e:
            raise ResourceFileError(f"WebAppJSXFileLocalizer Error in _mark_and_extract_strings: {str(e)}")

    def _save_jsx_file(self, content, jsx_file):
        """
        Saves the modified JSX file to replace the original.

        :param content: The modified content of the JSX file.
        :param jsx_file: The path to the JSX file being saved.
        """
        try:
            with open(jsx_file, 'w', encoding='utf-8') as file:
                file.write(content)
        except Exception as e:
            raise ResourceFileError(f"WebAppJSXFileLocalizer Error in _save_jsx_file: {str(e)}")
