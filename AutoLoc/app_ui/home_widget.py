from PySide6.QtWidgets import QWidget, QGridLayout, QPushButton, QMessageBox
from managers.setting_manager import SettingManager
from managers.project_manager import ProjectManager
from managers.source_code_manager import SourceCodeManager
from managers.error_manager import DatabaseError, InvalidUserInputError
from app_ui.header_widget import HeaderWidget
from app_ui.styles import Styles

class HomeWidget(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.init_ui()
        self.load_data()

    def init_ui(self):
        """Initialize the UI components and layout for the HomeWidget."""
        # Set up the layout for the home widget
        self.grid_layout = QGridLayout(self)
        self.grid_layout.setContentsMargins(20, 20, 20, 20)
        self.grid_layout.setSpacing(20)

        # Initialize manager classes
        self.setting_manager = SettingManager()
        self.project_manager = ProjectManager()
        self.source_code_manager = SourceCodeManager()

        # Set module label in HeaderWidget to "Home"
        self.header_widget = HeaderWidget()
        self.header_widget.set_module_label("Home")

        # Create buttons to display counts
        self.all_projects_button = QPushButton("All Projects\n(0)")
        self.completed_projects_button = QPushButton("Completed Projects\n(0)")
        self.pending_projects_button = QPushButton("Pending Projects\n(0)")
        self.all_source_codes_button = QPushButton("All Source Codes\n(0)")
        self.localized_source_codes_button = QPushButton("Localized Source Codes\n(0)")
        self.unlocalized_source_codes_button = QPushButton("Unlocalized Source Codes\n(0)")
        self.supported_file_types_button = QPushButton("Supported File Types\n(0)")
        self.supported_locales_button = QPushButton("Supported Locales\n(0)")

        # # Apply styles to buttons
        # self.apply_styling()

        # Add buttons to the grid layout
        self.grid_layout.addWidget(self.all_projects_button, 0, 0)
        self.grid_layout.addWidget(self.completed_projects_button, 0, 1)
        self.grid_layout.addWidget(self.pending_projects_button, 0, 2)
        self.grid_layout.addWidget(self.all_source_codes_button, 1, 0)
        self.grid_layout.addWidget(self.localized_source_codes_button, 1, 1)
        self.grid_layout.addWidget(self.unlocalized_source_codes_button, 1, 2)
        self.grid_layout.addWidget(self.supported_file_types_button, 2, 0)
        self.grid_layout.addWidget(self.supported_locales_button, 2, 1)

    def load_data(self):
        """Load data from the database and update button labels."""
        try:
            # Load projects data
            # Get all projects from the ProjectManager
            all_projects = self.project_manager.get_projects()

            # Use list comprehension to filter completed and pending projects
            completed_projects = [project for project in all_projects if project['status'] == "Completed"]
            pending_projects = [project for project in all_projects if project['status'] == "Pending"]

            # Update project buttons
            self.all_projects_button.setText(f"All Projects\n({len(all_projects)})")
            self.completed_projects_button.setText(f"Completed Projects\n({len(completed_projects)})")
            self.pending_projects_button.setText(f"Pending Projects\n({len(pending_projects)})")

            # Load all source codes from the SourceCodeManager
            all_source_codes = self.source_code_manager.get_source_codes()
            # Use list comprehensions to filter localized and unlocalized source codes
            localized_source_codes = [source_code for source_code in all_source_codes if source_code['status'] == "Localized"]
            unlocalized_source_codes = [source_code for source_code in all_source_codes if source_code['status'] == "Unlocalized"]

            # Update source code buttons
            self.all_source_codes_button.setText(f"All Source Codes\n({len(all_source_codes)})")
            self.localized_source_codes_button.setText(f"Localized Source Codes\n({len(localized_source_codes)})")
            self.unlocalized_source_codes_button.setText(f"Unlocalized Source Codes\n({len(unlocalized_source_codes)})")

            # Load supported file types and locales data
            supported_file_types = self.setting_manager.get_file_types()
            supported_locales = self.setting_manager.get_locales()

            # Update file types and locales buttons
            self.supported_file_types_button.setText(f"Supported File Types\n({len(supported_file_types)})")
            self.supported_locales_button.setText(f"Supported Locales\n({len(supported_locales)})")

        except (DatabaseError, InvalidUserInputError) as e:
            QMessageBox.critical(
                self,
                "Data Load Error - HomeWidget",
                f"An error occurred while loading data:\n{str(e)}",
                QMessageBox.Ok
            )

    def apply_styling(self):
        """Apply styling to the HomeWidget buttons from the Styles class."""
        self.setStyleSheet(Styles.home_widget_style())
        button_style = Styles.home_button_style()
        # Apply button styles
        self.all_projects_button.setStyleSheet(button_style)
        self.completed_projects_button.setStyleSheet(button_style)
        self.pending_projects_button.setStyleSheet(button_style)
        self.all_source_codes_button.setStyleSheet(button_style)
        self.localized_source_codes_button.setStyleSheet(button_style)
        self.unlocalized_source_codes_button.setStyleSheet(button_style)
        self.supported_file_types_button.setStyleSheet(button_style)
        self.supported_locales_button.setStyleSheet(button_style)
