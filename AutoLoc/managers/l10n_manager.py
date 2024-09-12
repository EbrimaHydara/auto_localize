from .source_code_manager import SourceCodeManager  # Import SourceCodeManager from the same module
from localizers.web_localizers.web_app_based_localizer import WebAppBasedLocalizer 
from localizers.android_localizers.android_app_based_localizer import AndroidAppBasedLocalizer
from localizers.ios_localizers.ios_app_based_localizer import IOSAppBasedLocalizer
from localizers.java_localizers.java_app_based_localizer import JavaAppBasedLocalizer

class L10nManager(SourceCodeManager):
    """
    The L10nManager class handles all localization management procedures of the AutoLoc app.
    It inherits the SourceCodeManager class and extends its functionalities to perform localization tasks.
    """

    def __init__(self, project_id):
        super().__init__(project_id)  # Initialize the base class (SourceCodeManager)
    
    def reset_l10n(self):
        """
        Deletes all the contents of the localized_source_code_path and then copies all contents 
        from the original_source_code_path to the localized_source_code_path.
        :return: Success message or error message
        """
        try:
            # Delete contents of the localized directory
            if os.path.exists(self.localized_source_code_path):
                shutil.rmtree(self.localized_source_code_path)

            # Copy contents from the original source path to localized path
            shutil.copytree(self.original_source_code_path, self.localized_source_code_path)
            return "Localization reset successfully."
        except Exception as e:
            return f"L10nManager Reset Localization Error: {str(e)}"

    def localize_source_code(self):
        """
        Performs the localization process for the source code by calling the appropriate localizer class.
        :return: Success message or error message
        """
        try:
            # Reset localization before starting the localization process
            reset_result = self.reset_l10n()
            if "Error" in reset_result:
                return reset_result

            # Retrieve source code details to determine the type of localization
            source_codes = self.get_source_codes()
            for source_code in source_codes:
                code_type = source_code.get('code_type')

                if code_type == "Web App":
                    # Localize using WebAppBasedLocalizer
                    localizer = WebAppBasedLocalizer(self.localized_source_code_path)
                    result = localizer.process_l10n()
                elif code_type == "Android App":
                    # Localize using AndroidAppBasedLocalizer
                    localizer = AndroidAppBasedLocalizer(self.localized_source_code_path)
                    result = localizer.process_l10n()
                elif code_type == "iOS App":
                    # Localize using IOSAppBasedLocalizer
                    localizer = IOSAppBasedLocalizer(self.localized_source_code_path)
                    result = localizer.process_l10n()
                elif code_type == "Java App":
                    # Localize using JavaAppBasedLocalizer
                    localizer = JavaAppBasedLocalizer(self.localized_source_code_path)
                    result = localizer.process_l10n()
                else:
                    raise ValueError(f"Unsupported source code type: {code_type}")

                if "Error" in result:
                    return result

            return "Localization completed successfully."
        except Exception as e:
            return f"L10nManager Localize Source Code Error: {str(e)}"
