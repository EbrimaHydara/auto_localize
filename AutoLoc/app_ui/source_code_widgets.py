from PySide6.QtWidgets import (
    QWidget, QVBoxLayout, QLabel, QStackedWidget, QTableWidget, QTableWidgetItem, QHeaderView, QHBoxLayout, QFormLayout,
    QPushButton, QDialog, QMessageBox, QComboBox, QLineEdit, QTextEdit, QCheckBox, QFileDialog, QProgressDialog
)

from PySide6.QtCore import Qt, QThread, Signal
from PySide6.QtGui import QCursor

from managers.project_manager import ProjectManager
from managers.source_code_manager import SourceCodeManager
from managers.l10n_manager import L10nManager
from managers.target_locale_manager import TargetLocaleManager
from app_ui.header_widget import HeaderWidget
from app_ui.styles import Styles


class SourceCodesStackedWidget(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.init_ui()

    def init_ui(self):
        """Initialize the UI components and layout for the SourceCodesStackedWidget."""
        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())

        # Create main layout for SourceCodesStackedWidget
        self.main_layout = QVBoxLayout(self)
        self.main_layout.setContentsMargins(10, 10, 10, 10)
        self.main_layout.setSpacing(10)

        # Header widget
        self.header_widget = HeaderWidget()
        self.header_widget.set_module_label("Source Codes")

        # Add header widget to the main layout
        self.main_layout.addWidget(self.header_widget)

        # Create a horizontal layout for stack buttons
        self.stack_buttons_layout = QHBoxLayout()
        self.stack_buttons_layout.setSpacing(5)

        # Create QPushButtons for navigation
        self.source_codes_button = QPushButton("Source Codes")
        self.add_source_code_button = QPushButton("Add Source Code")

        # Add buttons to the stack_buttons_layout
        self.stack_buttons_layout.addWidget(self.source_codes_button)
        self.stack_buttons_layout.addWidget(self.add_source_code_button)

        # Add stack buttons layout to the main layout
        self.main_layout.addLayout(self.stack_buttons_layout)

        # Create QStackedWidget to hold different source code widgets
        self.stack_layout = QVBoxLayout()
        self.stack_layout.setContentsMargins(0, 10, 0, 0)
        self.stacked_widget = QStackedWidget()

        # Create instances of the source code related widgets
        self.source_codes_widget = SourceCodesWidget()
        self.add_source_code_widget = AddSourceCodeWidget()

        # Add widgets to the QStackedWidget
        self.stacked_widget.addWidget(self.source_codes_widget)  # Index 0
        self.stacked_widget.addWidget(self.add_source_code_widget)  # Index 1

        # Set default widget (SourceCodesWidget)
        self.stacked_widget.setCurrentWidget(self.source_codes_widget)

        # Add the stacked widget to the stack layout
        self.stack_layout.addWidget(self.stacked_widget)

        # Add stack layout to the main layout
        self.main_layout.addLayout(self.stack_layout)

        # Connect buttons to corresponding slots to switch stacked widgets
        self.connect_signals()

    def connect_signals(self):
        """Connect button signals to the appropriate slots."""
        try:
            self.source_codes_button.clicked.connect(lambda: self.stacked_widget.setCurrentIndex(0))
            self.add_source_code_button.clicked.connect(lambda: self.stacked_widget.setCurrentIndex(1))
        except Exception as e:
            QMessageBox.critical(
                self,
                "Button Connection Error - SourceCodesStackedWidget",
                f"An error occurred while connecting buttons:\n{str(e)}",
                QMessageBox.Ok
            )






