from PySide6.QtWidgets import (
    QWidget, QStackedWidget, QVBoxLayout, QHBoxLayout, QPushButton, QCheckBox, QLabel, QMessageBox, QTableWidget, QTableWidgetItem, QHeaderView, QFormLayout, QLineEdit 
)

from PySide6.QtCore import Qt

from app_ui.header_widget import HeaderWidget
from app_ui.styles import Styles

from managers.setting_manager import SettingManager
from managers.error_manager import DatabaseError, InvalidUserInputError


class SettingsStackedWidget(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.init_ui()

    def init_ui(self):
        """Initialize the UI components and layout for the SettingsStackedWidget."""
        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())

        # Create main layout for SettingsStackedWidget
        self.main_layout = QVBoxLayout(self)
        self.main_layout.setContentsMargins(10, 10, 10, 10)
        self.main_layout.setSpacing(10)

        # Header widget
        self.header_widget = HeaderWidget()
        self.header_widget.set_module_label("Settings")

        # Add header widget to the main layout
        self.main_layout.addWidget(self.header_widget)

        # Create a horizontal layout for stack buttons
        self.stack_buttons_layout = QHBoxLayout()
        self.stack_buttons_layout.setSpacing(5)

        # Create QPushButtons for navigation
        self.general_button = QPushButton("General")
        self.file_types_button = QPushButton("File Types")
        self.locales_button = QPushButton("Locales")
        self.add_locale_button = QPushButton("Add Locale")

        # Add buttons to the stack_buttons_layout
        self.stack_buttons_layout.addWidget(self.general_button)
        self.stack_buttons_layout.addWidget(self.file_types_button)
        self.stack_buttons_layout.addWidget(self.locales_button)
        self.stack_buttons_layout.addWidget(self.add_locale_button)

        # Add stack buttons layout to the main layout
        self.main_layout.addLayout(self.stack_buttons_layout)

        # Create QStackedWidget to hold different settings widgets
        self.stack_layout = QVBoxLayout()
        self.stack_layout.setContentsMargins(0, 10, 0, 0)
        self.stacked_widget = QStackedWidget()

        # Create instances of the settings-related widgets
        self.settings_widget = SettingsWidget()
        self.file_types_widget = FileTypesWidget()
        self.locales_widget = LocalesWidget()
        self.add_locale_widget = AddLocaleWidget()

        # Add widgets to the QStackedWidget
        self.stacked_widget.addWidget(self.settings_widget)  # Index 0
        self.stacked_widget.addWidget(self.file_types_widget)  # Index 1
        self.stacked_widget.addWidget(self.locales_widget)  # Index 2
        self.stacked_widget.addWidget(self.add_locale_widget)  # Index 3

        # Set default widget (SettingsWidget)
        self.stacked_widget.setCurrentWidget(self.settings_widget)

        # Add the stacked widget to the stack layout
        self.stack_layout.addWidget(self.stacked_widget)

        # Add stack layout to the main layout
        self.main_layout.addLayout(self.stack_layout)

        # Connect buttons to corresponding slots to switch stacked widgets
        self.connect_signals()

    def connect_signals(self):
        """Connect button signals to the appropriate slots."""
        try:
            self.general_button.clicked.connect(lambda: self.stacked_widget.setCurrentIndex(0))
            self.file_types_button.clicked.connect(lambda: self.stacked_widget.setCurrentIndex(1))
            self.locales_button.clicked.connect(lambda: self.stacked_widget.setCurrentIndex(2))
            self.add_locale_button.clicked.connect(lambda: self.stacked_widget.setCurrentIndex(3))
        except Exception as e:
            QMessageBox.critical(
                self,
                "Button Connection Error - SettingsStackedWidget",
                f"An error occurred while connecting buttons:\n{str(e)}",
                QMessageBox.Ok
            )




