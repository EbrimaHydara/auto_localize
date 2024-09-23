# web_app_json_file_localizer.py

import json
from localizers.web_localizers.web_app_file_localizer import WebAppFileLocalizer
from managers.error_manager import LocalizationRenderError, ResourceFileError

class WebAppJSONFileLocalizer(WebAppFileLocalizer):
    """
    The WebAppJSONFileLocalizer handles all JSON file-specific localization procedures.
    It inherits the WebAppFileLocalizer class and manages the localization process.
    """

    def __init__(self, source_code_id, files):
        super().__init__(source_code_id)
        self.files = files

    def localize_files(self):
        """
        Localizes all the JSON files in self.files by duplicating them for each target locale.
        """
        try:
            for json_file in self.files:
                self._process_json_file(json_file)
            print("Localization completed successfully.")
        except Exception as e:
            raise LocalizationRenderError(f"WebAppJSONFileLocalizer Error in localize_files: {str(e)}")

    def _process_json_file(self, json_file):
        """
        Processes an individual JSON file by duplicating it for each target locale.

        :param json_file: The path to the JSON file to process.
        """
        try:
            # Use the duplicate_as_resource_files function to replicate the JSON file
            self.duplicate_as_resource_files(json_file)
        except Exception as e:
            raise ResourceFileError(f"WebAppJSONFileLocalizer Error in _process_json_file: {str(e)}")