class SourceCodesWidget(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.source_code_manager = SourceCodeManager()
        self.project_manager = ProjectManager()
        self.target_locale_manager = TargetLocaleManager()
        self.init_ui()
        self.load_source_codes()

    def init_ui(self):
        """Initialize the UI components and layout for the SourceCodesWidget."""
        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())

        # Create main layout
        layout = QVBoxLayout(self)
        layout.setContentsMargins(10, 10, 10, 10)
        layout.setSpacing(15)

        # Page header
        header_label = QLabel("Source Codes")
        header_label.setStyleSheet("font-size: 18px; font-weight: bold;")
        layout.addWidget(header_label)

        # Table for source codes
        self.source_codes_table = QTableWidget()
        self.source_codes_table.setColumnCount(7)  # 7 Columns: Project, ID (hidden), Name, Type, Source Locale, Target Locales, Status
        self.source_codes_table.setHorizontalHeaderLabels(["Project", "ID", "Name", "Type", "Source Locale", "Target Locales", "Status"])
        self.source_codes_table.setColumnHidden(1, True)  # Hide the ID column
        self.source_codes_table.horizontalHeader().setSectionResizeMode(0, QHeaderView.Stretch)
        self.source_codes_table.horizontalHeader().setSectionResizeMode(2, QHeaderView.Stretch)
        self.source_codes_table.horizontalHeader().setSectionResizeMode(3, QHeaderView.Stretch)
        self.source_codes_table.horizontalHeader().setSectionResizeMode(4, QHeaderView.Stretch)
        self.source_codes_table.horizontalHeader().setSectionResizeMode(5, QHeaderView.Stretch)
        self.source_codes_table.horizontalHeader().setSectionResizeMode(6, QHeaderView.Stretch)
        self.source_codes_table.verticalHeader().setVisible(False)
        layout.addWidget(self.source_codes_table)

        # Set layout
        self.setLayout(layout)

    def load_source_codes(self):
        """Load source codes from the database and populate the table."""
        try:

            # Get all source codes
            source_codes = self.source_code_manager.get_source_codes()
            self.source_codes_table.setRowCount(len(source_codes))

            for row, source_code in enumerate(source_codes):
                # Get project name using ProjectManager
                project_name = self.project_manager.get_project(source_code['project_id'])['name']

                # Get target locales using TargetLocaleManager
                target_locales = self.target_locale_manager.get_target_locales({'source_code_id': source_code['id']})
                target_locales_str = ', '.join([locale['code'] for locale in target_locales])

                # Project Name
                project_item = QTableWidgetItem(project_name)
                project_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.source_codes_table.setItem(row, 0, project_item)

                # Source Code ID (hidden)
                id_item = QTableWidgetItem(str(source_code['id']))
                id_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.source_codes_table.setItem(row, 1, id_item)

                # Source Code Name (as clickable link)
                name_item = QTableWidgetItem(source_code['name'])
                name_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                name_item.setForeground(Qt.blue)
                name_item.setCursor(QCursor(Qt.PointingHandCursor))
                self.source_codes_table.setItem(row, 2, name_item)

                # Connect click event to open SourceCodeWidgetDialog
                self.source_codes_table.cellClicked.connect(self.open_source_code_dialog)

                # Source Code Type
                type_item = QTableWidgetItem(source_code['code_type'])
                type_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.source_codes_table.setItem(row, 3, type_item)

                # Source Locale
                source_locale_item = QTableWidgetItem(source_code['source_locale'])
                source_locale_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.source_codes_table.setItem(row, 4, source_locale_item)

                # Target Locales (comma-separated)
                target_locales_item = QTableWidgetItem(target_locales_str)
                target_locales_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.source_codes_table.setItem(row, 5, target_locales_item)

                # Status
                status_item = QTableWidgetItem(source_code['status'])
                status_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.source_codes_table.setItem(row, 6, status_item)

        except Exception as e:
            QMessageBox.critical(self, "Load Source Codes Error", f"An error occurred while loading source codes:\n{str(e)}", QMessageBox.Ok)


    def open_source_code_dialog(self, row, column):
        """Open the SourceCodeWidgetDialog for the clicked source code name."""
        if column == 2:  # If the clicked cell is in the Name column
            try:
                source_code_id = int(self.source_codes_table.item(row, 1).text())  # Get the source_code_id from the hidden ID column
                dialog = SourceCodeWidgetDialog(source_code_id, self)
                dialog.exec_()  # Open the dialog in a modal way
            except Exception as e:
                QMessageBox.critical(self, "Error", f"An error occurred while opening the Source Code dialog:\n{str(e)}", QMessageBox.Ok)






class AddSourceCodeWidget(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.project_manager = ProjectManager()
        self.source_code_manager = SourceCodeManager()
        self.init_ui()

    def init_ui(self):
        """Initialize the UI components and layout for the AddSourceCodeWidget."""
        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())

        # Create main layout
        self.layout = QVBoxLayout(self)
        self.layout.setContentsMargins(10, 10, 10, 10)
        self.layout.setSpacing(15)

        # Page header
        header_label = QLabel("Add Source Code")
        header_label.setStyleSheet("font-size: 18px; font-weight: bold;")
        self.layout.addWidget(header_label)

        # Form layout
        form_layout = QFormLayout()

        # Project selection
        self.project_combo = QComboBox()
        self.load_projects()
        form_layout.addRow(QLabel("Project:"), self.project_combo)

        # Source code name input
        self.name_input = QLineEdit()
        form_layout.addRow(QLabel("Name:"), self.name_input)

        # Code type selection
        self.code_type_combo = QComboBox()
        self.code_type_combo.addItems(["Web App", "Android App", "iOS App", "Java App"])
        form_layout.addRow(QLabel("Code Type:"), self.code_type_combo)

        # Source locale selection
        self.source_locale_combo = QComboBox()
        self.source_locale_combo.addItem("ja-JP")  # Only value available for now
        form_layout.addRow(QLabel("Source Locale:"), self.source_locale_combo)

        # Notes input
        self.notes_input = QTextEdit()
        form_layout.addRow(QLabel("Notes:"), self.notes_input)

        # Add form layout to main layout
        self.layout.addLayout(form_layout)

        # Button layout
        button_layout = QHBoxLayout()
        self.save_button = QPushButton("Save")
        self.save_button.clicked.connect(self.save_source_code)
        self.cancel_button = QPushButton("Cancel")
        self.cancel_button.clicked.connect(self.cancel_add)
        button_layout.addWidget(self.save_button)
        button_layout.addWidget(self.cancel_button)

        # Add button layout to main layout
        self.layout.addLayout(button_layout)

    def load_projects(self):
        """Load projects into the project combo box."""
        try:
            projects = self.project_manager.get_projects()
            for project in projects:
                self.project_combo.addItem(project['name'], project['id'])
        except Exception as e:
            QMessageBox.critical(
                self,
                "Load Projects Error",
                f"An error occurred while loading projects:\n{str(e)}",
                QMessageBox.Ok
            )

    def save_source_code(self):
        """Save the source code data to the database."""
        project_id = self.project_combo.currentData()
        name = self.name_input.text()
        code_type = self.code_type_combo.currentText()
        source_locale = self.source_locale_combo.currentText()
        notes = self.notes_input.toPlainText()

        if not name.strip():
            QMessageBox.warning(self, "Validation Error", "Please enter a name for the source code.", QMessageBox.Ok)
            return

        try:
            self.source_code_manager.add_source_code(
                project_id, name, code_type, source_locale, notes
            )
            QMessageBox.information(self, "Success", "Source code added successfully.", QMessageBox.Ok)
            # Switch to SourceCodesWidget after adding source code
            self.parentWidget().setCurrentIndex(0)  # Assuming the parent is SourceCodesStackedWidget
        except Exception as e:
            QMessageBox.critical(
                self,
                "Save Source Code Error",
                f"An error occurred while saving the source code:\n{str(e)}",
                QMessageBox.Ok
            )

    def cancel_add(self):
        """Cancel the addition and switch back to SourceCodesWidget."""
        self.parentWidget().setCurrentIndex(0)  # Assuming the parent is SourceCodesStackedWidget







