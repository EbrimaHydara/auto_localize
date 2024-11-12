import re
from localizers.web_localizers.web_app_file_localizer import WebAppFileLocalizer
from managers.error_manager import LocalizationRenderError, ResourceFileError, InvalidUserInputError

class WebAppJSFileLocalizer(WebAppFileLocalizer):
    """
    The WebAppJSFileLocalizer handles all JS file-specific localization procedures.
    It inherits the WebAppFileLocalizer class and manages the localization process.
    """

    def __init__(self, source_code_id, files):
        super().__init__(source_code_id)
        self.files = files

        # Regular expression patterns for identifying Japanese strings while avoiding comments and concatenations
        self.comment_pattern = re.compile(r'//.*?$|/\*.*?\*/', re.DOTALL | re.MULTILINE)

        # Updated pattern to include backtick strings, while excluding concatenated strings and specific cases
        self.japanese_text_pattern = re.compile(r"""
            (?<![\+\w])\s*            # Negative lookbehind to ignore concatenations and object keys
            (["'`])                    # Match opening quote (single, double, or backtick) (capture group 1)
            (                         # Start group for the content to be matched
            (?:[^"'\n]*?)             # Lazily match any characters that are not newlines or quotes
            [\u3000-\u30FF\u4E00-\u9FFF]  # Match Japanese characters
            [^"'\n]*?                 # Lazily match any characters that are not newlines or quotes
            )                         # End group for the content to be matched
            \1                        # Match closing quote (same as opening)
            (?!\s*[\+\w])             # Negative lookahead to ignore concatenations and function calls
            |
            ^\s*(["'`])               # Match isolated opening quote at the beginning (capture group 2)
            (                         # Start group for isolated content to be matched
            (?:[^"'\n]*?)             # Lazily match any characters that are not newlines or quotes
            [\u3000-\u30FF\u4E00-\u9FFF]  # Match Japanese characters
            [^"'\n]*?                 # Lazily match any characters that are not newlines or quotes
            )                         # End group for isolated content to be matched
            \2                        # Match isolated closing quote (same as opening)
            (?![\w\+\)])              # Negative lookahead to avoid concatenations, function calls, or variable names
        """, re.VERBOSE)

        # Pattern to match specific cases like '福岡県' or prompts with Japanese characters
        self.specific_japanese_string_pattern = re.compile(r"""
            (["'`])                    # Match opening quote (capture group 1)
            ([\u3000-\u30FF\u4E00-\u9FFF]+)  # Match only Japanese characters
            \1                        # Match closing quote (same as opening)
        """, re.VERBOSE)

    def localize_files(self):
        """
        Localizes all the JS files in self.files.
        """
        try:
            for js_file in self.files:
                self._process_js_file(js_file)
            print("JS files localization completed.")
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

            modified_content, source_json = self._mark_and_extract_japanese_strings(content, js_file)

            # Save the extracted strings to a JSON file
            if source_json:
                self.save_resource_files(source_json, js_file)

            # Save the modified JS file using the existing method
            self._save_js_file(modified_content, js_file)
        except Exception as e:
            raise LocalizationRenderError(f"WebAppJSFileLocalizer Error in _process_js_file: {str(e)}")

    def _mark_and_extract_japanese_strings(self, content, js_file):
        """
        Marks and extracts all the Japanese strings in the JS file content while preserving comments
        and avoiding concatenated strings.

        :param content: The content of the JS file.
        :param js_file: The path to the JS file being processed.
        :return: Modified content with placeholders for Japanese texts, and source_json for extracted strings.
        """
        try:
            source_json = {}
            modified_content_segments = []

            # Check if the namespace is enabled in app_settings
            use_namespace = self.app_settings['use_key_namespace']

            # Function to replace Japanese strings in code segments
            def replace_in_code_segment(segment):
                def replace_function(match):
                    # Match group 1 or 2 for quote type, and group 2 or 3 for the text to be replaced
                    quote_type = match.group(1) or match.group(2)
                    original_text = match.group(2) if match.group(1) else match.group(3)

                    # Generate a unique key for the translatable string
                    generated_key = self.generate_key(js_file)

                    # Determine the key without namespace for the JSON file
                    key_without_namespace = generated_key.split(':', 1)[-1] if use_namespace else generated_key

                    # Save the extracted string to the JSON file
                    source_json[key_without_namespace] = original_text

                    # Determine the correct replacement string based on quote type
                    if quote_type == "'":
                        # If the original string was in single quotes, use double quotes in the replacement
                        replacement_string = f'${{translate("{generated_key}")}}'
                    elif quote_type == '"':
                        # If the original string was in double quotes, use single quotes in the replacement
                        replacement_string = f"${{translate('{generated_key}')}}"
                    elif quote_type == "`":
                        # If the original string was in backtick quotes, use double quotes in the replacement
                        replacement_string = f'${{translate("{generated_key}")}}'
                    else:
                        replacement_string = original_text  # No replacement needed

                    # Replace the original text with the replacement string
                    return f"{quote_type}{replacement_string}{quote_type}"

                # Apply the specific Japanese string pattern first to catch strings like '福岡県'
                segment = self.specific_japanese_string_pattern.sub(replace_function, segment)

                # Then apply the general pattern for all other cases
                return self.japanese_text_pattern.sub(replace_function, segment)

            # Split the JS code into segments of comments and non-comments
            pos = 0
            for match in self.comment_pattern.finditer(content):
                # Add the non-comment part
                non_comment_part = content[pos:match.start()]
                if non_comment_part:
                    modified_content_segments.append(replace_in_code_segment(non_comment_part))
                # Add the comment part without modification
                modified_content_segments.append(match.group())
                pos = match.end()

            # Add the last non-comment part if it exists
            remaining_code = content[pos:]
            if remaining_code:
                modified_content_segments.append(replace_in_code_segment(remaining_code))

            # Combine all segments back into the modified code
            modified_content = ''.join(modified_content_segments)

            return modified_content, source_json
        except Exception as e:
            raise ResourceFileError(f"WebAppJSFileLocalizer Error in _mark_and_extract_japanese_strings: {str(e)}")
    
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
