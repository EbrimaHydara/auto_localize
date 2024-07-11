from PySide6.QtWidgets import QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout, QLabel, QPushButton, QStackedWidget, QFrame
from PySide6.QtCore import Qt
from app_ui.settings_ui import SettingsUI
from app_ui.project_list_ui import ProjectListUI
from app_ui.project_ui import ProjectUI

class MainUI(QMainWindow):
    def __init__(self):
        """
        Initializes the MainUI class.
        """
        super().__init__()
        self.setWindowTitle("Auto Localization App")
        self.setGeometry(100, 100, 1200, 800)

        self.central_widget = QWidget()
        self.setCentralWidget(self.central_widget)

        self.main_layout = QHBoxLayout(self.central_widget)

        self.sidebar = self.create_sidebar()
        self.main_panel = self.create_main_panel()

        self.main_layout.addWidget(self.sidebar)
        self.main_layout.addWidget(self.main_panel)

    def create_sidebar(self):
        """
        Creates the sidebar layout.

        :return: The sidebar widget.
        """
        sidebar = QFrame()
        sidebar.setFrameShape(QFrame.StyledPanel)
        sidebar.setFixedWidth(200)

        sidebar_layout = QVBoxLayout(sidebar)
        sidebar_layout.setAlignment(Qt.AlignTop)

        logo_label = QLabel("App Logo")
        logo_label.setAlignment(Qt.AlignCenter)
        sidebar_layout.addWidget(logo_label)

        divider = QFrame()
        divider.setFrameShape(QFrame.HLine)
        sidebar_layout.addWidget(divider)

        self.project_button = QPushButton("Projects")
        self.project_button.clicked.connect(self.show_project_list)
        sidebar_layout.addWidget(self.project_button)

        self.settings_button = QPushButton("Settings")
        self.settings_button.clicked.connect(self.show_settings)
        sidebar_layout.addWidget(self.settings_button)

        return sidebar

    def create_main_panel(self):
        """
        Creates the main panel layout.

        :return: The main panel widget.
        """
        main_panel = QStackedWidget()

        self.settings_ui = SettingsUI()
        self.project_list_ui = ProjectListUI()
        self.project_ui = None  # To be created when a project is selected

        main_panel.addWidget(self.settings_ui)
        main_panel.addWidget(self.project_list_ui)

        self.main_panel_stack = main_panel
        return main_panel

    def show_project_list(self):
        """
        Displays the ProjectListUI in the main panel.
        """
        self.main_panel_stack.setCurrentWidget(self.project_list_ui)

    def show_settings(self):
        """
        Displays the SettingsUI in the main panel.
        """
        self.main_panel_stack.setCurrentWidget(self.settings_ui)

    def show_project_ui(self, project_id):
        """
        Displays the ProjectUI for the specified project.

        :param project_id: The ID of the project to display.
        """
        if self.project_ui is not None:
            self.main_panel_stack.removeWidget(self.project_ui)
            self.project_ui.deleteLater()

        self.project_ui = ProjectUI(project_id)
        self.main_panel_stack.addWidget(self.project_ui)
        self.main_panel_stack.setCurrentWidget(self.project_ui)
