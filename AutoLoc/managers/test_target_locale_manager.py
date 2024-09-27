import sqlite3
from managers.target_locale_manager import TargetLocaleManager
from managers.error_manager import (
    DatabaseError,
    LocaleManagementError,
    InitializationError
)

# Sample data for testing
source_code_id = 4  # Assume this is a valid source code ID
target_locale_name = "Korean (KR)"
target_locale_code = "ko-KR"

# Create an instance of TargetLocaleManager
target_locale_manager = TargetLocaleManager()

# # 1. Test `get_target_locales` function
# try:
#     target_locales = target_locale_manager.get_target_locales(source_code_id=source_code_id)
#     assert isinstance(target_locales, list), f"Expected list, got {type(target_locales)}"
#     print("Test get_target_locales: Passed")
# except LocaleManagementError as e:
#     print(f"Test get_target_locales: Failed with LocaleManagementError: {str(e)}")
# except Exception as e:
#     print(f"Test get_target_locales: Failed with Exception: {str(e)}")

# # 2. Test `add_target_locale` function
# try:
#     new_target_locale = target_locale_manager.add_target_locale(source_code_id, target_locale_name, target_locale_code)
#     assert new_target_locale['name'] == target_locale_name, f"Expected '{target_locale_name}', got {new_target_locale['name']}"
#     assert new_target_locale['code'] == target_locale_code, f"Expected '{target_locale_code}', got {new_target_locale['code']}"
#     print("Test add_target_locale: Passed")
# except LocaleManagementError as e:
#     print(f"Test add_target_locale: Failed with LocaleManagementError: {str(e)}")
# except Exception as e:
#     print(f"Test add_target_locale: Failed with Exception: {str(e)}")

# # 3. Test `get_target_locale` function
# try:
#     target_locale_id = 1
#     target_locale = target_locale_manager.get_target_locale(target_locale_id)
#     assert isinstance(target_locale, sqlite3.Row), f"Expected sqlite3.Row, got {type(target_locale)}"
#     assert target_locale['id'] == target_locale_id, f"Expected ID {target_locale_id}, got {target_locale['id']}"
#     print("Test get_target_locale: Passed")
# except LocaleManagementError as e:
#     print(f"Test get_target_locale: Failed with LocaleManagementError: {str(e)}")
# except Exception as e:
#     print(f"Test get_target_locale: Failed with Exception: {str(e)}")

# # 4. Test `update_target_locale` function
# try:
#     target_locale_id = 1
#     updated_data = {'name': 'Updated French', 'code': 'fr-CA'}
#     updated_target_locale = target_locale_manager.update_target_locale(target_locale_id, updated_data)
#     assert updated_target_locale['name'] == 'Updated French', f"Expected 'Updated French', got {updated_target_locale['name']}"
#     assert updated_target_locale['code'] == 'fr-CA', f"Expected 'fr-CA', got {updated_target_locale['code']}"
#     print("Test update_target_locale: Passed")
# except LocaleManagementError as e:
#     print(f"Test update_target_locale: Failed with LocaleManagementError: {str(e)}")
# except Exception as e:
#     print(f"Test update_target_locale: Failed with Exception: {str(e)}")

# # 5. Test `delete_target_locale` function
# try:
#     target_locale_id = 1
#     deleted_target_locale = target_locale_manager.delete_target_locale(target_locale_id)
#     assert deleted_target_locale['id'] == target_locale_id, f"Expected ID {target_locale_id}, got {deleted_target_locale['id']}"
#     print("Test delete_target_locale: Passed")
# except LocaleManagementError as e:
#     print(f"Test delete_target_locale: Failed with LocaleManagementError: {str(e)}")
# except Exception as e:
#     print(f"Test delete_target_locale: Failed with Exception: {str(e)}")

# # 6. Test `delete_target_locales` function
# try:
#     deleted_target_locales = target_locale_manager.delete_target_locales()
#     assert isinstance(deleted_target_locales, list), f"Expected list, got {type(deleted_target_locales)}"
#     print("Test delete_target_locales: Passed")
# except LocaleManagementError as e:
#     print(f"Test delete_target_locales: Failed with LocaleManagementError: {str(e)}")
# except Exception as e:
#     print(f"Test delete_target_locales: Failed with Exception: {str(e)}")

# # Clean-up actions if needed
# # Ensure all added/updated entries are deleted after tests to maintain test isolation
# try:
#     target_locale_manager.delete_target_locales()
#     print("Clean-up: All test target locales deleted.")
# except LocaleManagementError as e:
#     print(f"Clean-up: Failed to delete test target locales with LocaleManagementError: {str(e)}")
# except Exception as e:
#     print(f"Clean-up: Failed to delete test target locales with Exception: {str(e)}")
