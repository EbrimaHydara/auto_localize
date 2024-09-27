import os
import shutil
import sqlite3
from datetime import datetime
from managers.source_code_manager import SourceCodeManager
from managers.error_manager import (
    DatabaseError,
    InitializationError,
    InvalidUserInputError,
    FilePermissionError
)

# Sample data for testing
project_id = 3  # Assume this is a valid project ID
source_code_name = "Rakuten Mobile Source Code"
source_code_type = "Web App"
source_code_locale = "ja-JP"

# Create an instance of SourceCodeManager
source_code_manager = SourceCodeManager()

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
#     source_code_id = 2
#     source_code_manager.update_source_code_files(source_code_id, '../../../Sample Source Code')
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