class SourceCodeWidgetDialog(QDialog):
    def __init__(self, source_code_id, parent=None):
        super().__init__(parent)
        self.source_code_id = source_code_id
        self.source_code_manager = SourceCodeManager()
        self.l10n_manager = L10nManager()
        self.project_manager = ProjectManager()
        self.target_locale_manager = TargetLocaleManager()

        self.init_ui()
        self.load_source_code_data()

    def init_ui(self):
        """Initialize the UI components and layout for the SourceCodeWidgetDialog."""
        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())

        # Create main layout
        layout = QVBoxLayout(self)
        layout.setContentsMargins(10, 10, 10, 10)
        layout.setSpacing(15)

        # Page header
        self.header_label = QLabel("[Source Code Name]")
        self.header_label.setStyleSheet("font-size: 18px; font-weight: bold;")
        layout.addWidget(self.header_label)

        # Table for source code details
        self.source_code_table = QTableWidget()
        self.source_code_table.setColumnCount(2)  # 2 Columns: Attribute, Value
        self.source_code_table.setHorizontalHeaderLabels(["Attribute", "Value"])
        self.source_code_table.horizontalHeader().setSectionResizeMode(0, QHeaderView.Stretch)
        self.source_code_table.horizontalHeader().setSectionResizeMode(1, QHeaderView.Stretch)
        self.source_code_table.verticalHeader().setVisible(False)
        layout.addWidget(self.source_code_table)

        # Buttons layout for source code actions
        buttons_layout = QHBoxLayout()
        buttons_layout.setSpacing(10)

        # Update Button
        self.update_source_code_button = QPushButton("Update")
        self.update_source_code_button.clicked.connect(self.open_update_dialog)
        buttons_layout.addWidget(self.update_source_code_button)

        # Set Target Locales Button
        self.set_target_locales_button = QPushButton("Set Target Locales")
        self.set_target_locales_button.clicked.connect(self.open_set_target_locales_dialog)
        buttons_layout.addWidget(self.set_target_locales_button)

        # Localize/Unlocalize Button
        self.localize_source_code_button = QPushButton("Localize")
        self.localize_source_code_button.clicked.connect(self.localize_source_code)

        self.unlocalize_source_code_button = QPushButton("Unlocalize")
        self.unlocalize_source_code_button.clicked.connect(self.unlocalize_source_code)
        buttons_layout.addWidget(self.localize_source_code_button)
        buttons_layout.addWidget(self.unlocalize_source_code_button)

        # Delete Button
        self.delete_source_code_button = QPushButton("Delete")
        self.delete_source_code_button.clicked.connect(self.delete_source_code)
        buttons_layout.addWidget(self.delete_source_code_button)

        layout.addLayout(buttons_layout)

        # Buttons layout for file actions
        file_buttons_layout = QHBoxLayout()
        file_buttons_layout.setSpacing(10)

        # Add Files Button
        self.add_source_code_files_button = QPushButton("Add Files")
        self.add_source_code_files_button.clicked.connect(self.add_files)
        file_buttons_layout.addWidget(self.add_source_code_files_button)

        # Update Files Button
        self.update_source_code_files_button = QPushButton("Update Files")
        self.update_source_code_files_button.clicked.connect(self.update_files)
        file_buttons_layout.addWidget(self.update_source_code_files_button)

        # Delete Files Button
        self.delete_source_code_files_button = QPushButton("Delete Files")
        self.delete_source_code_files_button.clicked.connect(self.delete_files)
        file_buttons_layout.addWidget(self.delete_source_code_files_button)

        # Export Files Button
        self.export_source_code_files_button = QPushButton("Export Files")
        self.export_source_code_files_button.clicked.connect(self.export_files)
        file_buttons_layout.addWidget(self.export_source_code_files_button)

        layout.addLayout(file_buttons_layout)

        # Set layout
        self.setLayout(layout)

    def load_source_code_data(self):
        """Load the source code data from the database and populate the table."""
        try:
            
            # Get the source code data
            source_code = self.source_code_manager.get_source_code(self.source_code_id)
            if not source_code:
                QMessageBox.critical(self, "Load Source Code Error", "Source code not found!", QMessageBox.Ok)
                self.close()
                return

            # Get the project name using ProjectManager
            project_name = self.project_manager.get_project(source_code['project_id'])['name']

            # Get the target locales using TargetLocaleManager
            target_locales = self.target_locale_manager.get_target_locales({'source_code_id': source_code['id']})
            target_locales_str = ', '.join([locale['name'] for locale in target_locales])

            # Update the header with the source code name
            self.header_label.setText(source_code['name'])

            # Set data to the table
            attributes = [
                ("Project", project_name),
                ("Name", source_code['name']),
                ("Unique ID", source_code['unique_id']),
                ("Code Type", source_code['code_type']),
                ("Source Locale", source_code['source_locale']),
                ("Target Locales", target_locales_str),
                ("Status", source_code['status']),
                ("Notes", source_code['notes'])
            ]

            self.source_code_table.setRowCount(len(attributes))
            for row, (attribute, value) in enumerate(attributes):
                attribute_item = QTableWidgetItem(attribute)
                attribute_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.source_code_table.setItem(row, 0, attribute_item)

                value_item = QTableWidgetItem(value)
                value_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.source_code_table.setItem(row, 1, value_item)

            # Display the appropriate buttons based on the source code status
            self.toggle_localize_buttons(source_code['status'], source_code['localized_source_code_path'])

        except Exception as e:
            QMessageBox.critical(self, "Load Source Code Error", f"An error occurred while loading source code:\n{str(e)}", QMessageBox.Ok)

    def toggle_localize_buttons(self, status, localized_path):
        """Toggle between Localize and Unlocalize buttons based on the source code's status."""
        if status == "Unlocalized":
            self.localize_source_code_button.setVisible(True)
            self.unlocalize_source_code_button.setVisible(False)
        else:
            self.localize_source_code_button.setVisible(False)
            self.unlocalize_source_code_button.setVisible(True)

        # Enable/disable buttons based on the presence of localized files
        if not localized_path:
            self.localize_source_code_button.setEnabled(False)
            self.unlocalize_source_code_button.setEnabled(False)
        else:
            self.localize_source_code_button.setEnabled(True)
            self.unlocalize_source_code_button.setEnabled(True)

    def open_update_dialog(self):
        """Open the UpdateSourceCodeWidgetDialog for updating source code details."""
        try:
            update_dialog = UpdateSourceCodeWidgetDialog(self.source_code_id)
            update_dialog.exec_()  # Open the dialog as a modal window

            # Reload the source code data after the dialog is closed
            self.load_source_code_data()

        except Exception as e:
            QMessageBox.critical(self, "Update Dialog Error", f"An error occurred while opening the update dialog:\n{str(e)}", QMessageBox.Ok)

    def open_set_target_locales_dialog(self):
        """Open the SetTargetLocalesWidgetDialog for setting target locales."""
        try:
            # Instantiate the SetTargetLocalesWidgetDialog with the source_code_id
            set_locales_dialog = SetTargetLocalesWidgetDialog(self.source_code_id)
            
            # Open the dialog as a modal window
            set_locales_dialog.exec_()

            # Reload the source code data after the dialog is closed
            self.load_source_code_data()
            
        except Exception as e:
            QMessageBox.critical(self, "Set Target Locales Dialog Error", f"An error occurred while opening the set target locales dialog:\n{str(e)}", QMessageBox.Ok)

    def localize_source_code(self):
        """Localize the source code if it has files to process."""
        try:
            # Retrieve the source code details
            source_code = self.source_code_manager.get_source_code(self.source_code_id)
            
            # Check if the source code has a valid path for localization
            if not source_code['localized_source_code_path']:
                QMessageBox.critical(self, "Localization Error", "The source code does not have files to process!", QMessageBox.Ok)
                return

            # Instantiate the L10nWidgetDialog with the source_code_id
            l10n_dialog = L10nWidgetDialog(self.source_code_id)
            
            # Open the dialog as a modal window to start the localization process
            l10n_dialog.exec_()
            
            # Reload the source code data after localization
            self.load_source_code_data()

        except Exception as e:
            QMessageBox.critical(self, "Localization Error", f"An error occurred while localizing the source code:\n{str(e)}", QMessageBox.Ok)

    def unlocalize_source_code(self):
        """Unlocalize the source code if it has files to process."""
        source_code = self.source_code_manager.get_source_code(self.source_code_id)
        if not source_code['localized_source_code_path']:
            QMessageBox.critical(self, "Unlocalization Error", "The source code does not have files to process!", QMessageBox.Ok)
            return
        try:
            self.l10n_manager.unlocalize_source_code(self.source_code_id)
            self.load_source_code_data()
            QMessageBox.information(self, "Unlocalized", "The source code has been unlocalized successfully.", QMessageBox.Ok)
        except Exception as e:
            QMessageBox.critical(self, "Unlocalization Error", f"An error occurred while unlocalizing the source code:\n{str(e)}", QMessageBox.Ok)

    def delete_source_code(self):
        """Delete the source code from the database."""
        confirmation = QMessageBox.question(
            self, "Delete Source Code",
            f"Do you want to delete the source code '{self.header_label.text()}'?",
            QMessageBox.Ok | QMessageBox.Cancel
        )
        if confirmation == QMessageBox.Ok:
            try:
                self.source_code_manager.delete_source_code(self.source_code_id)
                QMessageBox.information(self, "Source Code Deleted", f"Source code '{self.header_label.text()}' has been successfully deleted.", QMessageBox.Ok)
                self.close()  # Close the dialog after deletion
            except Exception as e:
                QMessageBox.critical(self, "Delete Source Code Error", f"An error occurred while deleting the source code:\n{str(e)}", QMessageBox.Ok)

    def add_files(self):
        """Add files to the source code if none exist."""
        try:
            # Retrieve the source code details
            source_code = self.source_code_manager.get_source_code(self.source_code_id)
            
            # Check if the source code already has files
            if source_code['localized_source_code_path']:
                QMessageBox.information(self, "Files Exist", "The source code files already exist. You can, however, update them instead.", QMessageBox.Ok)
                return

            # Instantiate the AddSourceCodeFilesWidgetDialog with the source_code_id
            add_files_dialog = AddSourceCodeFilesWidgetDialog(self.source_code_id)
            
            # Open the dialog as a modal window to add files
            if add_files_dialog.exec_() == QDialog.Accepted:
                # Reload the source code data after files are added
                self.load_source_code_data()
                QMessageBox.information(self, "Files Added", "Files have been successfully added to the source code.", QMessageBox.Ok)

        except Exception as e:
            QMessageBox.critical(self, "Add Files Error", f"An error occurred while adding files to the source code:\n{str(e)}", QMessageBox.Ok)

    def update_files(self):
        """Update the files of the source code if they exist."""
        try:
            # Retrieve the source code details
            source_code = self.source_code_manager.get_source_code(self.source_code_id)
            
            # Check if the source code has existing files
            if not source_code['localized_source_code_path']:
                QMessageBox.information(self, "No Files", "The source code has no files. Please add files instead.", QMessageBox.Ok)
                return

            # Instantiate the UpdateSourceCodeFilesWidgetDialog with the source_code_id
            update_files_dialog = UpdateSourceCodeFilesWidgetDialog(self.source_code_id)
            
            # Open the dialog as a modal window to update files
            if update_files_dialog.exec_() == QDialog.Accepted:
                # Reload the source code data after files are updated
                self.load_source_code_data()
                QMessageBox.information(self, "Files Updated", "Files have been successfully updated for the source code.", QMessageBox.Ok)

        except Exception as e:
            QMessageBox.critical(self, "Update Files Error", f"An error occurred while updating files for the source code:\n{str(e)}", QMessageBox.Ok)
            
    def delete_files(self):
        """Delete the files of the source code if they exist."""
        source_code = self.source_code_manager.get_source_code(self.source_code_id)
        if not source_code['localized_source_code_path']:
            QMessageBox.information(self, "No Files", "The source code has no files to delete!", QMessageBox.Ok)
            return
        try:
            self.source_code_manager.delete_source_code_files(self.source_code_id)
            self.load_source_code_data()
            QMessageBox.information(self, "Files Deleted", "The source code files have been successfully deleted.", QMessageBox.Ok)
        except Exception as e:
            QMessageBox.critical(self, "Delete Files Error", f"An error occurred while deleting the source code files:\n{str(e)}", QMessageBox.Ok)

    def export_files(self):
        """Export the files of the source code if they exist."""
        source_code = self.source_code_manager.get_source_code(self.source_code_id)
        if not source_code['localized_source_code_path']:
            QMessageBox.information(self, "No Files", "The source code does not have files to export!", QMessageBox.Ok)
            return
        try:
            self.source_code_manager.export_files(self.source_code_id)
            QMessageBox.information(self, "Files Exported", "The source code files have been successfully exported.", QMessageBox.Ok)
        except Exception as e:
            QMessageBox.critical(self, "Export Files Error", f"An error occurred while exporting the source code files:\n{str(e)}", QMessageBox.Ok)







