import os
import time
import json
from openai import OpenAI
# from dotenv import load_dotenv

# Load environment variables from .env file
# load_dotenv()

# Initialize the OpenAI client
api_key="sk-proj-vUbzJ4KnwGp7AohPrBTST3BlbkFJrTTxQ6M3sk9VUaggFNJI"
client = OpenAI(
    api_key=api_key
)

def read_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

def mark_translatable_strings(file_content):
    format = "t(key)"
    response = client.chat.completions.create(
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": f"""
             Mark all translatable strings in 
             the following EJS file content 
             using the i18next for react
             approach as {format} to mark translatable strings
             and return the marked content
             without any response explanation 
             but just the the marked content:\n\n{file_content}"""}
        ],
        model="gpt-4",  # Assuming the model name for GPT-4 is "gpt-4"
    )
    return response.choices[0].message.content.strip()

def extract_translatable_strings(file_content):
    response = client.chat.completions.create(
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": f"""
             Extract all the marked translatable strings from 
             the following content and return them 
             in a single JSON object format such as 
             key: vale,
             key: value
             without any response explanation 
             but just the code:\n\n{file_content}"""}
        ],
        model="gpt-4",  # Assuming the model name for GPT-4 is "gpt-4"
    )
    return response.choices[0].message.content.strip()

def write_to_json(data, output_path):
    with open(output_path, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=4)

def write_to_file(content, output_path):
    with open(output_path, 'w', encoding='utf-8') as file:
        file.write(content)

def main(file_path, json_output_path, marked_file_output_path):
    # Read the file content
    file_content = read_file(file_path)
    print(f"{file_path} file has been read!")
    
    # Mark translatable strings
    marked_content = mark_translatable_strings(file_content)
    print(f"Strings for {file_path} have been marked and returned!")

    # Extract translatable strings
    response_text = extract_translatable_strings(marked_content)
    print(f"Srings for {file_path} have been extracted!")
    # Load the extracted strings into JSON object
    try:
        translatable_strings_dict = json.loads(response_text.strip())
        print(f"Extracted strings for {file_path} have been loaded into JSON!")
    except (ValueError, json.JSONDecodeError):
        print("Failed to load the response text into JSON object correctly.")
        return
    
    # Write the translatable strings to a JSON file
    write_to_json(translatable_strings_dict, json_output_path)
    print(f"Translatable strings have been written to {json_output_path}")
    
    # Write the marked content to a file
    write_to_file(marked_content.strip(), marked_file_output_path)
    print(f"Marked content has been written to {marked_file_output_path}")

if __name__ == "__main__":
    # Example usage
    file_path = 'test_files/vue/Shop.vue'  # Change this to your file path
    json_output_path = 'test_files/vue/Shop.json'  # Change this to your desired JSON output path
    marked_file_output_path = 'test_files/vue/marked_Shop.vue'  # Change this to your desired marked file output path
   
   # Measure the time taken to run the main function
    start_time = time.time()
    main(file_path, json_output_path, marked_file_output_path)
    end_time = time.time()
    
    # Calculate and print the elapsed time in H:M:S format
    elapsed_time = end_time - start_time
    hours, remainder = divmod(elapsed_time, 3600)
    minutes, seconds = divmod(remainder, 60)
    print("File L10n completed!")
    print(f"Time taken to localize the file: {int(hours):02}:{int(minutes):02}:{int(seconds):02}")
