# l10n_manager.py

import os
import shutil
from managers.source_code_manager import SourceCodeManager
from managers.setting_manager import SettingManager
from managers.error_manager import (
    InitializationError,
    InvalidUserInputError,
    LocalizationRenderError,
    ResourceFileError
)

# Import all the localizer classes
from localizers.web_localizers.web_app_html_file_localizer import WebAppHTMLFileLocalizer
from localizers.web_localizers.web_app_js_file_localizer import WebAppJSFileLocalizer
from localizers.web_localizers.web_app_ejs_file_localizer import WebAppEJSFileLocalizer
from localizers.web_localizers.web_app_jsx_file_localizer import WebAppJSXFileLocalizer
from localizers.web_localizers.web_app_ts_file_localizer import WebAppTSFileLocalizer
from localizers.web_localizers.web_app_tsx_file_localizer import WebAppTSXFileLocalizer
from localizers.web_localizers.web_app_vue_file_localizer import WebAppVUEFileLocalizer
from localizers.web_localizers.web_app_json_file_localizer import WebAppJSONFileLocalizer
from localizers.web_localizers.web_app_csv_file_localizer import WebAppCSVFileLocalizer

# from localizers.android_localizers.android_app_xml_file_localizer import AndroidAppXMLFileLocalizer
# from localizers.android_localizers.android_app_java_file_localizer import AndroidAppJavaFileLocalizer
# from localizers.android_localizers.android_app_kotlin_file_localizer import AndroidAppKotlinFileLocalizer

# from localizers.ios_localizers.ios_app_swift_file_localizer import IOSAppSwiftFileLocalizer
# from localizers.ios_localizers.ios_app_objc_m_file_localizer import IOSAppObjcMFileLocalizer
# from localizers.ios_localizers.ios_app_objc_h_file_localizer import IOSAppObjcHFileLocalizer
# from localizers.ios_localizers.ios_app_strings_file_localizer import IOSAppStringsFileLocalizer
# from localizers.ios_localizers.ios_app_storyboard_file_localizer import IOSAppStoryboardFileLocalizer
# from localizers.ios_localizers.ios_app_xib_file_localizer import IOSAppXIBFileLocalizer
# from localizers.ios_localizers.ios_app_plist_file_localizer import IOSAppPListFileLocalizer

# from localizers.java_localizers.java_app_xhtml_file_localizer import JavaAppXHTMLFileLocalizer
# from localizers.java_localizers.java_app_xml_file_localizer import JavaAppXMLFileLocalizer
# from localizers.java_localizers.java_app_java_file_localizer import JavaAppJavaFileLocalizer
# from localizers.java_localizers.java_app_properties_file_localizer import JavaAppPropertiesFileLocalizer


