import os
import time
import json
from openai import OpenAI

# Initialize the OpenAI client
api_key = "sk-proj-vUbzJ4KnwGp7AohPrBTST3BlbkFJrTTxQ6M3sk9VUaggFNJI"
client = OpenAI(api_key=api_key)

system_role = """
    You are a highly skilled expert in localization, specializing in software and content localization. Your responsibilities include analyzing various types of code and content to identify and extract translatable strings. You must ensure that all user-facing text is accurately marked for translation and replaced with appropriate keys, taking into account the context, meaning, and cultural relevance. You are adept at handling complex localization tasks, including maintaining consistency across different locales, and providing context-appropriate translations. Your goal is to facilitate an accurate and comprehensive localization process, ensuring that the final output is suitable for a global audience.
"""

def read_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            return file.read()
    except FileNotFoundError:
        print(f"Error: The file {file_path} was not found.")
        return None
    except IOError:
        print(f"Error: An I/O error occurred while reading {file_path}.")
        return None

def localize_and_extract(file_content, file_path):
    combined_prompt = f"""
    Please analyze the given TSX (TypeScript with JSX) file content and perform the following tasks:
    1. Mark all translatable strings using the `t` function, ensuring to replace them with human-readable keys in the format ('{file_path}:key'), where 'key' is a suggested key representation. This includes strings in both TypeScript and JSX parts, such as component props, UI labels, and other user-facing text.
    2. Extract all marked strings along with their corresponding keys into a JSON object in the format {{"key": "value"}}.
    3. Ensure the code remains intact and unbroken during localization, preserving the original structure, type definitions, and functionality, including the React component structure and JSX syntax.
    4. Never truncate or abbreviate the original file content length in the response, and maintain the full integrity of the code.

    File Path: {file_path}
    File Content:
    {file_content}
    """
    try:
        response = client.chat.completions.create(
            messages=[
                {"role": "system", "content": system_role},
                {"role": "user", "content": combined_prompt}
            ],
            model="gpt-4-32k",
            max_tokens=32768,
            temperature=0.2,
            top_p=0.9,
            frequency_penalty=0.0,
            presence_penalty=0.0,
            stop=["\n\n"]
        )
        content = response.choices[0].message.content.strip()
        # Extracting the JSON part from the response
        json_start = content.find("{")
        json_content = content[json_start:]
        marked_content = content[:json_start].strip()
        return [marked_content, json.loads(json_content)]
    except Exception as e:
        print(f"Error: An exception occurred while localizing and extracting strings: {str(e)}")
        return None

def write_to_json(data, output_path):
    try:
        with open(output_path, 'w', encoding='utf-8') as json_file:
            json.dump(data, json_file, ensure_ascii=False, indent=4)
    except IOError:
        print(f"Error: An I/O error occurred while writing to {output_path}.")

def write_to_file(content, output_path):
    try:
        with open(output_path, 'w', encoding='utf-8') as file:
            file.write(content)
    except IOError:
        print(f"Error: An I/O error occurred while writing to {output_path}.")

def process_file(file_path, output_folder):
    file_content = read_file(file_path)
    if file_content is None:
        return

    print(f"Processing {file_path}...")
    response = localize_and_extract(file_content, file_path)
    if response is None:
        print(f"Skipping {file_path} due to an error in localization and extraction.")
        return

    marked_content, translatable_strings_dict = response

    json_output_path = os.path.join(output_folder, f"{os.path.basename(file_path)}.json")
    marked_file_output_path = os.path.join(output_folder, f"marked_{os.path.basename(file_path)}")

    write_to_json(translatable_strings_dict, json_output_path)
    write_to_file(marked_content, marked_file_output_path)

    print(f"File {file_path} has been processed successfully.")

def main(target_folder, output_folder):
    os.makedirs(output_folder, exist_ok=True)

    start_time = time.time()
    for root, dirs, files in os.walk(target_folder):
        for file in files:
            file_path = os.path.join(root, file)
            file_extension = os.path.splitext(file)[1]
            if file_extension.lower() == ".tsx":
                process_file(file_path, output_folder)
    end_time = time.time()

    elapsed_time = end_time - start_time
    hours, remainder = divmod(elapsed_time, 3600)
    minutes, seconds = divmod(remainder, 60)
    print("File localization completed!")
    print(f"Time taken to localize the files: {int(hours):02}:{int(minutes):02}:{int(seconds):02}")

if __name__ == "__main__":
    target_folder = 'files_to_loc/tsx'  # Change this to your target folder path
    output_folder = 'loced_files/tsx'  # Change this to your desired output folder path

    main(target_folder, output_folder)
