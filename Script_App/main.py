from .file_scanner import scan_files
from .string_extractor import extract_strings
from .id_assigner import assign_ids
from .json_manager import save_strings_to_json
from .output_manager import save_modified_files
from .tms_integration import push_to_tms
from .locale_switcher import enable_language_switching

def run_autoloc(source_dir, locales):
    files = scan_files(source_dir)
    for file_path in files:
        content = open(file_path, 'r', encoding='utf-8').read()
        strings = extract_strings(file_path)
        modified_content, ids = assign_ids(content)
        
        for locale in locales:
            save_strings_to_json(ids, locale, f'{source_dir}/translations')
        
        save_modified_files(file_path, modified_content)
    
    push_to_tms([f'{source_dir}/translations/{locale}.json' for locale in locales])
    enable_language_switching()
