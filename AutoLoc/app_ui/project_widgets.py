from PySide6.QtWidgets import (
    QWidget, QVBoxLayout, QHBoxLayout, QStackedWidget, QTableWidget, QTableWidgetItem, QPushButton, QLabel, QLineEdit, QComboBox, QDateEdit, QMessageBox, QHeaderView, QDialog
)

from PySide6.QtCore import Qt
from PySide6.QtGui import QCursor

from managers.project_manager import ProjectManager
from app_ui.header_widget import HeaderWidget
from app_ui.styles import Styles

class ProjectsStackedWidget(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.init_ui()

    def init_ui(self):
        """Initialize the UI components and layout for the ProjectsStackedWidget."""
        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())

        # Create main layout for ProjectsStackedWidget
        self.main_layout = QVBoxLayout(self)
        self.main_layout.setContentsMargins(10, 10, 10, 10)
        self.main_layout.setSpacing(10)

        # Header widget
        self.header_widget = HeaderWidget()
        self.header_widget.set_module_label("Projects")

        # Add header widget to the main layout
        self.main_layout.addWidget(self.header_widget)

        # Create a horizontal layout for stack buttons
        self.stack_buttons_layout = QHBoxLayout()
        self.stack_buttons_layout.setSpacing(5)

        # Create QPushButtons for navigation
        self.projects_button = QPushButton("Projects")
        self.add_project_button = QPushButton("Add Project")

        # Add buttons to the stack_buttons_layout
        self.stack_buttons_layout.addWidget(self.projects_button)
        self.stack_buttons_layout.addWidget(self.add_project_button)

        # Add stack buttons layout to the main layout
        self.main_layout.addLayout(self.stack_buttons_layout)

        # Create QStackedWidget to hold different project-related widgets
        self.stack_layout = QVBoxLayout()
        self.stack_layout.setContentsMargins(0, 10, 0, 0)
        self.stacked_widget = QStackedWidget()

        # Create instances of the project-related widgets
        self.projects_widget = ProjectsWidget()
        self.add_project_widget = AddProjectWidget()

        # Add widgets to the QStackedWidget
        self.stacked_widget.addWidget(self.projects_widget)  # Index 0
        self.stacked_widget.addWidget(self.add_project_widget)  # Index 1

        # Set default widget (ProjectsWidget)
        self.stacked_widget.setCurrentWidget(self.projects_widget)

        # Add the stacked widget to the stack layout
        self.stack_layout.addWidget(self.stacked_widget)

        # Add stack layout to the main layout
        self.main_layout.addLayout(self.stack_layout)

        # Connect buttons to corresponding slots to switch stacked widgets
        self.connect_signals()

    def connect_signals(self):
        """Connect button signals to the appropriate slots."""
        try:
            self.projects_button.clicked.connect(lambda: self.stacked_widget.setCurrentIndex(0))
            self.add_project_button.clicked.connect(lambda: self.stacked_widget.setCurrentIndex(1))
        except Exception as e:
            QMessageBox.critical(
                self,
                "Button Connection Error - ProjectsStackedWidget",
                f"An error occurred while connecting buttons:\n{str(e)}",
                QMessageBox.Ok
            )






