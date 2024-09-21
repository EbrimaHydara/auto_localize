# web_app_csv_file_localizer.py

import csv
from PySide6.QtCore import QThread, Signal
from web_app_file_localizer import WebAppFileLocalizer
from error_manager import LocalizationRenderError, ResourceFileError, InvalidUserInputError

class WebAppCSVFileLocalizer(QThread, WebAppFileLocalizer):
    """
    The WebAppCSVFileLocalizer handles all CSV file-specific localization procedures.
    It inherits the WebAppFileLocalizer class and runs on its own PySide6 Thread.
    """

    localization_complete_signal = Signal(str, bool)

    def __init__(self, source_code_id, files):
        super().__init__(source_code_id)
        self.files = files

    def run(self):
        """
        Executes the localization process in a separate thread.
        """
        try:
            self.localize_files()
        except Exception as e:
            self.localization_complete_signal.emit(f"WebAppCSVFileLocalizer Error: {str(e)}", False)

    def localize_files(self):
        """
        Duplicates all the CSV files in self.files for each target locale.
        """
        try:
            for csv_file in self.files:
                self._process_csv_file(csv_file)
            self.localization_complete_signal.emit("Localization completed successfully.", True)
        except Exception as e:
            raise LocalizationRenderError(f"WebAppCSVFileLocalizer Error in localize_files: {str(e)}")

    def _process_csv_file(self, csv_file):
        """
        Processes an individual CSV file by duplicating it for each target locale.

        :param csv_file: The path to the CSV file to process.
        """
        try:
            with open(csv_file, 'r', encoding='utf-8') as file:
                reader = csv.reader(file)
                content = list(reader)

            # Save the content to the resource files for each locale
            self.save_resource_files(content, csv_file)
        except Exception as e:
            raise ResourceFileError(f"WebAppCSVFileLocalizer Error in _process_csv_file: {str(e)}")
