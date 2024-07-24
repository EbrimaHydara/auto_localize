import sys
import os

# Add the project root to the PYTHONPATH
project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
if project_root not in sys.path:
    sys.path.insert(0, project_root)

from db import DBManager

try:

    db_manager = DBManager()

    # db_manager.reinit_db()

    # db_manager.insert_project("RMI Project","Rakuten Mobile Localization Project","../../../RMI_Source_Files_for_Test/","https://network.mobile.rakuten.co.jp")
    # print(db_manager.get_projects())

    # # Get all source locales
    # source_locales = db_manager.get_source_locales()
    # print("All source locales:", source_locales)

    # # Get a specific source locale by ID
    # source_locale = db_manager.get_source_locale(1)
    # print("Source locale with ID 1:", source_locale)

    # # Get source locales for a project
    # project_source_locales = db_manager.get_project_source_locales(1)
    # print("Source locales for project with ID 1:", project_source_locales)

    # # Insert a source locale to a project
    # db_manager.insert_project_source_locale(1, source_locale[0][1], source_locale[0][2], source_locale[0][3])
    # print(f"Inserted source locale to project with ID 1: {source_locale}")

    # # Get source locales for a project
    # project_source_locales = db_manager.get_project_source_locales(1)
    # print("Source locales for project with ID 1:", project_source_locales)

    # # Get a specific target locale by ID
    # target_locale = db_manager.get_target_locale(2)
    # print("Target locale with ID 2:", target_locale)

    # # Get target locales for a project
    # project_target_locales = db_manager.get_project_target_locales(1)
    # print("Target locales for project with ID 1:", project_target_locales)

    # # Insert a target locale to a project
    # db_manager.insert_project_target_locale(1, target_locale[0][1], target_locale[0][2], target_locale[0][3])
    # print(f"Inserted target locale to project with ID 1: {target_locale}")

    # # Get target locales for a project
    # project_target_locales = db_manager.get_project_target_locales(1)
    # print("Target locales for project with ID 1:", project_target_locales)

except Exception as e:
    print(f"Error: {e}")



