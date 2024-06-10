import json
import os

def save_strings_to_json(strings, locale, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    json_path = os.path.join(output_dir, f'{locale}.json')
    with open(json_path, 'w', encoding='utf-8') as json_file:
        json.dump(strings, json_file, ensure_ascii=False, indent=4)