class ProjectsWidget(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.project_manager = ProjectManager()
        self.init_ui()
        self.load_projects()

    def init_ui(self):
        """Initialize the UI components and layout for the ProjectsWidget."""
        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())

        # Create main layout
        layout = QVBoxLayout(self)
        layout.setContentsMargins(10, 10, 10, 10)
        layout.setSpacing(15)

        # Page header
        header_label = QLabel("Projects")
        header_label.setStyleSheet("font-size: 18px; font-weight: bold;")
        layout.addWidget(header_label)

        # Table for projects
        self.projects_table = QTableWidget()
        self.projects_table.setColumnCount(6)  # 6 Columns: Name, Client, Status, Start Date, End Date
        self.projects_table.setHorizontalHeaderLabels(["Name", "Client", "Status", "Start Date", "End Date", "ID"])
        self.projects_table.horizontalHeader().setSectionResizeMode(0, QHeaderView.Stretch)
        self.projects_table.horizontalHeader().setSectionResizeMode(1, QHeaderView.Stretch)
        self.projects_table.horizontalHeader().setSectionResizeMode(2, QHeaderView.Stretch)
        self.projects_table.horizontalHeader().setSectionResizeMode(3, QHeaderView.Stretch)
        self.projects_table.horizontalHeader().setSectionResizeMode(4, QHeaderView.Stretch)
        self.projects_table.verticalHeader().setVisible(False)
        self.projects_table.setEditTriggers(QTableWidget.NoEditTriggers)  # Make the table read-only
        self.projects_table.setSelectionBehavior(QTableWidget.SelectRows)  # Select entire rows
        self.projects_table.setSelectionMode(QTableWidget.SingleSelection)  # Single selection mode
        self.projects_table.setColumnHidden(5, True)  # Hide the ID column

        # Add table to the layout
        layout.addWidget(self.projects_table)

        # Set layout
        self.setLayout(layout)

    def load_projects(self):
        """Load projects from the database and populate the table."""
        try:
            projects = self.project_manager.get_projects()
            self.projects_table.setRowCount(len(projects))
            for row, project in enumerate(projects):
                # Project ID (hidden column)
                id_item = QTableWidgetItem(str(project['id']))
                self.projects_table.setItem(row, 5, id_item)

                # Project Name (Clickable)
                name_item = QLabel(f"{project['name']}")
                name_item.setStyleSheet("color: blue; text-decoration: underline;")
                name_item.setCursor(QCursor(Qt.PointingHandCursor))
                name_item.mousePressEvent = lambda event, project_id=project['id']: self.open_project_widget_dialog(project_id)
                self.projects_table.setCellWidget(row, 0, name_item)

                # Project Client
                client_item = QTableWidgetItem(project['client'])
                client_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.projects_table.setItem(row, 1, client_item)

                # Project Status
                status_item = QTableWidgetItem(project['status'])
                status_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.projects_table.setItem(row, 2, status_item)

                # Project Start Date
                start_date_item = QTableWidgetItem(project['start_date'])
                start_date_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.projects_table.setItem(row, 3, start_date_item)

                # Project End Date
                end_date_item = QTableWidgetItem(project['end_date'])
                end_date_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.projects_table.setItem(row, 4, end_date_item)

        except DatabaseError as e:
            QMessageBox.critical(self, "Load Projects Error", f"An error occurred while loading projects:\n{str(e)}", QMessageBox.Ok)

    def open_project_widget_dialog(self, project_id):
        """Open the ProjectWidgetDialog for the given project ID."""
        try:
            # Implement ProjectWidgetDialog as needed
            dialog = ProjectWidgetDialog(project_id, self)
            dialog.exec_()
        except Exception as e:
            QMessageBox.critical(self, "Open Project Error", f"An error occurred while opening the project dialog:\n{str(e)}", QMessageBox.Ok)






