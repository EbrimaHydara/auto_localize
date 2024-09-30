# autoloc.py

import os
import sys

# Add project root directory to PYTHONPATH if not already present
project_root = os.path.abspath(os.path.dirname(__file__))
if project_root not in sys.path:
    sys.path.insert(0, project_root)

from PySide6.QtWidgets import QApplication, QMessageBox
from PySide6.QtGui import QIcon
from app_ui.main_app_window import MainAppWindow  # Importing MainAppWindow from the correct module

def main():
    """
    Entry point for the AutoLoc application.
    Initializes the QApplication and MainAppWindow, and starts the app.
    """
    # Create a QApplication instance
    app = QApplication(sys.argv)
    
    # Set the application icon (Replace 'path_to_icon' with the actual icon path)
    # app.setWindowIcon(QIcon('path_to_icon/autoloc_icon.png'))

    try:
        # Initialize and show the main application window
        main_window = MainAppWindow()
        main_window.show()
    except Exception as e:
        # Show a critical error message box if the main window fails to initialize
        QMessageBox.critical(None, "AutoLoc Error", f"An unexpected error occurred:\n{str(e)}", QMessageBox.Ok)
        sys.exit(1)

    # Execute the application's event loop
    sys.exit(app.exec())

if __name__ == "__main__":
    main()

