from PySide6.QtWidgets import QApplication, QMainWindow
from app_ui.main_ui import MainUI
from app_ui.stylesheet import AppStyler

class MainAppWindow(QMainWindow):
    def __init__(self):
        """
        Initializes the MainAppWindow class.
        """
        super().__init__()
        self.setWindowTitle("Auto Localization App")
        self.setGeometry(100, 100, 1200, 800)

        self.main_ui = MainUI()
        self.setCentralWidget(self.main_ui)

        self.apply_styles()

    def apply_styles(self):
        """
        Applies the stylesheet to the application.
        """
        app_styler = AppStyler()
        app_styler.apply_stylesheet(QApplication.instance())

def main():
    """
    The main entry point of the application.
    """
    import sys
    app = QApplication(sys.argv)

    main_window = MainAppWindow()
    main_window.show()

    sys.exit(app.exec())

if __name__ == "__main__":
    main()