class ProjectWidgetDialog(QDialog):
    def __init__(self, project_id, parent=None):
        super().__init__(parent)
        self.project_manager = ProjectManager()
        self.project_id = project_id
        self.project = None  # To hold the project data
        self.init_ui()
        self.load_project_data()

    def init_ui(self):
        """Initialize the UI components and layout for the ProjectWidgetDialog."""
        # Set dialog properties
        self.setWindowTitle("Project Details")
        self.setMinimumSize(500, 400)
        self.setStyleSheet(Styles.general_style())

        # Create main layout
        self.main_layout = QVBoxLayout(self)
        self.main_layout.setContentsMargins(10, 10, 10, 10)
        self.main_layout.setSpacing(15)

        # Header with project name
        self.project_name_label = QLabel("[Project Name]")  # Placeholder text
        self.project_name_label.setStyleSheet("font-size: 20px; font-weight: bold;")
        self.main_layout.addWidget(self.project_name_label)

        # Table to display project details
        self.project_table = QTableWidget()
        self.project_table.setColumnCount(2)  # 2 Columns: Label, Data
        self.project_table.setRowCount(9)  # 9 rows for project attributes
        self.project_table.setHorizontalHeaderLabels(["Attribute", "Value"])
        self.project_table.horizontalHeader().setSectionResizeMode(0, QHeaderView.Stretch)
        self.project_table.horizontalHeader().setSectionResizeMode(1, QHeaderView.Stretch)
        self.project_table.verticalHeader().setVisible(False)
        self.project_table.setEditTriggers(QTableWidget.NoEditTriggers)  # Make the table read-only
        self.project_table.setSelectionBehavior(QTableWidget.SelectRows)
        self.project_table.setSelectionMode(QTableWidget.NoSelection)
        self.main_layout.addWidget(self.project_table)

        # Action buttons layout
        self.button_layout = QHBoxLayout()
        self.button_layout.setSpacing(15)

        # Update project button
        self.update_project_button = QPushButton("Update")
        self.update_project_button.clicked.connect(self.update_project)
        self.button_layout.addWidget(self.update_project_button)

        # Delete project button
        self.delete_project_button = QPushButton("Delete")
        self.delete_project_button.clicked.connect(self.delete_project)
        self.button_layout.addWidget(self.delete_project_button)

        # Add button layout to main layout
        self.main_layout.addLayout(self.button_layout)

    def load_project_data(self):
        """Load project data from the database and populate the table."""
        try:
            self.project = self.project_manager.get_project(self.project_id)
            if self.project:
                # Update the project name label
                self.project_name_label.setText(self.project['name'])

                # Populate the table with project data
                self.project_table.setItem(0, 0, QTableWidgetItem("Name"))
                self.project_table.setItem(0, 1, QTableWidgetItem(self.project['name']))

                self.project_table.setItem(1, 0, QTableWidgetItem("Unique ID"))
                self.project_table.setItem(1, 1, QTableWidgetItem(self.project['unique_id']))

                self.project_table.setItem(2, 0, QTableWidgetItem("Client"))
                self.project_table.setItem(2, 1, QTableWidgetItem(self.project['client']))

                self.project_table.setItem(3, 0, QTableWidgetItem("Description"))
                self.project_table.setItem(3, 1, QTableWidgetItem(self.project['description']))

                self.project_table.setItem(4, 0, QTableWidgetItem("Status"))
                self.project_table.setItem(4, 1, QTableWidgetItem(self.project['status']))

                self.project_table.setItem(5, 0, QTableWidgetItem("Start Date"))
                self.project_table.setItem(5, 1, QTableWidgetItem(self.project['start_date']))

                self.project_table.setItem(6, 0, QTableWidgetItem("End Date"))
                self.project_table.setItem(6, 1, QTableWidgetItem(self.project['end_date']))

                self.project_table.setItem(7, 0, QTableWidgetItem("Last Updated Date"))
                self.project_table.setItem(7, 1, QTableWidgetItem(self.project['last_updated_date']))

                self.project_table.setItem(8, 0, QTableWidgetItem("Lead Engineer"))
                self.project_table.setItem(8, 1, QTableWidgetItem(self.project['lead_engineer']))

        except DatabaseError as e:
            QMessageBox.critical(self, "Load Project Error", f"An error occurred while loading the project:\n{str(e)}", QMessageBox.Ok)

    def update_project(self):
        """Handle the action to update the project."""
        try:
            # Implement the logic to open the UpdateProjectWidgetDialog with the current project ID
            dialog = UpdateProjectWidgetDialog(self.project_id, self)
            dialog.exec_()
            self.load_project_data()  # Reload the data to reflect updates
        except Exception as e:
            QMessageBox.critical(self, "Update Project Error", f"An error occurred while updating the project:\n{str(e)}", QMessageBox.Ok)

    def delete_project(self):
        """Handle the action to delete the project."""
        try:
            confirmation = QMessageBox.question(
                self, "Delete Project",
                f"Do you want to delete the project '{self.project['name']}'?",
                QMessageBox.Ok | QMessageBox.Cancel
            )
            if confirmation == QMessageBox.Ok:
                self.project_manager.delete_project(self.project_id)
                QMessageBox.information(self, "Project Deleted", f"Project '{self.project['name']}' has been successfully deleted.", QMessageBox.Ok)
                self.accept()  # Close the dialog
        except (DatabaseError, InvalidUserInputError) as e:
            QMessageBox.critical(self, "Delete Project Error", f"An error occurred while deleting the project:\n{str(e)}", QMessageBox.Ok)







