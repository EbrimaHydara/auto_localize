# Import necessary modules and classes
from PySide6.QtWidgets import QMainWindow, QWidget, QVBoxLayout, QHBoxLayout, QMessageBox
from PySide6.QtCore import Qt, QSize
from managers.app_manager import AppManager
from app_ui.styles import Styles
from app_ui.header_widget import HeaderWidget
from app_ui.sidebar_widget import SideBarWidget
from app_ui.panel_widget import PanelWidget
from app_ui.footer_widget import FooterWidget

class MainAppWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        # Set fixed size for the MainAppWindow
        self.setFixedSize(QSize(1024, 768))
        self.setWindowTitle("AutoLoc - Automatic Localization Tool")

        # Apply central styling
        self.apply_styling()

        # Initialize the main layout
        self.main_widget = QWidget(self)
        self.setCentralWidget(self.main_widget)
        self.main_layout = QVBoxLayout(self.main_widget)
        self.main_layout.setContentsMargins(0, 0, 0, 0)

        # Initialize layouts
        self.header_layout = QHBoxLayout()
        self.body_layout = QHBoxLayout()
        self.sidebar_layout = QVBoxLayout()
        self.panel_layout = QVBoxLayout()
        self.footer_layout = QHBoxLayout()

        # Add layouts to the main layout
        self.main_layout.addLayout(self.header_layout)
        self.main_layout.addLayout(self.body_layout)
        self.main_layout.addLayout(self.footer_layout)

        # Add sidebar and panel layouts to the body layout
        self.body_layout.addLayout(self.sidebar_layout)
        self.body_layout.addLayout(self.panel_layout)

        # Initialize AppManager and handle startup
        self.app_manager = AppManager()
        self.initialize_app()

        # Add Widgets to layouts
        self.add_widgets()

    def apply_styling(self):
        """Apply styling to the MainAppWindow from the Styles class."""
        self.setStyleSheet(Styles.main_window_style())

    def initialize_app(self):
        """Initialize app using the AppManager's startup procedures."""
        try:
            self.app_manager.initialize_app()
        except Exception as e:
            # Show error message box if initialization fails
            QMessageBox.critical(
                self, 
                "Initialization Error - MainAppWindow", 
                f"Failed to initialize app:\n{str(e)}", 
                QMessageBox.Ok
            )
            self.close()

    def add_widgets(self):
        """Add all widgets to their respective layouts."""
        try:
            # Header Widget
            self.header_widget = HeaderWidget()
            self.header_layout.addWidget(self.header_widget)

            # Panel Widget
            self.panel_widget = PanelWidget()
            self.panel_layout.addWidget(self.panel_widget)

            # # Sidebar Widget
            # self.sidebar_widget = SideBarWidget(panel_widget=self.panel_widget)
            # self.sidebar_layout.addWidget(self.sidebar_widget)

            # Footer Widget
            self.footer_widget = FooterWidget()
            self.footer_layout.addWidget(self.footer_widget)

        except Exception as e:
            QMessageBox.critical(
                self,
                "Widget Initialization Error - MainAppWindow",
                f"An error occurred while adding widgets:\n{str(e)}",
                QMessageBox.Ok
            )
            self.close()
