from PySide6.QtWidgets import QWidget, QVBoxLayout, QTableView, QPushButton, QHBoxLayout, QMessageBox
from PySide6.QtCore import Qt
from PySide6.QtGui import QStandardItemModel, QStandardItem
from managers.db import DBManager
from app_ui.project_ui import ProjectUI

class ProjectListUI(QWidget):
    def __init__(self, parent=None):
        """
        Initializes the ProjectListUI class.
        """
        super().__init__(parent)
        self.db_manager = DBManager()
        self.init_ui()

    def init_ui(self):
        """
        Initializes the UI components and layout.
        """
        self.setWindowTitle("Project List")
        self.setGeometry(100, 100, 800, 600)

        layout = QVBoxLayout()

        self.projects_table = self.create_table()
        self.populate_table(self.projects_table, 'projects')

        layout.addWidget(self.projects_table)
        layout.addLayout(self.create_buttons())

        self.setLayout(layout)

    def create_table(self):
        """
        Creates a table view with a standard item model.

        :return: The table view.
        """
        table = QTableView()
        table.setEditTriggers(QTableView.NoEditTriggers)
        table.setSelectionBehavior(QTableView.SelectRows)
        table.setSelectionMode(QTableView.SingleSelection)
        table.doubleClicked.connect(self.open_project)
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

    def create_buttons(self):
        """
        Creates the layout with buttons for adding, editing, and deleting projects.

        :return: The layout with buttons.
        """
        button_layout = QHBoxLayout()
        add_button = QPushButton("Add Project")
        add_button.clicked.connect(self.add_project)
        edit_button = QPushButton("Edit Project")
        edit_button.clicked.connect(self.edit_project)
        delete_button = QPushButton("Delete Project")
        delete_button.clicked.connect(self.delete_project)

        button_layout.addWidget(add_button)
        button_layout.addWidget(edit_button)
        button_layout.addWidget(delete_button)

        return button_layout

    def add_project(self):
        """
        Adds a new project.
        """
        self.project_dialog('add')

    def edit_project(self):
        """
        Edits an existing project.
        """
        selected_index = self.projects_table.selectionModel().currentIndex()
        if selected_index.isValid():
            project_id = self.projects_table.model().data(self.projects_table.model().index(selected_index.row(), 0))
            self.project_dialog('edit', project_id)
        else:
            QMessageBox.warning(self, "No Selection", "Please select a project to edit.")

    def delete_project(self):
        """
        Deletes an existing project.
        """
        selected_index = self.projects_table.selectionModel().currentIndex()
        if selected_index.isValid():
            project_id = self.projects_table.model().data(self.projects_table.model().index(selected_index.row(), 0))
            self.db_manager.delete_project(project_id)
            self.populate_table(self.projects_table, 'projects')
        else:
            QMessageBox.warning(self, "No Selection", "Please select a project to delete.")

    def open_project(self, index):
        """
        Opens the selected project.

        :param index: The index of the selected project in the table.
        """
        project_id = self.projects_table.model().data(self.projects_table.model().index(index.row(), 0))
        self.parent().setCentralWidget(ProjectUI(project_id))

    def project_dialog(self, action, project_id=None):
        """
        Creates a dialog for adding or editing a project.

        :param action: The action to perform ('add' or 'edit').
        :param project_id: The ID of the project to edit, or None to add a new project.
        """
        dialog = QDialog(self)
        form_layout = QFormLayout()

        name_edit = QLineEdit()
        description_edit = QLineEdit()
        root_dir_edit = QLineEdit()

        form_layout.addRow("Name:", name_edit)
        form_layout.addRow("Description:", description_edit)
        form_layout.addRow("Root Directory:", root_dir_edit)

        if action == 'edit' and project_id:
            project_data = self.db_manager.get_project(project_id)
            if project_data:
                name_edit.setText(project_data[1])
                description_edit.setText(project_data[2])
                root_dir_edit.setText(project_data[3])

        button_box = QDialogButtonBox(QDialogButtonBox.Ok | QDialogButtonBox.Cancel)
        button_box.accepted.connect(dialog.accept)
        button_box.rejected.connect(dialog.reject)

        form_layout.addRow(button_box)
        dialog.setLayout(form_layout)
        dialog.setWindowTitle("Add Project" if action == 'add' else "Edit Project")

        if dialog.exec() == QDialog.Accepted:
            name = name_edit.text()
            description = description_edit.text()
            root_dir = root_dir_edit.text()

            if action == 'add':
                self.db_manager.insert_project(name, description, root_dir)
            elif action == 'edit' and project_id:
                self.db_manager.update_project(project_id, name, description, root_dir)

            self.populate_table(self.projects_table, 'projects')
