from managers.db_manager import DBManager
from managers.error_manager import (
    DatabaseError,
    LocaleManagementError,
    InitializationError
)

class TargetLocaleManager:
    """
    Manages all target locales in the AutoLoc app, including CRUD operations for the target_locales table.
    """

    def __init__(self):
        """
        Initializes the TargetLocaleManager.
        """
        try:
            self.db_manager = DBManager()  # Initialize DBManager for database operations
        except InitializationError as e:
            raise InitializationError(f"TargetLocaleManager Initialization Error: {str(e)}")

    def get_target_locales(self, source_code_id=None):
        """
        Retrieves all target locales.
        """
        try:
            return self.db_manager.get_records('target_locales', {'source_code_id': source_code_id})
        except DatabaseError as e:
            raise LocaleManagementError(f"TargetLocaleManager Get Target Locales Error: {str(e)}")

    def get_target_locale(self, target_locale_id):
        """
        Retrieves a specific target locale by ID.
        """
        try:
            return self.db_manager.get_record('target_locales', target_locale_id)
        except DatabaseError as e:
            raise LocaleManagementError(f"TargetLocaleManager Get Target Locale Error: {str(e)}")

    def add_target_locale(self, source_code_id, name, code):
        """
        Adds a new target locale record for a specific source code.
        """
        try:
            data = {
                'source_code_id': source_code_id,
                'name': name,
                'code': code
            }
            return self.db_manager.insert_record('target_locales', data)
        except DatabaseError as e:
            raise LocaleManagementError(f"TargetLocaleManager Add Target Locale Error: {str(e)}")

    def update_target_locale(self, target_locale_id, data):
        """
        Updates a specific target locale record.
        """
        try:
            return self.db_manager.update_record('target_locales', target_locale_id, data)
        except DatabaseError as e:
            raise LocaleManagementError(f"TargetLocaleManager Update Target Locale Error: {str(e)}")

    def delete_target_locale(self, target_locale_id):
        """
        Deletes a specific target locale record.
        """
        try:
            return self.db_manager.delete_record('target_locales', target_locale_id)
        except DatabaseError as e:
            raise LocaleManagementError(f"TargetLocaleManager Delete Target Locale Error: {str(e)}")

    def delete_target_locales(self):
        """
        Deletes all target locales for a specific source code.
        """
        try:
            return self.db_manager.delete_records('target_locales')
        except DatabaseError as e:
            raise LocaleManagementError(f"TargetLocaleManager Delete Target Locales Error: {str(e)}")
