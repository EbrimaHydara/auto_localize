# setup.py
import os
from managers.setting_manager import SettingManager
from managers.project_manager import ProjectManager
from managers.source_code_manager import SourceCodeManager
from managers.target_locale_manager import TargetLocaleManager

def setup_autoloc():
    # Initialize managers
    setting_manager = SettingManager()
    project_manager = ProjectManager()
    source_code_manager = SourceCodeManager()
    target_locale_manager = TargetLocaleManager()

    # Set up a new Project
    project_name="Rakuten Mobile Project"
    client="Rakuten Mobile Inc."
    description="A project to localize RMI source code."
    status="In Progress"
    start_date="2024-11-01"
    end_date="2024-11-30"
    lead_engineer="Engineer A"

    # Avoid duplicating project names
    all_projects = project_manager.get_projects()
    existing_project = next((project for project in all_projects if project['name'] == project_name), None)

    if not existing_project:
        # Add a project
        project_id = project_manager.add_project(
            name=project_name,
            client=client,
            description=description,
            status=status,
            start_date=start_date,
            end_date=end_date,
            lead_engineer=lead_engineer
        )

        # Get the id record from sqlite3.Row object
        project_id = project_id['id'] 

        # Set up a new Source Code
        source_code_name="Rakuten Mobile Source Code"
        code_type="Web App"
        source_locale="ja-JP"

        # Avoid duplicating source code names for the same project
        all_source_codes = source_code_manager.get_source_codes()
        existing_source_code = next(
            (source_code for source_code in all_source_codes 
            if source_code['name'] == source_code_name and source_code['project_id'] == project_id), 
            None
        )

        if not existing_source_code:
            # Add a source code entry
            source_code_id = source_code_manager.add_source_code(
                project_id=project_id,
                name=source_code_name,
                code_type=code_type,
                source_locale=source_locale
            )

            # Get the id record from sqlite3.Row object
            source_code_id = source_code_id['id'] 

            # Define and add source code files (replace '<specified path here>' with actual path relative to this file.)

            # source_code_path = "<specified path here>"
            source_code_path = "../../L10n_Test_Repo/RMI_Test_Files/src/"
            if not source_code_manager.get_original_source_code_path(source_code_id):
                if not os.path.exists(source_code_path):
                    raise FileNotFoundError(f"Specified source code path not found: {source_code_path}")
                source_code_manager.add_source_code_files(source_code_id, source_code_path)

            # Define and add target locales
            target_locales = [
                ('English (US)', 'en-US'),
                ('Simplified Chinese (CN)', 'zh-CN'),
                ('Traditional Chinese (TW)', 'zh-TW'),
                ('Korean (South Korea)', 'ko-KR')
            ]
            for name, code in target_locales:
                target_locale_manager.add_target_locale(source_code_id, name, code)
