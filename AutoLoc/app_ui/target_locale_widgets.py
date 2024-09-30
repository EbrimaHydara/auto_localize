from PySide6.QtWidgets import (
    QWidget, QVBoxLayout, QLabel, QTableWidget, QTableWidgetItem, QMessageBox, QHeaderView
)
from PySide6.QtCore import Qt
from managers.target_locale_manager import TargetLocaleManager
from managers.source_code_manager import SourceCodeManager
from app_ui.header_widget import HeaderWidget
from app_ui.styles import Styles

class TargetLocalesWidget(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.target_locale_manager = TargetLocaleManager()
        self.source_code_manager = SourceCodeManager()
        self.init_ui()
        self.load_target_locales()

    def init_ui(self):
        """Initialize the UI components and layout for the TargetLocalesWidget."""
        self.setWindowTitle("Target Locales")
        # self.setFixedSize(600, 400)

        # Header widget
        self.header_widget = HeaderWidget()
        self.header_widget.set_module_label("Target Locales")

        # Set general styling for this widget
        self.setStyleSheet(Styles.general_style())

        # Create main layout
        layout = QVBoxLayout(self)
        layout.setContentsMargins(10, 10, 10, 10)
        layout.setSpacing(15)

        # Page header
        header_label = QLabel("Target Locales")
        header_label.setAlignment(Qt.AlignCenter)
        header_label.setStyleSheet("font-size: 18px; font-weight: bold;")
        layout.addWidget(header_label)

        # Table for target locales
        self.target_locales_table = QTableWidget()
        self.target_locales_table.setColumnCount(3)  # 3 Columns: Name, Code, Source Code
        self.target_locales_table.setHorizontalHeaderLabels(["Name", "Code", "Source Code"])
        self.target_locales_table.horizontalHeader().setSectionResizeMode(0, QHeaderView.Stretch)
        self.target_locales_table.horizontalHeader().setSectionResizeMode(1, QHeaderView.Stretch)
        self.target_locales_table.horizontalHeader().setSectionResizeMode(2, QHeaderView.Stretch)
        self.target_locales_table.verticalHeader().setVisible(False)
        self.target_locales_table.setEditTriggers(QTableWidget.NoEditTriggers)
        self.target_locales_table.setSelectionBehavior(QTableWidget.SelectRows)
        self.target_locales_table.setSelectionMode(QTableWidget.SingleSelection)
        
        # Add table to layout
        layout.addWidget(self.target_locales_table)

        # Set layout
        self.setLayout(layout)

    def load_target_locales(self):
        """Load target locales from the database and populate the table."""
        try:
            target_locales = self.target_locale_manager.get_target_locales()
            self.target_locales_table.setRowCount(len(target_locales))
            for row, locale in enumerate(target_locales):
                # Target Locale Name
                name_item = QTableWidgetItem(locale['name'])
                name_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.target_locales_table.setItem(row, 0, name_item)

                # Target Locale Code
                code_item = QTableWidgetItem(locale['code'])
                code_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.target_locales_table.setItem(row, 1, code_item)

                # Source Code Name
                source_code = self.source_code_manager.get_source_code(locale['source_code_id'])
                source_code_item = QTableWidgetItem(source_code['name'] if source_code else 'N/A')
                source_code_item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
                self.target_locales_table.setItem(row, 2, source_code_item)

        except Exception as e:
            QMessageBox.critical(self, "Load Target Locales Error", 
                                 f"An error occurred while loading target locales:\n{str(e)}", 
                                 QMessageBox.Ok)
