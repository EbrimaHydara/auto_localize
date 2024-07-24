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
            'title', 'div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'address', 'pre', 'blockquote', 'li', 'figcaption', 'caption', 'td', 'th', 'label', 'option'
        ]
        self.special_tags = ['meta', 'img']
        self.nav_tags = ['a', 'button']
        self.formatting_tags = [
            'span', 'br', 'b', 'strong', 'i', 'em', 'mark', 'small', 'del', 'ins', 'sub', 'sup', 'u', 's', 'abbr', 'code', 'kbd', 'samp', 'var', 'cite', 'q', 'dfn', 'time', 'bdi', 'bdo', 'ruby', 'rt', 'rp', 'wbr'
        ]
        self.localized_html_files = []
        self._create_load_translations_js_file()

    def localize_html_files(self):
        """
        Localizes all HTML files in the project's root directory and subdirectories.
        """
        # Delete the locales directory to start fresh
        # self.delete_locales_directory()
        
        # Delete previously localized files to start fresh
        # self.delete_files_with_target_locales('.html')
        
        html_files = self.get_files_by_extension('.html')
        for html_file in html_files:
            self._process_html_file(html_file)
        
        self._write_report(self.localized_html_files)

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
        
        # Process target_tags

        for tag in soup.find_all(self.target_tags):
            if 'data-i18n' in tag.attrs or 'data-i18n-alt' in tag.attrs:
                continue  # Skip tags that are already marked
            if self._is_inside_nav_or_formatting_tags(tag):
                continue  # Skip if tag is inside a nav tag or formatting tag parent
            if tag.find(self.target_tags) or tag.find(self.special_tags):
                continue  # Skip if tag contains another target tag or special tag as an immediate child
            
            if (tag.string and tag.string.strip()) or tag.get_text(strip=True):
                tag['data-i18n'] = f'html-str-{self.generate_short_uuid()}'
            elif self._has_nav_or_formatting_tags(tag):
                tag['data-i18n'] = f'html-str-{self.generate_short_uuid()}'

        # Process special_tags

        for tag in soup.find_all(self.special_tags):
            if 'data-i18n' in tag.attrs or 'data-i18n-alt' in tag.attrs:
                continue  # Skip tags that are already marked
            if self._is_inside_nav_or_formatting_tags(tag):
                continue  # Skip if tag is inside a nav tag
            if tag.name == 'img' and tag.has_attr('alt') and tag['alt'].strip():
                tag['data-i18n-alt'] = f'html-alt-{self.generate_short_uuid()}'
            elif tag.name == 'meta' and (tag.get('name') in ['description', 'author'] or tag.get('property') in ['og:title', 'og:description', 'og:site_name']):
                if tag.has_attr('content') and tag['content'].strip():
                    tag['data-i18n'] = f'html-meta-{self.generate_short_uuid()}'

        # Process nav_tags

        for tag in soup.find_all(self.nav_tags):
            if 'data-i18n' in tag.attrs or 'data-i18n-alt' in tag.attrs:
                continue  # Skip tags that are already marked
            if self._has_target_formatting_or_special_tags(tag):
                tag['data-i18n'] = f'html-nav-{self.generate_short_uuid()}'
            elif any(sibling.name in self.target_tags for sibling in tag.find_next_siblings()):
                tag['data-i18n'] = f'html-nav-{self.generate_short_uuid()}'

        # Formatting tags are never marked

    def _is_duplicate(self, content, locale):
        """
        Checks if the content is a duplicate in the JSON file for the given locale.

        :param content: The content to check for duplication.
        :param locale: The locale information.
        :return: The key if the content is a duplicate, None otherwise.
        """
        if not content:
            return None
        
        json_file = os.path.join(self.locales_dir, f'{locale[2]}', f'html_strings_{locale[2]}_{locale[3]}.json')
        if os.path.exists(json_file):
            with open(json_file, 'r', encoding='utf-8') as file:
                data = json.load(file)
                for key, value in data.items():
                    if value == content:
                        return key
        return None
    

    def _has_nav_or_formatting_tags(self, tag):
        """
        Checks if a tag has nav_tags or formatting_tags children.
        """
        for child in tag.find_all(recursive=False):
            if child.name in self.nav_tags or child.name in self.formatting_tags:
                return True
        return False
    
    def _has_target_formatting_or_special_tags(self, tag):
        """
        Checks if a tag has target_tags, formatting_tags, or special_tags children.
        """
        for child in tag.find_all(recursive=False):
            if child.name in self.target_tags or child.name in self.formatting_tags or child.name in self.special_tags:
                return True
        return False

    def _is_inside_nav_or_formatting_tags(self, tag):
        """
        Checks if a tag is inside nav_tags or formatting_tags parents.
        """
        parent = tag.parent
        while parent is not None:
            if parent.name in self.nav_tags or parent.name in self.formatting_tags:
                return True
            parent = parent.parent
        return False
    
    def _is_inside_nav_tags(self, tag):
        """
        Checks if a tag is inside nav_tags parents.
        """
        parent = tag.parent
        while parent is not None:
            if parent.name in self.nav_tags:
                return True
            parent = parent.parent
        return False


    def _extract_and_save_strings(self, soup, html_file):
        """
        Extracts and saves the translatable strings to JSON files.

        :param soup: The BeautifulSoup object containing the HTML content.
        :param html_file: The path to the HTML file being processed.
        """
        source_json = {}
        html_file_key = os.path.relpath(html_file, self.root_dir).replace(os.sep, '/')

        for tag in soup.find_all(attrs={"data-i18n": True}):
            key = tag['data-i18n']
            inner_html = ''.join(str(child) for child in tag.children).strip() if tag.children else None
            if inner_html and inner_html.strip():
                if html_file_key not in source_json:
                    source_json[html_file_key] = {}
                source_json[html_file_key][key] = inner_html

        for tag in soup.find_all(attrs={"data-i18n-alt": True}):
            key = tag['data-i18n-alt']
            text = tag['alt'].strip() if tag.has_attr('alt') else None
            if text and text.strip():
                if html_file_key not in source_json:
                    source_json[html_file_key] = {}
                source_json[html_file_key][key] = text

        if source_json:
            self._save_json_file(source_json, self.source_locale, html_file, 'source')

        for locale in self.target_locales:
            if source_json:
                self._save_json_file(source_json, locale, html_file, 'target')


    def _save_json_file(self, data, locale, html_file, locale_type):
        """
        Saves the data to a JSON file for the specified locale.

        :param data: The data to save.
        :param locale: The locale information.
        :param html_file: The path to the HTML file being processed.
        :param locale_type: The type of locale ('source' or 'target').
        """
        language_code, country_code = locale[2], locale[3]
        json_dir = os.path.join(self.locales_dir, f'{language_code}')
        json_path = os.path.join(json_dir, f'html_strings_{language_code}_{country_code}.json')
        os.makedirs(os.path.dirname(json_path), exist_ok=True)

        if os.path.exists(json_path):
            with open(json_path, 'r', encoding='utf-8') as file:
                existing_data = json.load(file)
        else:
            existing_data = {}

        for html_file_key, translations in data.items():
            if html_file_key not in existing_data:
                existing_data[html_file_key] = {}
            existing_data[html_file_key].update(translations)

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
            locale_dir = os.path.join(file_dir, language.split('-')[0])
            file_name_without_ext, file_ext = os.path.splitext(file_name)
            new_file_name = f"{file_name_without_ext}_{language.replace('-', '_')}{file_ext}"
            new_file_path = os.path.join(locale_dir, new_file_name)

        os.makedirs(os.path.dirname(new_file_path), exist_ok=True)

        with open(new_file_path, 'w', encoding='utf-8') as file:
            file.write(soup.prettify())

        self.localized_html_files.append(new_file_path)
        self._insert_i18next_logic(new_file_path, language)
        self._insert_navigation_links(html_file, new_file_path)


    def _insert_i18next_logic(self, html_file, language):
        """
        Inserts the i18next logic into the HTML file.

        :param html_file: The path to the HTML file.
        :param language: The language code for the HTML file.
        """
        js_file_path = os.path.join(self.locales_dir, 'load_translations.js')
        js_file_relative_path = os.path.relpath(js_file_path, os.path.dirname(html_file))

        with open(html_file, 'r+', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')
            head_tag = soup.head

            # Check if the i18next script already exists
            if not soup.find('script', {'src': "https://cdn.jsdelivr.net/npm/i18next@21.6.14/dist/umd/i18next.min.js"}):
                # Insert i18next script
                script_tag = soup.new_tag('script', src="https://cdn.jsdelivr.net/npm/i18next@21.6.14/dist/umd/i18next.min.js")
                head_tag.append(script_tag)

            # Add the load_translations.js script
            if not soup.find('script', {'src': js_file_relative_path}):
                script_tag = soup.new_tag('script', src=js_file_relative_path)
                head_tag.append(script_tag)

            file.seek(0)
            file.write(str(soup))
            file.truncate()
    
    def _create_load_translations_js_file(self):
        """
        Creates the load_translations.js file with the necessary i18next logic.
        """
        js_file_path = os.path.join(self.locales_dir, 'load_translations.js')

        with open(js_file_path, 'w', encoding='utf-8') as js_file:
            js_content = '''
            document.addEventListener("DOMContentLoaded", function() {
                var currentLang = document.documentElement.lang.split('-')[0];
                var currentCountry = document.documentElement.lang.split('-')[1];
                var jsonFileName = "html_strings_" + currentLang + "_" + currentCountry + ".json";
                var jsonFilePath = currentLang + "/" + jsonFileName;
                fetch(jsonFilePath)
                    .then(response => response.json())
                    .then(translations => {
                        i18next.init({
                            lng: currentLang + "-" + currentCountry,
                            resources: {
                                [currentLang + "-" + currentCountry]: {
                                    translation: translations
                                }
                            }
                        });
                        document.querySelectorAll('[data-i18n]').forEach((element) => {
                            element.innerHTML = i18next.t(element.getAttribute('data-i18n'));
                        });
                        document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
                            element.alt = i18next.t(element.getAttribute('data-i18n-alt'));
                        });
                        document.querySelectorAll('meta[data-i18n]').forEach((element) => {
                            element.content = i18next.t(element.getAttribute('data-i18n'));
                        });
                    });
            });
            '''
            js_file.write(js_content)


    def _insert_navigation_links(self, original_html_file, localized_html_file):
        """
        Inserts navigation links into the HTML file to link to other localized versions.

        :param original_html_file: The path to the original HTML file.
        :param localized_html_file: The path to the localized HTML file.
        """
        def insert_links(soup, locales, original_html_file):
            head_tag = soup.head
            nav = soup.find('nav', {'class': 'localization-nav'})
            
            if not nav:
                nav = soup.new_tag('nav', **{'class': 'localization-nav'})
                ul = soup.new_tag('ul')
                nav.append(ul)
                body_tag = soup.body
                body_tag.insert(0, nav)

            existing_links = set()
            for locale in locales:
                href = self._get_seo_url(original_html_file, locale)
                if href not in existing_links:
                    existing_links.add(href)
                    # Add navigation links
                    li = soup.new_tag('li')
                    a = soup.new_tag('a', href=href)
                    a.string = f"{locale[1]}"
                    li.append(a)
                    nav.ul.append(li)

                    # Add SEO compliant links in the head tag
                    link_tag = soup.new_tag('link', rel='alternate', hreflang=f"{locale[2]}-{locale[3]}", href=href)
                    head_tag.append(link_tag)

        locales = [self.source_locale] + self.target_locales

        # Process the original HTML file
        with open(original_html_file, 'r+', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')
            insert_links(soup, locales, original_html_file)
            file.seek(0)
            file.write(str(soup))
            file.truncate()

        # Process the localized HTML file
        with open(localized_html_file, 'r+', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')
            insert_links(soup, locales, original_html_file)
            file.seek(0)
            file.write(str(soup))
            file.truncate()

    def _get_locale_file_path(self, original_html_file, locale):
        """
        Generates the file path for the given locale.

        :param original_html_file: The path to the original HTML file.
        :param locale: The locale for which to generate the file path.
        :return: The file path for the given locale.
        """
        file_dir, file_name = os.path.split(original_html_file)
        relative_path = os.path.relpath(file_dir, self.root_dir)
        
        if locale == self.source_locale:
            return os.path.join(self.base_url, relative_path, file_name).replace(f"{self.base_url}/{self.base_url}", self.base_url)
        else:
            return os.path.join(self.base_url, relative_path, f'{locale[2]}', f'{locale[2]}_{file_name}').replace(f"{self.base_url}/{self.base_url}", self.base_url)

    def _get_seo_url(self, original_html_file, locale):
        """
        Generates the SEO compliant URL for the given locale.

        :param original_html_file: The path to the original HTML file.
        :param locale: The locale for which to generate the SEO compliant URL.
        :return: The SEO compliant URL for the given locale.
        """
        locale_file_path = self._get_locale_file_path(original_html_file, locale)
        return locale_file_path.replace(f"{self.base_url}/{self.base_url}", self.base_url)


    def _write_report(self, localized_html_files):
        """
        Writes a report of all the HTML files affected and their duplicates.

        :param localized_html_files: A list of the HTML files processed.
        """
        report_path = os.path.join(self.root_dir, 'locales', 'reports')
        os.makedirs(report_path, exist_ok=True)
        report_file = os.path.join(report_path, f'html_files_localization_report_{datetime.now().strftime("%Y_%m_%d_%H_%M_%S")}.txt')

        report_header = f"HTML FILES LOCALIZATION REPORT ON: {datetime.now().strftime("%Y/%m/%d at %H:%M:%S")}\n\n"
        report_header += f"The following list shows the files that are localized.\n\n"

        with open(report_file, 'w', encoding='utf-8') as file:
            file.write(report_header)
            file_counter = 1
            for html_file in localized_html_files:
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
