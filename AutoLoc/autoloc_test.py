# autoloc_test.py

import os
import sys

# Add project root directory to PYTHONPATH if not already present
project_root = os.path.abspath(os.path.dirname(__file__))
if project_root not in sys.path:
    sys.path.insert(0, project_root)

from managers.l10n_manager import L10nManager

def run_web_localization_test(source_code_id):
    """
    Tests the localization functionalities for all web file types (HTML, JS, VUE, etc.)
    using the specified source code ID. 
    It collects the files using the L10nManager's get_files_by_extension method and runs the localization process.
    
    :param source_code_id: The ID of the source code to test.
    """
    try:
        # Initialize L10nManager with the given source_code_id
        l10n_manager = L10nManager(source_code_id)

        # Retrieve all active files for localization (HTML, JS, VUE, etc.)
        files_dict = l10n_manager.get_files()

        # Check if there are any files to test
        if not files_dict:
            print("No web files found for localization testing.")
            return
        print(f"Files Dict: {files_dict}")

        # Output collected file count for each extension
        for extension, files in files_dict.items():
            print(f"Collected {len(files)} {extension.upper()} file(s) for testing.")

        # Run the localization process for all collected files
        l10n_manager.localize_web_files()

        print("Web localization test completed successfully.")

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
            run_web_localization_test(source_code_id)
        elif action == "2":
            run_unlocalization(source_code_id)
        else:
            print("Invalid action. Please choose either 1 or 2.")















# import shutil
# import sqlite3
# from datetime import datetime
# from managers.source_code_manager import SourceCodeManager
# from managers.error_manager import (
#     DatabaseError,
#     InitializationError,
#     InvalidUserInputError,
#     FilePermissionError
# )

# # Sample data for testing
# project_id = 3  # Assume this is a valid project ID
# source_code_name = "Rakuten Mobile Source Code"
# source_code_type = "Web App"
# source_code_locale = "ja-JP"

# # Create an instance of SourceCodeManager
# source_code_manager = SourceCodeManager()

# # 1. Test `_generate_unique_id` function
# try:
#     unique_id = source_code_manager._generate_unique_id(source_code_name)
#     assert isinstance(unique_id, str) and len(unique_id) > 0, f"Expected non-empty string, got {unique_id}"
#     print("Test _generate_unique_id: Passed")
# except Exception as e:
#     print(f"Test _generate_unique_id: Failed with Exception: {str(e)}")

# # 2. Test `add_source_code` function
# try:
#     new_source_code = source_code_manager.add_source_code(project_id, source_code_name, source_code_type, source_code_locale)
#     assert new_source_code['name'] == source_code_name, f"Expected '{source_code_name}', got {new_source_code['name']}"
#     assert new_source_code['code_type'] == source_code_type, f"Expected '{source_code_type}', got {new_source_code['code_type']}"
#     print("Test add_source_code: Passed")
# except DatabaseError as e:
#     print(f"Test add_source_code: Failed with DatabaseError: {str(e)}")
# except Exception as e:
#     print(f"Test add_source_code: Failed with Exception: {str(e)}")

# # 3. Test `get_source_codes` function
# try:
#     source_codes = source_code_manager.get_source_codes()
#     assert isinstance(source_codes, list), f"Expected list, got {type(source_codes)}"
#     print("Test get_source_codes: Passed")
# except DatabaseError as e:
#     print(f"Test get_source_codes: Failed with DatabaseError: {str(e)}")
# except Exception as e:
#     print(f"Test get_source_codes: Failed with Exception: {str(e)}")

# # 4. Test `get_source_code` function
# try:
#     source_code_id = new_source_code['id']
#     source_code = source_code_manager.get_source_code(source_code_id)
#     assert isinstance(source_code, sqlite3.Row), f"Expected sqlite3.Row, got {type(source_code)}"
#     assert source_code['id'] == source_code_id, f"Expected ID {source_code_id}, got {source_code['id']}"
#     print("Test get_source_code: Passed")
# except DatabaseError as e:
#     print(f"Test get_source_code: Failed with DatabaseError: {str(e)}")
# except Exception as e:
#     print(f"Test get_source_code: Failed with Exception: {str(e)}")

# # 5. Test `get_source_locale` function
# try:
#     source_code_id = 4
#     source_locale = source_code_manager.get_source_locale(source_code_id)
#     assert source_locale == source_code_locale, f"Expected '{source_code_locale}', got {source_locale}"
#     print("Test get_source_locale: Passed")
# except DatabaseError as e:
#     print(f"Test get_source_locale: Failed with DatabaseError: {str(e)}")
# except Exception as e:
#     print(f"Test get_source_locale: Failed with Exception: {str(e)}")

