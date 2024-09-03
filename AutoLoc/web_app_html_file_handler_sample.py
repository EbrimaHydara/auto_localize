import os
import json
from datetime import datetime
from bs4 import BeautifulSoup
from web_app_file_handler import WebAppFileHandler

class WebAppHTMLFileHandler(WebAppFileHandler):
    def __init__(self, project_id, source_code_id):
        """
        Initializes the WebAppHTMLFileHandler class with the given project ID and source code ID.
        
        :param project_id: The ID of the project.
        :param source_code_id: The ID of the project source code.
        """
        super().__init__(project_id, source_code_id)

        self.target_tags = [
            'title', 'div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'address', 'pre', 'blockquote', 'li', 'figcaption', 'caption', 'td', 'th', 'label', 'option'
        ]
        self.special_tags = ['meta', 'img']
        self.nav_tags = ['a', 'button']
        self.formatting_tags = [
            'span', 'br', 'b', 'strong', 'i', 'em', 'mark', 'small', 'del', 'ins', 'sub', 'sup', 'u', 's', 'abbr', 'code', 'kbd', 'samp', 'var', 'cite', 'q', 'dfn', 'time', 'bdi', 'bdo', 'ruby', 'rt', 'rp', 'wbr'
        ]
        self.html_files = self.get_files_by_extension('.html')

    def localize_html_files(self):
        """
        Localizes all HTML files in the source code.
        """

        for html_file in self.html_files:
            self._process_html_file(html_file)

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
            self.save_resource_file(source_json, self.source_locale, html_file, 'source')

        for locale in self.get_target_locales():
            if source_json:
                self.save_resource_file(source_json, locale, html_file, 'target')


    def _duplicate_html_file(self, soup, html_file):
        """
        Duplicates the HTML file for each target locale and modifies the lang attribute.

        :param soup: The BeautifulSoup object containing the HTML content.
        :param html_file: The path to the HTML file being processed.
        """
        source_locale = f"{self.get_source_locale(source_code_id)}"
        soup.html['lang'] = source_locale
        self._save_html_file(soup, html_file, source_locale, is_original=True)

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
