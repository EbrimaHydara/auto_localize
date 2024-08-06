import sys
import os

# Add the project root to the PYTHONPATH
project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
if project_root not in sys.path:
    sys.path.insert(0, project_root)


# Import the AILocalizer class
from ai_localizers.ai_localizer import AILocalizer

# Define the target and output folders
target_folder = 'files_to_loc/ejs'  # Change this to your target folder path
output_folder = 'loced_files/ejs'   # Change this to your desired output folder path

# Create an instance of AILocalizer
file_extension = ".ejs"
ai_localizer = AILocalizer(target_folder, output_folder, file_extension=file_extension)

# Run the localization process
ai_localizer.localize_files()

# The JS files in the target folder will be processed, and the localized files
# and extracted strings will be saved in the output folder.
