import os
import sys

# Add project root directory to PYTHONPATH if not already present
project_root = os.path.abspath(os.path.dirname(__file__))
if project_root not in sys.path:
    sys.path.insert(0, project_root)


from managers.setting_manager import SettingManager

setting_manager = SettingManager()


settings = {'dark_mode': False, 'duplicate_html': False, 'use_key_namespace': True}
updated_settings = setting_manager.update_app_settings(settings)

print(f"Updated settings: {updated_settings}")