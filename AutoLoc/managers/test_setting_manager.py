from setting_manager import SettingManager
from error_manager import (
    InitializationError,
    DatabaseError,
    LocaleManagementError,
    FileTypeError
)

# Create an instance of SettingManager
setting_manager = SettingManager()

# 1. Test `update_app_settings` function
try:
    settings = {'dark_mode': True, 'duplicate_html': True, 'use_key_namespace': False}
    updated_settings = setting_manager.update_app_settings(settings)
    assert updated_settings['dark_mode'] is True, f"Expected True, got {updated_settings['dark_mode']}"
    assert updated_settings['duplicate_html'] is True, f"Expected True, got {updated_settings['duplicate_html']}"
    assert updated_settings['use_key_namespace'] is False, f"Expected False, got {updated_settings['use_key_namespace']}"
    print("Test update_app_settings: Passed")
except DatabaseError as e:
    print(f"Test update_app_settings: Failed with DatabaseError: {str(e)}")
except Exception as e:
    print(f"Test update_app_settings: Failed with Exception: {str(e)}")

# 2. Test `reset_db` function
try:
    result = setting_manager.reset_db()
    assert result is None, f"Unexpected result: {result}"
    print("Test reset_db: Passed")
except DatabaseError as e:
    print(f"Test reset_db: Failed with DatabaseError: {str(e)}")
except Exception as e:
    print(f"Test reset_db: Failed with Exception: {str(e)}")

# 3. Test `get_locales` function
try:
    locales = setting_manager.get_locales()
    assert isinstance(locales, list), f"Expected list, got {type(locales)}"
    print("Test get_locales: Passed")
except LocaleManagementError as e:
    print(f"Test get_locales: Failed with LocaleManagementError: {str(e)}")
except Exception as e:
    print(f"Test get_locales: Failed with Exception: {str(e)}")

# # 4. Test `get_locale` function
# try:
#     locale_id = 1  # Assume 1 is a valid ID
#     locale = setting_manager.get_locale(locale_id)
#     assert isinstance(locale, sqlite3.Row), f"Expected sqlite3.Row, got {type(locale)}"
#     assert locale['id'] == locale_id, f"Expected ID {locale_id}, got {locale['id']}"
#     print("Test get_locale: Passed")
# except LocaleManagementError as e:
#     print(f"Test get_locale: Failed with LocaleManagementError: {str(e)}")
# except Exception as e:
#     print(f"Test get_locale: Failed with Exception: {str(e)}")

# 5. Test `add_locale` function
try:
    new_locale = setting_manager.add_locale('Spanish', 'es-ES')
    assert new_locale['name'] == 'Spanish', f"Expected 'Spanish', got {new_locale['name']}"
    assert new_locale['code'] == 'es-ES', f"Expected 'es-ES', got {new_locale['code']}"
    print("Test add_locale: Passed")
except LocaleManagementError as e:
    print(f"Test add_locale: Failed with LocaleManagementError: {str(e)}")
except Exception as e:
    print(f"Test add_locale: Failed with Exception: {str(e)}")

# 6. Test `update_locale` function
try:
    locale_id = new_locale['id']
    updated_locale = setting_manager.update_locale(locale_id, {'name': 'French', 'code': 'fr-FR'})
    assert updated_locale['name'] == 'French', f"Expected 'French', got {updated_locale['name']}"
    assert updated_locale['code'] == 'fr-FR', f"Expected 'fr-FR', got {updated_locale['code']}"
    print("Test update_locale: Passed")
except LocaleManagementError as e:
    print(f"Test update_locale: Failed with LocaleManagementError: {str(e)}")
except Exception as e:
    print(f"Test update_locale: Failed with Exception: {str(e)}")

# 7. Test `delete_locale` function
try:
    deleted_locale = setting_manager.delete_locale(locale_id)
    assert deleted_locale['id'] == locale_id, f"Expected ID {locale_id}, got {deleted_locale['id']}"
    assert deleted_locale['name'] == 'French', f"Expected 'French', got {deleted_locale['name']}"
    print("Test delete_locale: Passed")
