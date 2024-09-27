# header_widget.py

from PySide6.QtWidgets import QWidget, QHBoxLayout, QVBoxLayout, QLabel, QSpacerItem, QSizePolicy
from PySide6.QtCore import Qt

class HeaderWidget(QWidget):
    """
    HeaderWidget class defines the layout and components of the app's header widget.
    It is rendered in the header_layout of the MainAppWindow class.
    """

    def __init__(self, parent=None):
        super().__init__(parent)
        
        # Set up the main layout for the header widget
        self.header_layout = QHBoxLayout()
        self.header_layout.setAlignment(Qt.AlignTop)
        self.header_layout.setContentsMargins(10, 10, 10, 10)
        
        # Create the app name and slogan layout
        self.app_name_layout = QVBoxLayout()
        self.app_name_label = QLabel("AutoLoc")
        self.app_name_label.setStyleSheet("font-size: 24px; font-weight: bold;")
        self.app_name_label.setFixedWidth(200)  # Fixed width for the app name label
        self.app_slogan_label = QLabel("By R-Translate")
        self.app_slogan_label.setStyleSheet("font-size: 12px; color: gray;")
        
        # Add app name and slogan to the app name layout
        self.app_name_layout.addWidget(self.app_name_label)
        self.app_name_layout.addWidget(self.app_slogan_label)
        
        # Create the module name and description layout
        self.module_name_layout = QVBoxLayout()
        self.module_name_layout.setAlignment(Qt.AlignLeft)  # Aligns the layout to the left

        # Ensure the labels within the module_name_layout are left-aligned
        self.module_name_label = QLabel("Current Module Name")
        self.module_name_label.setAlignment(Qt.AlignLeft)  # Left-align the text inside the label
        self.module_name_label.setStyleSheet("font-size: 16px; font-weight: bold;")
        
        # Adjusting module_desc_label size policy and maximum width
        self.module_desc_label = QLabel("Module description text goes here …")
        self.module_desc_label.setAlignment(Qt.AlignLeft)  # Left-align the text inside the label
        self.module_desc_label.setWordWrap(True)
        self.module_desc_label.setStyleSheet("font-size: 12px; color: darkgray;")
        self.module_desc_label.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Preferred)
        self.module_desc_label.setMaximumWidth(800)  # Adjust this value based on available space
        
        # Add module name and description to the module name layout
        self.module_name_layout.addWidget(self.module_name_label)
        self.module_name_layout.addWidget(self.module_desc_label)
        
        # Add app name layout and module name layout to the main header layout with specific stretch factors
        self.header_layout.addLayout(self.app_name_layout)  # No stretch factor, fixed size
        self.header_layout.addLayout(self.module_name_layout, 1)  # 1 part of the remaining space
        
        # Set the main layout to the widget
        self.setLayout(self.header_layout)
    
    def set_module_info(self, module_name, module_description):
        """
        Updates the module name and description in the header.
        
        :param module_name: The name of the current module.
        :param module_description: The description of the current module.
        """
        self.module_name_label.setText(module_name)
        self.module_desc_label.setText(module_description)
