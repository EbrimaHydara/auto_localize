import re
from localizers.web_localizers.web_app_file_localizer import WebAppFileLocalizer
from managers.error_manager import LocalizationRenderError, ResourceFileError, InvalidUserInputError

class WebAppTSXFileLocalizer(WebAppFileLocalizer):
    """
    The WebAppTSXFileLocalizer handles all TSX file-specific localization procedures.
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
            (["'`])                   # Match opening quote (single, double, or backtick) (capture group 1)
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
        Localizes all the TSX files in self.files.
        """
        try:
            for tsx_file in self.files:
                self._process_tsx_file(tsx_file)
            print("TSX files localization completed.")
        except Exception as e:
            raise LocalizationRenderError(f"WebAppTSXFileLocalizer Error in localize_files: {str(e)}")

    def _process_tsx_file(self, tsx_file):
        """
        Processes an individual TSX file for localization.

        :param tsx_file: The path to the TSX file to process.
        """
        try:
            with open(tsx_file, 'r', encoding='utf-8') as file:
                content = file.read()

            modified_content, source_json = self._mark_and_extract_strings(content, tsx_file)

            # Save the extracted strings to a JSON file
            if source_json:
                self.save_resource_files(source_json, tsx_file)

            # Save the modified TSX file using the existing method
            self._save_tsx_file(modified_content, tsx_file)
        except Exception as e:
            raise LocalizationRenderError(f"WebAppTSXFileLocalizer Error in _process_tsx_file: {str(e)}")

    def _mark_and_extract_strings(self, content, tsx_file):
        """
        Marks and extracts all the translatable strings in the TSX file content while preserving comments
        and avoiding concatenated strings.

        :param content: The content of the TSX file.
        :param tsx_file: The path to the TSX file being processed.
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
                    generated_key = self.generate_key(tsx_file)

                    # Determine the key without namespace for the JSON file
                    key_without_namespace = generated_key.split(':', 1)[-1] if use_namespace else generated_key

                    # Save the extracted string to the JSON file
                    source_json[key_without_namespace] = original_text

                    # Determine the correct replacement string based on quote type
                    if quote_type == "'":
                        # If the original string was in single quotes, use t("{generated_key}") in the replacement
                        replacement_string = f'{{t("{generated_key}")}}'
                    elif quote_type == '"':
                        # If the original string was in double quotes, use t('{generated_key}') in the replacement
                        replacement_string = f"{{t('{generated_key}')}}"
                    elif quote_type == "`":
                        # If the original string was in backtick quotes, use t("{generated_key}") in the replacement
                        replacement_string = f'{{t("{generated_key}")}}'
                    else:
                        replacement_string = original_text  # No replacement needed

                    # Replace the original text with the replacement string
                    return f"{quote_type}{replacement_string}{quote_type}"

                # Apply the specific Japanese string pattern first to catch strings like '福岡県'
                segment = self.specific_japanese_string_pattern.sub(replace_function, segment)

                # Then apply the general pattern for all other cases
                return self.japanese_text_pattern.sub(replace_function, segment)

            # Process div tags first to avoid conflicts with quote_type logic
            modified_content = self._process_tags(content, source_json, tsx_file)

            # Split the TSX code into segments of comments and non-comments
            pos = 0
            for match in self.comment_pattern.finditer(modified_content):
                # Add the non-comment part
                non_comment_part = modified_content[pos:match.start()]
                if non_comment_part:
                    modified_content_segments.append(replace_in_code_segment(non_comment_part))
                # Add the comment part without modification
                modified_content_segments.append(match.group())
                pos = match.end()

            # Add the last non-comment part if it exists
            remaining_code = modified_content[pos:]
            if remaining_code:
                modified_content_segments.append(replace_in_code_segment(remaining_code))

            # Combine all segments back into the modified code
            modified_content = ''.join(modified_content_segments)

            return modified_content, source_json
        except Exception as e:
            raise ResourceFileError(f"WebAppTSXFileLocalizer Error in _mark_and_extract_strings: {str(e)}")

    def _process_tags(self, content, source_json, tsx_file):
        """
        Processes <dt> and <dd> tags in the content, marks and extracts the Japanese text, and adds to source_json.
        
        :param content: The content of the TSX file.
        :param source_json: The dictionary to store extracted strings.
        :param tsx_file: The path to the TSX file being processed.
        :return: Modified content with placeholders for Japanese texts inside <dt> and <dd> tags.
        """
        try:
            # Regular expression patterns for <dt> and <dd> tags individually
            dt_pattern = re.compile(r'<dt[^>]*>.*?</dt>', re.DOTALL)
            dd_pattern = re.compile(r'<dd[^>]*>.*?</dd>', re.DOTALL)
            
            # Function to process individual tag content
            def process_individual_tag(tag_pattern, content):
                modified_content = content
                tags_with_japanese = []

                matches = tag_pattern.findall(content)
                for match in matches:
                    # Check if the tag contains Japanese characters at any level
                    if re.search(r'[\u3000-\u30FF\u4E00-\u9FFF]+', match):
                        tags_with_japanese.append(match)

                # Replace each tag content in the original content
                for tag_content in tags_with_japanese:
                    generated_key = self.generate_key(tsx_file)
                    key_without_namespace = generated_key.split(':', 1)[-1] if self.app_settings['use_key_namespace'] else generated_key
                    source_json[key_without_namespace] = tag_content
                    # Replace the tag content with the localization key placeholder
                    modified_content = modified_content.replace(tag_content, f'{{t("{generated_key}")}}')

                return modified_content

            # Process both <dt> and <dd> tags separately
            content = process_individual_tag(dt_pattern, content)
            content = process_individual_tag(dd_pattern, content)

            return content
        except Exception as e:
            raise ResourceFileError(f"WebAppTSXFileLocalizer Error in _process_tags: {str(e)}")

    def _save_tsx_file(self, content, tsx_file):
        """
        Saves the modified TSX file to replace the original.

        :param content: The modified content of the TSX file.
        :param tsx_file: The path to the TSX file being saved.
        """
        try:
            with open(tsx_file, 'w', encoding='utf-8') as file:
                file.write(content)
        except Exception as e:
            raise ResourceFileError(f"WebAppTSXFileLocalizer Error in _save_tsx_file: {str(e)}")