class AddProjectWidget(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.project_manager = ProjectManager()
        self.init_ui()

    def init_ui(self):
        """Initialize the UI components and layout for the AddProjectWidget."""
        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())

        # Create main layout
        self.main_layout = QVBoxLayout(self)
        self.main_layout.setContentsMargins(10, 10, 10, 10)
        self.main_layout.setSpacing(15)

        # Page header
        header_label = QLabel("Add Project")
        header_label.setStyleSheet("font-size: 18px; font-weight: bold;")
        self.main_layout.addWidget(header_label)

        # Form layout for adding a new project
        self.form_layout = QVBoxLayout()
        self.form_layout.setSpacing(10)

        # Project Name
        self.name_label = QLabel("Name")
        self.name_input = QLineEdit()
        self.form_layout.addWidget(self.name_label)
        self.form_layout.addWidget(self.name_input)

        # Client
        self.client_label = QLabel("Client")
        self.client_input = QLineEdit()
        self.form_layout.addWidget(self.client_label)
        self.form_layout.addWidget(self.client_input)

        # Description
        self.description_label = QLabel("Description")
        self.description_input = QLineEdit()
        self.form_layout.addWidget(self.description_label)
        self.form_layout.addWidget(self.description_input)

        # Status (select field)
        self.status_label = QLabel("Status")
        self.status_input = QComboBox()
        self.status_input.addItems(["In Progress", "Completed"])
        self.form_layout.addWidget(self.status_label)
        self.form_layout.addWidget(self.status_input)

        # Start Date
        self.start_date_label = QLabel("Start Date")
        self.start_date_input = QDateEdit()
        self.start_date_input.setCalendarPopup(True)
        self.start_date_input.setDisplayFormat("yyyy-MM-dd")
        self.start_date_input.setDate(Qt.QDate.currentDate())
        self.form_layout.addWidget(self.start_date_label)
        self.form_layout.addWidget(self.start_date_input)

        # End Date
        self.end_date_label = QLabel("End Date")
        self.end_date_input = QDateEdit()
        self.end_date_input.setCalendarPopup(True)
        self.end_date_input.setDisplayFormat("yyyy-MM-dd")
        self.end_date_input.setDate(Qt.QDate.currentDate())
        self.form_layout.addWidget(self.end_date_label)
        self.form_layout.addWidget(self.end_date_input)

        # Lead Engineer
        self.lead_engineer_label = QLabel("Lead Engineer")
        self.lead_engineer_input = QLineEdit()
        self.form_layout.addWidget(self.lead_engineer_label)
        self.form_layout.addWidget(self.lead_engineer_input)

        # Add form layout to main layout
        self.main_layout.addLayout(self.form_layout)

        # Buttons layout
        self.buttons_layout = QHBoxLayout()
        self.buttons_layout.setSpacing(15)

        # Save button
        self.save_project_button = QPushButton("Save")
        self.save_project_button.clicked.connect(self.save_project)
        self.buttons_layout.addWidget(self.save_project_button)

        # Cancel button
        self.cancel_button = QPushButton("Cancel")
        self.cancel_button.clicked.connect(self.cancel_add_project)
        self.buttons_layout.addWidget(self.cancel_button)

        # Add buttons layout to main layout
        self.main_layout.addLayout(self.buttons_layout)

    def save_project(self):
        """Save the new project data to the database."""
        try:
            # Gather form data
            name = self.name_input.text().strip()
            client = self.client_input.text().strip()
            description = self.description_input.text().strip()
            status = self.status_input.currentText()
            start_date = self.start_date_input.text()
            end_date = self.end_date_input.text()
            lead_engineer = self.lead_engineer_input.text().strip()

            # Check for required fields
            if not name or not client or not description:
                QMessageBox.warning(self, "Input Error", "Please fill in all required fields: Name, Client, and Description.", QMessageBox.Ok)
                return

            # Save to database using ProjectManager
            self.project_manager.add_project(name, client, description, status, start_date, end_date, lead_engineer)

            # Show success message
            QMessageBox.information(self, "Project Added", f"Project '{name}' has been successfully added.", QMessageBox.Ok)

            # Navigate back to the ProjectsWidget (assuming parent is ProjectsStackedWidget)
            self.parent().stacked_widget.setCurrentIndex(0)

        except DatabaseError as e:
            QMessageBox.critical(self, "Save Project Error", f"An error occurred while saving the project:\n{str(e)}", QMessageBox.Ok)

    def cancel_add_project(self):
        """Cancel adding a project and navigate back to ProjectsWidget."""
        self.parent().stacked_widget.setCurrentIndex(0)  # Assuming parent is ProjectsStackedWidget





