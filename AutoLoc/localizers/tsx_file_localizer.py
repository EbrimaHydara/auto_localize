import os
import json
import re
import uuid
from datetime import datetime
from file_localizer import FileLocalizer

class TSXFileLocalizer(FileLocalizer):
    def __init__(self, project_id):
        """
        Initializes the TSXFileLocalizer class with the given project ID.
        
        :param project_id: The ID of the project.
        """
        super().__init__(project_id)
        self.translatable_patterns = [
            re.compile(r'(["\'])(?:(?=(\\?))\2.)*?\1'),  # Matches simple strings in quotes
            re.compile(r'`(?:\\.|[^`\\])*`'),            # Matches template literals
            re.compile(r'>{1}\s*(.*?)\s*<{1}'),         # Matches HTML content between tags
        ]

    def localize_tsx_files(self):
        """
        Localizes all TSX files in the project's root directory and subdirectories.
        """
        tsx_files = self.get_files_by_extension('.tsx')
        for tsx_file in tsx_files:
            self._process_tsx_file(tsx_file)
        # Get localized tsx files for report
        localized_tsx_files = self.get_files_by_extension('.tsx')
        self._write_report(localized_tsx_files)

    def _process_tsx_file(self, tsx_file):
        """
        Processes an individual TSX file for localization.

        :param tsx_file: The path to the TSX file to process.
        """
        with open(tsx_file, 'r', encoding='utf-8') as file:
            content = file.read()

        content = self._mark_translatable_strings(content)
        self._extract_and_save_strings(content, tsx_file)
        self._duplicate_tsx_file(content, tsx_file)

    def _mark_translatable_strings(self, content):
        """
        Marks all translatable strings in the TSX content.

        :param content: The content of the TSX file.
        :return: The modified content with translatable strings marked.
        """
        for pattern in self.translatable_patterns:
            matches = pattern.finditer(content)
            for match in matches:
                text = match.group(0)
                if text:
                    unique_id = f'tsx-str-{uuid.uuid4()}'
                    replacement = f'i18next.t("{unique_id}")'
                    content = content.replace(text, replacement)
        return content

    def _extract_and_save_strings(self, content, tsx_file):
        """
        Extracts and saves the translatable strings to JSON files.

        :param content: The modified content of the TSX file.
        :param tsx_file: The path to the TSX file being processed.
        """
        source_json = {}
        for pattern in self.translatable_patterns:
            matches = pattern.finditer(content)
            for match in matches:
                text = match.group(0)
                if text:
                    unique_id = f'tsx-str-{uuid.uuid4()}'
                    source_json[unique_id] = text

        self._save_json_file(source_json, self.source_locale[2], 'source')

        for locale in self.target_locales:
            self._save_json_file(source_json, locale, 'target')

    def _save_json_file(self, data, locale, locale_type):
        """
        Saves the data to a JSON file for the specified locale.

        :param data: The data to save.
        :param locale: The locale information.
        :param locale_type: The type of locale ('source' or 'target').
        """
        # language_code, country_code = locale.split('-')
        language_code, country_code = locale[2], locale[3]
        json_path = os.path.join(self.locales_dir, f'{language_code}_{country_code}', f'tsx_strings_{language_code}_{country_code}.json')
        os.makedirs(os.path.dirname(json_path), exist_ok=True)

        if os.path.exists(json_path):
            with open(json_path, 'r', encoding='utf-8') as file:
                existing_data = json.load(file)
            existing_data.update(data)
        else:
            existing_data = data

        with open(json_path, 'w', encoding='utf-8') as file:
            json.dump(existing_data, file, ensure_ascii=False, indent=4)

    def _duplicate_tsx_file(self, content, tsx_file):
        """
        Duplicates the TSX file for each target locale and modifies the lang attribute.

        :param content: The modified content of the TSX file.
        :param tsx_file: The path to the TSX file being processed.
        """
        source_language = f"{self.source_locale[2]}-{self.source_locale[3]}"
        content = self._set_lang_attribute(content, source_language)
        self._save_tsx_file(content, tsx_file, source_language, is_original=True)

        for locale in self.target_locales:
            target_language = f"{locale[2]}-{locale[3]}"
            duplicate_content = self._set_lang_attribute(content, target_language)
            self._save_tsx_file(duplicate_content, tsx_file, target_language)

    def _set_lang_attribute(self, content, language):
        """
        Sets the lang attribute in the TSX content.

        :param content: The content of the TSX file.
        :param language: The language code to set in the lang attribute.
        :return: The modified content with the lang attribute set.
        """
        soup = BeautifulSoup(content, 'html.parser')
        if soup.html:
            soup.html['lang'] = language
        return str(soup)

    def _save_tsx_file(self, content, tsx_file, language, is_original=False):
        """
        Saves the modified TSX file with the lang attribute and i18next setup.

        :param content: The modified content of the TSX file.
        :param tsx_file: The path to the TSX file being processed.
        :param language: The language code for the TSX file.
        :param is_original: A flag indicating if this is the original TSX file.
        """
        file_dir, file_name = os.path.split(tsx_file)
        if is_original:
            new_file_path = os.path.join(file_dir, file_name)
        else:
            new_file_path = os.path.join(self.locales_dir, f'{language.split("-")[0]}_{language.split("-")[1]}', f'{file_name}')

        os.makedirs(os.path.dirname(new_file_path), exist_ok=True)

        with open(new_file_path, 'w', encoding='utf-8') as file:
            file.write(content)

        self._insert_i18next_import(new_file_path)
        self._insert_navigation_links(new_file_path)

    def _insert_i18next_import(self, tsx_file):
        """
        Inserts the necessary imports for i18next into the TSX file.

        :param tsx_file: The path to the TSX file.
        """
        with open(tsx_file, 'r+', encoding='utf-8') as file:
            content = file.read()
            import_statement = 'import i18next from "https://cdn.jsdelivr.net/npm/i18next@21.6.14/dist/umd/i18next.min.js";\n'
            if import_statement not in content:
                content = import_statement + content
            file.seek(0)
            file.write(content)
            file.truncate()

    def _insert_navigation_links(self, tsx_file):
        """
        Inserts navigation links into the TSX file to link to other localized versions.

        :param tsx_file: The path to the TSX file.
        """
        with open(tsx_file, 'r+', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')
            body_tag = soup.body

            nav = soup.new_tag('nav')
            ul = soup.new_tag('ul')
            nav.append(ul)

            locales = [self.source_locale] + self.target_locales
            for locale in locales:
                li = soup.new_tag('li')
                a = soup.new_tag('a', href=self._get_locale_file_path(tsx_file, locale))
                a.string = f"{locale[2]}-{locale[3]}"
                li.append(a)
                ul.append(li)

            body_tag.insert(0, nav)

            file.seek(0)
            file.write(str(soup))
            file.truncate()

    def _get_locale_file_path(self, tsx_file, locale):
        """
        Generates the file path for the given locale.

        :param tsx_file: The path to the original TSX file.
        :param locale: The locale for which to generate the file path.
        :return: The file path for the given locale.
        """
        file_dir, file_name = os.path.split(tsx_file)
        if locale == self.source_locale:
            return os.path.join(file_dir, file_name)
        else:
            return os.path.join(self.locales_dir, f'{locale[2]}_{locale[3]}', f'{file_name}')

    def _write_report(self, tsx_files):
        """
        Writes a report of all the TSX files affected and their duplicates.

        :param tsx_files: A list of the TSX files processed.
        """
        report_path = os.path.join(self.root_dir, 'locales', 'reports')
        os.makedirs(report_path, exist_ok=True)
        report_file = os.path.join(report_path, f'tsx_files_localization_report_{datetime.now().strftime("%Y%m%d_%H%M%S")}.txt')

        report_header = f"TSX FILES LOCALIZATION REPORT: {datetime.now().strftime("%Y%m%d_%H%M%S")}\n\n"
        report_header += f"The following list shows the files that are localized.\n\n"

        with open(report_file, 'w', encoding='utf-8') as file:
            file.write(report_header)
            file_counter = 1
            for tsx_file in tsx_files:
                file.write(f'{file_counter}: {tsx_file}\n')
                file_counter += 1
                # for locale in self.target_locales:
                #     language_code, country_code = locale[2].split('-')
                #     file.write(f'Duplicate: {self.locales_dir}/{language_code}_{country_code}/{os.path.basename(tsx_file)}\n')






# # Usage examples for TSXFileLocalizer functions

# # is followed by comment
#   is followed by code

# from file_localizers.tsx_file_localizer import TSXFileLocalizer

# # Initialize the TSXFileLocalizer with a given project ID
# project_id = 1
# tsx_localizer = TSXFileLocalizer(project_id)

# # Localize all TSX files in the project's root directory and subdirectories
# tsx_localizer.localize_tsx_files()

# # Assuming the following methods are publicly accessible and could be called individually if needed:
# # Retrieve and print the locales directory path
# locales_path = tsx_localizer.get_locales_path()
# print(f"Locales Directory Path: {locales_path}")

# # Get and print all TSX files with a specific extension in the project's root directory and subdirectories
# tsx_files = tsx_localizer.get_files_by_extension('.tsx')
# print("TSX Files:")
# for tsx_file in tsx_files:
#     print(tsx_file)

# # Process a specific TSX file for localization (usually called within localize_tsx_files)
# tsx_file_path = 'path/to/specific/file.tsx'
# tsx_localizer._process_tsx_file(tsx_file_path)  # Note: This method is typically internal, hence prefixed with '_'
