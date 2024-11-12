# web_app_csv_file_localizer.py

import csv
from localizers.web_localizers.web_app_file_localizer import WebAppFileLocalizer
from managers.error_manager import LocalizationRenderError, ResourceFileError

class WebAppCSVFileLocalizer(WebAppFileLocalizer):
    """
    The WebAppCSVFileLocalizer handles all CSV file-specific localization procedures.
    It inherits the WebAppFileLocalizer class and manages the localization process.
    """

    def __init__(self, source_code_id, files):
        super().__init__(source_code_id)
        self.files = files

    def localize_files(self):
        """
        Localizes all the CSV files in self.files by duplicating them for each target locale.
        """
        try:
            for csv_file in self.files:
                self._process_csv_file(csv_file)
            print("CSV files localization completed.")
        except Exception as e:
            raise LocalizationRenderError(f"WebAppCSVFileLocalizer Error in localize_files: {str(e)}")

    def _process_csv_file(self, csv_file):
        """
        Processes an individual CSV file by duplicating it for each target locale.

        :param csv_file: The path to the CSV file to process.
        """
        try:
            # Use the duplicate_as_resource_files function to replicate the CSV file
            self.duplicate_as_resource_files(csv_file)
        except Exception as e:
            raise ResourceFileError(f"WebAppCSVFileLocalizer Error in _process_csv_file: {str(e)}")

