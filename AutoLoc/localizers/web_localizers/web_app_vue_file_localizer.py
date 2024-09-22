# web_app_vue_file_localizer.py

import re
from PySide6.QtCore import QThread, Signal
from localizers.web_localizers.web_app_file_localizer import WebAppFileLocalizer
from managers.error_manager import LocalizationRenderError, ResourceFileError, InvalidUserInputError

class WebAppVUEFileLocalizer(QThread, WebAppFileLocalizer):
    """
    The WebAppVUEFileLocalizer handles all VUE file-specific localization procedures.
    It inherits the WebAppFileLocalizer class and runs on its own PySide6 Thread.
    """

    localization_complete_signal = Signal(str, bool)

    def __init__(self, source_code_id, files):
        # Initialize QThread without arguments
        QThread.__init__(self) # as super().__init__(self)

        # Initialize WebAppFileLocalizer with the source_code_id argument
        WebAppFileLocalizer.__init__(self, source_code_id)
        
        self.files = files

        # Regular expression patterns for identifying translatable strings in VUE files
        self.translatable_patterns = [
            re.compile(r'(["\'])(?:(?=(\\?))\2.)*?\1'),  # Matches simple strings in quotes
            re.compile(r'`(?:\\.|[^`\\])*`'),            # Matches template literals
            re.compile(r'>\s*(.*?)\s*<'),               # Matches HTML content between tags
        ]

    def run(self):
        """
        Executes the localization process in a separate thread.
        """
        try:
            self.localize_files()
        except Exception as e:
            self.localization_complete_signal.emit(f"WebAppVUEFileLocalizer Error: {str(e)}", False)

    def localize_files(self):
        """
        Localizes all the VUE files in self.files.
        """
        try:
            for vue_file in self.files:
                self._process_vue_file(vue_file)
            self.localization_complete_signal.emit("Localization completed successfully.", True)
        except Exception as e:
            raise LocalizationRenderError(f"WebAppVUEFileLocalizer Error in localize_files: {str(e)}")

    def _process_vue_file(self, vue_file):
        """
        Processes an individual VUE file for localization.

        :param vue_file: The path to the VUE file to process.
        """
        try:
            with open(vue_file, 'r', encoding='utf-8') as file:
                content = file.read()

            self._mark_and_extract_strings(content, vue_file)
        except Exception as e:
            raise LocalizationRenderError(f"WebAppVUEFileLocalizer Error in _process_vue_file: {str(e)}")

    def _mark_and_extract_strings(self, content, vue_file):
        """
        Marks and extracts all the translatable strings in the VUE file content and saves them to a JSON file.

        :param content: The content of the VUE file.
        :param vue_file: The path to the VUE file being processed.
        """
        try:
            source_json = {}
            modified_content = content

            for pattern in self.translatable_patterns:
                matches = pattern.finditer(content)
                for match in matches:
                    original_string = match.group(0)
                    translatable_string = match.group(1).strip() if len(match.groups()) > 0 else match.group(0).strip()
                    if not translatable_string:
                        continue

                    # Generate a unique key for the translatable string
                    key = self.generate_key(vue_file)

                    # Adjust key if use_key_namespace is True
                    if self.app_settings.get('use_key_namespace', False):
                        key = key.split(':', 1)[1]  # Remove namespace_suffix from the key

                    # Save the extracted string to the JSON file
                    source_json[key] = translatable_string

                    # Replace the string in the content with "{{$t('key')}}"
                    replacement_string = f"{{{{$t('{key}')}}}}"
                    modified_content = modified_content.replace(original_string, replacement_string)

            # Save the extracted strings to a JSON file
            if source_json:
                self.save_resource_files(source_json, vue_file)

            # Save the modified VUE file
            self._save_vue_file(modified_content, vue_file)
        except Exception as e:
            raise ResourceFileError(f"WebAppVUEFileLocalizer Error in _mark_and_extract_strings: {str(e)}")

    def _save_vue_file(self, content, vue_file):
        """
        Saves the modified VUE file to replace the original.

        :param content: The modified content of the VUE file.
        :param vue_file: The path to the VUE file being saved.
        """
        try:
            with open(vue_file, 'w', encoding='utf-8') as file:
                file.write(content)
        except Exception as e:
            raise ResourceFileError(f"WebAppVUEFileLocalizer Error in _save_vue_file: {str(e)}")
