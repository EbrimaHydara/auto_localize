from ai_localizer import AILocalizer

class JSFileLocalizer(AILocalizer):
    def __init__(self, target_folder, output_folder):
        super().__init__(target_folder, output_folder)
        self.marking_prompt = (
            f"""
            Please analyze the following JavaScript file and perform the following tasks:
            1. Mark all translatable strings using the `t` function, ensuring to replace them with human-readable keys 
            in the format ('{file_path}:key'), where 'key' is a suggested key representation.
            2. Replace all marked strings with t('{file_path}:key') and return the entire file content with the marking placeholders.
            3. DO NOT truncate or abbreviate the marked content you should return. Make sure to always return the full code.
            4. Ensure the code remains intact and unbroken during localization, preserving the original structure and functionality.
            5. DO NOT return any explanations or additional text with the marked content. Only return the marked content without anything else.
            """
        )
        self.extraction_prompt = (
            f"""
            Please analyze the following JavaScript file and perform the following tasks:
            1. Extract all marked strings along with their corresponding keys into a JSON object in the format {{key: value}}. 
            Please DO NOT include the file path part of the key in the JSON object keys.
            2. Ensure the code remains intact and unbroken during localization, preserving the original structure and functionality.
            3. DO NOT truncate or abbreviate the content you should extract into the JSON object. Make sure to always extract all the translatable strings in the code.
            4. DO NOT return any explanations or additional text with the JSON content. Only return the JSON object content without anything else.
            """
        )

    def localize_files(self):
        file_extension = ".js"
        super().localize_files(file_extension)
