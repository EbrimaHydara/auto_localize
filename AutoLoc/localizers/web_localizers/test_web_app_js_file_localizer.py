# test_web_app_js_file_localizer.py

import sys
import os

# # Add the parent directory to sys.path to find the 'managers' module
# current_dir = os.path.dirname(os.path.abspath(__file__))
# parent_dir = os.path.abspath(os.path.join(current_dir, '../../../'))
# sys.path.insert(0, parent_dir)

# Now import the necessary modules
from localizers.web_localizers.web_app_js_file_localizer import WebAppJSFileLocalizer
from managers.source_code_manager import SourceCodeManager
from managers.error_manager import LocalizationRenderError, ResourceFileError

# Sample source code ID for testing
source_code_id = 4  # Assume this is a valid source code ID

# Initialize SourceCodeManager to get localized files directory
source_code_manager = SourceCodeManager(source_code_id)

# Get the localized source code path
localized_files_path = source_code_manager.get_localized_source_code_path(source_code_id)

# Get all JS files from the localized files directory
js_files = []
for root, _, files in os.walk(localized_files_path):
    for file in files:
        if file.endswith(".js"):
            js_files.append(os.path.join(root, file))

if not js_files:
    print(f"No JS files found in the localized directory: {localized_files_path}")
else:
    # Create an instance of WebAppJSFileLocalizer with the JS files
    web_app_js_file_localizer = WebAppJSFileLocalizer(source_code_id, js_files)

    # Function to test _mark_and_extract_strings
    def test_mark_and_extract_strings():
        try:
            for js_file in js_files:
                with open(js_file, 'r', encoding='utf-8') as file:
                    content = file.read()
                web_app_js_file_localizer._mark_and_extract_strings(content, js_file)
            print("test_mark_and_extract_strings: Success")
        except ResourceFileError as e:
            print(f"test_mark_and_extract_strings: Failed with ResourceFileError: {str(e)}")
        except LocalizationRenderError as e:
            print(f"test_mark_and_extract_strings: Failed with LocalizationRenderError: {str(e)}")
        except Exception as e:
            print(f"test_mark_and_extract_strings: Failed with Exception: {str(e)}")

    # Function to test _save_js_file
    def test_save_js_file():
        try:
            for js_file in js_files:
                with open(js_file, 'r', encoding='utf-8') as file:
                    content = file.read()
                modified_content = content.replace("Hello, World!", "${translate('str_1')}")  # Example modification
                web_app_js_file_localizer._save_js_file(modified_content, js_file)
            print("test_save_js_file: Success")
        except ResourceFileError as e:
            print(f"test_save_js_file: Failed with ResourceFileError: {str(e)}")
        except Exception as e:
            print(f"test_save_js_file: Failed with Exception: {str(e)}")

    # Function to test localize_files
    def test_localize_files():
        try:
            web_app_js_file_localizer.localize_files()
            print("test_localize_files: Success")
        except LocalizationRenderError as e:
            print(f"test_localize_files: Failed with LocalizationRenderError: {str(e)}")
        except ResourceFileError as e:
            print(f"test_localize_files: Failed with ResourceFileError: {str(e)}")
        except Exception as e:
            print(f"test_localize_files: Failed with Exception: {str(e)}")

    # Run the tests
    print("Running tests for WebAppJSFileLocalizer...")
    test_mark_and_extract_strings()
    test_save_js_file()
    test_localize_files()