class UpdateSourceCodeWidgetDialog(QDialog):
    def __init__(self, source_code_id, parent=None):
        super().__init__(parent)
        self.source_code_id = source_code_id
        self.source_code_manager = SourceCodeManager()
        self.source_code_data = {}
        self.init_ui()
        self.load_source_code_data()

    def init_ui(self):
        """Initialize the UI components and layout for the UpdateSourceCodeWidgetDialog."""
        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())
        self.setWindowTitle("Update Source Code")

        # Create main layout
        self.layout = QVBoxLayout(self)
        self.layout.setContentsMargins(10, 10, 10, 10)
        self.layout.setSpacing(15)

        # Page header
        self.header_label = QLabel("Update [Source Code Name]")
        self.header_label.setStyleSheet("font-size: 18px; font-weight: bold;")
        self.layout.addWidget(self.header_label)

        # Form layout
        self.form_layout = QFormLayout()

        # Name input
        self.name_input = QLineEdit()
        self.form_layout.addRow(QLabel("Name:"), self.name_input)

        # Code type selection
        self.code_type_combo = QComboBox()
        self.code_type_combo.addItems(["Web App", "Android App", "iOS App", "Java App"])
        self.form_layout.addRow(QLabel("Code Type:"), self.code_type_combo)

        # Source locale selection
        self.source_locale_combo = QComboBox()
        self.source_locale_combo.addItem("ja-JP")  # Only value available for now
        self.form_layout.addRow(QLabel("Source Locale:"), self.source_locale_combo)

        # Notes input
        self.notes_input = QTextEdit()
        self.form_layout.addRow(QLabel("Notes:"), self.notes_input)

        # Add form layout to main layout
        self.layout.addLayout(self.form_layout)

        # Button layout
        button_layout = QHBoxLayout()
        self.save_button = QPushButton("Save")
        self.save_button.clicked.connect(self.save_source_code)
        self.cancel_button = QPushButton("Cancel")
        self.cancel_button.clicked.connect(self.close_dialog)
        button_layout.addWidget(self.save_button)
        button_layout.addWidget(self.cancel_button)

        # Add button layout to main layout
        self.layout.addLayout(button_layout)

    def load_source_code_data(self):
        """Load source code data from the database and populate the form fields."""
        try:
            self.source_code_data = self.source_code_manager.get_source_code(self.source_code_id)
            self.name_input.setText(self.source_code_data.get('name', ''))
            self.code_type_combo.setCurrentText(self.source_code_data.get('code_type', ''))
            self.source_locale_combo.setCurrentText(self.source_code_data.get('source_locale', ''))
            self.notes_input.setPlainText(self.source_code_data.get('notes', ''))
            self.header_label.setText(f"Update {self.source_code_data.get('name', '[Source Code Name]')}")
        except Exception as e:
            QMessageBox.critical(
                self,
                "Load Source Code Error",
                f"An error occurred while loading the source code data:\n{str(e)}",
                QMessageBox.Ok
            )
            self.close()

    def save_source_code(self):
        """Save the updated source code data to the database."""
        name = self.name_input.text()
        code_type = self.code_type_combo.currentText()
        source_locale = self.source_locale_combo.currentText()
        notes = self.notes_input.toPlainText()

        if not name.strip():
            QMessageBox.warning(self, "Validation Error", "Please enter a name for the source code.", QMessageBox.Ok)
            return

        try:
            data = {
                'name': name,
                'code_type': code_type,
                'source_locale': source_locale,
                'notes': notes
            }
            self.source_code_manager.update_source_code(self.source_code_id, data)
            QMessageBox.information(self, "Success", "Source code updated successfully.", QMessageBox.Ok)
            self.close()  # Close dialog after saving
        except Exception as e:
            QMessageBox.critical(
                self,
                "Save Source Code Error",
                f"An error occurred while updating the source code:\n{str(e)}",
                QMessageBox.Ok
            )

    def close_dialog(self):
        """Close the update dialog without saving."""
        self.close()







