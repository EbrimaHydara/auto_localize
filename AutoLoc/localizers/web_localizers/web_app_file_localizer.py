import os
import json
import shutil
import random
from datetime import datetime
from pathlib import Path
from managers.setting_manager import SettingManager
from managers.source_code_manager import SourceCodeManager
from managers.target_locale_manager import TargetLocaleManager
from managers.error_manager import (
    InitializationError,
    InvalidUserInputError,
    ResourceFileError,
)

class WebAppFileLocalizer:
    """
    The WebAppFileLocalizer class serves as the base class for all web app file type localizer classes.
    It manages common functionalities such as progress tracking, key generation, and saving extracted strings to resource files.
    """

    def __init__(self, source_code_id):
        try:
            # Initialize necessary managers
            self.setting_manager = SettingManager()
            self.source_code_manager = SourceCodeManager()
            self.target_locale_manager = TargetLocaleManager()  # Added target locale manager

            # Get source code information
            self.source_code = self.source_code_manager.get_source_code(source_code_id)
            self.source_locale = self.source_code['source_locale']
            self.app_settings = self.setting_manager.get_app_settings()  # Use as sqlite3.Row object

            # Initialize paths
            self.locales_path = Path(self.source_code['localized_source_code_path']) / "locales"

            # Ensure the locales directory exists
            self.locales_path.mkdir(parents=True, exist_ok=True)

            # Get target locales for the source code
            self.target_locales = self.target_locale_manager.get_target_locales(source_code_id=source_code_id)
        except (InitializationError, InvalidUserInputError) as e:
            raise InitializationError(f"WebAppFileLocalizer Initialization Error: {str(e)}")

    def generate_key(self, file_path):
        """
        Generates a unique string identifier key for the extracted strings.
        If use_key_namespace is True, the key includes a namespace based on the relative path
        of the file (excluding the file extension) in the context of the localized source code path.

        :param file_path: The path of the file being processed.
        :return: A unique key string.
        """
        try:
            # Determine the relative path in the context of the localized source code path
            relative_path = os.path.relpath(file_path, self.source_code['localized_source_code_path']).replace(os.sep, '/')

            # Get the current minute, second, and millisecond
            now = datetime.now()
            minute = now.strftime('%M')   # Minutes (00-59)
            second = now.strftime('%S')   # Seconds (00-59)
            millisecond = now.strftime('%f')[:3]  # First three digits of microseconds to represent milliseconds

            # Generate a random number to ensure uniqueness within the same time frame
            random_number = random.randint(100, 999)  # A random 3-digit number

            # Combine minute, second, millisecond, and random number without underscores
            unique_id = f"str_id_{minute}{second}{millisecond}{random_number}"

            # Return the key with or without the namespace prefix
            return f"{relative_path}:{unique_id}" if self.app_settings['use_key_namespace'] else unique_id

        except Exception as e:
            raise InvalidUserInputError(f"WebAppFileLocalizer Error in generate_key: {str(e)}")

            
    def save_resource_files(self, data, file_path):
        """
        Saves the extracted strings in JSON format for both source and target locales.

        :param data: The JSON data to save
        :param file_path: The path to the file being processed
        """
        try:
            # Determine relative path of the file to preserve directory structure
            relative_path = os.path.relpath(file_path, self.source_code['localized_source_code_path'])
            json_file_name = Path(file_path).with_suffix('.json').name

            # Save data for source locale
            source_locale_path = self.locales_path / self.source_locale / relative_path
            source_locale_path = source_locale_path.with_suffix('.json')  # Replace the file extension with .json
            self._write_json_file(data, source_locale_path)

            # Save data for each target locale
            for locale in self.target_locales:
                target_locale_path = self.locales_path / locale['code'] / relative_path
                target_locale_path = target_locale_path.with_suffix('.json')  # Replace the file extension with .json
                self._write_json_file(data, target_locale_path)

        except Exception as e:
            raise ResourceFileError(f"WebAppFileLocalizer Error in save_resource_files: {str(e)}")

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
    
    def duplicate_as_resource_files(self, file_path):
        """
        Duplicates the specified file into each locale's path without reading its content.

        :param file_path: The path of the file to duplicate.
        """
        try:
            # Determine the relative path of the file from the localized source code path
            relative_path = os.path.relpath(file_path, self.source_code['localized_source_code_path'])
            
            # Define the base name of the file for duplication
            file_name = Path(file_path).name

            # Duplicate the file for each target locale
            for locale in self.target_locales:
                # Construct the target locale path
                target_locale_path = self.locales_path / locale['code'] / relative_path
                target_locale_path.parent.mkdir(parents=True, exist_ok=True)  # Ensure the directory exists

                # Define the full path for the duplicated file
                target_file_path = target_locale_path.with_name(file_name)

                # Copy the file to the target locale path
                shutil.copyfile(file_path, target_file_path)

        except Exception as e:
            raise ResourceFileError(f"WebAppFileLocalizer Error in duplicate_as_resource_files: {str(e)}")

