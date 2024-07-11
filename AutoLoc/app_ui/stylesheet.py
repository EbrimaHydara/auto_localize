from PySide6.QtWidgets import QApplication

class AppStyler:
    def __init__(self):
        """
        Initializes the AppStyler class.
        """
        self.stylesheet = """
            /* General styling for the app */
            QWidget {
                font-family: Arial, sans-serif;
                font-size: 14px;
            }
            
            /* Styling for QTableView */
            QTableView {
                border: 1px solid #d4d4d4;
                gridline-color: #d4d4d4;
                selection-background-color: #d4d4d4;
            }
            QTableView::item:selected {
                background-color: #d4d4d4;
            }

            /* Styling for QGroupBox */
            QGroupBox {
                border: 1px solid #d4d4d4;
                border-radius: 5px;
                margin-top: 10px;
                padding: 10px;
            }
            QGroupBox::title {
                subcontrol-origin: margin;
                subcontrol-position: top center;
                padding: 0 3px;
                background-color: #f5f5f5;
            }

            /* Styling for QPushButton */
            QPushButton {
                background-color: #f5f5f5;
                border: 1px solid #d4d4d4;
                border-radius: 3px;
                padding: 5px 10px;
                margin: 5px;
            }
            QPushButton:hover {
                background-color: #e0e0e0;
            }
            QPushButton:pressed {
                background-color: #d4d4d4;
            }

            /* Styling for QLineEdit */
            QLineEdit {
                border: 1px solid #d4d4d4;
                border-radius: 3px;
                padding: 5px;
            }

            /* Styling for QFormLayout */
            QFormLayout {
                margin: 10px;
            }

            /* Styling for QProgressBar */
            QProgressBar {
                border: 1px solid #d4d4d4;
                border-radius: 5px;
                text-align: center;
            }
            QProgressBar::chunk {
                background-color: #4caf50;
                width: 20px;
            }

            /* Styling for QMessageBox */
            QMessageBox {
                background-color: #f5f5f5;
            }
        """

    def apply_stylesheet(self, app: QApplication):
        """
        Applies the stylesheet to the given QApplication.

        :param app: The QApplication instance.
        """
        app.setStyleSheet(self.stylesheet)
