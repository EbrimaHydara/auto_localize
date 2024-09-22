from managers.db_manager import DBManager
from managers.error_manager import (
    InitializationError,
    DatabaseError,
    InvalidUserInputError,
    LocaleManagementError,
    FileTypeError
)

class SettingManager:
    """
    The SettingManager class is responsible for managing application settings,
    locales, and file types using the DBManager's CRUD functionalities.
    """

    def __init__(self):
        """
        Initializes the SettingManager by creating an instance of DBManager.
        """
        try:
            self.db_manager = DBManager()  # Initialize DBManager
        except InitializationError as e:
            raise InitializationError(f"SettingManager Initialization Error: {str(e)}")
    
    def get_app_settings(self):
        """
        Retrieves the application settings from the app_settings table.
        :return: The application settings record.
        :raises DatabaseError: If there is an error during retrieval.
        """
        try:
            # Assuming there's only one settings record with ID = 1
            return self.db_manager.get_record('app_settings', 1)
        except DatabaseError as e:
            raise DatabaseError(f"SettingManager Get App Settings Error: {str(e)}")
            
    def update_app_settings(self, settings):
        """
        Updates the application settings in the app_settings table.
        :param settings: A dictionary containing the settings to update.
        :return: The updated app settings record.
        :raises DatabaseError: If there is an error during the update.
        """
        try:
            return self.db_manager.update_record('app_settings', 1, settings)
        except DatabaseError as e:
            raise DatabaseError(f"SettingManager Update App Settings Error: {str(e)}")

    def reset_db(self):
        """
        Resets the database by calling the reset_db method from DBManager.
        :raises DatabaseError: If there is an error during the reset.
        """
        try:
            self.db_manager.reset_db()
        except DatabaseError as e:
            raise DatabaseError(f"SettingManager Reset DB Error: {str(e)}")

    def get_locales(self):
        """
        Retrieves all locales from the locales table.
        :return: A list of all locales.
        :raises LocaleManagementError: If there is an error during retrieval.
        """
        try:
            return self.db_manager.get_records('locales')
        except DatabaseError as e:
            raise LocaleManagementError(f"SettingManager Get Locales Error: {str(e)}")

    def get_locale(self, locale_id):
        """
        Retrieves a specific locale by ID from the locales table.
        :param locale_id: The ID of the locale to retrieve.
        :return: The locale record.
        :raises LocaleManagementError: If there is an error during retrieval.
        """
        try:
            return self.db_manager.get_record('locales', locale_id)
        except DatabaseError as e:
            raise LocaleManagementError(f"SettingManager Get Locale Error: {str(e)}")

    def add_locale(self, name, code):
        """
        Adds a new locale to the locales table.
        :param name: The name of the locale.
        :param code: The code of the locale.
        :return: The inserted locale record.
        :raises LocaleManagementError: If there is an error during insertion.
        """
        try:
            return self.db_manager.insert_record('locales', {'name': name, 'code': code})
        except DatabaseError as e:
            raise LocaleManagementError(f"SettingManager Add Locale Error: {str(e)}")

    def update_locale(self, locale_id, data):
        """
        Updates a specific locale in the locales table.
        :param locale_id: The ID of the locale to update.
        :param data: A dictionary with updated locale information.
        :return: The updated locale record.
        :raises LocaleManagementError: If there is an error during update.
        """
        try:
            return self.db_manager.update_record('locales', locale_id, data)
        except DatabaseError as e:
            raise LocaleManagementError(f"SettingManager Update Locale Error: {str(e)}")

    def delete_locale(self, locale_id):
        """
        Deletes a specific locale from the locales table.
        :param locale_id: The ID of the locale to delete.
        :return: The deleted locale record.
        :raises LocaleManagementError: If there is an error during deletion.
        """
        try:
            return self.db_manager.delete_record('locales', locale_id)
        except DatabaseError as e:
            raise LocaleManagementError(f"SettingManager Delete Locale Error: {str(e)}")

    def delete_locales(self):
        """
        Deletes all locales from the locales table.
        :return: List of all deleted locale records.
        :raises LocaleManagementError: If there is an error during deletion.
        """
        try:
            return self.db_manager.delete_records('locales')
        except DatabaseError as e:
            raise LocaleManagementError(f"SettingManager Delete Locales Error: {str(e)}")

    def get_file_types(self):
        """
        Retrieves all file types from the file_types table.
        :return: A list of all file types.
        :raises FileTypeError: If there is an error during retrieval.
        """
        try:
            return self.db_manager.get_records('file_types')
        except DatabaseError as e:
            raise FileTypeError(f"SettingManager Get File Types Error: {str(e)}")

    def get_file_type(self, file_type_id):
        """
        Retrieves a specific file type by ID from the file_types table.
        :param file_type_id: The ID of the file type to retrieve.
        :return: The file type record.
        :raises FileTypeError: If there is an error during retrieval.
        """
        try:
            return self.db_manager.get_record('file_types', file_type_id)
        except DatabaseError as e:
            raise FileTypeError(f"SettingManager Get File Type Error: {str(e)}")

    def add_file_type(self, code_type, name, extension):
        """
        Adds a new file type to the file_types table.
        :param code_type: The type of code (e.g., 'Web App').
        :param name: The name of the file type.
        :param extension: The file extension (e.g., '.html').
        :return: The inserted file type record.
        :raises FileTypeError: If there is an error during insertion.
        """
        try:
            return self.db_manager.insert_record('file_types', {
                'code_type': code_type,
                'name': name,
                'extension': extension,
                'is_active': True
            })
        except DatabaseError as e:
            raise FileTypeError(f"SettingManager Add File Type Error: {str(e)}")

    def update_file_type(self, file_type_id, data):
        """
        Updates a specific file type in the file_types table.
        :param file_type_id: The ID of the file type to update.
        :param data: A dictionary with updated file type information.
        :return: The updated file type record.
        :raises FileTypeError: If there is an error during update.
        """
        try:
            return self.db_manager.update_record('file_types', file_type_id, data)
        except DatabaseError as e:
            raise FileTypeError(f"SettingManager Update File Type Error: {str(e)}")

    def delete_file_type(self, file_type_id):
        """
        Deletes a specific file type from the file_types table.
        :param file_type_id: The ID of the file type to delete.
        :return: The deleted file type record.
        :raises FileTypeError: If there is an error during deletion.
        """
        try:
            return self.db_manager.delete_record('file_types', file_type_id)
        except DatabaseError as e:
            raise FileTypeError(f"SettingManager Delete File Type Error: {str(e)}")

    def delete_file_types(self):
        """
        Deletes all file types from the file_types table.
        :return: List of all deleted file type records.
        :raises FileTypeError: If there is an error during deletion.
        """
        try:
            return self.db_manager.delete_records('file_types')
        except DatabaseError as e:
            raise FileTypeError(f"SettingManager Delete File Types Error: {str(e)}")
