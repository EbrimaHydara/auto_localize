# web_app_jsx_file_localizer.py

import re
from localizers.web_localizers.web_app_file_localizer import WebAppFileLocalizer
from managers.error_manager import LocalizationRenderError, ResourceFileError, InvalidUserInputError

class WebAppJSXFileLocalizer(WebAppFileLocalizer):
    """
    The WebAppJSXFileLocalizer handles all JSX file-specific localization procedures.
    It inherits the WebAppFileLocalizer class and manages the localization process.
    """

    def __init__(self, source_code_id, files):
        super().__init__(source_code_id)
        self.files = files

        # Regular expression patterns for identifying translatable strings in JSX files
        self.translatable_patterns = [
            re.compile(r'(?<!{)(["\'])(?:(?=(\\?))\2.)*?\1'),  # Matches simple strings in double/single quotes not inside expressions
            re.compile(r'>{([^<>]*?)}<'),  # Matches strings between JSX tags (e.g., >Text<)
            re.compile(r'{`([^`]*?)`}')     # Matches template literals inside JSX
        ]

    def localize_files(self):
        """
        Localizes all the JSX files in self.files.
        """
        try:
            for jsx_file in self.files:
                self._process_jsx_file(jsx_file)
            print("JSX files localization completed.")
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
                    generated_key = self.generate_key(jsx_file)

                    # Determine the key without namespace for the JSON file
                    key_without_namespace = generated_key.split(':', 1)[-1] if use_namespace else generated_key

                    # Save the extracted string to the JSON file without the namespace prefix
                    source_json[key_without_namespace] = translatable_string

                    # Generate key with or without namespace for the replacement in modified content
                    key_for_replacement = generated_key if use_namespace else key_without_namespace

                    # Replace the string in the content with "{t('key_for_replacement')}"
                    replacement_string = f"{{{{t('{key_for_replacement}')}}}}"
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
