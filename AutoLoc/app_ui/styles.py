class Styles:
    """
    The Styles class centralizes all the CSS styling definitions for the AutoLoc app.
    It provides methods to return CSS styles for different widgets and layouts.
    """

    @staticmethod
    def main_window_style():
        """
        Styles for the MainAppWindow.
        """
        return """
        QMainWindow {
            background-color: #f0f0f0;  /* Light grey background for the main window */
            font-family: "Segoe UI", Arial, Helvetica, Sans-Serif;  /* Set default font */
            font-size: 12px;  /* Default font size */
        }
        """

    @staticmethod
    def header_widget_style():
        """
        Styles for the HeaderWidget.
        """
        return """
        HeaderWidget {
            background-color: #003366;  /* Dark blue background for the header */
            color: white;  /* White text color */
        }
        QLabel#app_name_label {
            font-size: 20px;  /* Larger font size for the app name */
            font-weight: bold;  /* Bold font weight */
        }
        QLabel#app_slogan_label {
            font-size: 12px;  /* Smaller font size for the app slogan */
        }
        QLabel#module_label {
            font-size: 16px;  /* Medium font size for the module name */
            font-weight: bold;  /* Bold font weight */
        }
        """

    @staticmethod
    def sidebar_widget_style():
        """
        Styles for the SideBarWidget.
        """
        return """
        SideBarWidget {
            background-color: #f7f7f7;  /* Very light grey background for the sidebar */
            border-right: 1px solid #d9d9d9;  /* Thin border on the right */
        }
        QPushButton {
            font-size: 14px;  /* Default font size */
            padding: 10px;  /* Padding inside buttons */
            border: none;  /* No border */
            text-align: left;  /* Align text to the left */
            color: #333;  /* Dark grey text color */
        }
        QPushButton:hover {
            background-color: #e0e0e0;  /* Slightly darker background on hover */
        }
        QPushButton:pressed {
            background-color: #c0c0c0;  /* Even darker background when pressed */
        }
        """

    @staticmethod
    def footer_widget_style():
        """
        Styles for the FooterWidget.
        """
        return """
        FooterWidget {
            background-color: #f0f0f0;  /* Light grey background for the footer */
            color: #555;  /* Medium grey text color */
        }
        QLabel {
            font-size: 12px;  /* Default font size */
        }
        """

    @staticmethod
    def home_widget_style():
        """
        Styles for the HomeWidget.
        """
        return """
        HomeWidget {
            background-color: #ffffff;  /* White background for the home widget */
            padding: 20px;  /* Padding around the widget */
        }
        QPushButton {
            font-size: 14px;  /* Default font size */
            padding: 20px;  /* Large padding for buttons */
            border: 2px solid #d9d9d9;  /* Light grey border */
            border-radius: 10px;  /* Rounded corners */
            background-color: #f9f9f9;  /* Very light grey background */
            color: #333;  /* Dark grey text color */
        }
        QPushButton:hover {
            background-color: #e6f2ff;  /* Light blue background on hover */
            border-color: #99ccff;  /* Slightly darker blue border on hover */
        }
        QPushButton:pressed {
            background-color: #cce0ff;  /* Darker blue background when pressed */
            border-color: #66b2ff;  /* Even darker blue border when pressed */
        }
        """

    @staticmethod
    def home_button_style():
        """
        Styles for the buttons in the HomeWidget.
        """
        return """
        QPushButton {
            font-size: 14px;  /* Default font size */
            padding: 15px;  /* Larger padding for buttons */
            border: 1px solid #d9d9d9;  /* Light grey border */
            border-radius: 8px;  /* Rounded corners */
            background-color: #f7f7f7;  /* Very light grey background */
            color: #333;  /* Dark grey text color */
        }
        QPushButton:hover {
            background-color: #f0f0f0;  /* Slightly darker background on hover */
        }
        QPushButton:pressed {
            background-color: #e0e0e0;  /* Darker background when pressed */
        }
        """

    @staticmethod
    def error_message_box_style():
        """
        Styles for QMessageBox error popups.
        """
        return """
        QMessageBox {
            background-color: #ffcccc;  /* Light red background for error messages */
            color: #cc0000;  /* Dark red text color */
        }
        QMessageBox QLabel {
            font-size: 14px;  /* Font size for the message */
            font-weight: bold;  /* Bold font */
        }
        QMessageBox QPushButton {
            background-color: #ff6666;  /* Red background for buttons */
            color: white;  /* White text */
            border: none;  /* No border */
            padding: 8px;  /* Padding inside buttons */
            border-radius: 5px;  /* Rounded corners */
        }
        QMessageBox QPushButton:hover {
            background-color: #ff3333;  /* Darker red background on hover */
        }
        """

    @staticmethod
    def general_style():
        """
        General styling for all QWidget classes in the AutoLoc app.
        This style will be applied to all subsequent widget classes developed.
        """
        return """
        QWidget {
            background-color: #ffffff;  /* Default white background for all widgets */
            font-family: "Segoe UI", Arial, Helvetica, Sans-Serif;  /* Default font family */
            font-size: 14px;  /* Default font size */
            color: #333333;  /* Default text color */
        }
        QLabel {
            font-size: 14px;  /* Consistent label font size */
            color: #333333;  /* Default label text color */
            padding: 2px;  /* Padding for labels */
        }
        QPushButton {
            font-size: 14px;  /* Button text font size */
            background-color: #f0f0f0;  /* Light grey button background */
            border: 1px solid #d9d9d9;  /* Light grey border */
            border-radius: 5px;  /* Rounded corners */
            padding: 8px;  /* Padding inside buttons */
            color: #333333;  /* Button text color */
        }
        QPushButton:hover {
            background-color: #e0e0e0;  /* Slightly darker background on hover */
        }
        QPushButton:pressed {
            background-color: #d0d0d0;  /* Even darker background when pressed */
        }
        QLineEdit, QComboBox {
            font-size: 14px;  /* Input fields font size */
            padding: 5px;  /* Padding inside input fields */
            border: 1px solid #d9d9d9;  /* Light grey border */
            border-radius: 5px;  /* Rounded corners */
        }
        QLineEdit:focus, QComboBox:focus {
            border-color: #66b2ff;  /* Blue border on focus */
            background-color: #f0faff;  /* Light blue background on focus */
        }
        QScrollBar {
            background-color: #f0f0f0;  /* Light grey background for scrollbars */
        }
        QScrollBar::handle {
            background-color: #d9d9d9;  /* Grey handle */
        }
        QScrollBar::handle:hover {
            background-color: #c0c0c0;  /* Darker grey on hover */
        }
        """


# Usage Example:
# You can apply the styles to widgets like this in other classes:
# self.setStyleSheet(Styles.main_window_style())
# self.all_projects_button.setStyleSheet(Styles.home_button_style())
