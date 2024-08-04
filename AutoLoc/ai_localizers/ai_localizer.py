import os
import time
import json
from openai import OpenAI

# Initialize the OpenAI client
api_key = "sk-proj-vUbzJ4KnwGp7AohPrBTST3BlbkFJrTTxQ6M3sk9VUaggFNJI"
client = OpenAI(api_key=api_key)

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

def mark_translatable_strings(file_content, file_type):
    marking_prompt = f"""
    You are an assistant that accurately marks translatable strings in various file types 
    such as .js, .ejs, .ts, .tsx, and .json. For this task, please analyze the given file content 
    and mark all translatable strings using an appropriate localization format for the specified 
    file type. For instance, use `i18next` format as `t(key)` for JavaScript files. Ensure that 
    the marked strings are accurate and verify the correctness of the localization syntax before 
    returning the results. If the file content is too large, split the output to avoid truncation. 
    Please provide only the marked content without any additional explanations.

    File Type: {file_type}

    File Content:
    {file_content}
    """
    try:
        response = client.chat.completions.create(
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": marking_prompt}
            ],
            model="gpt-4",
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        print(f"Error: An exception occurred while marking translatable strings: {str(e)}")
        return None

def extract_translatable_strings(marked_content):
    extraction_prompt = f"""
    You are an assistant tasked with extracting all marked translatable strings from file content.
    Please extract each marked string and its associated key, if available, into a JSON object 
    format such as {{"key": "value"}}. The extraction should maintain accuracy and completeness, 
    ensuring that all marked strings are correctly included. Verify the correctness and accuracy 
    of the extraction before returning the results. If the extracted content is extensive, 
    return the data in segments to avoid truncation. Please provide only the JSON object 
    without any additional explanations.

    Marked Content:
    {marked_content}
    """
    try:
        response = client.chat.completions.create(
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": extraction_prompt}
            ],
            model="gpt-4",
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        print(f"Error: An exception occurred while extracting translatable strings: {str(e)}")
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

def process_file(file_path, output_folder, file_type):
    file_content = read_file(file_path)
    if file_content is None:
        return

    print(f"Processing {file_path}...")
    marked_content = mark_translatable_strings(file_content, file_type)
    if marked_content is None:
        print(f"Skipping {file_path} due to an error in marking translatable strings.")
        return

    response_text = extract_translatable_strings(marked_content)
    if response_text is None:
        print(f"Skipping {file_path} due to an error in extracting translatable strings.")
        return

    try:
        translatable_strings_dict = json.loads(response_text.strip())
    except (ValueError, json.JSONDecodeError):
        print(f"Error: Failed to load the response text into a JSON object for {file_path}.")
        return

    json_output_path = os.path.join(output_folder, f"{os.path.basename(file_path)}.json")
    marked_file_output_path = os.path.join(output_folder, f"marked_{os.path.basename(file_path)}")

    write_to_json(translatable_strings_dict, json_output_path)
    write_to_file(marked_content.strip(), marked_file_output_path)

    print(f"File {file_path} has been processed successfully.")

def main(target_folder, output_folder):
    os.makedirs(output_folder, exist_ok=True)

    start_time = time.time()
    for root, dirs, files in os.walk(target_folder):
        for file in files:
            file_path = os.path.join(root, file)
            file_extension = os.path.splitext(file)[1]
            process_file(file_path, output_folder, file_extension)
    end_time = time.time()

    elapsed_time = end_time - start_time
    hours, remainder = divmod(elapsed_time, 3600)
    minutes, seconds = divmod(remainder, 60)
    print("File localization completed!")
    print(f"Time taken to localize the files: {int(hours):02}:{int(minutes):02}:{int(seconds):02}")

if __name__ == "__main__":
    target_folder = 'files_to_loc/ejs'  # Change this to your target folder path
    output_folder = 'loced_files/ejs'  # Change this to your desired output folder path

    main(target_folder, output_folder)
