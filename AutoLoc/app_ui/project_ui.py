from PySide6.QtWidgets import QWidget, QVBoxLayout, QHBoxLayout, QFormLayout, QLineEdit, QPushButton, QTableView, QComboBox, QMessageBox, QProgressBar
from PySide6.QtCore import Qt
from PySide6.QtGui import QStandardItemModel, QStandardItem
from managers.db import DBManager

class ProjectUI(QWidget):
    def __init__(self, project_id, parent=None):
        """
        Initializes the ProjectUI class.

        :param project_id: The ID of the project to display.
        :param parent: The parent widget, if any.
        """
        super().__init__(parent)
        self.db_manager = DBManager()
        self.project_id = project_id
        self.init_ui()

    def init_ui(self):
        """
        Initializes the UI components and layout.
        """
        self.setWindowTitle("Project Details")
        self.setGeometry(100, 100, 800, 600)

        layout = QVBoxLayout()

        self.project_form = self.create_form()
        self.file_types_table = self.create_table()
        self.source_locales_table = self.create_table()
        self.target_locales_table = self.create_table()

        self.populate_project_form()
        self.populate_table(self.file_types_table, 'project_file_types', f'project_id = {self.project_id}')
        self.populate_table(self.source_locales_table, 'project_source_locales', f'project_id = {self.project_id}')
        self.populate_table(self.target_locales_table, 'project_target_locales', f'project_id = {self.project_id}')

        layout.addLayout(self.project_form)
        layout.addWidget(self.create_group_box("Project File Types", self.file_types_table, self.add_project_file_type, self.edit_project_file_type, self.delete_project_file_type))
        layout.addWidget(self.create_group_box("Project Source Locales", self.source_locales_table, self.add_project_source_locale, self.edit_project_source_locale, self.delete_project_source_locale))
        layout.addWidget(self.create_group_box("Project Target Locales", self.target_locales_table, self.add_project_target_locale, self.edit_project_target_locale, self.delete_project_target_locale))

        self.localize_button = QPushButton("Localize")
        self.localize_button.clicked.connect(self.localize_project)
        layout.addWidget(self.localize_button)

        self.progress_bar = QProgressBar()
        self.progress_bar.setValue(0)
        self.progress_bar.setAlignment(Qt.AlignCenter)
        layout.addWidget(self.progress_bar)

        self.setLayout(layout)

    def create_form(self):
        """
        Creates the form layout for project details.

        :return: The form layout.
        """
        form_layout = QFormLayout()

        self.name_edit = QLineEdit()
        self.description_edit = QLineEdit()
        self.root_dir_edit = QLineEdit()

        form_layout.addRow("Name:", self.name_edit)
        form_layout.addRow("Description:", self.description_edit)
        form_layout.addRow("Root Directory:", self.root_dir_edit)

        save_button = QPushButton("Save")
        save_button.clicked.connect(self.save_project)
        form_layout.addRow(save_button)

        return form_layout

    def create_table(self):
        """
        Creates a table view with a standard item model.

        :return: The table view.
        """
        table = QTableView()
        table.setEditTriggers(QTableView.NoEditTriggers)
        table.setSelectionBehavior(QTableView.SelectRows)
        table.setSelectionMode(QTableView.SingleSelection)
        return table

    def populate_project_form(self):
        """
        Populates the project form with data from the database.
        """
        project_data = self.db_manager.get_project(self.project_id)
        if project_data:
            self.name_edit.setText(project_data[1])
            self.description_edit.setText(project_data[2])
            self.root_dir_edit.setText(project_data[3])

    def populate_table(self, table, table_name, condition):
        """
        Populates the table with data from the database.

        :param table: The table to populate.
        :param table_name: The name of the table in the database.
        :param condition: The condition to filter the records.
        """
        model = QStandardItemModel()
        records = self.db_manager.get_data(table_name, condition)
        if records:
            headers = [description[0] for description in self.db_manager.connection.execute(f'PRAGMA table_info({table_name})')]
            model.setHorizontalHeaderLabels(headers)
            for record in records:
                items = [QStandardItem(str(field)) for field in record]
                model.appendRow(items)
        table.setModel(model)

    def create_group_box(self, title, table, add_func, edit_func, delete_func):
        """
        Creates a group box with CRUD functionality.

        :param title: The title of the group box.
        :param table: The table to display data.
        :param add_func: The function to add a new record.
        :param edit_func: The function to edit an existing record.
        :param delete_func: The function to delete an existing record.
        :return: The group box widget.
        """
        group_box = QWidget()
        group_box_layout = QVBoxLayout()

        table_layout = QHBoxLayout()
        table_layout.addWidget(table)

        button_layout = QHBoxLayout()
        add_button = QPushButton("Add")
        add_button.clicked.connect(add_func)
        edit_button = QPushButton("Edit")
        edit_button.clicked.connect(edit_func)
        delete_button = QPushButton("Delete")
        delete_button.clicked.connect(delete_func)

        button_layout.addWidget(add_button)
        button_layout.addWidget(edit_button)
        button_layout.addWidget(delete_button)

        group_box_layout.addLayout(table_layout)
        group_box_layout.addLayout(button_layout)
        group_box.setLayout(group_box_layout)

        return group_box

    def save_project(self):
        """
        Saves the project details to the database.
        """
        name = self.name_edit.text()
        description = self.description_edit.text()
        root_dir = self.root_dir_edit.text()

        if not os.path.isdir(root_dir):
            QMessageBox.warning(self, "Invalid Directory", "Root directory is not valid or does not exist.")
            return

        self.db_manager.update_project(self.project_id, name, description, root_dir)
        QMessageBox.information(self, "Project Saved", "Project details have been saved successfully.")

    def add_project_file_type(self):
        """
        Adds a new project file type.
        """
        self.add_record('project_file_types', self.file_types_table, self.db_manager.get_file_types())

    def edit_project_file_type(self):
        """
        Edits an existing project file type.
        """
        self.edit_record('project_file_types', self.file_types_table, self.db_manager.get_file_types())

    def delete_project_file_type(self):
        """
        Deletes an existing project file type.
        """
        self.delete_record('project_file_types', self.file_types_table)

    def add_project_source_locale(self):
        """
        Adds a new project source locale.
        """
        self.add_record('project_source_locales', self.source_locales_table, self.db_manager.get_source_locales())

    def edit_project_source_locale(self):
        """
        Edits an existing project source locale.
        """
        self.edit_record('project_source_locales', self.source_locales_table, self.db_manager.get_source_locales())

    def delete_project_source_locale(self):
        """
        Deletes an existing project source locale.
        """
        self.delete_record('project_source_locales', self.source_locales_table)

    def add_project_target_locale(self):
        """
        Adds a new project target locale.
        """
        self.add_record('project_target_locales', self.target_locales_table, self.db_manager.get_target_locales())

    def edit_project_target_locale(self):
        """
        Edits an existing project target locale.
        """
        self.edit_record('project_target_locales', self.target_locales_table, self.db_manager.get_target_locales())

    def delete_project_target_locale(self):
        """
        Deletes an existing project target locale.
        """
        self.delete_record('project_target_locales', self.target_locales_table)

    def add_record(self, table_name, table, options):
        """
        Adds a new record to the specified table.

        :param table_name: The name of the table to add the record to.
        :param table: The table widget containing the record.
        :param options: The list of options for the selection field.
        """
        dialog = self.create_form_dialog(table_name, options)
        if dialog.exec() == QDialog.Accepted:
            values = [dialog.findChild(QLineEdit, field).text() for field in dialog.findChild(QFormLayout).itemAt(i, QFormLayout.FieldRole).widget() for i in range(dialog.findChild(QFormLayout).count())]
            columns = ', '.join([field[0] for field in self.db_manager.connection.execute(f'PRAGMA table_info({table_name})')])
            self.db_manager.insert_data(table_name, columns, values)
            self.populate_table(table, table_name, f'project_id = {self.project_id}')

    def edit_record(self, table_name, table, options):
        """
        Edits an existing record in the specified table.

        :param table_name: The name of the table to edit the record in.
        :param table: The table widget containing the record.
        :param options: The list of options for the selection field.
        """
        selected_index = table.selectionModel().currentIndex()
        if selected_index.isValid():
            record_id = table.model().data(table.model().index(selected_index.row(), 0))
            dialog = self.create_form_dialog(table_name, options, record_id)
            if dialog.exec() == QDialog.Accepted:
                values = [dialog.findChild(QLineEdit, field).text() for field in dialog.findChild(QFormLayout).itemAt(i, QFormLayout.FieldRole).widget() for i in range(dialog.findChild(QFormLayout).count())]
                set_statement = ', '.join([f"{field[0]} = '{value}'" for field, value in zip(self.db_manager.connection.execute(f'PRAGMA table_info({table_name})'), values)])
                self.db_manager.update_data(table_name, set_statement, f"id = {record_id}")
                self.populate_table(table, table_name, f'project_id = {self.project_id}')

    def delete_record(self, table_name, table):
        """
        Deletes an existing record from the specified table.

        :param table_name: The name of the table to delete the record from.
        :param table: The table widget containing the record.
        """
        selected_index = table.selectionModel().currentIndex()
        if selected_index.isValid():
            record_id = table.model().data(table.model().index(selected_index.row(), 0))
            self.db_manager.delete_data(table_name, f"id = {record_id}")
            self.populate_table(table, table_name, f'project_id = {self.project_id}')

    def create_form_dialog(self, table_name, options, record_id=None):
        """
        Creates a form dialog for adding or editing a record.

        :param table_name: The name of the table.
        :param options: The list of options for the selection field.
        :param record_id: The ID of the record to edit, or None to add a new record.
        :return: The form dialog.
        """
        dialog = QDialog(self)
        form_layout = QFormLayout()

        for field in self.db_manager.connection.execute(f'PRAGMA table_info({table_name})'):
            if field[1] == 'id':  # Skip the ID field
                continue

            if field[1] in ['file_type_id', 'source_locale_id', 'target_locale_id']:  # Handle selection fields
                combo_box = QComboBox()
                combo_box.addItems([str(option[0]) for option in options])
                form_layout.addRow(field[1], combo_box)
            else:
                line_edit = QLineEdit()
                line_edit.setObjectName(field[1])
                form_layout.addRow(field[1], line_edit)
                if record_id:
                    value = self.db_manager.get_data(table_name, f"id = {record_id}")[field[0]]
                    line_edit.setText(value)

        button_box = QDialogButtonBox(QDialogButtonBox.Ok | QDialogButtonBox.Cancel)
        button_box.accepted.connect(dialog.accept)
        button_box.rejected.connect(dialog.reject)

        form_layout.addRow(button_box)
        dialog.setLayout(form_layout)
        dialog.setWindowTitle(f"{'Edit' if record_id else 'Add'} Record")

        return dialog

    def localize_project(self):
        """
        Starts the localization process for the project.
        """
        # Example logic for updating the progress bar
        self.progress_bar.setValue(0)
        steps = [
            ("HTML Localization", 20),
            ("JS Localization", 40),
            ("EJS Localization", 60),
            ("TSX Localization", 80),
            ("CSV Localization", 100),
            ("PDF Localization", 100)
        ]
        for step, value in steps:
            # Perform the step
            self.progress_bar.setValue(value)
            self.progress_bar.setFormat(f"{step}... {value}%")
            QApplication.processEvents()  # Update the UI

        QMessageBox.information(self, "Localization Complete", "The project has been successfully localized.")
