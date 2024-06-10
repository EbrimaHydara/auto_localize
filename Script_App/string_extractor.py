import re

def extract_strings(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    strings = re.findall(r'>([^<]+)<', content)
    return strings
