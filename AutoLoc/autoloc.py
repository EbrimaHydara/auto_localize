# autoloc.py

import os
import sys

# Add project root directory to PYTHONPATH if not already present
project_root = os.path.abspath(os.path.dirname(__file__))
if project_root not in sys.path:
    sys.path.insert(0, project_root)

from managers.source_code_manager import SourceCodeManager
from managers.l10n_manager import L10nManager
from setup import setup_autoloc  # Import setup function to initialize project data

# Run setup
print("Automatic Localization - AutoLoc: Initializing...")
print("Please wait...")
setup_autoloc()
print("App configurations are successfully set.")

def run_web_localization(source_code_id):
    """
    Runs the localization process for all web file types (HTML, JS, VUE, etc.) 
    using the specified source code ID.
    
    :param source_code_id: The ID of the source code to localize.
    """
    try:
        # Initialize L10nManager with the given source_code_id
        l10n_manager = L10nManager(source_code_id)

        # Retrieve all active files for localization
        files_dict = l10n_manager.get_files()

        # Check if there are any files to localize
        if not files_dict:
            print("No web files found for localization.")
            return

        # Run the localization process
        print("Running localization procedure. Please wait...")
        l10n_manager.localize_web_files()
        print("The localization procedure has completed successfully!")

    except Exception as e:
        print(f"An error occurred during localization: {str(e)}")

def run_unlocalization(source_code_id):
    """
    Restores the original source code by removing localized files and copying back original files.
    
    :param source_code_id: The ID of the source code to unlocalize.
    """
    try:
        # Initialize L10nManager with the given source_code_id
        l10n_manager = L10nManager(source_code_id)

        # Run the unlocalization process
        print("Unlocalizing source code. Please wait...")
        l10n_manager.unlocalize_source_code()
        print("Unlocalization completed successfully. The source code has been restored to its original state.")

    except Exception as e:
        print(f"An error occurred during unlocalization: {str(e)}")

def export_source_code(source_code_id):
    """
    Exports the source code files to the Downloads directory.

    :param source_code_id: The ID of the source code to export.
    """

    try:
        # Initialize SourceCodeManager
        source_code_manager = SourceCodeManager()

        # Export the source code files
        print("Exporting the source code. Please wait...")
        source_code_manager.export_files(source_code_id)
        print("The source code has been successfully exported to the Downloads directory!")

    except Exception as e:
        print(f"An error occurred while exporting the source code: {str(e)}")


if __name__ == "__main__":
    # Initialize SourceCodeManager to retrieve all source codes
    source_code_manager = SourceCodeManager()
    all_source_codes = source_code_manager.get_source_codes()

    # Display source codes with ID and Name for selection
    if not all_source_codes:
        print("No source codes found. Please add a source code and try again.")
        sys.exit()

    print("Choose a source code by selecting an ID:")
    for source_code in all_source_codes:
        print(f"ID: {source_code['id']}, Name: {source_code['name']}")

    # User selects a source code
    try:
        selected_id = int(input("Enter the ID of the source code to select: "))
        source_code_id = next((sc['id'] for sc in all_source_codes if sc['id'] == selected_id), None)
        if source_code_id is None:
            raise ValueError("Invalid source code ID.")
    except ValueError as e:
        print(f"Error: {str(e)}. Please enter a valid ID.")
        sys.exit()

    # Choose an action
    action = input("Choose an action: (1) Localize source code, (2) Unlocalize source code, (3) Export source code: ")

    # Execute the selected action with the chosen source code ID
    if action == "1":
        run_web_localization(source_code_id)
    elif action == "2":
        run_unlocalization(source_code_id)
    elif action == "3":
        export_source_code(source_code_id)
    else:
        print("Invalid action. Please choose either 1, 2, or 3.")
