import os
import glob
import uuid
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
                'root_dir': project[0][3]  # Assuming project is a list of tuples and we need the first result
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


# # Usage examples for FileLocalizer class

# # is followed by comment
#   is followed by code

# # Initialize the FileLocalizer with a project ID
# file_localizer = FileLocalizer(project_id=1)
# print("Initialized FileLocalizer with project ID 1")

# # Get the project's root directory
# root_dir = file_localizer.root_dir
# print("Project root directory:", root_dir)

# # Get the path to the 'locales' directory
# locales_path = file_localizer.get_locales_path()
# print("Locales directory path:", locales_path)

# # Get all files with a specific extension in the project
# html_files = file_localizer.get_files_by_extension('.html')
# print("HTML files in project:", html_files)

# # Generate a short UUID
# short_uuid = file_localizer.generate_short_uuid()
# print("Generated short UUID:", short_uuid)

# # =====================================
# # Internal Data Retrieval Functions
# # =====================================

# # Get project settings
# project_settings = file_localizer._get_project_settings()
# print("Project settings:", project_settings)

# # Get project file types
# project_file_types = file_localizer._get_project_file_types()
# print("Project file types:", project_file_types)

# # Get project source locale
# project_source_locale = file_localizer._get_project_source_locale()
# print("Project source locale:", project_source_locale)

# # Get project target locales
# project_target_locales = file_localizer._get_project_target_locales()
# print("Project target locales:", project_target_locales)

# # Create the 'locales' directory in the project's root directory
# locales_dir = file_localizer._create_locales_directory()
# print("Created 'locales' directory at:", locales_dir)