class SetTargetLocalesWidgetDialog(QDialog):
    def __init__(self, source_code_id, parent=None):
        super().__init__(parent)
        self.source_code_id = source_code_id
        self.target_locale_manager = TargetLocaleManager()
        self.target_locales_list = []  # List to hold the existing target locale IDs
        self.init_ui()
        self.load_target_locales()

    def init_ui(self):
        """Initialize the UI components and layout for the SetTargetLocalesWidgetDialog."""
        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())
        self.setWindowTitle("Set Target Locales")

        # Create main layout
        self.layout = QVBoxLayout(self)
        self.layout.setContentsMargins(10, 10, 10, 10)
        self.layout.setSpacing(15)

        # Page header
        self.header_label = QLabel(f"[Source Code Name] Target Locales")
        self.header_label.setStyleSheet("font-size: 18px; font-weight: bold;")
        self.layout.addWidget(self.header_label)

        # Table for target locales
        self.target_locales_table = QTableWidget()
        self.target_locales_table.setColumnCount(3)  # Columns: Name, Code, Selected
        self.target_locales_table.setHorizontalHeaderLabels(["Name", "Code", "Selected"])
        self.target_locales_table.horizontalHeader().setSectionResizeMode(0, QHeaderView.Stretch)
        self.target_locales_table.horizontalHeader().setSectionResizeMode(1, QHeaderView.Stretch)
        self.target_locales_table.horizontalHeader().setSectionResizeMode(2, QHeaderView.ResizeToContents)
        self.target_locales_table.verticalHeader().setVisible(False)
        self.layout.addWidget(self.target_locales_table)

        # Button layout
        button_layout = QHBoxLayout()
        self.set_target_locales_button = QPushButton("Set Target Locales")
        self.set_target_locales_button.clicked.connect(self.set_target_locales)
        self.cancel_button = QPushButton("Cancel")
        self.cancel_button.clicked.connect(self.close_dialog)
        button_layout.addWidget(self.set_target_locales_button)
        button_layout.addWidget(self.cancel_button)

        # Add button layout to main layout
        self.layout.addLayout(button_layout)

    def load_target_locales(self):
        """Load target locales from the database and populate the table."""
        try:
            target_locales = self.target_locale_manager.get_target_locales(self.source_code_id)
            self.target_locales_list = [locale['id'] for locale in target_locales]
            self.target_locales_table.setRowCount(len(target_locales))
            for row, locale in enumerate(target_locales):
                # Locale Name
                name_item = QTableWidgetItem(locale['name'])
                name_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.target_locales_table.setItem(row, 0, name_item)

                # Locale Code
                code_item = QTableWidgetItem(locale['code'])
                code_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.target_locales_table.setItem(row, 1, code_item)

                # Selected Checkbox
                selected_checkbox = QCheckBox()
                selected_checkbox.setChecked(locale['id'] in self.target_locales_list)
                self.target_locales_table.setCellWidget(row, 2, selected_checkbox)

        except Exception as e:
            QMessageBox.critical(self, "Load Target Locales Error", f"An error occurred while loading target locales:\n{str(e)}", QMessageBox.Ok)

    def set_target_locales(self):
        """Set the target locales based on the selected checkboxes."""
        try:
            for row in range(self.target_locales_table.rowCount()):
                # Get locale ID and checkbox state
                locale_name = self.target_locales_table.item(row, 0).text()
                locale_code = self.target_locales_table.item(row, 1).text()
                checkbox = self.target_locales_table.cellWidget(row, 2)
                is_checked = checkbox.isChecked()

                if is_checked:
                    # Add target locale if not already present
                    if locale_name not in self.target_locales_list:
                        self.target_locale_manager.add_target_locale(self.source_code_id, locale_name, locale_code)
                else:
                    # Remove target locale if present
                    if locale_name in self.target_locales_list:
                        locale_id = self.target_locales_list[self.target_locales_list.index(locale_name)]
                        self.target_locale_manager.delete_target_locale(locale_id)

            QMessageBox.information(self, "Success", "Target locales updated successfully.", QMessageBox.Ok)
            self.close()  # Close dialog after updating

        except Exception as e:
            QMessageBox.critical(self, "Set Target Locales Error", f"An error occurred while setting target locales:\n{str(e)}", QMessageBox.Ok)

    def close_dialog(self):
        """Close the set target locales dialog without saving."""
        self.close()





