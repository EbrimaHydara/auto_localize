# autoloc_test.py

import os
import sys

# Add project root directory to PYTHONPATH if not already present
project_root = os.path.abspath(os.path.dirname(__file__))
if project_root not in sys.path:
    sys.path.insert(0, project_root)


from managers.l10n_manager import L10nManager
from localizers.web_localizers.web_app_vue_file_localizer import WebAppVUEFileLocalizer

def run_vue_localization_test(source_code_id):
    """
    Tests the WebAppVUEFileLocalizer class functionalities using the specified source code ID.
    Collects VUE files using L10nManager's get_files_by_extension method and runs localization.
    
    :param source_code_id: The ID of the source code to test.
    """
    try:
        # Initialize L10nManager with the given source_code_id
        l10n_manager = L10nManager(source_code_id)

        # Collect VUE files using get_files_by_extension function
        vue_files = l10n_manager.get_files_by_extension('.vue')

        # Check if there are VUE files to test
        if not vue_files:
            print("No VUE files found for localization testing.")
            return

        print(f"Collected {len(vue_files)} VUE file(s) for testing.")

        # Initialize WebAppVUEFileLocalizer with collected VUE files
        vue_localizer = WebAppVUEFileLocalizer(source_code_id, vue_files)

        # Run the localization process
        vue_localizer.localize_files()

        print("Localization test completed successfully.")

    except Exception as e:
        print(f"An error occurred during the localization test: {str(e)}")

def run_unlocalization(source_code_id):
    """
    Runs the unlocalization process to restore the original source code.
    Allows repeated testing by undoing the localization.

    :param source_code_id: The ID of the source code to unlocalize.
    """
    try:
        # Initialize L10nManager with the given source_code_id
        l10n_manager = L10nManager(source_code_id)

        # Run the unlocalization process
        l10n_manager.unlocalize_source_code()

        print("Unlocalization completed successfully. The source code has been restored to its original state.")

    except Exception as e:
        print(f"An error occurred during the unlocalization process: {str(e)}")


if __name__ == "__main__":
    # Set the source_code_id for testing (replace with actual ID)
    source_code_id = 4  # Replace with the actual source_code_id you want to test

    # Choose an action
    action = input("Choose an action: (1) Run Localization Test (2) Run Unlocalization: ")

    # Check if the source code ID is valid
    if not source_code_id or source_code_id <= 0:
        print("Please provide a valid source_code_id for testing.")
    else:
        if action == "1":
            run_vue_localization_test(source_code_id)
        elif action == "2":
            run_unlocalization(source_code_id)
        else:
            print("Invalid action. Please choose either 1 or 2.")