class SettingsWidget(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setting_manager = SettingManager()
        self.init_ui()
        self.load_settings()

    def init_ui(self):
        """Initialize the UI components and layout for the SettingsWidget."""
        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())

        # Create main layout
        layout = QVBoxLayout(self)
        layout.setContentsMargins(10, 10, 10, 10)
        layout.setSpacing(15)

        # Page header
        header_label = QLabel("General Settings")
        header_label.setStyleSheet("font-size: 18px; font-weight: bold;")
        layout.addWidget(header_label)

        # Duplicate HTML checkbox
        self.duplicate_html_checkbox = QCheckBox("Duplicate HTML")
        self.duplicate_html_checkbox.setChecked(False)  # Default is unchecked
        layout.addWidget(self.duplicate_html_checkbox)

        # Use Key with Namespace checkbox
        self.use_key_namespace_checkbox = QCheckBox("Use Key with Namespace")
        self.use_key_namespace_checkbox.setChecked(False)  # Default is unchecked
        layout.addWidget(self.use_key_namespace_checkbox)

        # Update Settings button
        self.update_settings_button = QPushButton("Update Settings")
        self.update_settings_button.clicked.connect(self.update_settings)
        layout.addWidget(self.update_settings_button)

        # Set layout
        self.setLayout(layout)

    def load_settings(self):
        """Load settings from the database and set the values to the checkboxes."""
        try:
            settings = self.setting_manager.get_app_settings()
            if settings:
                self.duplicate_html_checkbox.setChecked(settings['duplicate_html'])
                self.use_key_namespace_checkbox.setChecked(settings['use_key_namespace'])
        except DatabaseError as e:
            QMessageBox.critical(self, "Load Settings Error", f"An error occurred while loading settings:\n{str(e)}", QMessageBox.Ok)

    def update_settings(self):
        """Update settings in the database based on the current state of the checkboxes."""
        try:
            settings = {
                'dark_mode': False,  # Always set to False as per prompt
                'duplicate_html': self.duplicate_html_checkbox.isChecked(),
                'use_key_namespace': self.use_key_namespace_checkbox.isChecked()
            }
            self.setting_manager.update_app_settings(settings)
            QMessageBox.information(self, "Settings Updated", "Settings have been successfully updated.", QMessageBox.Ok)
        except (DatabaseError, InvalidUserInputError) as e:
            QMessageBox.critical(self, "Update Settings Error", f"An error occurred while updating settings:\n{str(e)}", QMessageBox.Ok)




class FileTypesWidget(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setting_manager = SettingManager()
        self.init_ui()
        self.load_file_types()

    def init_ui(self):
        """Initialize the UI components and layout for the FileTypesWidget."""
        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())

        # Create main layout
        layout = QVBoxLayout(self)
        layout.setContentsMargins(10, 10, 10, 10)
        layout.setSpacing(15)

        # Page header
        header_label = QLabel("Supported File Types")
        header_label.setStyleSheet("font-size: 18px; font-weight: bold;")
        layout.addWidget(header_label)

        # Table for file types
        self.file_types_table = QTableWidget()
        self.file_types_table.setColumnCount(4)  # 4 Columns: Code Type, Name, Extension, Active
        self.file_types_table.setHorizontalHeaderLabels(["Code Type", "Name", "Extension", "Active"])
        self.file_types_table.horizontalHeader().setSectionResizeMode(QHeaderView.Stretch)
        self.file_types_table.verticalHeader().setVisible(False)
        layout.addWidget(self.file_types_table)

        # Update button
        self.update_file_types_button = QPushButton("Update File Types")
        self.update_file_types_button.clicked.connect(self.update_file_types)
        layout.addWidget(self.update_file_types_button)

        # Set layout
        self.setLayout(layout)

    def load_file_types(self):
        """Load file types from the database and populate the table."""
        try:
            file_types = self.setting_manager.get_file_types()
            self.file_types_table.setRowCount(len(file_types))
            for row, file_type in enumerate(file_types):
                # Code Type
                code_type_item = QTableWidgetItem(file_type['code_type'])
                code_type_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.file_types_table.setItem(row, 0, code_type_item)

                # Name
                name_item = QTableWidgetItem(file_type['name'])
                name_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.file_types_table.setItem(row, 1, name_item)

                # Extension
                extension_item = QTableWidgetItem(file_type['extension'])
                extension_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.file_types_table.setItem(row, 2, extension_item)

                # Active Checkbox
                is_active_checkbox = QCheckBox()
                is_active_checkbox.setChecked(file_type['is_active'])
                self.file_types_table.setCellWidget(row, 3, is_active_checkbox)

                # Store file type ID in table for reference
                self.file_types_table.setItem(row, 3, QTableWidgetItem(str(file_type['id'])))
                self.file_types_table.item(row, 3).setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.file_types_table.setColumnHidden(3, True)  # Hide the ID column
        except DatabaseError as e:
            QMessageBox.critical(self, "Load File Types Error", f"An error occurred while loading file types:\n{str(e)}", QMessageBox.Ok)

    def update_file_types(self):
        """Update the is_active status of file types in the database."""
        try:
            for row in range(self.file_types_table.rowCount()):
                # Get file type ID
                file_type_id = int(self.file_types_table.item(row, 3).text())

                # Get the is_active value from the checkbox
                is_active_checkbox = self.file_types_table.cellWidget(row, 3)
                is_active = is_active_checkbox.isChecked()

                # Update the file type record in the database
                data = {'is_active': is_active}
                self.setting_manager.update_file_type(file_type_id, data)

            QMessageBox.information(self, "File Types Updated", "File types have been successfully updated.", QMessageBox.Ok)
            self.load_file_types()  # Reload the table to reflect updates
        except DatabaseError as e:
            QMessageBox.critical(self, "Update File Types Error", f"An error occurred while updating file types:\n{str(e)}", QMessageBox.Ok)