class AddSourceCodeFilesWidgetDialog(QDialog):
    def __init__(self, source_code_id, parent=None):
        super().__init__(parent)
        self.source_code_id = source_code_id
        self.source_code_manager = SourceCodeManager()
        self.upload_path = ""  # To store the selected folder path
        self.init_ui()

    def init_ui(self):
        """Initialize the UI components and layout for the AddSourceCodeFilesWidgetDialog."""
        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())
        self.setWindowTitle("Add Source Code Files")

        # Create main layout
        self.layout = QVBoxLayout(self)
        self.layout.setContentsMargins(10, 10, 10, 10)
        self.layout.setSpacing(15)

        # Page header
        self.header_label = QLabel(f"Add [Source Code Name] Files")
        self.header_label.setStyleSheet("font-size: 18px; font-weight: bold;")
        self.layout.addWidget(self.header_label)

        # Form layout
        self.form_layout = QVBoxLayout()
        
        # Source Code Name
        self.name_label = QLabel("Name")
        self.name_field = QLineEdit()
        self.name_field.setReadOnly(True)  # Assuming the source code name is provided or fetched
        self.form_layout.addWidget(self.name_label)
        self.form_layout.addWidget(self.name_field)

        # Upload Files
        self.upload_label = QLabel("Upload Files")
        self.upload_path_field = QLineEdit()
        self.upload_path_field.setReadOnly(True)
        self.browse_button = QPushButton("Browse")
        self.browse_button.clicked.connect(self.browse_folder)

        upload_layout = QHBoxLayout()
        upload_layout.addWidget(self.upload_path_field)
        upload_layout.addWidget(self.browse_button)
        self.form_layout.addWidget(self.upload_label)
        self.form_layout.addLayout(upload_layout)

        # Add form layout to main layout
        self.layout.addLayout(self.form_layout)

        # Button layout
        button_layout = QHBoxLayout()
        self.save_source_code_files_button = QPushButton("Save")
        self.save_source_code_files_button.clicked.connect(self.save_source_code_files)
        self.cancel_button = QPushButton("Cancel")
        self.cancel_button.clicked.connect(self.close_dialog)
        button_layout.addWidget(self.save_source_code_files_button)
        button_layout.addWidget(self.cancel_button)

        # Add button layout to main layout
        self.layout.addLayout(button_layout)

    def browse_folder(self):
        """Open a dialog to browse and select the folder containing source code files."""
        folder_path = QFileDialog.getExistingDirectory(self, "Select Folder")
        if folder_path:
            self.upload_path = folder_path
            self.upload_path_field.setText(folder_path)

    def save_source_code_files(self):
        """Save the uploaded files for the source code."""
        try:
            if not self.upload_path:
                QMessageBox.warning(self, "Upload Path Missing", "Please select a folder to upload files.", QMessageBox.Ok)
                return

            # Assuming name_field is populated with the source code's name
            source_code_name = self.name_field.text()
            
            # Call the source code manager to add files
            self.source_code_manager.add_source_code_files(self.source_code_id, self.upload_path)
            QMessageBox.information(self, "Success", f"Files for {source_code_name} have been successfully added.", QMessageBox.Ok)
            self.close()  # Close the dialog after saving

        except Exception as e:
            QMessageBox.critical(self, "Save Files Error", f"An error occurred while saving files:\n{str(e)}", QMessageBox.Ok)

    def close_dialog(self):
        """Close the dialog without saving."""
        self.close()







