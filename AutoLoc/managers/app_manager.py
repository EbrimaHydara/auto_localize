import os
import sys
import sqlite3
from error_manager import (
    AppError,
    InitializationError,
    PermissionError,
    DatabaseError,
    DatabaseConnectionError,
    FilePermissionError,
    ConfigurationError,
    DependencyError,
)

class AppManager:
    """
    The AppManager manages the app's startup functionalities, initializes the app's data and database paths, 
    and handles errors and exceptions related to these tasks.
    """

    def __init__(self):
        # Define the application's data paths
        self.app_data_path = os.path.join(self.get_user_data_directory(), "AutoLoc", "Data")
        self.app_db_file_path = os.path.join(self.app_data_path, "DB", "autoloc.db")

        # Run the app initialization
        try:
            self.initialize_app()
        except AppError as e:
            print(f"Error in AppManager {e}")

    def get_user_data_directory(self):
        """
        Returns the user data directory path based on the host OS.
        :return: The path to the user's data directory
        """
        try:
            if sys.platform == 'win32':
                return os.getenv('APPDATA')
            elif sys.platform == 'darwin':
                return os.path.expanduser('~/Library/Application Support')
            else:  # Linux and other Unix-like systems
                return os.path.expanduser('~/.local/share')
        except Exception as e:
            raise InitializationError(f"AppManager Error fetching user data directory: {str(e)}")

    def initialize_app(self):
        """
        Checks and ensures that the app's data and database paths are properly set up.
        Creates the necessary directories and files if they do not exist.
        """
        try:
            # Check and create the data directory if it doesn't exist
            if not os.path.exists(self.app_data_path):
                os.makedirs(self.app_data_path)

            # Check and create the DB directory if it doesn't exist
            db_directory = os.path.dirname(self.app_db_file_path)
            if not os.path.exists(db_directory):
                os.makedirs(db_directory)

            # Check and set the necessary permissions for the data directory
            self.ensure_write_permissions(self.app_data_path)
            self.ensure_write_permissions(db_directory)

            # Check and create the SQLite DB file if it doesn't exist
            if not os.path.exists(self.app_db_file_path):
                self.create_db_file()
            else:
                # Ensure the database file is writable
                self.ensure_write_permissions(self.app_db_file_path)

        except (FilePermissionError, DatabaseError, PermissionError) as e:
            raise InitializationError(f"AppManager Initialization Error: {str(e)}")

    def ensure_write_permissions(self, path):
        """
        Ensures that the given path has the necessary write permissions.
        :param path: The file or directory path to check
        """
        try:
            if not os.access(path, os.W_OK):
                # Attempt to add write permission
                os.chmod(path, 0o700)  # Grant read, write, and execute permissions to the owner
        except Exception as e:
            raise FilePermissionError(f"AppManager Permission Error: Unable to set write permissions for {path}: {str(e)}")

    def create_db_file(self):
        """
        Creates the SQLite database file at the specified path.
        """
        try:
            conn = sqlite3.connect(self.app_db_file_path)
            conn.close()
        except sqlite3.DatabaseError as e:
            raise DatabaseConnectionError(f"AppManager Database Creation Error: {str(e)}")

    def get_app_data_path(self):
        """
        Returns the application's data directory path.
        :return: The app data path
        """
        return self.app_data_path

    def get_app_db_file_path(self):
        """
        Returns the application's database file path.
        :return: The app database file path
        """
        return self.app_db_file_path
