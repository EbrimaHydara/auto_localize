# web_app_html_file_localizer.py

import os
from pathlib import Path
from bs4 import BeautifulSoup
from localizers.web_localizers.web_app_file_localizer import WebAppFileLocalizer
from managers.error_manager import LocalizationRenderError, ResourceFileError, InvalidUserInputError

class WebAppHTMLFileLocalizer(WebAppFileLocalizer):
    """
    The WebAppHTMLFileLocalizer handles all HTML file-specific localization procedures.
    It inherits the WebAppFileLocalizer class and manages the localization process.
    """

    def __init__(self, source_code_id, files):
        super().__init__(source_code_id)
        self.files = files

        # Tags for localization
        self.target_tags = ['title', 'div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'address', 'pre', 'blockquote',
                            'li', 'figcaption', 'caption', 'td', 'th', 'label', 'option']
        self.special_tags = ['meta', 'img']
        self.nav_tags = ['a', 'button']
        self.formatting_tags = ['span', 'br', 'b', 'strong', 'i', 'em', 'mark', 'small', 'del', 'ins', 'sub', 'sup',
                                'u', 's', 'abbr', 'code', 'kbd', 'samp', 'var', 'cite', 'q', 'dfn', 'time', 'bdi',
                                'bdo', 'ruby', 'rt', 'rp', 'wbr']

    def localize_files(self):
        """
        Localizes all the files in self.files.
        """
        try:
            for html_file in self.files:
                self._process_html_file(html_file)
            print("HTML files localization completed.")
        except Exception as e:
            raise LocalizationRenderError(f"WebAppHTMLFileLocalizer Error in localize_files: {str(e)}")

    def _process_html_file(self, html_file):
        """
        Processes a given HTML file for localization.
        """
        try:
            with open(html_file, 'r', encoding='utf-8') as file:
                soup = BeautifulSoup(file, 'html.parser')

            self._mark_translatable_strings(soup, html_file)
            self._extract_and_save_strings(soup, html_file)

            if self.app_settings['duplicate_html']:
                self._duplicate_html_file(soup, html_file)
        except Exception as e:
            raise LocalizationRenderError(f"WebAppHTMLFileLocalizer Error in _process_html_file: {str(e)}")

    def _mark_translatable_strings(self, soup, file_path):
        """
        Marks all translatable strings in the HTML content.
        """
        try:
            # Process target tags
            for tag in soup.find_all(self.target_tags):
                if 'data-i18n' in tag.attrs:
                    continue  # Skip tags that are already marked
                if self._is_inside_nav_or_formatting_tags(tag):
                    continue  # Skip if tag is inside a nav tag or formatting tag parent
                if tag.find(self.target_tags) or tag.find(self.special_tags):
                    continue  # Skip if tag contains another target tag or special tag as an immediate child

                if (tag.string and tag.string.strip()) or tag.get_text(strip=True):
                    tag['data-i18n'] = self.generate_key(file_path)
                elif self._has_nav_or_formatting_tags(tag):
                    tag['data-i18n'] = self.generate_key(file_path)

            # Process special tags
            for tag in soup.find_all(self.special_tags):
                if 'data-i18n' in tag.attrs:
                    continue  # Skip tags that are already marked
                if self._is_inside_nav_or_formatting_tags(tag):
                    continue  # Skip if tag is inside a nav tag
                if tag.name == 'img' and tag.has_attr('alt') and tag['alt'].strip():
                    tag['data-i18n'] = self.generate_key(file_path)
                elif tag.name == 'meta' and (tag.get('name') in ['description', 'author'] or tag.get('property') in ['og:title', 'og:description', 'og:site_name']):
                    if tag.has_attr('content') and tag['content'].strip():
                        tag['data-i18n'] = self.generate_key(file_path)

            # Process nav tags
            for tag in soup.find_all(self.nav_tags):
                if 'data-i18n' in tag.attrs:
                    continue  # Skip tags that are already marked
                if self._has_target_formatting_or_special_tags(tag):
                    tag['data-i18n'] = self.generate_key(file_path)
                elif any(sibling.name in self.target_tags for sibling in tag.find_next_siblings()):
                    tag['data-i18n'] = self.generate_key(file_path)

        except Exception as e:
            raise InvalidUserInputError(f"WebAppHTMLFileLocalizer Error in _mark_translatable_strings: {str(e)}")

    def _extract_and_save_strings(self, soup, html_file):
        """
        Extracts and saves the translatable strings to JSON files.
        """
        try:
            source_json = {}

            for tag in soup.find_all(attrs={"data-i18n": True}):
                # Check if 'use_key_namespace' is True before splitting the 'data-i18n' attribute
                if self.app_settings['use_key_namespace']:
                    key = tag['data-i18n'].split(':', 1)[1]  # Take the second part without namespace_suffix
                else:
                    key = tag['data-i18n']  # Use the full key as is

                # Get the inner HTML content if available
                inner_html = ''.join(str(child) for child in tag.children).strip() if tag.children else None
                if inner_html and inner_html.strip():
                    source_json[key] = inner_html

            if source_json:
                self.save_resource_files(source_json, html_file)
        except Exception as e:
            raise ResourceFileError(f"WebAppHTMLFileLocalizer Error in _extract_and_save_strings: {str(e)}")

    def _duplicate_html_file(self, soup, html_file):
        """
        Duplicates the HTML file for each target locale and modifies the lang attribute.
        """
        try:
            source_locale = self.source_locale
            soup.html['lang'] = source_locale
            self._save_html_file(soup, html_file, source_locale, is_original=True)

            for target_locale in self.target_locales:
                duplicate_html = BeautifulSoup(str(soup), 'html.parser')
                duplicate_html.html['lang'] = target_locale['code']
                self._save_html_file(duplicate_html, html_file, target_locale['code'])
        except Exception as e:
            raise LocalizationRenderError(f"WebAppHTMLFileLocalizer Error in _duplicate_html_file: {str(e)}")

    def _save_html_file(self, soup, html_file, locale, is_original=False):
        """
        Saves the modified HTML file with the lang attribute.
        """
        try:
            file_dir, file_name = os.path.split(html_file)
            if is_original:
                new_file_path = os.path.join(file_dir, file_name)
            else:
                locale_dir = os.path.join(file_dir, "locales", locale)
                file_name_without_ext, file_ext = os.path.splitext(file_name)
                new_file_name = f"{file_name_without_ext}_{locale.replace('-', '_')}{file_ext}"
                new_file_path = os.path.join(locale_dir, new_file_name)

            os.makedirs(os.path.dirname(new_file_path), exist_ok=True)

            with open(new_file_path, 'w', encoding='utf-8') as file:
                file.write(soup.prettify())
        except Exception as e:
            raise ResourceFileError(f"WebAppHTMLFileLocalizer Error in _save_html_file: {str(e)}")

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
