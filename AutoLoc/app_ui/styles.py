class Styles:
    """
    The Styles class defines CSS styles for the app.
    """

    @staticmethod
    def apply_mode(mode):
        """
        Applies the given UI mode ('Light Mode' or 'Dark Mode').
        :param mode: The UI mode to apply
        """
        if mode == "Light Mode":
            # Set styles for light mode
            print("Applying Light Mode...")
        elif mode == "Dark Mode":
            # Set styles for dark mode
            print("Applying Dark Mode...")
        else:
            raise ValueError("Invalid mode specified for Styles.")
