from .app_manager import AppManager
from .db_manager import DBManager
import os
import shutil
import json
from datetime import datetime

class SourceCodeManager:
    """
    The SourceCodeManager class handles all source code-related functionalities for the AutoLoc app.
    It manages CRUD operations for source codes and source code target locales using the DBManager.
    """

    def __init__(self, project_id):
        try:
            self.project_id = project_id
            self.app_manager = AppManager()  # Initialize AppManager
            self.db_manager = DBManager()  # Initialize DBManager

            # Get application data path
            self.app_data_path = self.get_app_data_path()

            # Fetch project information for constructing file paths
            project_info = self.db_manager.get_record('projects', self.project_id)
            if not project_info:
                raise Exception("Invalid project ID or project not found.")

            # Initialize paths
            self.project_name = project_info['name']
            self.project_unique_id = project_info['unique_id']
            self.source_code_path = os.path.join(
                self.app_data_path, f"{self.project_name}_{self.project_unique_id}"
            )
            self.original_source_code_path = os.path.join(self.source_code_path, "Original_Files")
            self.localized_source_code_path = os.path.join(self.source_code_path, "Localized_Files")
            self.locales_commons_paths = []

        except Exception as e:
            raise Exception(f"SourceCodeManager Initialization Error: {str(e)}")

    def get_app_data_path(self):
        """
        Gets the app_data_path from AppManager.
        :return: app_data_path or error message
        """
        try:
            return self.app_manager.get_app_data_path()
        except Exception as e:
            return f"SourceCodeManager Get App Data Path Error: {str(e)}"

    def get_source_codes(self):
        """
        Retrieves all source codes for a specific project from the source_codes table.
        :return: List of source codes or error message
        """
        try:
            records = self.db_manager.get_records('source_codes')
            return [record for record in records if record['project_id'] == self.project_id]
        except Exception as e:
            return f"SourceCodeManager Get Source Codes Error: {str(e)}"

    def get_source_code(self, source_code_id):
        """
        Retrieves a specific source code from the source_codes table.
        :param source_code_id: The ID of the source code to retrieve
        :return: The source code record or error message
        """
        try:
            record = self.db_manager.get_record('source_codes', source_code_id)
            # Handle nullable fields correctly
            if record:
                record['original_source_code_path'] = record.get('original_source_code_path', None)
                record['commons_paths'] = record.get('commons_paths', None)
                record['localized_source_code_path'] = record.get('localized_source_code_path', None)
                record['notes'] = record.get('notes', None)
            return record
        except Exception as e:
            return f"SourceCodeManager Get Source Code Error: {str(e)}"

    def add_source_code(self, name, code_type, source_locale, source_code_upload_path):
        """
        Adds a new source code record for a specific project to the source_codes table.
        If the record is added successfully, it saves the source code files.
        :param name: Name of the source code
        :param code_type: Type of the source code (e.g., Web, Android, iOS, Java App)
        :param source_locale: The locale of the source code (e.g., 'en-US')
        :param source_code_upload_path: The path to the source code files
        :return: Success message or error message
        """
        try:
            unique_id = datetime.now().strftime('%Y%m%d%H%M%S')
            data = {
                'project_id': self.project_id,
                'name': name,
                'unique_id': unique_id,
                'code_type': code_type,
                'source_locale': source_locale,
                'original_source_code_path': None,  # Set to None initially
                'commons_paths': None,  # Set to None initially
                'localized_source_code_path': None,  # Set to None initially
                'status': 'In Progress',
                'notes': None  # Set to None initially
            }
            result = self.db_manager.insert_record('source_codes', data)
            if "Error" not in result:
                self.save_source_code_files(source_code_upload_path)
            return result
        except Exception as e:
            return f"SourceCodeManager Add Source Code Error: {str(e)}"

    def update_source_code(self, source_code_id, name, code_type, source_locale, source_code_upload_path):
        """
        Updates a specific source code record in the source_codes table.
        Also replaces the source code files with the new submitted files.
        :param source_code_id: The ID of the source code to update
        :param name: New name of the source code
        :param code_type: New type of the source code
        :param source_locale: New locale of the source code
        :param source_code_upload_path: New path to the source code files
        :return: Success message or error message
        """
        try:
            unique_id = datetime.now().strftime('%Y%m%d%H%M%S')
            data = {
                'name': name,
                'unique_id': unique_id,
                'code_type': code_type,  # Updated field name
                'source_locale': source_locale,
                'original_source_code_path': self.original_source_code_path,  # Set to existing path or updated as needed
                'commons_paths': self.locales_commons_paths,  # Set to existing paths or updated as needed
                'localized_source_code_path': self.localized_source_code_path,  # Set to existing path or updated as needed
                'status': 'In Progress',
                'notes': self.notes  # Set to existing notes or updated as needed
            }
            result = self.db_manager.update_record('source_codes', source_code_id, data)
            if "Error" not in result:
                self.save_source_code_files(source_code_upload_path)
            return result
        except Exception as e:
            return f"SourceCodeManager Update Source Code Error: {str(e)}"

    def delete_source_code(self, source_code_id):
        """
        Deletes a specific source code record from the source_codes table.
        Also deletes the associated source code files.
        :param source_code_id: The ID of the source code to delete
        :return: Success message or error message
        """
        try:
            result = self.db_manager.delete_record('source_codes', source_code_id)
            if "Error" not in result:
                if self.original_source_code_path:
                    self._delete_files(self.original_source_code_path)
                if self.localized_source_code_path:
                    self._delete_files(self.localized_source_code_path)
            return result
        except Exception as e:
            return f"SourceCodeManager Delete Source Code Error: {str(e)}"

    def delete_source_codes(self):
        """
        Deletes all source code records for a specific project from the source_codes table.
        Also deletes all associated source code files.
        :return: Success message or error message
        """
        try:
            source_codes = self.get_source_codes()
            for source_code in source_codes:
                self.delete_source_code(source_code['id'])
            return "All source codes deleted successfully."
        except Exception as e:
            return f"SourceCodeManager Delete Source Codes Error: {str(e)}"

    def save_source_code_files(self, source_code_upload_path):
        """
        Saves the uploaded source code files to the original and localized directories.
        :param source_code_upload_path: The path to the uploaded source code files
        :return: Success message or error message
        """
        try:
            if not os.path.exists(self.original_source_code_path):
                os.makedirs(self.original_source_code_path)
            if not os.path.exists(self.localized_source_code_path):
                os.makedirs(self.localized_source_code_path)

            # Copy files to the original source code path
            for root, dirs, files in os.walk(source_code_upload_path):
                for file in files:
                    src_path = os.path.join(root, file)
                    dest_path = os.path.join(self.original_source_code_path, os.path.relpath(src_path, source_code_upload_path))
                    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
                    shutil.copy(src_path, dest_path)

            # Copy contents to the localized path
            shutil.copytree(self.original_source_code_path, self.localized_source_code_path, dirs_exist_ok=True)

            # Update paths in the database
            self.db_manager.update_record('source_codes', self.project_id, {
                'original_source_code_path': self.original_source_code_path,
                'localized_source_code_path': self.localized_source_code_path
            })

            return "Source code files saved successfully."
        except Exception as e:
            return f"SourceCodeManager Save Source Code Files Error: {str(e)}"

    def set_locales_commons_paths(self, commons_paths):
        """
        Sets the locales commons paths for the source code if not empty.
        :param commons_paths: List of common paths to set
        :return: Success message or error message
        """
        try:
            if commons_paths:
                self.locales_commons_paths = commons_paths
                result = self.db_manager.update_record('source_codes', self.project_id, {'commons_paths': commons_paths})
                return result
            return "No commons paths provided."
        except Exception as e:
            return f"SourceCodeManager Set Locales Commons Paths Error: {str(e)}"

    def get_locales_commons_paths(self):
        """
        Returns the locales commons paths for a specific project.
        :return: locales_commons_paths or error message
        """
        try:
            return self.locales_commons_paths
        except Exception as e:
            return f"SourceCodeManager Get Locales Commons Paths Error: {str(e)}"

    def merge_locale_commons(self, locales_commons_paths):
        """
        Merges the JSON files in each locales commons path into a single JSON file named "commons.json".
        Only performs the action if the source code's status is "Completed".
        :param locales_commons_paths: List of paths containing JSON files to merge
        :return: Success message or error message
        """
        try:
            source_code = self.get_source_code(self.project_id)
            if source_code['status'] != 'Completed':
                raise Exception("Source code status is not 'Completed'. Cannot merge.")

            commons_data = {}
            for path in locales_commons_paths:
                for file_name in os.listdir(path):
                    if file_name.endswith('.json'):
                        with open(os.path.join(path, file_name), 'r') as file:
                            data = json.load(file)
                            commons_data.update(data)

            commons_file_path = os.path.join(self.source_code_path, 'commons.json')
            with open(commons_file_path, 'w') as commons_file:
                json.dump(commons_data, commons_file)

            return "Locale commons merged successfully."
        except Exception as e:
            return f"SourceCodeManager Merge Locale Commons Error: {str(e)}"

    def export_files(self):
        """
        Zips and exports the localized files to the OS Downloads folder for the specific source code.
        :return: Success message or error message
        """
        try:
            downloads_path = os.path.join(os.path.expanduser('~'), 'Downloads')
            zip_file_path = os.path.join(downloads_path, f"{self.project_name}_{self.project_unique_id}_localized.zip")
            shutil.make_archive(zip_file_path.replace('.zip', ''), 'zip', self.localized_source_code_path)
            return f"Files exported successfully to {zip_file_path}."
        except Exception as e:
            return f"SourceCodeManager Export Files Error: {str(e)}"

    def get_source_code_source_locale(self, source_code_id):
        """
        Gets the source locale for a specific source code from the source_codes table.
        :param source_code_id: The ID of the source code
        :return: Source locale or error message
        """
        try:
            source_code = self.get_source_code(source_code_id)
            return source_code['source_locale']
        except Exception as e:
            return f"SourceCodeManager Get Source Locale Error: {str(e)}"

    def get_source_code_target_locales(self, source_code_id):
        """
        Retrieves all target locales for a specific source code from the source_code_target_locales table.
        :param source_code_id: The ID of the source code
        :return: List of target locales or error message
        """
        try:
            records = self.db_manager.get_records('source_code_target_locales')
            return [record for record in records if record['source_code_id'] == source_code_id]
        except Exception as e:
            return f"SourceCodeManager Get Source Code Target Locales Error: {str(e)}"

    def get_source_code_target_locale(self, target_locale_id):
        """
        Retrieves a specific target locale from the source_code_target_locales table.
        :param target_locale_id: The ID of the target locale
        :return: The target locale record or error message
        """
        try:
            record = self.db_manager.get_record('source_code_target_locales', target_locale_id)
            return record
        except Exception as e:
            return f"SourceCodeManager Get Source Code Target Locale Error: {str(e)}"

    def add_source_code_target_locale(self, source_code_id, name, code):
        """
        Adds a new target locale record for a specific source code to the source_code_target_locales table.
        :param source_code_id: The ID of the source code
        :param name: Name of the target locale
        :param code: Code of the target locale
        :return: Success message or error message
        """
        try:
            data = {'source_code_id': source_code_id, 'name': name, 'code': code}
            result = self.db_manager.insert_record('source_code_target_locales', data)
            return result
        except Exception as e:
            return f"SourceCodeManager Add Source Code Target Locale Error: {str(e)}"

    def update_source_code_target_locale(self, target_locale_id, name, code):
        """
        Updates a target locale record of a specific source code in the source_code_target_locales table.
        :param target_locale_id: The ID of the target locale to update
        :param name: New name of the target locale
        :param code: New code of the target locale
        :return: Success message or error message
        """
        try:
            data = {'name': name, 'code': code}
            result = self.db_manager.update_record('source_code_target_locales', target_locale_id, data)
            return result
        except Exception as e:
            return f"SourceCodeManager Update Source Code Target Locale Error: {str(e)}"

    def delete_source_code_target_locale(self, target_locale_id):
        """
        Deletes a specific target locale record from the source_code_target_locales table.
        :param target_locale_id: The ID of the target locale to delete
        :return: Success message or error message
        """
        try:
            result = self.db_manager.delete_record('source_code_target_locales', target_locale_id)
            return result
        except Exception as e:
            return f"SourceCodeManager Delete Source Code Target Locale Error: {str(e)}"

    def delete_source_code_target_locales(self, source_code_id):
        """
        Deletes all target locales for a specific source code from the source_code_target_locales table.
        :param source_code_id: The ID of the source code
        :return: Success message or error message
        """
        try:
            target_locales = self.get_source_code_target_locales(source_code_id)
            for locale in target_locales:
                self.delete_source_code_target_locale(locale['id'])
            return "All target locales deleted successfully."
        except Exception as e:
            return f"SourceCodeManager Delete Source Code Target Locales Error: {str(e)}"

    def _delete_files(self, path):
        """
        Deletes files and directories at the specified path.
        :param path: The path to delete
        """
        try:
            if os.path.exists(path):
                shutil.rmtree(path)
        except Exception as e:
            raise Exception(f"SourceCodeManager Delete Files Error: {str(e)}")
