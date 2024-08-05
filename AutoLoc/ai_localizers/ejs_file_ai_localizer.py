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

MAX_TOKENS_PER_CHUNK = 1000  # Define a reasonable chunk size (approximately 2000 tokens per chunk)
MAX_COMPLETION_TOKENS = 1000  # Allocate tokens for completion to avoid exceeding max context

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

def chunk_text(text, max_tokens):
    """Splits the input text into chunks that fit within the max token limit, ensuring logical breaks."""
    words = text.split()
    chunks = []
    current_chunk = []
    current_length = 0

    for word in words:
        word_length = len(word) + 1  # Account for the space after the word

        if current_length + word_length > max_tokens:
            if current_chunk:
                # Ensure not breaking at code/paragraph mid-points
                last_sentence_end = None
                for i in range(len(current_chunk) - 1, -1, -1):
                    if current_chunk[i].endswith(('.', ';', '}', ']')):  # Logical end markers
                        last_sentence_end = i
                        break
                if last_sentence_end is not None:
                    chunks.append(' '.join(current_chunk[:last_sentence_end + 1]))
                    current_chunk = current_chunk[last_sentence_end + 1:]
                else:
                    chunks.append(' '.join(current_chunk))
                    current_chunk = []

            current_length = sum(len(word) + 1 for word in current_chunk)

        current_chunk.append(word)
        current_length += word_length

    if current_chunk:
        chunks.append(' '.join(current_chunk))

    return chunks

def localize_chunk(chunk, file_path, chunk_id):
    prompt = f"""
    Please analyze the following chunk of an EJS file and perform the following tasks:
    1. Mark all translatable strings using the `t` function, ensuring to replace them with human-readable keys in the format ('{file_path}:key'), where 'key' is a suggested key representation.
    2. Extract all marked strings along with their corresponding keys into a JSON object in the format {{"key": "value"}}.
    3. Ensure the code remains intact and unbroken during localization, preserving the original structure and functionality.

    Return only the localized code and the JSON object. Do not include any explanations or additional text.

    Chunk ID: {chunk_id}
    Chunk Content:
    {chunk}
    """

    try:
        response = client.chat.completions.create(
            messages=[
                {"role": "system", "content": system_role},
                {"role": "user", "content": prompt}
            ],
            model="gpt-4",
            max_tokens=MAX_COMPLETION_TOKENS,  # Reduce max tokens for completion
            temperature=0.2,
            top_p=0.9,
            frequency_penalty=0.0,
            presence_penalty=0.0,
            stop=["\n\n"]
        )
        content = response.choices[0].message.content.strip()
        # Extracting the JSON part from the response
        json_start = content.find("{")
        if json_start != -1:
            json_content = content[json_start:]
            marked_content = content[:json_start].strip()
        else:
            json_content = "{}"
            marked_content = content.strip()

        return marked_content, json.loads(json_content)
    except Exception as e:
        print(f"Error: An exception occurred while processing chunk {chunk_id}: {str(e)}")
        return None, {}

def localize_and_extract(file_content, file_path):
    chunks = chunk_text(file_content, MAX_TOKENS_PER_CHUNK)
    all_marked_content = []
    all_translatable_strings = {}

    for chunk_id, chunk in enumerate(chunks):
        marked_content, translatable_strings = localize_chunk(chunk, file_path, chunk_id)
        if marked_content:
            all_marked_content.append(marked_content)
            all_translatable_strings.update(translatable_strings)

    return '\n'.join(all_marked_content), all_translatable_strings

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
    marked_content, translatable_strings_dict = localize_and_extract(file_content, file_path)
    if not marked_content:
        print(f"Skipping {file_path} due to an error in localization and extraction.")
        return

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
            if file_extension.lower() == ".ejs":
                process_file(file_path, output_folder)
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
