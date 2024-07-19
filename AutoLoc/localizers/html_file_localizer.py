import os
import json
from datetime import datetime
from bs4 import BeautifulSoup
from file_localizer import FileLocalizer

class HTMLFileLocalizer(FileLocalizer):
    def __init__(self, project_id):
        """
        Initializes the HTMLFileLocalizer class with the given project ID.
        
        :param project_id: The ID of the project.
        """
        super().__init__(project_id)
        self.target_tags = [
            'title', 'div', 'img', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'address', 'pre', 'blockquote', 'li', 'button', 'figcaption', 'caption', 'td', 'th', 'label', 'option'
        ]
        self.formatting_tags = [
            'a', 'span', 'br', 'b', 'strong', 'i', 'em', 'mark', 'small', 'del', 'ins', 'sub', 'sup', 'u', 's', 'abbr', 'code', 'kbd', 'samp', 'var', 'cite', 'q', 'dfn', 'time', 'bdi', 'bdo', 'ruby', 'rt', 'rp', 'wbr'
        ]

    def localize_html_files(self):
        """
        Localizes all HTML files in the project's root directory and subdirectories.
        """
        # Delete the locales directory to start fresh
        self.delete_locales_directory()
        
        # Delete previously localized files to start fresh
        self.delete_files_with_target_locales('.html')
        
        html_files = self.get_files_by_extension('.html')
        for html_file in html_files:
            self._process_html_file(html_file)
        localized_html_files = self.get_files_by_extension('.html')
        self._write_report(localized_html_files)

    def _process_html_file(self, html_file):
        """
        Processes an individual HTML file for localization.

        :param html_file: The path to the HTML file to process.
        """
        with open(html_file, 'r', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')

        self._mark_translatable_strings(soup)
        self._extract_and_save_strings(soup, html_file)
        self._duplicate_html_file(soup, html_file)

    def _mark_translatable_strings(self, soup):
        """
        Marks all translatable strings in the HTML content.

        :param soup: The BeautifulSoup object containing the HTML content.
        """
        for tag in soup.find_all(self.target_tags):
            if 'data-i18n' in tag.attrs or 'data-i18n-alt' in tag.attrs:
                continue  # Skip tags that are already marked
            if tag.name == 'img' and tag.has_attr('alt') and tag['alt'].strip():
                tag['data-i18n-alt'] = f'html-alt-{self.generate_short_uuid()}'
            elif tag.name != 'img':
                if self._contains_only_text(tag) or self._contains_text_and_formatting_tags(tag) or self._contains_only_formatting_tags(tag) or self._formatting_tag_with_target_tag(tag):
                    tag['data-i18n'] = f'html-str-{self.generate_short_uuid()}'

    def _contains_only_text(self, tag):
        """
        Checks if a tag contains only text.

        :param tag: The BeautifulSoup tag object.
        :return: True if the tag contains only text, False otherwise.
        """
        return tag.string and not any(child for child in tag.children if child.name)

    def _contains_text_and_formatting_tags(self, tag):
        """
        Checks if a tag contains text and formatting tags.

        :param tag: The BeautifulSoup tag object.
        :return: True if the tag contains text and formatting tags, False otherwise.
        """
        return any(child.name in self.formatting_tags for child in tag.find_all(recursive=False)) and tag.get_text(strip=True)

    def _contains_only_formatting_tags(self, tag):
        """
        Checks if a tag contains only formatting tags.

        :param tag: The BeautifulSoup tag object.
        :return: True if the tag contains only formatting tags, False otherwise.
        """
        return all(child.name in self.formatting_tags for child in tag.find_all(recursive=False))

    def _formatting_tag_with_target_tag(self, tag):
        """
        Checks if a formatting tag has a target tag next to it inside a target tag,
        and its parent tag does not contain immediate text.

        :param tag: The BeautifulSoup tag object.
        :return: True if a formatting tag has a target tag next to it and the parent tag
                does not contain immediate text, False otherwise.
        """
        for child in tag.find_all(recursive=False):
            if child.name in self.formatting_tags:
                next_sibling = child.find_next_sibling()
                if next_sibling and next_sibling.name in self.target_tags and not self._contains_text_and_formatting_tags(tag):
                    return True
        return False




    def _extract_and_save_strings(self, soup, html_file):
        """
        Extracts and saves the translatable strings to JSON files.

        :param soup: The BeautifulSoup object containing the HTML content.
        :param html_file: The path to the HTML file being processed.
        """
        source_json = {}
        for tag in soup.find_all(attrs={"data-i18n": True}):
            key = tag['data-i18n']
            inner_html = ''.join(str(child) for child in tag.children).strip()
            if inner_html:
                source_json[key] = inner_html

        for tag in soup.find_all(attrs={"data-i18n-alt": True}):
            key = tag['data-i18n-alt']
            text = tag['alt'].strip()
            if text:
                source_json[key] = text
        
        if source_json:
            self._save_json_file(source_json, self.source_locale, 'source')
        
        for locale in self.target_locales:
            if source_json:
                self._save_json_file(source_json, locale, 'target')

    def _save_json_file(self, data, locale, locale_type):
        """
        Saves the data to a JSON file for the specified locale.

        :param data: The data to save.
        :param locale: The locale information.
        :param locale_type: The type of locale ('source' or 'target').
        """
        language_code, country_code = locale[2], locale[3]
        json_path = os.path.join(self.locales_dir, f'{language_code}_{country_code}', f'html_strings_{language_code}_{country_code}.json')
        os.makedirs(os.path.dirname(json_path), exist_ok=True)
        
        if os.path.exists(json_path):
            with open(json_path, 'r', encoding='utf-8') as file:
                existing_data = json.load(file)
            existing_data.update(data)
        else:
            existing_data = data

        with open(json_path, 'w', encoding='utf-8') as file:
            json.dump(existing_data, file, ensure_ascii=False, indent=4)

    def _duplicate_html_file(self, soup, html_file):
        """
        Duplicates the HTML file for each target locale and modifies the lang attribute.

        :param soup: The BeautifulSoup object containing the HTML content.
        :param html_file: The path to the HTML file being processed.
        """
        source_language = f"{self.source_locale[2]}-{self.source_locale[3]}"
        soup.html['lang'] = source_language
        self._save_html_file(soup, html_file, source_language, is_original=True)

        for locale in self.target_locales:
            target_language = f"{locale[2]}-{locale[3]}"
            duplicate_html = BeautifulSoup(str(soup), 'html.parser')
            duplicate_html.html['lang'] = target_language
            self._save_html_file(duplicate_html, html_file, target_language)

    def _save_html_file(self, soup, html_file, language, is_original=False):
        """
        Saves the modified HTML file with the lang attribute and i18next setup.

        :param soup: The BeautifulSoup object containing the HTML content.
        :param html_file: The path to the HTML file being processed.
        :param language: The language code for the HTML file.
        :param is_original: A flag indicating if this is the original HTML file.
        """
        file_dir, file_name = os.path.split(html_file)
        if is_original:
            new_file_path = os.path.join(file_dir, file_name)
        else:
            new_file_path = os.path.join(file_dir, f'{language.split("-")[0]}_{language.split("-")[1]}_{file_name}')
        
        os.makedirs(os.path.dirname(new_file_path), exist_ok=True)

        with open(new_file_path, 'w', encoding='utf-8') as file:
            file.write(str(soup))
        
        self._insert_i18next_logic(new_file_path, language)
        self._insert_navigation_links(new_file_path)

    def _insert_i18next_logic(self, html_file, language):
        """
        Inserts the i18next logic into the HTML file.

        :param html_file: The path to the HTML file.
        :param language: The language code for the HTML file.
        """
        language_code, country_code = language.split('-')
        json_file = os.path.join(self.root_dir, 'locales', f'{language_code}_{country_code}', f'html_strings_{language_code}_{country_code}.json')
        
        with open(html_file, 'r+', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')
            head_tag = soup.head

            # Check if the i18next script already exists
            if not soup.find('script', {'src': "https://cdn.jsdelivr.net/npm/i18next@21.6.14/dist/umd/i18next.min.js"}):
                # Insert i18next script
                script_tag = soup.new_tag('script', src="https://cdn.jsdelivr.net/npm/i18next@21.6.14/dist/umd/i18next.min.js")
                head_tag.append(script_tag)

            # Check if the i18next initialization script already exists
            if not soup.find('script', string=lambda text: text and "i18next.init" in text):
                # Insert language switcher
                script_content = f'''
                <script>
                    document.addEventListener("DOMContentLoaded", function() {{
                        var jsonFilePath = '{json_file}';
                        fetch(jsonFilePath)
                            .then(response => response.json())
                            .then(translations => {{
                                i18next.init({{
                                    lng: '{language}',
                                    resources: {{
                                        '{language}': {{
                                            translation: translations
                                        }}
                                    }}
                                }});
                                document.querySelectorAll('[data-i18n]').forEach((element) => {{
                                    element.innerHTML = i18next.t(element.getAttribute('data-i18n'));
                                }});
                                document.querySelectorAll('[data-i18n-alt]').forEach((element) => {{
                                    element.alt = i18next.t(element.getAttribute('data-i18n-alt'));
                                }});
                            }});
                    }});
                </script>
                '''
                script_tag = soup.new_tag('script')
                script_tag.string = script_content
                head_tag.append(script_tag)

            file.seek(0)
            file.write(str(soup))
            file.truncate()

    def _insert_navigation_links(self, html_file):
        """
        Inserts navigation links into the HTML file to link to other localized versions.

        :param html_file: The path to the HTML file.
        """
        with open(html_file, 'r+', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')
            body_tag = soup.body

            # Check if the navigation already exists
            if not soup.find('nav', {'class': 'localization-nav'}):
                nav = soup.new_tag('nav', **{'class': 'localization-nav'})
                ul = soup.new_tag('ul')
                nav.append(ul)

                locales = [self.source_locale] + self.target_locales
                for locale in locales:
                    li = soup.new_tag('li')
                    a = soup.new_tag('a', href=self._get_locale_file_path(html_file, locale))
                    a.string = f"{locale[1]}"
                    li.append(a)
                    ul.append(li)

                body_tag.insert(0, nav)

                file.seek(0)
                file.write(str(soup))
                file.truncate()

    def _get_locale_file_path(self, html_file, locale):
        """
        Generates the file path for the given locale.

        :param html_file: The path to the original HTML file.
        :param locale: The locale for which to generate the file path.
        :return: The file path for the given locale.
        """
        file_dir, file_name = os.path.split(html_file)
        if locale == self.source_locale:
            return os.path.join(file_dir, file_name)
        else:
            return os.path.join(file_dir, f'{locale[2]}_{locale[3]}_{file_name}')

    def _write_report(self, html_files):
        """
        Writes a report of all the HTML files affected and their duplicates.

        :param html_files: A list of the HTML files processed.
        """
        report_path = os.path.join(self.root_dir, 'locales', 'reports')
        os.makedirs(report_path, exist_ok=True)
        report_file = os.path.join(report_path, f'html_files_localization_report_{datetime.now().strftime("%Y%m%d_%H%M%S")}.txt')

        report_header = f"HTML FILES LOCALIZATION REPORT: {datetime.now().strftime("%Y%m%d_%H%M%S")}\n\n"
        report_header += f"The following list shows the files that are localized.\n\n"

        with open(report_file, 'w', encoding='utf-8') as file:
            file.write(report_header)
            file_counter = 1
            for html_file in html_files:
                file.write(f'{file_counter}: {html_file}\n')
                file_counter += 1

    def contains_translatable_tags(self):
        """
        Checks if the root directory contains at least one HTML file with translatable tags.

        :return: True if at least one HTML file contains translatable tags, False otherwise.
        """
        html_files = self.get_files_by_extension('.html')
        for html_file in html_files:
            with open(html_file, 'r', encoding='utf-8') as file:
                soup = BeautifulSoup(file, 'html.parser')
                if soup.find(self.target_tags):
                    return True
        return False

