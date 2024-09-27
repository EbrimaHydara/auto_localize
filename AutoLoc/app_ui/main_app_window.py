# main_window.py

from PySide6.QtWidgets import QMainWindow, QVBoxLayout, QHBoxLayout, QWidget, QMessageBox
from PySide6.QtCore import Qt
from managers.app_manager import AppManager  # Importing the AppManager class
from app_ui.header_widget import HeaderWidget  # Importing HeaderWidget class
from app_ui.sidebar_widget import SideBarWidget  # Importing SideBarWidget class
from app_ui.footer_widget import FooterWidget  # Importing FooterWidget class

class MainAppWindow(QMainWindow):
    """
    Main window class for the AutoLoc app.
    Consolidates all other components and manages the main application layout.
    """

    def __init__(self):
        super().__init__()
        self.setWindowTitle("AutoLoc - Localization Automation Tool")
        
        # Initialize AppManager and handle startup procedures
        try:
            self.app_manager = self.initialize_app_manager()
            self.app_manager.initialize_app()
        except Exception as e:
            self.show_error_message("Startup Error", str(e))
            return

        # Set up the main layout
        self.main_layout = QVBoxLayout()
        
        # Header Layout and Widget
        self.header_layout = QHBoxLayout()
        self.header_widget = HeaderWidget()  # Instantiate the HeaderWidget
        self.header_layout.addWidget(self.header_widget)
        
        # Body Layout with Sidebar and Panel
        self.body_layout = QHBoxLayout()
        
        # Sidebar Layout and Widget
        self.side_bar_layout = QVBoxLayout()
        self.side_bar_widget = SideBarWidget()  # Instantiate the SideBarWidget
        self.side_bar_layout.addWidget(self.side_bar_widget)
        
        # Panel Layout for dynamic content
        self.panel_layout = QVBoxLayout()
        
        # Adding side bar and panel to the body layout
        self.body_layout.addLayout(self.side_bar_layout)
        self.body_layout.addLayout(self.panel_layout)

        # Footer Layout and Widget
        self.footer_layout = QHBoxLayout()
        self.footer_widget = FooterWidget()  # Instantiate the FooterWidget
        self.footer_layout.addWidget(self.footer_widget)
        
        # Adding header, body, and footer layouts to the main layout
        self.main_layout.addLayout(self.header_layout)
        self.main_layout.addLayout(self.body_layout)
        self.main_layout.addLayout(self.footer_layout)

        # Creating a central widget for the main layout
        central_widget = QWidget()
        central_widget.setLayout(self.main_layout)
        self.setCentralWidget(central_widget)
        
        # Additional setup like window size, styles, etc.
        self.resize(1024, 768)
        
    def initialize_app_manager(self):
        """
        Initializes the AppManager. This is where any setup or dependency injection can occur.
        """
        try:
            # Initialize AppManager
            app_manager = AppManager()
            return app_manager
        except Exception as e:
            raise Exception(f"MainAppWindow Error in initialize_app_manager: {str(e)}")
    
    def show_error_message(self, title, message):
        """
        Displays an error message using a QMessageBox.
        
        :param title: The title of the message box.
        :param message: The content of the error message.
        """
        QMessageBox.critical(self, title, message, QMessageBox.Ok)
