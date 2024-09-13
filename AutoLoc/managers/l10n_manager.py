from source_code_manager import SourceCodeManager
from localizers.web_localizers import WebAppBasedLocalizer
from localizers.android_localizers import AndroidAppBasedLocalizer
from localizers.ios_localizers import IOSAppBasedLocalizer
from localizers.java_localizers import JavaAppBasedLocalizer
from error_manager import (
    LocalizationError,
    InitializationError,
    InvalidUserInputError,
    FilePermissionError
)
import shutil
import os

class L10nManager:
    """
    The L10nManager class defines and executes all localization management procedures of the AutoLoc app.
    """

    def __init__(self, project_id, source_code_id):
        """
        Initializes the L10nManager with the provided project_id and source_code_id.
        """
        try:
            self.project_id = project_id
            self.source_code_id = source_code_id
            self.source_code_manager = SourceCodeManager(source_code_id)  # Initialize SourceCodeManager
            self.source_code = self.source_code_manager.get_source_code(source_code_id)  # Retrieve the source code data
            self.code_type = self.source_code['code_type']
        except InitializationError as e:
            raise InitializationError(f"L10nManager Initialization Error: {str(e)}")

    def reset_l10n(self):
        """
        Resets localization by deleting all localized files and restoring original files.
        """
        try:
            original_path = self.source_code_manager.get_original_source_code_path(self.source_code_id)
            localized_path = self.source_code_manager.get_localized_source_code_path(self.source_code_id)

            # Delete the contents of the localized source code path
            if os.path.exists(localized_path):
                shutil.rmtree(localized_path)
            os.makedirs(localized_path)

            # Copy contents from the original source code path to the localized path
            shutil.copytree(original_path, localized_path, dirs_exist_ok=True)
            print(f"Localization reset completed for source code ID: {self.source_code_id}")

        except (FilePermissionError, shutil.Error, FileNotFoundError) as e:
            raise LocalizationError(f"L10nManager Reset L10n Error: {str(e)}")

    def localize_source_code(self):
        """
        Localizes the source code based on its code type.
        """
        try:
            # Check source code status
            if self.source_code['status'] == "Localized":
                raise InvalidUserInputError(f"Source code ID: {self.source_code_id} has already been localized.")

            elif self.source_code['status'] == "Unlocalized":
                # Reset localization
                self.reset_l10n()

                # Determine the localizer based on code_type
                if self.code_type == "Web App":
                    localizer = WebAppBasedLocalizer()
                elif self.code_type == "Android App":
                    localizer = AndroidAppBasedLocalizer()
                elif self.code_type == "iOS App":
                    localizer = IOSAppBasedLocalizer()
                elif self.code_type == "Java App":
                    localizer = JavaAppBasedLocalizer()
                else:
                    raise InvalidUserInputError(f"L10nManager Error: Unsupported code_type '{self.code_type}' for localization.")

                # Call the appropriate localizer's process_l10n function
                localizer.process_l10n(self.source_code_id)

                # Update source code status to 'Localized'
                self.source_code_manager.update_source_code(self.source_code_id, {'status': 'Localized'})
                print(f"Localization completed for source code ID: {self.source_code_id}")

            else:
                raise InvalidUserInputError(f"L10nManager Error: Invalid status '{self.source_code['status']}' for source code ID: {self.source_code_id}")

        except (InvalidUserInputError, LocalizationError) as e:
            raise LocalizationError(f"L10nManager Localization Error: {str(e)}")

        except Exception as e:
            raise LocalizationError(f"L10nManager Unexpected Error: {str(e)}")
