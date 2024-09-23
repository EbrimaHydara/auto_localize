# test_l10n_manager.py

import os
import sys

# Add project root directory to PYTHONPATH if not already present
project_root = os.path.abspath(os.path.dirname(__file__))
if project_root not in sys.path:
    sys.path.insert(0, project_root)

from managers.l10n_manager import L10nManager
from managers.error_manager import LocalizationRenderError

def main():
    try:
        # Initialize source code ID for testing
        source_code_id = 4
        
        # Initialize the L10nManager
        l10n_manager = L10nManager(source_code_id)

        # Run the localize_source_code method
        print("Testing localize_source_code method...")
        try:
            l10n_manager.localize_source_code()  # This should internally call localize_web_files()
            print("localize_source_code() completed successfully.")
        except LocalizationRenderError as e:
            print(f"localize_source_code() raised LocalizationRenderError: {str(e)}")
        
    except Exception as e:
        print(f"An error occurred during testing: {str(e)}")

if __name__ == "__main__":
    main()