class L10nManager:
    """
    The L10nManager class handles all localization procedures of the AutoLoc app.
    It coordinates the localization of different source code files according to their types.
    """

    def __init__(self, source_code_id):
        try:
            # Initialize the source code manager
            self.source_code_manager = SourceCodeManager(source_code_id)
            self.source_code = self.source_code_manager.get_source_code(source_code_id)
            self.source_code_type = self.source_code['code_type']
            self.source_code_status = self.source_code['status']

            # Initialize the setting manager and get active file types
            self.setting_manager = SettingManager()
            self.active_file_types = self.get_active_file_types()

            # Validate source code type
            self.accepted_source_code_types = ["Web App", "Android App", "iOS App", "Java App"]
            if self.source_code_type not in self.accepted_source_code_types:
                raise InvalidUserInputError(f"L10nManager Initialization Error: Unsupported source code type '{self.source_code_type}'")

            # Get files based on active file types
            self.files = self.get_files()
        except (InitializationError, InvalidUserInputError) as e:
            raise InitializationError(f"L10nManager Initialization Error: {str(e)}")

    def get_active_file_types(self):
        """
        Retrieves and returns active file types for the current source code type.
        """
        try:
            file_types = self.setting_manager.get_file_types()
            return [ft['extension'] for ft in file_types if ft['is_active'] and ft['code_type'] == self.source_code_type]
        except Exception as e:
            raise InvalidUserInputError(f"L10nManager Error in get_active_file_types: {str(e)}")

    def get_files(self):
        """
        Retrieves files categorized by their extensions based on active file types.
        """
        files_dict = {}
        try:
            for extension in self.active_file_types:
                files_by_extension = self.get_files_by_extension(extension)
                if files_by_extension:
                    files_dict[extension] = files_by_extension
            return files_dict
        except Exception as e:
            raise InvalidUserInputError(f"L10nManager Error in get_files: {str(e)}")

    def get_files_by_extension(self, extension):
        """
        Retrieves files with the specified extension from the source code's localized path.
        Returns the full path of each file.
        """
        try:
            localized_path = self.source_code_manager.get_localized_source_code_path(self.source_code['id'])
            files = []
            for root, _, filenames in os.walk(localized_path):
                for filename in filenames:
                    if filename.endswith(extension):
                        # Append the full path of the file instead of the relative path
                        files.append(os.path.join(root, filename))
            return files
        except Exception as e:
            raise InvalidUserInputError(f"L10nManager Error in get_files_by_extension: {str(e)}")
            
    def localize_source_code(self):
        """
        Initiates the localization process based on the source code type.
        """
        try:
            # Check if the source code has already been localized
            if self.source_code_status == "Localized":
                raise LocalizationRenderError("L10nManager Error: The source code has already been localized!")

            if self.source_code_type == "Web App":
                self.localize_web_files()
            elif self.source_code_type == "Android App":
                self.localize_android_files()
            elif self.source_code_type == "iOS App":
                self.localize_ios_files()
            elif self.source_code_type == "Java App":
                self.localize_java_files()
            else:
                raise InvalidUserInputError(f"L10nManager Error in localize_source_code: Unsupported source code type '{self.source_code_type}'")
        except LocalizationRenderError as e:
            print(f"L10nManager Error in localize_source_code: {str(e)}")
            return  # Stop the localization process
        except Exception as e:
            raise LocalizationRenderError(f"L10nManager Error in localize_source_code: {str(e)}")

    def localize_web_files(self):
        """
        Localizes web app files using the respective localizer classes.
        """
        try:
            if not self.files:
                raise LocalizationRenderError("L10nManager Error in localize_web_files: No files found for localization.")

            # Map file extensions to their respective localizer classes
            localizer_classes = {
                '.html': WebAppHTMLFileLocalizer,
                '.js': WebAppJSFileLocalizer,
                '.ejs': WebAppEJSFileLocalizer,
                '.jsx': WebAppJSXFileLocalizer,
                '.ts': WebAppTSFileLocalizer,
                '.tsx': WebAppTSXFileLocalizer,
                '.vue': WebAppVUEFileLocalizer,
                '.json': WebAppJSONFileLocalizer,
                '.csv': WebAppCSVFileLocalizer,
            }

            for extension, files in self.files.items():
                if files and extension in localizer_classes:
                    localizer = localizer_classes[extension](self.source_code['id'], files)  # Pass source_code_id and files list
                    localizer.localize_files()  # Start the localizer

            self.source_code_manager.update_source_code(self.source_code['id'], {'status': 'Localized'})
        except Exception as e:
            raise LocalizationRenderError(f"L10nManager Error in localize_web_files: {str(e)}")

    def localize_android_files(self):
        """
        Localizes Android app files using the respective localizer classes.
        """
        try:
            if not self.files:
                raise LocalizationRenderError("L10nManager Error in localize_android_files: No files found for localization.")

            # localizer_classes = {
            #     '.xml': AndroidAppXMLFileLocalizer,
            #     '.java': AndroidAppJavaFileLocalizer,
            #     '.kt': AndroidAppKotlinFileLocalizer,
            # }

            # for extension, files in self.files.items():
            #     if files and extension in localizer_classes:
            #         localizer = localizer_classes[extension](self.source_code['id'], files)  # Pass source_code_id and files list
            #         localizer.localize_files()  # Start the localizer

            # self.source_code_manager.update_source_code(self.source_code['id'], {'status': 'Localized'})
        except Exception as e:
            raise LocalizationRenderError(f"L10nManager Error in localize_android_files: {str(e)}")

    def localize_ios_files(self):
        """
        Localizes iOS app files using the respective localizer classes.
        """
        try:
            if not self.files:
                raise LocalizationRenderError("L10nManager Error in localize_ios_files: No files found for localization.")

            # localizer_classes = {
            #     '.swift': IOSAppSwiftFileLocalizer,
            #     '.m': IOSAppObjcMFileLocalizer,
            #     '.h': IOSAppObjcHFileLocalizer,
            #     '.strings': IOSAppStringsFileLocalizer,
            #     '.storyboard': IOSAppStoryboardFileLocalizer,
            #     '.xib': IOSAppXIBFileLocalizer,
            #     '.plist': IOSAppPListFileLocalizer,
            # }

            # for extension, files in self.files.items():
            #     if files and extension in localizer_classes:
            #         localizer = localizer_classes[extension](self.source_code['id'], files)  # Pass source_code_id and files list
            #         localizer.localize_files()  # Start the localizer

            # self.source_code_manager.update_source_code(self.source_code['id'], {'status': 'Localized'})
        except Exception as e:
            raise LocalizationRenderError(f"L10nManager Error in localize_ios_files: {str(e)}")

    def localize_java_files(self):
        """
        Localizes Java app files using the respective localizer classes.
        """
        try:
            if not self.files:
                raise LocalizationRenderError("L10nManager Error in localize_java_files: No files found for localization.")

            # localizer_classes = {
            #     '.xhtml': JavaAppXHTMLFileLocalizer,
            #     '.xml': JavaAppXMLFileLocalizer,
            #     '.java': JavaAppJavaFileLocalizer,
            #     '.properties': JavaAppPropertiesFileLocalizer,
            # }

            # for extension, files in self.files.items():
            #     if files and extension in localizer_classes:
            #         localizer = localizer_classes[extension](self.source_code['id'], files)  # Pass source_code_id and files list
            #         localizer.localize_files()  # Start the localizer

            # self.source_code_manager.update_source_code(self.source_code['id'], {'status': 'Localized'})
        except Exception as e:
            raise LocalizationRenderError(f"L10nManager Error in localize_java_files: {str(e)}")

    def unlocalize_source_code(self):
        """
        Restores the original source code by deleting all localized files and copying the original files back.
        Updates the source code status to "Unlocalized".
        """
        try:
            # Get the paths for the localized and original source code from self.source_code
            localized_path = self.source_code['localized_source_code_path']
            original_path = self.source_code['original_source_code_path']

            # Delete all files in the localized source code path
            for root, _, files in os.walk(localized_path, topdown=False):
                for file in files:
                    os.remove(os.path.join(root, file))
            
            # Remove the directories after deleting the files
            for root, dirs, _ in os.walk(localized_path, topdown=False):
                for dir in dirs:
                    os.rmdir(os.path.join(root, dir))
            
            # Recursively copy all files from the original source code path to the localized path
            shutil.copytree(original_path, localized_path, dirs_exist_ok=True)

            # Update the source code status to "Unlocalized" using SourceCodeManager
            self.source_code_manager.update_source_code(self.source_code['id'], {'status': "Unlocalized"})

        except FileNotFoundError as e:
            raise ResourceFileError(f"File not found: {str(e)}")
        except PermissionError as e:
            raise ResourceFileError(f"Permission error: {str(e)}")
        except Exception as e:
            raise ResourceFileError(f"L10nManager Error in unlocalize_source_code: {str(e)}")


