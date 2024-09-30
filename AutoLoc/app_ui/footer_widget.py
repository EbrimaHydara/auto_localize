from PySide6.QtWidgets import QWidget, QLabel, QHBoxLayout
from PySide6.QtCore import Qt, QDate
from app_ui.styles import Styles

class FooterWidget(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.init_ui()

    def init_ui(self):
        """Initialize the UI components and layout for the FooterWidget."""
        # Create main layout for the footer
        self.footer_widget_layout = QHBoxLayout(self)
        self.footer_widget_layout.setContentsMargins(10, 5, 10, 5)  # Optional: Adjust margins as needed

        # Create and add copyright info label
        current_year = QDate.currentDate().year()
        self.copyright_info_label = QLabel(f"© Rakuten {current_year}")
        self.copyright_info_label.setAlignment(Qt.AlignLeft)

        # Create and add app version label
        self.app_version_label = QLabel("V1.0.0")
        self.app_version_label.setAlignment(Qt.AlignRight)

        # Apply styles
        self.apply_styling()

        # Add labels to the footer layout
        self.footer_widget_layout.addWidget(self.copyright_info_label)
        self.footer_widget_layout.addStretch(1)  # Add stretch between labels
        self.footer_widget_layout.addWidget(self.app_version_label)

    def apply_styling(self):
        """Apply styling to the FooterWidget from the Styles class."""
        self.setStyleSheet(Styles.footer_widget_style())
