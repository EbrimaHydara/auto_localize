# web_app_js_file_localizer.py

import re
from PySide6.QtCore import QObject, QThread, Signal
from localizers.web_localizers.web_app_file_localizer import WebAppFileLocalizer
from managers.error_manager import LocalizationRenderError, ResourceFileError, InvalidUserInputError

class WebAppJSFileLocalizer(QThread, WebAppFileLocalizer):
    """
    The WebAppJSFileLocalizer handles all JS file-specific localization procedures.
    It inherits the WebAppFileLocalizer class and runs on its own PySide6 Thread.
    """

    localization_complete_signal = Signal(str, bool)

    def __init__(self, source_code_id, files):

        self.source_code_id = source_code_id

        # Initialize the QObject explicitly
        QObject.__init__(self) # as super().__init__(self)

        # Initialize WebAppFileLocalizer with the source_code_id argument
        WebAppFileLocalizer.__init__(self.source_code_id) # as super().__init__(self)

        # Initialize QThread without arguments
        QThread.__init__(self) # as super().__init__(self)

        self.files = files

        # Regular expression patterns for identifying translatable strings in JS files
        self.translatable_patterns = [
            re.compile(r'"([^"\\]*(?:\\.[^"\\]*)*)"', re.MULTILINE),  # Matches simple strings in double quotes
            re.compile(r"`([^`\\]*(?:\\.[^`\\]*)*)`", re.MULTILINE),  # Matches template literals
            re.compile(r">\s*(.*?)\s*<", re.MULTILINE),               # Matches HTML content between tags
        ]

    def run(self):
        """
        Executes the localization process in a separate thread.
        """
        try:
            self.localize_files()
        except Exception as e:
            self.localization_complete_signal.emit(f"WebAppJSFileLocalizer Error: {str(e)}", False)

    def localize_files(self):
        """
        Localizes all the JS files in self.files.
        """
        try:
            for js_file in self.files:
                self._process_js_file(js_file)
            self.localization_complete_signal.emit("Localization completed successfully.", True)
        except Exception as e:
            raise LocalizationRenderError(f"WebAppJSFileLocalizer Error in localize_files: {str(e)}")

    def _process_js_file(self, js_file):
        """
        Processes an individual JS file for localization.

        :param js_file: The path to the JS file to process.
        """
        try:
            with open(js_file, 'r', encoding='utf-8') as file:
                content = file.read()

            self._mark_and_extract_strings(content, js_file)
        except Exception as e:
            raise LocalizationRenderError(f"WebAppJSFileLocalizer Error in _process_js_file: {str(e)}")

    def _mark_and_extract_strings(self, content, js_file):
        """
        Marks and extracts all the translatable strings in the JS file content and saves them to a JSON file.

        :param content: The content of the JS file.
        :param js_file: The path to the JS file being processed.
        """
        try:
            source_json = {}
            modified_content = content

            for pattern in self.translatable_patterns:
                matches = pattern.finditer(content)
                for match in matches:
                    original_string = match.group(0)
                    translatable_string = match.group(1).strip()  # Remove quotes or backticks around the string
                    if not translatable_string:
                        continue
                    
                    # Generate a unique key for the translatable string
                    key = self.generate_key(js_file)

                    # Adjust key if use_key_namespace is True
                    if self.app_settings.get('use_key_namespace', False):
                        key = key.split(':', 1)[1]  # Remove namespace_suffix from the key

                    # Save the extracted string to the JSON file
                    source_json[key] = translatable_string

                    # Replace the string in the content with "${translate('unique_id')}"
                    replacement_string = f"${{translate('{key}')}}"
                    modified_content = modified_content.replace(original_string, replacement_string)

            # Save the extracted strings to a JSON file
            if source_json:
                self.save_resource_files(source_json, js_file)

            # Save the modified JS file
            self._save_js_file(modified_content, js_file)
        except Exception as e:
            raise ResourceFileError(f"WebAppJSFileLocalizer Error in _mark_and_extract_strings: {str(e)}")

    def _save_js_file(self, content, js_file):
        """
        Saves the modified JS file to replace the original.

        :param content: The modified content of the JS file.
        :param js_file: The path to the JS file being saved.
        """
        try:
            with open(js_file, 'w', encoding='utf-8') as file:
                file.write(content)
        except Exception as e:
            raise ResourceFileError(f"WebAppJSFileLocalizer Error in _save_js_file: {str(e)}")
