import os
import json
import re
import uuid
from datetime import datetime
from bs4 import BeautifulSoup
from file_localizer import FileLocalizer

class EJSFileLocalizer(FileLocalizer):
    def __init__(self, project_id):
        """
        Initializes the EJSFileLocalizer class with the given project ID.
        
        :param project_id: The ID of the project.
        """
        super().__init__(project_id)
        self.translatable_patterns = [
            re.compile(r'<%=\s*(.*?)\s*%>'),  # Matches rendered EJS content
        ]

    def localize_ejs_files(self):
        """
        Localizes all EJS files in the project's root directory and subdirectories.
        """
        ejs_files = self.get_files_by_extension('.ejs')
        for ejs_file in ejs_files:
            self._process_ejs_file(ejs_file)
        # Get localized ejs files for report
        localized_ejs_files = self.get_files_by_extension('.ejs')
        self._write_report(localized_ejs_files)

    def _process_ejs_file(self, ejs_file):
        """
        Processes an individual EJS file for localization.

        :param ejs_file: The path to the EJS file to process.
        """
        with open(ejs_file, 'r', encoding='utf-8') as file:
            content = file.read()

        content = self._mark_translatable_strings(content)
        self._extract_and_save_strings(content, ejs_file)
        self._duplicate_ejs_file(content, ejs_file)

    def _mark_translatable_strings(self, content):
        """
        Marks all translatable strings in the EJS content.

        :param content: The content of the EJS file.
        :return: The modified content with translatable strings marked.
        """
        for pattern in self.translatable_patterns:
            matches = pattern.finditer(content)
            for match in matches:
                text = match.group(1)
                if text:
                    unique_id = f'ejs-str-{uuid.uuid4()}'
                    replacement = f'<%= i18next.t("{unique_id}") %>'
                    content = content.replace(match.group(0), replacement)
        return content

    def _extract_and_save_strings(self, content, ejs_file):
        """
        Extracts and saves the translatable strings to JSON files.

        :param content: The modified content of the EJS file.
        :param ejs_file: The path to the EJS file being processed.
        """
        source_json = {}
        for pattern in self.translatable_patterns:
            matches = pattern.finditer(content)
            for match in matches:
                text = match.group(1)
                if text:
                    unique_id = f'ejs-str-{uuid.uuid4()}'
                    source_json[unique_id] = text

        self._save_json_file(source_json, self.source_locale, 'source')

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
        json_path = os.path.join(self.locales_dir, f'{language_code}_{country_code}', f'ejs_strings_{language_code}_{country_code}.json')
        os.makedirs(os.path.dirname(json_path), exist_ok=True)

        if os.path.exists(json_path):
            with open(json_path, 'r', encoding='utf-8') as file:
                existing_data = json.load(file)
            existing_data.update(data)
        else:
            existing_data = data

        with open(json_path, 'w', encoding='utf-8') as file:
            json.dump(existing_data, file, ensure_ascii=False, indent=4)

    def _duplicate_ejs_file(self, content, ejs_file):
        """
        Duplicates the EJS file for each target locale and modifies the lang attribute.

        :param content: The modified content of the EJS file.
        :param ejs_file: The path to the EJS file being processed.
        """
        source_language = f"{self.source_locale[2]}-{self.source_locale[3]}"
        content = self._set_lang_attribute(content, source_language)
        self._save_ejs_file(content, ejs_file, source_language, is_original=True)

        for locale in self.target_locales:
            target_language = f"{locale[2]}-{locale[3]}"
            duplicate_content = self._set_lang_attribute(content, target_language)
            self._save_ejs_file(duplicate_content, ejs_file, target_language)

    def _set_lang_attribute(self, content, language):
        """
        Sets the lang attribute in the EJS content.

        :param content: The content of the EJS file.
        :param language: The language code to set in the lang attribute.
        :return: The modified content with the lang attribute set.
        """
        soup = BeautifulSoup(content, 'html.parser')
        if soup.html:
            soup.html['lang'] = language
        return str(soup)

    def _save_ejs_file(self, content, ejs_file, language, is_original=False):
        """
        Saves the modified EJS file with the lang attribute and i18next setup.

        :param content: The modified content of the EJS file.
        :param ejs_file: The path to the EJS file being processed.
        :param language: The language code for the EJS file.
        :param is_original: A flag indicating if this is the original EJS file.
        """
        file_dir, file_name = os.path.split(ejs_file)
        if is_original:
            new_file_path = os.path.join(file_dir, file_name)
        else:
            new_file_path = os.path.join(self.locales_dir, f'{language.split("-")[0]}_{language.split("-")[1]}', f'{file_name}')

        os.makedirs(os.path.dirname(new_file_path), exist_ok=True)

        with open(new_file_path, 'w', encoding='utf-8') as file:
            file.write(content)

        self._insert_i18next_logic(new_file_path)
        self._insert_navigation_links(new_file_path)

    def _insert_i18next_logic(self, ejs_file):
        """
        Inserts the i18next logic into the EJS file.

        :param ejs_file: The path to the EJS file.
        """
        with open(ejs_file, 'r+', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')
            head_tag = soup.head

            # Insert i18next script
            script_tag = soup.new_tag('script', src="https://cdn.jsdelivr.net/npm/i18next@21.6.14/dist/umd/i18next.min.js")
            head_tag.append(script_tag)

            # Insert language switcher
            script_content = f'''
            <script>
                i18next.init({{
                    lng: document.documentElement.lang,
                    resources: {{
                        {document.documentElement.lang}: {{
                            translation: {{}}
                        }}
                    }}
                }});
                document.querySelectorAll('[data-i18n]').forEach((element) => {{
                    element.innerHTML = i18next.t(element.getAttribute('data-i18n'));
                }});
                document.querySelectorAll('[data-i18n-alt]').forEach((element) => {{
                    element.alt = i18next.t(element.getAttribute('data-i18n-alt'));
                }});
            </script>
            '''
            script_tag = soup.new_tag('script')
            script_tag.string = script_content
            head_tag.append(script_tag)

            file.seek(0)
            file.write(str(soup))
            file.truncate()

    def _insert_navigation_links(self, ejs_file):
        """
        Inserts navigation links into the EJS file to link to other localized versions.

        :param ejs_file: The path to the EJS file.
        """
        with open(ejs_file, 'r+', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')
            body_tag = soup.body

            nav = soup.new_tag('nav')
            ul = soup.new_tag('ul')
            nav.append(ul)

            locales = [self.source_locale] + self.target_locales
            for locale in locales:
                li = soup.new_tag('li')
                a = soup.new_tag('a', href=self._get_locale_file_path(ejs_file, locale))
                # a.string = f"{locale[2]}-{locale[3]}"
                a.string = f"{locale[1]}"
                li.append(a)
                ul.append(li)

            body_tag.insert(0, nav)

            file.seek(0)
            file.write(str(soup))
            file.truncate()

    def _get_locale_file_path(self, ejs_file, locale):
        """
        Generates the file path for the given locale.

        :param ejs_file: The path to the original EJS file.
        :param locale: The locale for which to generate the file path.
        :return: The file path for the given locale.
        """
        file_dir, file_name = os.path.split(ejs_file)
        if locale == self.source_locale:
            return os.path.join(file_dir, file_name)
        else:
            # return os.path.join(self.locales_dir, f'{locale[2]}_{locale[3]}', f'{file_name}')
            return os.path.join(f'{locale[2]}_{locale[3]}', f'{file_name}')

    def _write_report(self, ejs_files):
        """
        Writes a report of all the EJS files affected and their duplicates.

        :param ejs_files: A list of the EJS files processed.
        """
        report_path = os.path.join(self.root_dir, 'locales', 'reports')
        os.makedirs(report_path, exist_ok=True)
        report_file = os.path.join(report_path, f'ejs_files_localization_report_{datetime.now().strftime("%Y%m%d_%H%M%S")}.txt')

        report_header = f"EJS FILES LOCALIZATION REPORT: {datetime.now().strftime("%Y%m%d_%H%M%S")}\n\n"
        report_header += f"The following list shows the files that are localized.\n\n"

        with open(report_file, 'w', encoding='utf-8') as file:
            file.write(report_header)
            file_counter = 1
            for ejs_file in ejs_files:
                file.write(f'{file_counter}: {ejs_file}\n')
                file_counter += 1
                
