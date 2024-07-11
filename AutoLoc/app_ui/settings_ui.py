from PySide6.QtWidgets import QWidget, QVBoxLayout, QHBoxLayout, QFormLayout, QLineEdit, QPushButton, QTableView, QMessageBox
from PySide6.QtCore import Qt
from PySide6.QtGui import QStandardItemModel, QStandardItem
from managers.db import DBManager

class SettingsUI(QWidget):
    def __init__(self):
        """
        Initializes the SettingsUI class.
        """
        super().__init__()
        self.db_manager = DBManager()
        self.init_ui()

    def init_ui(self):
        """
        Initializes the UI components and layout.
        """
        self.setWindowTitle("Settings")
        self.setGeometry(100, 100, 800, 600)

        layout = QVBoxLayout()

        self.file_types_table = self.create_table()
        self.source_locales_table = self.create_table()
        self.target_locales_table = self.create_table()

        self.populate_table(self.file_types_table, 'file_types')
        self.populate_table(self.source_locales_table, 'source_locales')
        self.populate_table(self.target_locales_table, 'target_locales')

        layout.addWidget(self.create_group_box("File Types", self.file_types_table, self.add_file_type, self.edit_file_type, self.delete_file_type))
        layout.addWidget(self.create_group_box("Source Locales", self.source_locales_table, self.add_source_locale, self.edit_source_locale, self.delete_source_locale))
        layout.addWidget(self.create_group_box("Target Locales", self.target_locales_table, self.add_target_locale, self.edit_target_locale, self.delete_target_locale))

        self.setLayout(layout)

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

    def populate_table(self, table, table_name):
        """
        Populates the table with data from the database.

        :param table: The table to populate.
        :param table_name: The name of the table in the database.
        """
        model = QStandardItemModel()
        records = self.db_manager.get_table_records(table_name)
        if records:
            headers = [description[0] for description in self.db_manager.connection.execute(f'PRAGMA table_info({table_name})')]
            model.setHorizontalHeaderLabels(headers)
            for record in records:
                items = [QStandardItem(str(field)) for field in record]
                model.appendRow(items)
        table.setModel(model)

    def add_file_type(self):
        """
        Adds a new file type.
        """
        self.add_record('file_types')

    def edit_file_type(self):
        """
        Edits an existing file type.
        """
        self.edit_record('file_types', self.file_types_table)

    def delete_file_type(self):
        """
        Deletes an existing file type.
        """
        self.delete_record('file_types', self.file_types_table)

    def add_source_locale(self):
        """
        Adds a new source locale.
        """
        self.add_record('source_locales')

    def edit_source_locale(self):
        """
        Edits an existing source locale.
        """
        self.edit_record('source_locales', self.source_locales_table)

    def delete_source_locale(self):
        """
        Deletes an existing source locale.
        """
        self.delete_record('source_locales', self.source_locales_table)

    def add_target_locale(self):
        """
        Adds a new target locale.
        """
        self.add_record('target_locales')

    def edit_target_locale(self):
        """
        Edits an existing target locale.
        """
        self.edit_record('target_locales', self.target_locales_table)

    def delete_target_locale(self):
        """
        Deletes an existing target locale.
        """
        self.delete_record('target_locales', self.target_locales_table)

    def add_record(self, table_name):
        """
        Adds a new record to the specified table.

        :param table_name: The name of the table to add the record to.
        """
        dialog = self.create_form_dialog(table_name)
        if dialog.exec() == QDialog.Accepted:
            values = [dialog.findChild(QLineEdit, field).text() for field in dialog.findChild(QFormLayout).itemAt(i, QFormLayout.FieldRole).widget() for i in range(dialog.findChild(QFormLayout).count())]
            columns = ', '.join([field[0] for field in self.db_manager.connection.execute(f'PRAGMA table_info({table_name})')])
            self.db_manager.insert_data(table_name, columns, values)
            self.populate_table(self.get_table_widget(table_name), table_name)

    def edit_record(self, table_name, table):
        """
        Edits an existing record in the specified table.

        :param table_name: The name of the table to edit the record in.
        :param table: The table widget containing the record.
        """
        selected_index = table.selectionModel().currentIndex()
        if selected_index.isValid():
            record_id = table.model().data(table.model().index(selected_index.row(), 0))
            dialog = self.create_form_dialog(table_name, record_id)
            if dialog.exec() == QDialog.Accepted:
                values = [dialog.findChild(QLineEdit, field).text() for field in dialog.findChild(QFormLayout).itemAt(i, QFormLayout.FieldRole).widget() for i in range(dialog.findChild(QFormLayout).count())]
                set_statement = ', '.join([f"{field[0]} = '{value}'" for field, value in zip(self.db_manager.connection.execute(f'PRAGMA table_info({table_name})'), values)])
                self.db_manager.update_data(table_name, set_statement, f"id = {record_id}")
                self.populate_table(table, table_name)

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
            self.populate_table(table, table_name)

    def create_form_dialog(self, table_name, record_id=None):
        """
        Creates a form dialog for adding or editing a record.

        :param table_name: The name of the table.
        :param record_id: The ID of the record to edit, or None to add a new record.
        :return: The form dialog.
        """
        dialog = QDialog(self)
        form_layout = QFormLayout()
        for field in self.db_manager.connection.execute(f'PRAGMA table_info({table_name})'):
            if field[1] != 'id':  # Skip the ID field
                line_edit = QLineEdit()
                line_edit.setObjectName(field[1])
                form_layout.addRow(field[1], line_edit)
                if record_id:
                    value = self.db_manager.get_data(table_name, f"id = {record_id}")[field[0]]
                    line_edit.setText(value)
        dialog.setLayout(form_layout)
        dialog.setWindowTitle(f"{'Edit' if record_id else 'Add'} Record")
        dialog.setFixedSize(300, 200)
        button_box = QDialogButtonBox(QDialogButtonBox.Ok | QDialogButtonBox.Cancel)
        button_box.accepted.connect(dialog.accept)
        button_box.rejected.connect(dialog.reject)
        form_layout.addRow(button_box)
        return dialog

    def get_table_widget(self, table_name):
        """
        Returns the table widget for the specified table name.

        :param table_name: The name of the table.
        :return: The table widget.
        """
        if table_name == 'file_types':
            return self.file_types_table
        elif table_name == 'source_locales':
            return self.source_locales_table
        elif table_name == 'target_locales':
            return self.target_locales_table


