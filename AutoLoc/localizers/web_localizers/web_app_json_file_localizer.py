# web_app_json_file_localizer.py

import json
from PySide6.QtCore import QThread, Signal
from localizers.web_localizers.web_app_file_localizer import WebAppFileLocalizer
from managers.error_manager import LocalizationRenderError, ResourceFileError, InvalidUserInputError

class WebAppJSONFileLocalizer(QThread, WebAppFileLocalizer):
    """
    The WebAppJSONFileLocalizer handles all JSON file-specific localization procedures.
    It inherits the WebAppFileLocalizer class and runs on its own PySide6 Thread.
    """

    localization_complete_signal = Signal(str, bool)

    def __init__(self, source_code_id, files):
        # Initialize QThread without arguments
        QThread.__init__(self) # as super().__init__(self)

        # Initialize WebAppFileLocalizer with the source_code_id argument
        WebAppFileLocalizer.__init__(self, source_code_id)
        
        self.files = files

    def run(self):
        """
        Executes the localization process in a separate thread.
        """
        try:
            self.localize_files()
        except Exception as e:
            self.localization_complete_signal.emit(f"WebAppJSONFileLocalizer Error: {str(e)}", False)

    def localize_files(self):
        """
        Duplicates all the JSON files in self.files for each target locale.
        """
        try:
            for json_file in self.files:
                self._process_json_file(json_file)
            self.localization_complete_signal.emit("Localization completed successfully.", True)
        except Exception as e:
            raise LocalizationRenderError(f"WebAppJSONFileLocalizer Error in localize_files: {str(e)}")

    def _process_json_file(self, json_file):
        """
        Processes an individual JSON file by duplicating it for each target locale.

        :param json_file: The path to the JSON file to process.
        """
        try:
            with open(json_file, 'r', encoding='utf-8') as file:
                content = json.load(file)

            # Save the content to the resource files for each locale
            self.save_resource_files(content, json_file)
        except Exception as e:
            raise ResourceFileError(f"WebAppJSONFileLocalizer Error in _process_json_file: {str(e)}")
