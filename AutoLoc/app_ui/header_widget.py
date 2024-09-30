from PySide6.QtWidgets import QWidget, QLabel, QHBoxLayout, QVBoxLayout
from PySide6.QtCore import Qt
from app_ui.styles import Styles

class HeaderWidget(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.init_ui()

    def init_ui(self):
        """Initialize the UI components and layout for the HeaderWidget."""
        # Create main header layout
        self.header_widget_layout = QHBoxLayout(self)
        self.header_widget_layout.setContentsMargins(0, 0, 0, 0)
        self.header_widget_layout.setSpacing(10)  # Optional: Adjust spacing between brand and module layouts

        # Create brand layout and its components
        self.brand_layout = QVBoxLayout()
        self.app_name_label = QLabel("AutoLoc")
        self.app_slogan_label = QLabel("By RTranslate")
        self.app_name_label.setFixedWidth(150)
        self.app_slogan_label.setFixedWidth(150)
        self.app_name_label.setAlignment(Qt.AlignCenter)
        self.app_slogan_label.setAlignment(Qt.AlignCenter)

        # Apply styles
        self.apply_styling()

        # Add labels to brand layout
        self.brand_layout.addWidget(self.app_name_label)
        self.brand_layout.addWidget(self.app_slogan_label)

        # Add brand layout to the header widget layout
        self.header_widget_layout.addLayout(self.brand_layout)

        # Create module layout and its component
        self.module_layout = QHBoxLayout()
        self.module_label = QLabel("Smart Automatic Localization")
        self.module_label.setAlignment(Qt.AlignLeft | Qt.AlignVCenter)

        # Add module label to module layout
        self.module_layout.addWidget(self.module_label)

        # Add module layout to the header widget layout
        self.header_widget_layout.addLayout(self.module_layout)

        # Stretch factor to make module_layout take remaining space
        self.header_widget_layout.setStretch(0, 0)  # Brand layout stretch factor
        self.header_widget_layout.setStretch(1, 1)  # Module layout stretch factor

    def set_module_label(self, label: str):
        """Set a new label for the module_label."""
        self.module_label.setText(label)

    def apply_styling(self):
        """Apply styling to the HeaderWidget from the Styles class."""
        self.setStyleSheet(Styles.header_widget_style())
