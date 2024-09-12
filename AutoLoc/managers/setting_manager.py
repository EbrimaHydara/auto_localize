from .db_manager import DBManager  # Import DBManager from the same module
from app_ui.styles import Styles  # Import Styles class from app_ui module

class SettingManager:
    """
    The SettingManager class handles all settings-related functionalities for the AutoLoc app.
    It manages CRUD operations for the app settings using the DBManager.
    """

    def __init__(self):
        try:
            self.db_manager = DBManager()  # Initialize DBManager for database operations
        except Exception as e:
            raise Exception(f"SettingManager Initialization Error: {str(e)}")

    def set_ui_mode(self, mode):
        """
        Toggles the app's UI mode between "Light Mode" and "Dark Mode".
        :param mode: "Light Mode" or "Dark Mode"
        :return: Success message or error message
        """
        try:
            if mode not in ["Light Mode", "Dark Mode"]:
                raise ValueError("Invalid UI mode specified.")
            
            # Update the mode in the database
            result = self.db_manager.update_record('ui_modes', 1, {'mode': mode})  # Assuming ID = 1 for simplicity

            # Apply the mode to the app's UI using the Styles class
            Styles.apply_mode(mode)
            
            return result
        except Exception as e:
            return f"SettingManager Set UI Mode Error: {str(e)}"

    def set_html_is_duplicated(self, is_duplicated):
        """
        Toggles the setting of 'html_is_duplicated' in the l10n_settings table.
        :param is_duplicated: Boolean value to set
        :return: Success message or error message
        """
        try:
            value = bool(is_duplicated)
            result = self.db_manager.update_record('l10n_settings', 1, {'html_is_duplicated': value})
            return result
        except Exception as e:
            return f"SettingManager Set HTML Is Duplicated Error: {str(e)}"

    def html_is_duplicated(self):
        """
        Returns the value of 'html_is_duplicated' from the l10n_settings table.
        :return: Boolean value or error message
        """
        try:
            record = self.db_manager.get_record('l10n_settings', 1)
            return record['html_is_duplicated'] if record else "Error retrieving HTML duplication setting."
        except Exception as e:
            return f"SettingManager Get HTML Is Duplicated Error: {str(e)}"

    def set_key_format(self, key_format):
        """
        Sets the 'key_format' value in the l10n_settings table.
        :param key_format: "Simple Key" or "Namespaced Key with File Path"
        :return: Success message or error message
        """
        try:
            if key_format not in ["Simple Key", "Namespaced Key with File Path"]:
                raise ValueError("Invalid key format specified.")
            result = self.db_manager.update_record('l10n_settings', 1, {'key_format': key_format})
            return result
        except Exception as e:
            return f"SettingManager Set Key Format Error: {str(e)}"

    def get_key_format(self):
        """
        Retrieves the 'key_format' value from the l10n_settings table.
        :return: The key format value or error message
        """
        try:
            record = self.db_manager.get_record('l10n_settings', 1)
            return record['key_format'] if record else "Error retrieving key format."
        except Exception as e:
            return f"SettingManager Get Key Format Error: {str(e)}"

    def reset_db(self):
        """
        Calls the reset_db function from DBManager to reset the database.
        :return: Success message or error message
        """
        try:
            result = self.db_manager.reset_db()
            return result
        except Exception as e:
            return f"SettingManager Reset DB Error: {str(e)}"

    def get_locales(self):
        """
        Retrieves all locales from the locales table.
        :return: A list of locales or error message
        """
        try:
            records = self.db_manager.get_records('locales')
            return records
        except Exception as e:
            return f"SettingManager Get Locales Error: {str(e)}"

    def get_locale(self, locale_id):
        """
        Retrieves a specific locale from the locales table.
        :param locale_id: The ID of the locale to retrieve
        :return: The locale record or error message
        """
        try:
            record = self.db_manager.get_record('locales', locale_id)
            return record
        except Exception as e:
            return f"SettingManager Get Locale Error: {str(e)}"

    def add_locale(self, name, code):
        """
        Adds a new locale record to the locales table.
        :param name: Name of the locale
        :param code: Code of the locale (e.g., 'en-US')
        :return: Success message or error message
        """
        try:
            data = {'name': name, 'code': code}
            result = self.db_manager.insert_record('locales', data)
            return result
        except Exception as e:
            return f"SettingManager Add Locale Error: {str(e)}"

    def update_locale(self, locale_id, name, code):
        """
        Updates a locale record in the locales table.
        :param locale_id: The ID of the locale to update
        :param name: New name of the locale
        :param code: New code of the locale
        :return: Success message or error message
        """
        try:
            data = {'name': name, 'code': code}
            result = self.db_manager.update_record('locales', locale_id, data)
            return result
        except Exception as e:
            return f"SettingManager Update Locale Error: {str(e)}"

    def delete_locale(self, locale_id):
        """
        Deletes a specific locale record from the locales table.
        :param locale_id: The ID of the locale to delete
        :return: Success message or error message
        """
        try:
            result = self.db_manager.delete_record('locales', locale_id)
            return result
        except Exception as e:
            return f"SettingManager Delete Locale Error: {str(e)}"

    def delete_locales(self):
        """
        Deletes all locale records from the locales table.
        :return: Success message or error message
        """
        try:
            result = self.db_manager.delete_records('locales')
            return result
        except Exception as e:
            return f"SettingManager Delete Locales Error: {str(e)}"