# # 6. Test `update_source_code` function
# try:
#     updated_data = {'name': 'Updated Source Code Name'}
#     updated_source_code = source_code_manager.update_source_code(source_code_id, updated_data)
#     assert updated_source_code['name'] == 'Updated Source Code Name', f"Expected 'Updated Source Code Name', got {updated_source_code['name']}"
#     print("Test update_source_code: Passed")
# except DatabaseError as e:
#     print(f"Test update_source_code: Failed with DatabaseError: {str(e)}")
# except Exception as e:
#     print(f"Test update_source_code: Failed with Exception: {str(e)}")

# # 7. Test `delete_source_code` function
# try:
#     source_code_id = 3
#     deleted_source_code = source_code_manager.delete_source_code(source_code_id)
#     assert deleted_source_code['id'] == source_code_id, f"Expected ID {source_code_id}, got {deleted_source_code['id']}"
#     print("Test delete_source_code: Passed")
# except DatabaseError as e:
#     print(f"Test delete_source_code: Failed with DatabaseError: {str(e)}")
# except Exception as e:
#     print(f"Test delete_source_code: Failed with Exception: {str(e)}")

# # 8. Test `add_source_code_files` function
# try:
#     source_code_id = 4
#     # os.makedirs('../../../Sample Source Code', exist_ok=True)
#     source_code_manager.add_source_code_files(source_code_id, '../Project_Files/RMI/Source_Code_Samples')
#     assert os.path.exists(source_code_manager.original_source_code_path), "Original source code path does not exist."
#     print("Test add_source_code_files: Passed")
# except (DatabaseError, FilePermissionError) as e:
#     print(f"Test add_source_code_files: Failed with Error: {str(e)}")
# except Exception as e:
#     print(f"Test add_source_code_files: Failed with Exception: {str(e)}")

# # 9. Test `update_source_code_files` function
# try:
#     source_code_id = 4
#     source_code_manager.update_source_code_files(source_code_id, '../../L10n_Test_Repo/RMI_Test_Files/src')
#     assert os.path.exists(source_code_manager.original_source_code_path), "Updated source code path does not exist."
#     print("Test update_source_code_files: Passed")
# except (DatabaseError, FilePermissionError) as e:
#     print(f"Test update_source_code_files: Failed with Error: {str(e)}")
# except Exception as e:
#     print(f"Test update_source_code_files: Failed with Exception: {str(e)}")

# # 10. Test `delete_source_code_files` function
# try:
#     source_code_id = 2
#     source_code_manager.delete_source_code_files(source_code_id)
#     assert not os.path.exists(source_code_manager.original_source_code_path), "Source code files were not deleted."
#     print("Test delete_source_code_files: Passed")
# except (DatabaseError, FilePermissionError) as e:
#     print(f"Test delete_source_code_files: Failed with Error: {str(e)}")
# except Exception as e:
#     print(f"Test delete_source_code_files: Failed with Exception: {str(e)}")

# # 11. Test `get_original_source_code_path` function
# try:
#     source_code_id = 2
#     original_path = source_code_manager.get_original_source_code_path(source_code_id)
#     assert isinstance(original_path, str) and len(original_path) > 0, f"Expected non-empty string, got {original_path}"
#     print("Test get_original_source_code_path: Passed")
# except DatabaseError as e:
#     print(f"Test get_original_source_code_path: Failed with DatabaseError: {str(e)}")
# except Exception as e:
#     print(f"Test get_original_source_code_path: Failed with Exception: {str(e)}")

# # 12. Test `get_localized_source_code_path` function
# try:
#     source_code_id = 2
#     localized_path = source_code_manager.get_localized_source_code_path(source_code_id)
#     assert isinstance(localized_path, str) and len(localized_path) > 0, f"Expected non-empty string, got {localized_path}"
#     print("Test get_localized_source_code_path: Passed")
# except DatabaseError as e:
#     print(f"Test get_localized_source_code_path: Failed with DatabaseError: {str(e)}")
# except Exception as e:
#     print(f"Test get_localized_source_code_path: Failed with Exception: {str(e)}")

# # 13. Test `export_files` function
# try:
#     source_code_id = 2
#     export_path = source_code_manager.export_files(source_code_id)
#     assert os.path.exists(export_path), "Exported zip file does not exist."
#     print("Test export_files: Passed")
# except (DatabaseError, FilePermissionError) as e:
#     print(f"Test export_files: Failed with Error: {str(e)}")
# except Exception as e:
#     print(f"Test export_files: Failed with Exception: {str(e)}")

# # Clean up test files and directories
# if os.path.exists('../../../Sample Source Code'):
#     shutil.rmtree('../../../Sample Source Code')
# if os.path.exists(source_code_manager.original_source_code_path):
#     shutil.rmtree(source_code_manager.original_source_code_path)
# if os.path.exists(source_code_manager.localized_source_code_path):
#     shutil.rmtree(source_code_manager.localized_source_code_path)
