from app_manager import AppManager
from db_manager import DBManager
from error_manager import (
    InitializationError,
    DatabaseError,
    InvalidUserInputError,
    FileTypeError,
    FilePermissionError,
    TextExtractionError,
    ResourceFileError,
    LocalizationRenderError,
)
from datetime import datetime
import os
import shutil
import zipfile

class SourceCodeManager:
    """
    Manages all source codes in the AutoLoc app, including CRUD operations, file management, and localization.
    """

    def __init__(self, project_id):
        """
        Initializes the SourceCodeManager by creating instances of AppManager and DBManager,
        and setting up initial paths for source code files.
        """
        try:
            self.app_manager = AppManager()  # Initialize AppManager
            self.db_manager = DBManager()  # Initialize DBManager
            self.project_id = project_id
            self.app_data_path = self.app_manager.get_app_data_path()
            self.original_source_code_path = None
            self.localized_source_code_path = None
        except (InitializationError, DatabaseError) as e:
            raise InitializationError(f"SourceCodeManager Initialization Error: {str(e)}")

    def get_source_codes(self):
        """
        Retrieves all source codes for a specific project.
        """
        try:
            return self.db_manager.get_records('source_codes', {'project_id': self.project_id})
        except DatabaseError as e:
            raise DatabaseError(f"SourceCodeManager Get Source Codes Error: {str(e)}")

    def get_source_code(self, source_code_id):
        """
        Retrieves a specific source code by ID.
        """
        try:
            return self.db_manager.get_record('source_codes', source_code_id)
        except DatabaseError as e:
            raise DatabaseError(f"SourceCodeManager Get Source Code Error: {str(e)}")

    def get_source_locale(self, source_code_id):
        """
        Retrieves the source locale of a specific source code.
        """
        try:
            source_code = self.get_source_code(source_code_id)
            return source_code['source_locale']
        except DatabaseError as e:
            raise DatabaseError(f"SourceCodeManager Get Source Locale Error: {str(e)}")

    def add_source_code(self, name, code_type, source_locale):
        """
        Adds a new source code record for a specific project.
        """
        try:
            data = {
                'project_id': self.project_id,
                'name': name,
                'unique_id': self._generate_unique_id(name),
                'code_type': code_type,
                'source_locale': source_locale,
                'status': 'Unlocalized'
            }
            return self.db_manager.insert_record('source_codes', data)
        except DatabaseError as e:
            raise DatabaseError(f"SourceCodeManager Add Source Code Error: {str(e)}")

    def update_source_code(self, source_code_id, data):
        """
        Updates a specific source code record.
        """
        try:
            return self.db_manager.update_record('source_codes', source_code_id, data)
        except DatabaseError as e:
            raise DatabaseError(f"SourceCodeManager Update Source Code Error: {str(e)}")

    def delete_source_code(self, source_code_id):
        """
        Deletes a specific source code record and its associated files.
        """
        try:
            self.delete_source_code_files(source_code_id)
            return self.db_manager.delete_record('source_codes', source_code_id)
        except DatabaseError as e:
            raise DatabaseError(f"SourceCodeManager Delete Source Code Error: {str(e)}")

    def delete_source_codes(self):
        """
        Deletes all source codes for a specific project and their associated files.
        """
        try:
            source_codes = self.get_source_codes()
            for source_code in source_codes:
                self.delete_source_code_files(source_code['id'])
            return self.db_manager.delete_records('source_codes')
        except DatabaseError as e:
            raise DatabaseError(f"SourceCodeManager Delete Source Codes Error: {str(e)}")

    def add_source_code_files(self, source_code_id, upload_path):
        """
        Copies files from the upload path to the app's source code storage.
        """
        try:
            source_code = self.get_source_code(source_code_id)
            project_unique_id = self.db_manager.get_record('projects', self.project_id)['unique_id']
            source_code_unique_id = source_code['unique_id']

            self.original_source_code_path = os.path.join(self.app_data_path, f"{project_unique_id}/{source_code_unique_id}/Original_Files/")
            self.localized_source_code_path = os.path.join(self.app_data_path, f"{project_unique_id}/{source_code_unique_id}/Localized_Files/")

            if not os.path.exists(self.original_source_code_path):
                os.makedirs(self.original_source_code_path)

            shutil.copytree(upload_path, self.original_source_code_path, dirs_exist_ok=True)
            shutil.copytree(self.original_source_code_path, self.localized_source_code_path, dirs_exist_ok=True)

            self.update_source_code(source_code_id, {
                'original_source_code_path': self.original_source_code_path,
                'localized_source_code_path': self.localized_source_code_path
            })
        except (DatabaseError, FilePermissionError, shutil.Error) as e:
            raise FilePermissionError(f"SourceCodeManager Add Source Code Files Error: {str(e)}")

    def update_source_code_files(self, source_code_id, upload_path):
        """
        Updates the source code files for a specific source code.
        """
        try:
            self.delete_source_code_files(source_code_id)
            self.add_source_code_files(source_code_id, upload_path)
        except (DatabaseError, FilePermissionError) as e:
            raise FilePermissionError(f"SourceCodeManager Update Source Code Files Error: {str(e)}")

    def delete_source_code_files(self, source_code_id):
        """
        Deletes all files associated with a specific source code.
        """
        try:
            source_code = self.get_source_code(source_code_id)
            paths = [source_code['original_source_code_path'], source_code['localized_source_code_path']]

            for path in paths:
                if os.path.exists(path):
                    shutil.rmtree(path)
        except (DatabaseError, FilePermissionError) as e:
            raise FilePermissionError(f"SourceCodeManager Delete Source Code Files Error: {str(e)}")

    def get_original_source_code_path(self, source_code_id):
        """
        Retrieves the original source code path for a specific source code.
        """
        try:
            source_code = self.get_source_code(source_code_id)
            return source_code['original_source_code_path']
        except DatabaseError as e:
            raise DatabaseError(f"SourceCodeManager Get Original Source Code Path Error: {str(e)}")

    def get_localized_source_code_path(self, source_code_id):
        """
        Retrieves the localized source code path for a specific source code.
        """
        try:
            source_code = self.get_source_code(source_code_id)
            return source_code['localized_source_code_path']
        except DatabaseError as e:
            raise DatabaseError(f"SourceCodeManager Get Localized Source Code Path Error: {str(e)}")

    def export_files(self, source_code_id):
        """
        Exports the localized source code files as a ZIP to the user's Downloads folder.
        """
        try:
            source_code = self.get_source_code(source_code_id)
            zip_filename = os.path.join(os.path.expanduser('~/Downloads'), f"{source_code['unique_id']}_localized.zip")

            with zipfile.ZipFile(zip_filename, 'w') as zipf:
                for root, dirs, files in os.walk(source_code['localized_source_code_path']):
                    for file in files:
                        zipf.write(os.path.join(root, file), os.path.relpath(os.path.join(root, file), source_code['localized_source_code_path']))

            return zip_filename
        except (DatabaseError, FilePermissionError, zipfile.BadZipFile) as e:
            raise FilePermissionError(f"SourceCodeManager Export Files Error: {str(e)}")

    def _generate_unique_id(self, name):
        """
        Generates a unique identifier for the source code using an abbreviated name and the current datetime.
        """
        try:
            # Abbreviate the source code's name
            abbreviated_name = self._abbreviate(name)
            # Format the current datetime as "YYYYMMDDHHMMSS"
            current_datetime = datetime.now().strftime('%Y%m%d%H%M%S')
            # Return the unique ID in the format "abbreviated_name_datetime"
            return f"{abbreviated_name}_{current_datetime}"
        except Exception as e:
            raise Exception(f"SourceCodeManager Generate Unique ID Error: {str(e)}")

    def _abbreviate(self, text):
        """
        Creates an abbreviation from the given text by taking the first letter of each word.
        :param text: The text to abbreviate.
        :return: The abbreviation as a string.
        """
        try:
            words = text.split()  # Split the text into words
            abbreviation = ''.join(word[0].upper() for word in words)  # Take the first letter of each word and convert to uppercase
            return abbreviation
        except Exception as e:
            raise Exception(f"SourceCodeManager Abbreviate Error: {str(e)}")