class LocalesWidget(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setting_manager = SettingManager()
        self.init_ui()
        self.load_locales()

    def init_ui(self):
        """Initialize the UI components and layout for the LocalesWidget."""
        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())

        # Create main layout
        layout = QVBoxLayout(self)
        layout.setContentsMargins(10, 10, 10, 10)
        layout.setSpacing(15)

        # Page header
        header_label = QLabel("Supported Locales")
        header_label.setStyleSheet("font-size: 18px; font-weight: bold;")
        layout.addWidget(header_label)

        # Table for locales
        self.locales_table = QTableWidget()
        self.locales_table.setColumnCount(2)  # 2 Columns: Name, Code
        self.locales_table.setHorizontalHeaderLabels(["Name", "Code"])
        self.locales_table.horizontalHeader().setSectionResizeMode(0, QHeaderView.Stretch)
        self.locales_table.horizontalHeader().setSectionResizeMode(1, QHeaderView.Stretch)
        self.locales_table.verticalHeader().setVisible(False)
        layout.addWidget(self.locales_table)

        # Set layout
        self.setLayout(layout)

    def load_locales(self):
        """Load locales from the database and populate the table."""
        try:
            locales = self.setting_manager.get_locales()
            self.locales_table.setRowCount(len(locales))
            for row, locale in enumerate(locales):
                # Locale Name
                name_item = QTableWidgetItem(locale['name'])
                name_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.locales_table.setItem(row, 0, name_item)

                # Locale Code
                code_item = QTableWidgetItem(locale['code'])
                code_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.locales_table.setItem(row, 1, code_item)
        except DatabaseError as e:
            QMessageBox.critical(self, "Load Locales Error", f"An error occurred while loading locales:\n{str(e)}", QMessageBox.Ok)

    def delete_locale(self, locale_id, locale_name):
        """Handle the action to delete a locale."""
        try:
            confirmation = QMessageBox.question(
                self, "Delete Locale",
                f"Do you want to delete the locale '{locale_name}'?",
                QMessageBox.Ok | QMessageBox.Cancel
            )
            if confirmation == QMessageBox.Ok:
                self.setting_manager.delete_locale(locale_id)
                QMessageBox.information(self, "Locale Deleted", f"Locale '{locale_name}' has been successfully deleted.", QMessageBox.Ok)
                self.load_locales()  # Reload the table to reflect changes
        except (DatabaseError, InvalidUserInputError) as e:
            QMessageBox.critical(self, "Delete Locale Error", f"An error occurred while deleting the locale:\n{str(e)}", QMessageBox.Ok)




class AddLocaleWidget(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setting_manager = SettingManager()
        self.init_ui()

    def init_ui(self):
        """Initialize the UI components and layout for the AddLocaleWidget."""
        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())

        # Create main layout
        layout = QVBoxLayout(self)
        layout.setContentsMargins(10, 10, 10, 10)
        layout.setSpacing(15)

        # Page header
        header_label = QLabel("Add Locale")
        header_label.setStyleSheet("font-size: 18px; font-weight: bold;")
        layout.addWidget(header_label)

        # Form layout for adding new locale
        form_layout = QFormLayout()

        # Name input field
        self.name_input = QLineEdit()
        form_layout.addRow("Name:", self.name_input)

        # Code input field
        self.code_input = QLineEdit()
        form_layout.addRow("Code:", self.code_input)

        # Add form layout to main layout
        layout.addLayout(form_layout)

        # Save and Cancel buttons
        buttons_layout = QVBoxLayout()
        self.save_locale_button = QPushButton("Save")
        self.save_locale_button.clicked.connect(self.save_locale)
        buttons_layout.addWidget(self.save_locale_button)

        self.cancel_button = QPushButton("Cancel")
        self.cancel_button.clicked.connect(self.cancel_add_locale)
        buttons_layout.addWidget(self.cancel_button)

        # Add buttons layout to main layout
        layout.addLayout(buttons_layout)

        # Set layout for the widget
        self.setLayout(layout)

    def save_locale(self):
        """Handle the action to save a new locale."""
        try:
            # Retrieve input data from form fields
            name = self.name_input.text().strip()
            code = self.code_input.text().strip()

            # Validate input data
            if not name or not code:
                raise InvalidUserInputError("Both name and code fields are required.")

            # Add the new locale to the database
            self.setting_manager.add_locale(name, code)

            # Display success message
            QMessageBox.information(self, "Locale Added", f"Locale '{name}' has been successfully added.", QMessageBox.Ok)

            # Clear form fields after successful addition
            self.name_input.clear()
            self.code_input.clear()

            # Switch back to LocalesWidget
            self.parent().setCurrentIndex(2)  # Assuming LocalesWidget is at index 2 in the stack

        except (DatabaseError, InvalidUserInputError) as e:
            QMessageBox.critical(self, "Add Locale Error", f"An error occurred while adding a locale:\n{str(e)}", QMessageBox.Ok)

    def cancel_add_locale(self):
        """Handle the action to cancel adding a locale."""
        # Switch back to LocalesWidget
        self.parent().setCurrentIndex(2)  # Assuming LocalesWidget is at index 2 in the stack


