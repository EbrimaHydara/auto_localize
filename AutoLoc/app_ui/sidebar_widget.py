from PySide6.QtWidgets import QWidget, QPushButton, QVBoxLayout, QMessageBox
from PySide6.QtCore import QSize
from app_ui.styles import Styles
from app_ui.panel_widget import PanelWidget

class SideBarWidget(QWidget):
    def __init__(self, panel_widget: PanelWidget, parent=None):
        super().__init__(parent)
        self.panel_widget = panel_widget  # Reference to the PanelWidget instance
        self.init_ui()

    def init_ui(self):
        """Initialize the UI components and layout for the SideBarWidget."""
        # Set fixed width for sidebar
        self.setFixedWidth(150)

        # Create main layout for the sidebar
        self.sidebar_widget_layout = QVBoxLayout(self)
        self.sidebar_widget_layout.setContentsMargins(0, 0, 0, 0)
        self.sidebar_widget_layout.setSpacing(20)  # Optional: Adjust spacing between buttons

        # Create and add buttons to the sidebar
        self.home_button = QPushButton("Home")
        self.projects_button = QPushButton("Projects")
        self.source_codes_button = QPushButton("Source Codes")
        self.locales_button = QPushButton("Locales")
        self.settings_button = QPushButton("Settings")
        self.exit_button = QPushButton("Exit")

        # Apply styles
        self.apply_styling()

        # Add buttons to the sidebar layout
        self.sidebar_widget_layout.addWidget(self.home_button)
        self.sidebar_widget_layout.addWidget(self.projects_button)
        self.sidebar_widget_layout.addWidget(self.source_codes_button)
        self.sidebar_widget_layout.addWidget(self.locales_button)
        self.sidebar_widget_layout.addWidget(self.settings_button)

        # Add a stretch to push the exit button to the bottom
        self.sidebar_widget_layout.addStretch(1)

        # Add exit button
        self.sidebar_widget_layout.addWidget(self.exit_button)

        # Connect button signals to slots for navigating the app
        self.connect_signals()

    def connect_signals(self):
        """Connect the sidebar buttons to their respective slots."""
        try:
            self.home_button.clicked.connect(lambda: self.panel_widget.set_current_index(0))
            self.projects_button.clicked.connect(lambda: self.panel_widget.set_current_index(1))
            self.source_codes_button.clicked.connect(lambda: self.panel_widget.set_current_index(2))
            self.locales_button.clicked.connect(lambda: self.panel_widget.set_current_index(3))
            self.settings_button.clicked.connect(lambda: self.panel_widget.set_current_index(4))
            self.exit_button.clicked.connect(self.close_app)
        except Exception as e:
            QMessageBox.critical(
                self,
                "Button Connection Error - SideBarWidget",
                f"An error occurred while connecting buttons:\n{str(e)}",
                QMessageBox.Ok
            )

    def apply_styling(self):
        """Apply styling to the SideBarWidget from the Styles class."""
        self.setStyleSheet(Styles.sidebar_widget_style())

    def close_app(self):
        """Close the application."""
        try:
            QMessageBox.information(
                self, "Exiting AutoLoc", "The application will now close.", QMessageBox.Ok
            )
            self.parentWidget().close()
        except Exception as e:
            QMessageBox.critical(
                self,
                "Exit Error - SideBarWidget",
                f"An error occurred while trying to close the app:\n{str(e)}",
                QMessageBox.Ok
            )
