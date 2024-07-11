import os
import json
import re
import uuid
from datetime import datetime
from file_localizer import FileLocalizer

class JSFileLocalizer(FileLocalizer):
    def __init__(self, project_id):
        """
        Initializes the JSFileLocalizer class with the given project ID.
        
        :param project_id: The ID of the project.
        """
        super().__init__(project_id)
        self.translatable_patterns = [
            re.compile(r'(["\'])(?:(?=(\\?))\2.)*?\1'),  # Matches simple strings in quotes
            re.compile(r'`(?:\\.|[^`\\])*`'),            # Matches template literals
            re.compile(r'>\s*(.*?)\s*<'),               # Matches HTML content between tags
        ]

    def localize_js_files(self):
        """
        Localizes all JS files in the project's root directory and subdirectories.
        """
        js_files = self.get_files_by_extension('.js')
        for js_file in js_files:
            self._process_js_file(js_file)
        # Get localized js files for report
        localized_js_files = self.get_files_by_extension('.js')
        self._write_report(localized_js_files)

    def _process_js_file(self, js_file):
        """
        Processes an individual JS file for localization.

        :param js_file: The path to the JS file to process.
        """
        with open(js_file, 'r', encoding='utf-8') as file:
            content = file.read()

        content = self._mark_translatable_strings(content)
        self._extract_and_save_strings(content, js_file)
        self._save_js_file(content, js_file)

    def _mark_translatable_strings(self, content):
        """
        Marks all translatable strings in the JS content.

        :param content: The content of the JS file.
        :return: The modified content with translatable strings marked.
        """
        for pattern in self.translatable_patterns:
            matches = pattern.finditer(content)
            for match in matches:
                text = match.group(0)
                if text:
                    unique_id = f'js-str-{uuid.uuid4()}'
                    replacement = f'i18next.t("{unique_id}")'
                    content = content.replace(text, replacement)
        return content

    def _extract_and_save_strings(self, content, js_file):
        """
        Extracts and saves the translatable strings to JSON files.

        :param content: The modified content of the JS file.
        :param js_file: The path to the JS file being processed.
        """
        source_json = {}
        for pattern in self.translatable_patterns:
            matches = pattern.finditer(content)
            for match in matches:
                text = match.group(0)
                if text:
                    unique_id = f'js-str-{uuid.uuid4()}'
                    source_json[unique_id] = text

        self._save_json_file(source_json, self.source_locale[2], 'source')

        for locale in self.target_locales:
            self._save_json_file(source_json, locale[2], 'target')

    def _save_json_file(self, data, locale, locale_type):
        """
        Saves the data to a JSON file for the specified locale.

        :param data: The data to save.
        :param locale: The locale information.
        :param locale_type: The type of locale ('source' or 'target').
        """
        # language_code, country_code = locale.split('-')
        language_code, country_code = locale[2], locale[3]
        json_path = os.path.join(self.locales_dir, f'{language_code}_{country_code}', f'js_strings_{language_code}_{country_code}.json')
        os.makedirs(os.path.dirname(json_path), exist_ok=True)

        if os.path.exists(json_path):
            with open(json_path, 'r', encoding='utf-8') as file:
                existing_data = json.load(file)
            existing_data.update(data)
        else:
            existing_data = data

        with open(json_path, 'w', encoding='utf-8') as file:
            json.dump(existing_data, file, ensure_ascii=False, indent=4)

    def _save_js_file(self, content, js_file):
        """
        Saves the modified JS file with the i18next logic.

        :param content: The modified content of the JS file.
        :param js_file: The path to the JS file being processed.
        """
        file_dir, file_name = os.path.split(js_file)
        new_file_path = os.path.join(file_dir, file_name)
        with open(new_file_path, 'w', encoding='utf-8') as file:
            file.write(content)
        
        self._insert_i18next_import(new_file_path)

    def _insert_i18next_import(self, js_file):
        """
        Inserts the necessary imports for i18next into the JS file.

        :param js_file: The path to the JS file.
        """
        with open(js_file, 'r+', encoding='utf-8') as file:
            content = file.read()
            import_statement = 'import i18next from "https://cdn.jsdelivr.net/npm/i18next@21.6.14/dist/umd/i18next.min.js";\n'
            if import_statement not in content:
                content = import_statement + content
            file.seek(0)
            file.write(content)
            file.truncate()

    def _write_report(self, js_files):
        """
        Writes a report of all the JS files affected and their duplicates.

        :param js_files: A list of the JS files processed.
        """
        report_path = os.path.join(self.root_dir, 'locales', 'reports')
        os.makedirs(report_path, exist_ok=True)
        report_file = os.path.join(report_path, f'js_files_localization_report_{datetime.now().strftime("%Y%m%d_%H%M%S")}.txt')

        report_header = f"JS FILES LOCALIZATION REPORT: {datetime.now().strftime("%Y%m%d_%H%M%S")}\n\n"
        report_header += f"The following list shows the files that are localized.\n\n"

        with open(report_file, 'w', encoding='utf-8') as file:
            file.write(report_header)
            file_counter = 1
            for js_file in js_files:
                file.write(f'{file_counter}: {js_file}\n')
                file_counter += 1



# # Usage examples for JSFileLocalizer functions

# # is followed by comment
#   is followed by code

# from file_localizers.js_file_localizer import JSFileLocalizer

# # Initialize the JSFileLocalizer with a given project ID
# project_id = 1
# js_localizer = JSFileLocalizer(project_id)

# # Localize all JS files in the project's root directory and subdirectories
# js_localizer.localize_js_files()

# # Assuming the following methods are publicly accessible and could be called individually if needed:
# # Retrieve and print the locales directory path
# locales_path = js_localizer.get_locales_path()
# print(f"Locales Directory Path: {locales_path}")

# # Get and print all JS files with a specific extension in the project's root directory and subdirectories
# js_files = js_localizer.get_files_by_extension('.js')
# print("JS Files:")
# for js_file in js_files:
#     print(js_file)

# # Process a specific JS file for localization (usually called within localize_js_files)
# js_file_path = 'path/to/specific/file.js'
# js_localizer._process_js_file(js_file_path)  # Note: This method is typically internal, hence prefixed with '_'
