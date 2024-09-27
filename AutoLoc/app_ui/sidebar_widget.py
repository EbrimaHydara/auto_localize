# sidebar_widget.py

from PySide6.QtWidgets import QWidget, QVBoxLayout, QPushButton, QSpacerItem, QSizePolicy
from PySide6.QtCore import Qt

class SideBarWidget(QWidget):
    """
    SideBarWidget class defines the layout and components of the app's sidebar widget.
    It is rendered in the side_bar_layout of the MainAppWindow class.
    """

    def __init__(self, parent=None):
        super().__init__(parent)
        
        # Set up the main layout for the sidebar widget
        self.sidebar_layout = QVBoxLayout()
        self.sidebar_layout.setAlignment(Qt.AlignTop)
        self.sidebar_layout.setContentsMargins(10, 10, 10, 10)
        self.sidebar_layout.setSpacing(10)

        # Create and add all the buttons to the sidebar layout
        self.home_button = self.create_button("Home")
        self.projects_button = self.create_button("Projects")
        self.source_codes_button = self.create_button("Source Codes")
        self.locales_button = self.create_button("Locales")
        self.settings_button = self.create_button("Settings")
        self.exit_button = self.create_button("Exit")

        # Adding buttons to the sidebar layout
        self.sidebar_layout.addWidget(self.home_button)
        self.sidebar_layout.addWidget(self.projects_button)
        self.sidebar_layout.addWidget(self.source_codes_button)
        self.sidebar_layout.addWidget(self.locales_button)
        self.sidebar_layout.addWidget(self.settings_button)
        
        # Add a spacer item to push the exit button to the bottom
        self.sidebar_layout.addSpacerItem(QSpacerItem(20, 40, QSizePolicy.Minimum, QSizePolicy.Expanding))
        
        # Adding exit button at the bottom of the sidebar
        self.sidebar_layout.addWidget(self.exit_button)

        # Set the main layout to the widget
        self.setLayout(self.sidebar_layout)

    def create_button(self, text):
        """
        Helper method to create a QPushButton with a standard style.
        
        :param text: The text to display on the button.
        :return: A QPushButton instance with the given text.
        """
        button = QPushButton(text)
        button.setStyleSheet("font-size: 14px; padding: 10px;")
        button.setFixedHeight(40)
        return button
