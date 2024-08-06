import os
import json
from openai import OpenAI

class AILocalizer:
    def __init__(self, target_folder, output_folder, file_extension):
        self.api_key = "sk-proj-vUbzJ4KnwGp7AohPrBTST3BlbkFJrTTxQ6M3sk9VUaggFNJI"
        self.system_role = """
        You are a highly skilled expert in localization, specializing in software and content localization. Your responsibilities include analyzing various types of code and content to identify and extract translatable strings. You must ensure that all user-facing text is accurately marked for translation and replaced with appropriate human-legible keys.
        """
        self.client = OpenAI(api_key=self.api_key)
        self.target_folder = target_folder
        self.output_folder = output_folder
        self.file_extension = file_extension
        self.code_types = {
            ".js": "JavaScript",
            ".ejs": "Embedded JavaScript (EJS)",
            ".ts": "TypeScript",
            ".tsx": "TypeScript (TSX)",
            ".vue": "Vue"
        }
        self.code_type = self.code_types.get(self.file_extension, "content")
        os.makedirs(output_folder, exist_ok=True)

    def initial_prompt(self, original_code):
        prompt = f"""
        Please read and understand the following {self.code_type} code. Say DONE when you are done reading and understanding the code:\n\n
        {original_code}
        """
        # Print the generated prompt
        print("Generated Prompt:\n", prompt)
        
        # Interact with the model to get the response
        try:
            response = self.client.chat.completions.create(
                messages=[
                    {"role": "system", "content": self.system_role},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4-32k",
                max_tokens=50,  # Assuming the response is short like "DONE"
                temperature=0.2,
                top_p=0.9,
                frequency_penalty=0.0,
                presence_penalty=0.0
            )
            model_response = response.choices[0].message.content.strip()
        except Exception as e:
            print(f"Error: An exception occurred while getting the model response: {str(e)}")
            model_response = None
        
        # Print the response from the model
        print("Model Response:\n", model_response)
        
        return model_response


    def read_file(self, file_path):
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                return file.read()
        except FileNotFoundError:
            print(f"Error: The file {file_path} was not found.")
            return None
        except IOError:
            print(f"Error: An I/O error occurred while reading {file_path}.")
            return None

    def mark_strings(self, file_path=None):
        key = f"{os.path.splitext(file_path)[0]}:key" if file_path else "key"
        prompt = f"""
        Please analyze the following {self.code_type} code and perform the following tasks:
        1. Mark all translatable strings using the `t` function, ensuring to replace them with human-readable keys 
        in the format {key}, where 'key' is a suggested key representation.
        2. Replace all marked strings with {key} and return the entire code content with the marking placeholders.
        3. DO NOT truncate or abbreviate the marked content you should return. Make sure to always return the full code.
        4. Ensure the code remains intact and unbroken during localization, preserving the original structure and functionality.
        5. DO NOT return any explanations or additional text with the marked content. Only return the marked content without anything else.
        """

        marked_content = ""
        try:
            response = self.client.chat.completions.create(
                messages=[
                    {"role": "system", "content": self.system_role},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4-32k",
                max_tokens=32768,
                temperature=0.2,
                top_p=0.9,
                frequency_penalty=0.0,
                presence_penalty=0.0,
                stop=["\n\n"]
            )
            marked_content += response.choices[0].message.content.strip() + "\n"
        except Exception as e:
            print(f"Error: An exception occurred while marking translatable strings: {str(e)}")
            return None

        return marked_content

    def extract_strings(self):
        
        prompt = f"""
        Please perform the following tasks on the marked {self.code_type} code:
        1. Extract all marked strings along with their corresponding keys into a JSON object in the most appropriate JSON format. 
        Please DO NOT include the namespace part of the namespace:key in the JSON object keys.
        2. Ensure the code remains intact and unbroken during localization preserving the original structure and functionality.
        3. DO NOT truncate or abbreviate the content you should extract into the JSON object. Make sure to always extract all the translatable strings in the code.
        4. DO NOT return any explanations or additional text with the JSON content.
        """

        extracted_strings = ""
        try:
            response = self.client.chat.completions.create(
                messages=[
                    {"role": "system", "content": self.system_role},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4-32k",
                max_tokens=32768,
                temperature=0.2,
                top_p=0.9,
                frequency_penalty=0.0,
                presence_penalty=0.0,
                stop=["\n\n"]
            )
            extracted_strings += response.choices[0].message.content.strip() + "\n"
        except Exception as e:
            print(f"Error: An exception occurred while extracting translatable strings: {str(e)}")
            return None

        return extracted_strings

    def write_to_json(self, data, output_path):
        try:
            with open(output_path, 'w', encoding='utf-8') as json_file:
                json.dump(data, json_file, ensure_ascii=False, indent=4)
        except IOError:
            print(f"Error: An I/O error occurred while writing to {output_path}.")

    def write_to_file(self, content, output_path):
        try:
            with open(output_path, 'w', encoding='utf-8') as file:
                file.write(content)
        except IOError:
            print(f"Error: An I/O error occurred while writing to {output_path}.")

    def process_file(self, file_path):
        file_content = self.read_file(file_path)
        if file_content is None:
            print("File is empty!")
            return

        print(f"Processing {file_path}...")

        # Call initial_prompt with file_content as original_code
        initial_response = self.initial_prompt(file_content)
        print(f"Initial Response: {initial_response}")

        marked_content = self.mark_strings(file_path)
        if marked_content is None:
            print(f"Skipping {file_path} due to an error in marking translatable strings.")
            return

        print(f"The marked content:\n{marked_content}")

        response_text = self.extract_strings()
        if response_text is None:
            print(f"Skipping {file_path} due to an error in extracting translatable strings.")
            return

        try:
            print(f"Response JSON Text: {response_text}")  # Debugging line

            translatable_strings_dict = json.loads(response_text.strip())
        except (ValueError, json.JSONDecodeError):
            print(f"Error: Failed to load the response text into a JSON object for {file_path}.")
            return

        json_output_path = os.path.join(self.output_folder, f"{os.path.splitext(os.path.basename(file_path))[0]}.json")
        marked_file_output_path = os.path.join(self.output_folder, f"marked_{os.path.basename(file_path)}")

        self.write_to_json(translatable_strings_dict, json_output_path)
        self.write_to_file(marked_content.strip(), marked_file_output_path)

        print(f"File {file_path} has been processed successfully.")


    def localize_files(self):
        for root, _, files in os.walk(self.target_folder):
            for file in files:
                if file.endswith(self.file_extension):
                    file_path = os.path.join(root, file)
                    self.process_file(file_path)