class UpdateSourceCodeFilesWidgetDialog(QDialog):
    def __init__(self, source_code_id, parent=None):
        super().__init__(parent)
        self.source_code_id = source_code_id
        self.source_code_manager = SourceCodeManager()
        self.upload_path = ""  # To store the selected folder path
        self.init_ui()

    def init_ui(self):
        """Initialize the UI components and layout for the UpdateSourceCodeFilesWidgetDialog."""
        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())
        self.setWindowTitle("Update Source Code Files")

        # Create main layout
        self.layout = QVBoxLayout(self)
        self.layout.setContentsMargins(10, 10, 10, 10)
        self.layout.setSpacing(15)

        # Page header
        self.header_label = QLabel(f"Update [Source Code Name] Files")
        self.header_label.setStyleSheet("font-size: 18px; font-weight: bold;")
        self.layout.addWidget(self.header_label)

        # Form layout
        self.form_layout = QVBoxLayout()
        
        # Source Code Name
        self.name_label = QLabel("Name")
        self.name_field = QLineEdit()
        self.name_field.setReadOnly(True)  # Assuming the source code name is provided or fetched
        self.form_layout.addWidget(self.name_label)
        self.form_layout.addWidget(self.name_field)

        # Upload Files
        self.upload_label = QLabel("Upload Files")
        self.upload_path_field = QLineEdit()
        self.upload_path_field.setReadOnly(True)
        self.browse_button = QPushButton("Browse")
        self.browse_button.clicked.connect(self.browse_folder)

        upload_layout = QHBoxLayout()
        upload_layout.addWidget(self.upload_path_field)
        upload_layout.addWidget(self.browse_button)
        self.form_layout.addWidget(self.upload_label)
        self.form_layout.addLayout(upload_layout)

        # Add form layout to main layout
        self.layout.addLayout(self.form_layout)

        # Button layout
        button_layout = QHBoxLayout()
        self.save_source_code_files_button = QPushButton("Save")
        self.save_source_code_files_button.clicked.connect(self.update_source_code_files)
        self.cancel_button = QPushButton("Cancel")
        self.cancel_button.clicked.connect(self.close_dialog)
        button_layout.addWidget(self.save_source_code_files_button)
        button_layout.addWidget(self.cancel_button)

        # Add button layout to main layout
        self.layout.addLayout(button_layout)

    def browse_folder(self):
        """Open a dialog to browse and select the folder containing source code files."""
        folder_path = QFileDialog.getExistingDirectory(self, "Select Folder")
        if folder_path:
            self.upload_path = folder_path
            self.upload_path_field.setText(folder_path)

    def update_source_code_files(self):
        """Update the files for the source code."""
        try:
            if not self.upload_path:
                QMessageBox.warning(self, "Upload Path Missing", "Please select a folder to upload files.", QMessageBox.Ok)
                return

            # Assuming name_field is populated with the source code's name
            source_code_name = self.name_field.text()
            
            # Call the source code manager to update files
            self.source_code_manager.update_source_code_files(self.source_code_id, self.upload_path)
            QMessageBox.information(self, "Success", f"Files for {source_code_name} have been successfully updated.", QMessageBox.Ok)
            self.close()  # Close the dialog after saving

        except Exception as e:
            QMessageBox.critical(self, "Update Files Error", f"An error occurred while updating files:\n{str(e)}", QMessageBox.Ok)

    def close_dialog(self):
        """Close the dialog without saving."""
        self.close()






