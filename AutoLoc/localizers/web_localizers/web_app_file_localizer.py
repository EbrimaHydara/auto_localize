# web_app_file_localizer.py

import os
import json
from pathlib import Path
from PySide6.QtCore import QObject, Signal
from managers.setting_manager import SettingManager
from managers.source_code_manager import SourceCodeManager
from managers.error_manager import (
    InitializationError,
    InvalidUserInputError,
    ResourceFileError,
)

class WebAppFileLocalizer(QObject):
    """
    The WebAppFileLocalizer class serves as the base class for all web app file type localizer classes.
    It manages common functionalities such as progress tracking, key generation, and saving extracted strings to resource files.
    """

    def __init__(self, source_code_id):
        super().__init__()
        try:
            # Initialize necessary managers
            self.source_code_id = source_code_id
            self.setting_manager = SettingManager()
            self.source_code_manager = SourceCodeManager(self.source_code_id)
            
            # Get source code information
            self.source_code = self.source_code_manager.get_source_code(self.source_code_id)
            self.source_locale = self.source_code['source_locale']
            self.app_settings = self.setting_manager.get_app_settings()

            # Initialize paths
            self.locales_path = Path(self.source_code['localized_source_code_path']) / "locales"

            # Ensure the locales directory exists
            self.locales_path.mkdir(parents=True, exist_ok=True)
            
            # Get target locales for the source code
            self.target_locales = self.setting_manager.get_target_locales(self.source_code_id)
        except (InitializationError, InvalidUserInputError) as e:
            raise InitializationError(f"WebAppFileLocalizer Initialization Error: {str(e)}")

    def generate_key(self, file_path):
        """
        Generates a unique string identifier key for the extracted strings.

        :param file_path: The path of the file being processed
        :return: A unique key string
        """
        try:
            # Remove the file extension from the file path
            namespace_prefix = f"{Path(file_path).stem}:" if self.app_settings.get('use_key_namespace', False) else ""
            existing_keys = self._get_existing_keys(file_path)
            new_key_index = len(existing_keys) + 1
            return f"{namespace_prefix}str_{new_key_index}"
        except Exception as e:
            raise InvalidUserInputError(f"WebAppFileLocalizer Error in generate_key: {str(e)}")

    def save_resource_files(self, data, file_path):
        """
        Saves the extracted strings in JSON format for both source and target locales.

        :param data: The JSON data to save
        :param file_path: The path to the file being processed
        """
        try:
            # Remove extension from file path and create corresponding JSON file path
            json_file_name = Path(file_path).with_suffix('.json').as_posix()

            # Save data for source locale
            source_locale_path = self.locales_path / self.source_locale / json_file_name
            self._write_json_file(data, source_locale_path)

            # Save data for each target locale
            for locale in self.target_locales:
                locale_path = self.locales_path / locale['code'] / json_file_name
                self._write_json_file(data, locale_path)
        except Exception as e:
            raise ResourceFileError(f"WebAppFileLocalizer Error in save_resource_files: {str(e)}")

    def _get_existing_keys(self, file_path):
        """
        Retrieves existing keys from the JSON resource file for the given file path.

        :param file_path: The path of the file being processed
        :return: A set of existing keys in the resource file
        """
        try:
            json_file_name = Path(file_path).with_suffix('.json').as_posix()
            source_locale_path = self.locales_path / self.source_locale / json_file_name

            if source_locale_path.exists():
                with open(source_locale_path, 'r', encoding='utf-8') as json_file:
                    data = json.load(json_file)
                    return set(data.keys())
            return set()
        except Exception as e:
            raise ResourceFileError(f"WebAppFileLocalizer Error in _get_existing_keys: {str(e)}")

    def _write_json_file(self, data, file_path):
        """
        Writes JSON data to the specified file path, ensuring the directory exists.

        :param data: The JSON data to write
        :param file_path: The path to the JSON file
        """
        try:
            file_path.parent.mkdir(parents=True, exist_ok=True)
            with open(file_path, 'w', encoding='utf-8') as json_file:
                json.dump(data, json_file, ensure_ascii=False, indent=4)
        except Exception as e:
            raise ResourceFileError(f"WebAppFileLocalizer Error in _write_json_file: {str(e)}")
