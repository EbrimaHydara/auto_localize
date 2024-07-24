import os
import glob
import uuid
import shutil
from managers.db import DBManager

class FileLocalizer:
    def __init__(self, project_id):
        """
        Initializes the FileLocalizer class with the given project ID.
        
        :param project_id: The ID of the project.
        """
        self.db_manager = DBManager()
        self.project_id = project_id
        self.project_settings = self._get_project_settings()
        self.root_dir = self.project_settings['root_dir']
        self.base_url = self.project_settings['base_url']
        self.file_types = self._get_project_file_types()
        self.source_locale = self._get_project_source_locale()
        self.target_locales = self._get_project_target_locales()
        self.locales_dir = self._create_locales_directory()

    def _get_project_settings(self):
        """
        Retrieves all project settings from the database using the project ID.

        :return: A dictionary containing the project settings.
        """
        project = self.db_manager.get_project(self.project_id)
        if project:
            return {
                'root_dir': project[0][3],
                'base_url': project[0][4]  # Assuming project is a list of tuples and we need the first result
            }
        return None

    def _get_project_file_types(self):
        """
        Retrieves all file types for the project from the database.

        :return: A list of tuples containing the project file types.
        """
        return self.db_manager.get_project_file_types(self.project_id)

    def _get_project_source_locale(self):
        """
        Retrieves the source locale for the project from the database.

        :return: A tuple containing the project source locale details.
        """
        source_locale = self.db_manager.get_project_source_locales(self.project_id)
        if source_locale:
            return source_locale[0]  # Assuming only one source locale per project
        return None

    def _get_project_target_locales(self):
        """
        Retrieves the target locales for the project from the database.

        :return: A list of tuples containing the project target locales.
        """
        return self.db_manager.get_project_target_locales(self.project_id)

    def _create_locales_directory(self):
        """
        Creates the 'locales' directory in the project's root directory.

        :return: The path to the 'locales' directory.
        """
        locales_dir = os.path.join(self.root_dir, 'locales')
        os.makedirs(locales_dir, exist_ok=True)
        return locales_dir

    def get_locales_path(self):
        """
        Returns the path to the 'locales' directory.

        :return: The path to the 'locales' directory.
        """
        return self.locales_dir

    def get_files_by_extension(self, extension):
        """
        Retrieves all files with the specified extension in the root directory and subdirectories.

        :param extension: The file extension to filter by (e.g., '.html').
        :return: A list of file paths matching the specified extension.
        """
        return glob.glob(os.path.join(self.root_dir, '**', f'*{extension}'), recursive=True)

    def generate_short_uuid(self, length=8):
        """
        Generates a shorter, unique identifier.

        :param length: The length of the identifier. Default is 8.
        :return: A shorter, unique identifier string.
        """
        return str(uuid.uuid4())[:length]

    def delete_locales_directory(self):
        """
        Deletes the 'locales' directory in the root directory.
        Recreates the 'locales' directory in the root directory.
        """
        if os.path.exists(self.locales_dir):
            shutil.rmtree(self.locales_dir)
            print(f"Deleted 'locales' directory at: {self.locales_dir}")

    def delete_files_with_target_locales(self, extension):
        """
        Deletes files with the specified extension that contain target locale strings in their filenames.

        :param extension: The file extension to filter by (e.g., '.html').
        """
        for locale in self.target_locales:
            language_code, country_code = locale[2], locale[3]
            localized_files = glob.glob(os.path.join(self.root_dir, '**', f'*{language_code}_{country_code}*{extension}'), recursive=True)
            if localized_files:
                for file in localized_files:
                    os.remove(file)
                    print(f"Deleted file: {file}")
