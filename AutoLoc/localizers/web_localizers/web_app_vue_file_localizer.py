# web_app_vue_file_localizer.py

import re
from localizers.web_localizers.web_app_file_localizer import WebAppFileLocalizer
from managers.error_manager import LocalizationRenderError, ResourceFileError, InvalidUserInputError

class WebAppVUEFileLocalizer(WebAppFileLocalizer):
    """
    The WebAppVUEFileLocalizer handles all VUE file-specific localization procedures.
    It inherits the WebAppFileLocalizer class and manages the localization process.
    """

    def __init__(self, source_code_id, files):
        super().__init__(source_code_id)
        self.files = files

        # Regular expression patterns for identifying translatable strings in VUE files
        self.translatable_patterns = [
            re.compile(r'(["\'])(?:(?=(\\?))\2.)*?\1'),  # Matches simple strings in quotes
            re.compile(r'`(?:\\.|[^`\\])*`'),            # Matches template literals
            re.compile(r'>\s*(.*?)\s*<'),               # Matches HTML content between tags
        ]

    def localize_files(self):
        """
        Localizes all the VUE files in self.files.
        """
        try:
            for vue_file in self.files:
                self._process_vue_file(vue_file)
            print("Localization completed successfully.")
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

            # Check if the namespace is enabled in app_settings
            use_namespace = self.app_settings['use_key_namespace']

            for pattern in self.translatable_patterns:
                matches = pattern.finditer(content)
                for match in matches:
                    original_string = match.group(0)
                    translatable_string = match.group(1).strip() if len(match.groups()) > 0 else match.group(0).strip()
                    if not translatable_string:
                        continue

                    # Generate a unique key for the translatable string
                    generated_key = self.generate_key(vue_file)

                    # Determine the key without namespace for the JSON file
                    key_without_namespace = generated_key.split(':', 1)[-1] if use_namespace else generated_key

                    # Save the extracted string to the JSON file without the namespace prefix
                    source_json[key_without_namespace] = translatable_string

                    # Generate key with or without namespace for the replacement in modified content
                    key_for_replacement = generated_key if use_namespace else key_without_namespace

                    # Replace the string in the content with "{{$t('key_for_replacement')}}"
                    replacement_string = f"{{$t('{key_for_replacement}')}}"
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