class UpdateProjectWidgetDialog(QDialog):
    def __init__(self, project_id, parent=None):
        super().__init__(parent)
        self.project_id = project_id
        self.project_manager = ProjectManager()
        self.init_ui()
        self.load_project_data()

    def init_ui(self):
        """Initialize the UI components and layout for the UpdateProjectWidgetDialog."""
        # Set general styling for this dialog
        self.setStyleSheet(Styles.general_style())
        self.setWindowTitle("Update Project")
        self.setModal(True)

        # Create main layout
        self.main_layout = QVBoxLayout(self)
        self.main_layout.setContentsMargins(10, 10, 10, 10)
        self.main_layout.setSpacing(15)

        # Page header with project name
        self.header_label = QLabel("Update [Project Name]")
        self.header_label.setStyleSheet("font-size: 18px; font-weight: bold;")
        self.main_layout.addWidget(self.header_label)

        # Form layout for updating project details
        self.form_layout = QVBoxLayout()
        self.form_layout.setSpacing(10)

        # Project Name
        self.name_label = QLabel("Name")
        self.name_input = QLineEdit()
        self.form_layout.addWidget(self.name_label)
        self.form_layout.addWidget(self.name_input)

        # Client
        self.client_label = QLabel("Client")
        self.client_input = QLineEdit()
        self.form_layout.addWidget(self.client_label)
        self.form_layout.addWidget(self.client_input)

        # Description
        self.description_label = QLabel("Description")
        self.description_input = QLineEdit()
        self.form_layout.addWidget(self.description_label)
        self.form_layout.addWidget(self.description_input)

        # Status (select field)
        self.status_label = QLabel("Status")
        self.status_input = QComboBox()
        self.status_input.addItems(["In Progress", "Completed"])
        self.form_layout.addWidget(self.status_label)
        self.form_layout.addWidget(self.status_input)

        # Start Date
        self.start_date_label = QLabel("Start Date")
        self.start_date_input = QDateEdit()
        self.start_date_input.setCalendarPopup(True)
        self.start_date_input.setDisplayFormat("yyyy-MM-dd")
        self.form_layout.addWidget(self.start_date_label)
        self.form_layout.addWidget(self.start_date_input)

        # End Date
        self.end_date_label = QLabel("End Date")
        self.end_date_input = QDateEdit()
        self.end_date_input.setCalendarPopup(True)
        self.end_date_input.setDisplayFormat("yyyy-MM-dd")
        self.form_layout.addWidget(self.end_date_label)
        self.form_layout.addWidget(self.end_date_input)

        # Lead Engineer
        self.lead_engineer_label = QLabel("Lead Engineer")
        self.lead_engineer_input = QLineEdit()
        self.form_layout.addWidget(self.lead_engineer_label)
        self.form_layout.addWidget(self.lead_engineer_input)

        # Add form layout to main layout
        self.main_layout.addLayout(self.form_layout)

        # Buttons layout
        self.buttons_layout = QHBoxLayout()
        self.buttons_layout.setSpacing(15)

        # Save button
        self.save_project_button = QPushButton("Save")
        self.save_project_button.clicked.connect(self.save_project)
        self.buttons_layout.addWidget(self.save_project_button)

        # Cancel button
        self.cancel_button = QPushButton("Cancel")
        self.cancel_button.clicked.connect(self.reject)  # Close the dialog
        self.buttons_layout.addWidget(self.cancel_button)

        # Add buttons layout to main layout
        self.main_layout.addLayout(self.buttons_layout)

    def load_project_data(self):
        """Load the project data for the given project_id and populate the fields."""
        try:
            project = self.project_manager.get_project(self.project_id)
            self.name_input.setText(project['name'])
            self.client_input.setText(project['client'])
            self.description_input.setText(project['description'])
            self.status_input.setCurrentText(project['status'])
            self.start_date_input.setDate(Qt.QDate.fromString(project['start_date'], "yyyy-MM-dd"))
            self.end_date_input.setDate(Qt.QDate.fromString(project['end_date'], "yyyy-MM-dd"))
            self.lead_engineer_input.setText(project['lead_engineer'])

            # Update header with project name
            self.header_label.setText(f"Update {project['name']}")
        except DatabaseError as e:
            QMessageBox.critical(self, "Load Project Error", f"An error occurred while loading the project:\n{str(e)}", QMessageBox.Ok)

    def save_project(self):
        """Save the updated project data to the database."""
        try:
            # Gather form data
            name = self.name_input.text().strip()
            client = self.client_input.text().strip()
            description = self.description_input.text().strip()
            status = self.status_input.currentText()
            start_date = self.start_date_input.text()
            end_date = self.end_date_input.text()
            lead_engineer = self.lead_engineer_input.text().strip()

            # Check for required fields
            if not name or not client or not description:
                QMessageBox.warning(self, "Input Error", "Please fill in all required fields: Name, Client, and Description.", QMessageBox.Ok)
                return

            # Update project in the database using ProjectManager
            self.project_manager.update_project(self.project_id, name, client, description, status, start_date, end_date, lead_engineer)

            # Show success message
            QMessageBox.information(self, "Project Updated", f"Project '{name}' has been successfully updated.", QMessageBox.Ok)
            self.accept()  # Close the dialog
        except DatabaseError as e:
            QMessageBox.critical(self, "Save Project Error", f"An error occurred while updating the project:\n{str(e)}", QMessageBox.Ok)

