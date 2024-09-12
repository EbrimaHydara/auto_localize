import os
from app_manager import AppManager
from error_manager import (  # Import specific exceptions
    InitializationError,
    PermissionError,
    DatabaseError,
    FilePermissionError,
    DatabaseConnectionError,
)

def test_app_manager():
    print("Testing AppManager...")

    # Create an instance of AppManager
    try:
        app_manager = AppManager()
        print("AppManager initialized successfully.")
    except (InitializationError, PermissionError, DatabaseError, FilePermissionError, DatabaseConnectionError) as e:
        print(f"AppManager Initialization Error: {e}")
        return

    # Test get_user_data_directory method
    try:
        user_data_dir = app_manager.get_user_data_directory()
        print(f"User Data Directory: {user_data_dir}")
        if not user_data_dir:
            print("Error: Failed to retrieve user data directory.")
    except InitializationError as e:
        print(f"Get User Data Directory Error: {e}")

    # Test get_app_data_path method
    try:
        app_data_path = app_manager.get_app_data_path()
        print(f"App Data Path: {app_data_path}")
        if not os.path.exists(app_data_path):
            print("Error: App data path does not exist.")
    except Exception as e:
        print(f"Get App Data Path Error: {e}")

    # Test get_app_db_file_path method
    try:
        app_db_file_path = app_manager.get_app_db_file_path()
        print(f"App DB File Path: {app_db_file_path}")
        if not os.path.exists(app_db_file_path):
            print("Error: App DB file does not exist.")
    except Exception as e:
        print(f"Get App DB File Path Error: {e}")

    # Test permissions for app data directory
    try:
        if os.access(app_data_path, os.W_OK):
            print("App data path is writable.")
        else:
            print("Error: App data path is not writable.")
            app_manager.ensure_write_permissions(app_data_path)
            if os.access(app_data_path, os.W_OK):
                print("Permissions corrected: App data path is now writable.")
            else:
                print("Failed to set write permissions for app data path.")
    except FilePermissionError as e:
        print(f"Permission Test Error for App Data Path: {e}")

    # Test permissions for DB file
    try:
        if os.access(app_db_file_path, os.W_OK):
            print("Database file is writable.")
        else:
            print("Error: Database file is not writable.")
            app_manager.ensure_write_permissions(app_db_file_path)
            if os.access(app_db_file_path, os.W_OK):
                print("Permissions corrected: Database file is now writable.")
            else:
                print("Failed to set write permissions for database file.")
    except FilePermissionError as e:
        print(f"Permission Test Error for Database File: {e}")

    # Test initialize_app method
    try:
        app_manager.initialize_app()
        print("App initialized successfully.")
    except InitializationError as e:
        print(f"Initialization Error: {e}")

    # Test create_db_file method
    try:
        app_manager.create_db_file()
        if not os.path.exists(app_manager.get_app_db_file_path()):
            print("Error: Database file was not created successfully.")
        else:
            print("Database file created successfully.")
    except DatabaseConnectionError as e:
        print(f"Create DB File Error: {e}")

    print("AppManager tests completed.")

if __name__ == "__main__":
    test_app_manager()