class LocalizationThread(QThread):
    localization_completed = Signal()
    localization_failed = Signal(str)

    def __init__(self, l10n_manager):
        super().__init__()
        self.l10n_manager = l10n_manager

    def run(self):
        """Run the localization process in a separate thread."""
        try:
            self.l10n_manager.localize_source_code()
            self.localization_completed.emit()
        except Exception as e:
            self.localization_failed.emit(str(e))


class L10nWidgetDialog(QDialog):
    def __init__(self, source_code_id, parent=None):
        super().__init__(parent)
        self.source_code_id = source_code_id
        self.l10n_manager = L10nManager(source_code_id)
        self.init_ui()

    def init_ui(self):
        """Initialize the UI components and layout for the L10nWidgetDialog."""
        self.setWindowTitle("Localization in Progress")
        self.setModal(True)
        self.setWindowFlag(Qt.WindowContextHelpButtonHint, False)
        self.setFixedSize(300, 150)
        
        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())

        # Create main layout
        self.layout = QVBoxLayout(self)
        self.layout.setContentsMargins(10, 10, 10, 10)
        self.layout.setSpacing(15)

        # Information label
        self.info_label = QLabel("Localization in progress, please wait...")
        self.info_label.setAlignment(Qt.AlignCenter)
        self.info_label.setStyleSheet("font-size: 14px; font-weight: bold;")
        self.layout.addWidget(self.info_label)

        # Progress Dialog (overlay)
        self.progress_dialog = QProgressDialog("Localization in progress...", None, 0, 0, self)
        self.progress_dialog.setWindowTitle("Please Wait")
        self.progress_dialog.setModal(True)
        self.progress_dialog.setCancelButton(None)
        self.progress_dialog.setWindowFlags(Qt.Window | Qt.CustomizeWindowHint | Qt.WindowTitleHint)
        self.progress_dialog.setStyleSheet(Styles.general_style())
        self.progress_dialog.show()

        # Start localization process in a separate thread
        self.start_localization_process()

    def start_localization_process(self):
        """Start the localization process in a separate thread."""
        self.localization_thread = LocalizationThread(self.l10n_manager)
        self.localization_thread.localization_completed.connect(self.on_localization_completed)
        self.localization_thread.localization_failed.connect(self.on_localization_failed)
        self.localization_thread.start()

    def on_localization_completed(self):
        """Handle successful completion of the localization process."""
        self.progress_dialog.close()
        QMessageBox.information(self, "Localization Completed", 
                                "The localization procedure has been successfully completed.",
                                QMessageBox.Ok)
        self.close()

    def on_localization_failed(self, error_message):
        """Handle errors that occur during the localization process."""
        self.progress_dialog.close()
        QMessageBox.critical(self, "Localization Failed", 
                             f"An error occurred during localization:\n{error_message}", 
                             QMessageBox.Ok)
        self.close()



