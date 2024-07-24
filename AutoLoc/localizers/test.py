import sys
import os

# Add the project root to the PYTHONPATH
project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
if project_root not in sys.path:
    sys.path.insert(0, project_root)

from html_file_localizer import HTMLFileLocalizer
# from js_file_localizer import JSFileLocalizer

try:
    html_localizer = HTMLFileLocalizer(1)
    if html_localizer.contains_translatable_tags():
        print(html_localizer.contains_translatable_tags())
        html_localizer.localize_html_files()

except Exception as e:
    print(f"Error: {e}")
