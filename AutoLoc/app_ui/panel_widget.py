from PySide6.QtWidgets import QWidget, QStackedWidget, QVBoxLayout, QMessageBox
from app_ui.home_widget import HomeWidget
from app_ui.project_widgets import ProjectsStackedWidget
from app_ui.source_code_widgets import SourceCodesStackedWidget
from app_ui.target_locale_widgets import TargetLocalesWidget
from app_ui.setting_widgets import SettingsStackedWidget

class PanelWidget(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.init_ui()

    def init_ui(self):
        """Initialize the UI components and layout for the PanelWidget."""
        # Create main layout for the panel
        self.panel_layout = QVBoxLayout()
        self.panel_layout.setContentsMargins(0, 0, 0, 0)

        # Create and set up QStackedWidget
        self.panel_stacked_widget = QStackedWidget()
        
        # Add all the required widget classes to the stacked widget
        self.home_widget = HomeWidget()
        self.projects_stacked_widget = ProjectsStackedWidget()
        self.source_codes_stacked_widget = SourceCodesStackedWidget()
        self.target_locales_widget = TargetLocalesWidget()
        self.settings_stacked_widget = SettingsStackedWidget()

        # Add widgets to the stacked widget
        self.panel_stacked_widget.addWidget(self.home_widget)  # Index 0
        self.panel_stacked_widget.addWidget(self.projects_stacked_widget)  # Index 1
        self.panel_stacked_widget.addWidget(self.source_codes_stacked_widget)  # Index 2
        self.panel_stacked_widget.addWidget(self.target_locales_widget)  # Index 3
        self.panel_stacked_widget.addWidget(self.settings_stacked_widget)  # Index 4

        # Add stacked widget to the panel layout
        self.panel_layout.addWidget(self.panel_stacked_widget)

        # Set home_widget as the default displayed widget
        self.panel_stacked_widget.setCurrentWidget(self.home_widget)

    def set_current_index(self, index: int):
        """Set the current index of the QStackedWidget to display the desired widget."""
        try:
            self.panel_stacked_widget.setCurrentIndex(index)
        except Exception as e:
            QMessageBox.critical(
                self,
                "Index Error - PanelWidget",
                f"An error occurred while setting the current index:\n{str(e)}",
                QMessageBox.Ok
            )

    def set_current_widget(self, widget: QWidget):
        """Set the current widget of the QStackedWidget to display the desired widget."""
        try:
            self.panel_stacked_widget.setCurrentWidget(widget)
        except Exception as e:
            QMessageBox.critical(
                self,
                "Widget Error - PanelWidget",
                f"An error occurred while setting the current widget:\n{str(e)}",
                QMessageBox.Ok
            )