except LocaleManagementError as e:
    print(f"Test delete_locale: Failed with LocaleManagementError: {str(e)}")
except Exception as e:
    print(f"Test delete_locale: Failed with Exception: {str(e)}")

# 8. Test `delete_locales` function
try:
    deleted_locales = setting_manager.delete_locales()
    assert isinstance(deleted_locales, list), f"Expected list, got {type(deleted_locales)}"
    print("Test delete_locales: Passed")
except LocaleManagementError as e:
    print(f"Test delete_locales: Failed with LocaleManagementError: {str(e)}")
except Exception as e:
    print(f"Test delete_locales: Failed with Exception: {str(e)}")

# 9. Test `get_file_types` function
try:
    file_types = setting_manager.get_file_types()
    assert isinstance(file_types, list), f"Expected list, got {type(file_types)}"
    print("Test get_file_types: Passed")
except FileTypeError as e:
    print(f"Test get_file_types: Failed with FileTypeError: {str(e)}")
except Exception as e:
    print(f"Test get_file_types: Failed with Exception: {str(e)}")

# 10. Test `get_file_type` function
try:
    file_type_id = 1  # Assume 1 is a valid ID
    file_type = setting_manager.get_file_type(file_type_id)
    assert isinstance(file_type, sqlite3.Row), f"Expected sqlite3.Row, got {type(file_type)}"
    assert file_type['id'] == file_type_id, f"Expected ID {file_type_id}, got {file_type['id']}"
    print("Test get_file_type: Passed")
except FileTypeError as e:
    print(f"Test get_file_type: Failed with FileTypeError: {str(e)}")
except Exception as e:
    print(f"Test get_file_type: Failed with Exception: {str(e)}")

# 11. Test `add_file_type` function
try:
    new_file_type = setting_manager.add_file_type('Web App', 'CSS', '.css')
    assert new_file_type['name'] == 'CSS', f"Expected 'CSS', got {new_file_type['name']}"
    assert new_file_type['extension'] == '.css', f"Expected '.css', got {new_file_type['extension']}"
    print("Test add_file_type: Passed")
except FileTypeError as e:
    print(f"Test add_file_type: Failed with FileTypeError: {str(e)}")
except Exception as e:
    print(f"Test add_file_type: Failed with Exception: {str(e)}")

# 12. Test `update_file_type` function
try:
    file_type_id = new_file_type['id']
    updated_file_type = setting_manager.update_file_type(file_type_id, {'name': 'JavaScript', 'extension': '.js'})
    assert updated_file_type['name'] == 'JavaScript', f"Expected 'JavaScript', got {updated_file_type['name']}"
    assert updated_file_type['extension'] == '.js', f"Expected '.js', got {updated_file_type['extension']}"
    print("Test update_file_type: Passed")
except FileTypeError as e:
    print(f"Test update_file_type: Failed with FileTypeError: {str(e)}")
except Exception as e:
    print(f"Test update_file_type: Failed with Exception: {str(e)}")

# 13. Test `delete_file_type` function
try:
    deleted_file_type = setting_manager.delete_file_type(file_type_id)
    assert deleted_file_type['id'] == file_type_id, f"Expected ID {file_type_id}, got {deleted_file_type['id']}"
    assert deleted_file_type['name'] == 'JavaScript', f"Expected 'JavaScript', got {deleted_file_type['name']}"
    print("Test delete_file_type: Passed")
except FileTypeError as e:
    print(f"Test delete_file_type: Failed with FileTypeError: {str(e)}")
except Exception as e:
    print(f"Test delete_file_type: Failed with Exception: {str(e)}")

# 14. Test `delete_file_types` function
try:
    deleted_file_types = setting_manager.delete_file_types()
    assert isinstance(deleted_file_types, list), f"Expected list, got {type(deleted_file_types)}"
    print("Test delete_file_types: Passed")
except FileTypeError as e:
    print(f"Test delete_file_types: Failed with FileTypeError: {str(e)}")
except Exception as e:
    print(f"Test delete_file_types: Failed with Exception: {str(e)}")
