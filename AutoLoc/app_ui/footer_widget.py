# footer_widget.py

from PySide6.QtWidgets import QWidget, QHBoxLayout, QLabel, QCheckBox
from PySide6.QtCore import Qt, QDate

class FooterWidget(QWidget):
    """
    FooterWidget class defines the layout and components of the app's footer widget.
    It is rendered in the footer_layout of the MainAppWindow class.
    """

    def __init__(self, parent=None):
        super().__init__(parent)
        
        # Set up the main layout for the footer widget
        self.footer_layout = QHBoxLayout()
        self.footer_layout.setAlignment(Qt.AlignCenter)
        self.footer_layout.setContentsMargins(10, 10, 10, 10)
        self.footer_layout.setSpacing(20)

        # Dark mode checkbox
        self.dark_mode_checkbox = QCheckBox("Dark Mode")
        self.dark_mode_checkbox.setToolTip("Toggle dark mode")

        # Copyright info label
        current_year = QDate.currentDate().year()
        self.copyright_info_label = QLabel(f"© {current_year} Rakuten")

        # App version label
        self.app_version_label = QLabel("V1.0.0")

        # Adding widgets to the footer layout
        self.footer_layout.addWidget(self.dark_mode_checkbox)
        self.footer_layout.addStretch()  # Adds space between elements
        self.footer_layout.addWidget(self.copyright_info_label)
        self.footer_layout.addStretch()  # Adds space between elements
        self.footer_layout.addWidget(self.app_version_label)

        # Set the main layout to the widget
        self.setLayout(self.footer_layout)
    
    def set_dark_mode_checked(self, checked):
        """
        Sets the state of the dark mode checkbox.
        
        :param checked: Boolean indicating whether the checkbox should be checked.
        """
        self.dark_mode_checkbox.setChecked(checked)

    def connect_dark_mode_toggle(self, function):
        """
        Connects a function to the dark mode checkbox's toggled signal.
        
        :param function: The function to connect to the toggled signal.
        """
        self.dark_mode_checkbox.toggled.connect(function)
