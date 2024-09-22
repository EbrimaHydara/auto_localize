import sqlite3
from managers.project_manager import ProjectManager
from managers.error_manager import (
    DatabaseError,
    InitializationError,
    InvalidUserInputError
)

# Create an instance of ProjectManager
project_manager = ProjectManager()

# # 1. Test `get_projects` function
# try:
#     projects = project_manager.get_projects()
#     assert isinstance(projects, list), f"Expected list, got {type(projects)}"
#     print("Test get_projects: Passed")
# except DatabaseError as e:
#     print(f"Test get_projects: Failed with DatabaseError: {str(e)}")
# except Exception as e:
#     print(f"Test get_projects: Failed with Exception: {str(e)}")

# # 2. Test `get_project` function
# try:
#     project_id = 2  # Assume 1 is a valid ID
#     project = project_manager.get_project(project_id)
#     assert isinstance(project, sqlite3.Row), f"Expected sqlite3.Row, got {type(project)}"
#     assert project['id'] == project_id, f"Expected ID {project_id}, got {project['id']}"
#     print("Test get_project: Passed")
# except DatabaseError as e:
#     print(f"Test get_project: Failed with DatabaseError: {str(e)}")
# except Exception as e:
#     print(f"Test get_project: Failed with Exception: {str(e)}")

# 3. Test `add_project` function
try:
    new_project = project_manager.add_project(
        name="Rakuten Mobile Project",
        client="Rakuten Mobile Inc.",
        description="A project to localize RMI source code.",
        status="In Progress",
        start_date="2024-09-01",
        end_date="2024-09-30",
        lead_engineer="Ebrima Hydara"
    )
    assert new_project['name'] == 'Rakuten Mobile Project', f"Expected 'Rakuten Mobile Project', got {new_project['name']}"
    assert new_project['client'] == 'Rakuten Mobile Inc.', f"Expected 'Rakuten Mobile Inc.', got {new_project['client']}"
    print("Test add_project: Passed")
except DatabaseError as e:
    print(f"Test add_project: Failed with DatabaseError: {str(e)}")
except Exception as e:
    print(f"Test add_project: Failed with Exception: {str(e)}")

# # 4. Test `update_project` function
# try:
#     project_id = new_project['id']
#     updated_project = project_manager.update_project(
#         project_id,
#         name="Updated Project",
#         client="Client B",
#         description="Updated description",
#         status="Completed",
#         start_date="2024-09-13",
#         end_date="2024-12-31",
#         lead_engineer="Engineer B"
#     )
#     assert updated_project['name'] == 'Updated Project', f"Expected 'Updated Project', got {updated_project['name']}"
#     assert updated_project['client'] == 'Client B', f"Expected 'Client B', got {updated_project['client']}"
#     print("Test update_project: Passed")
# except DatabaseError as e:
#     print(f"Test update_project: Failed with DatabaseError: {str(e)}")
# except Exception as e:
#     print(f"Test update_project: Failed with Exception: {str(e)}")

# # 5. Test `delete_project` function
# try:
#     deleted_project = project_manager.delete_project(project_id)
#     assert deleted_project['id'] == project_id, f"Expected ID {project_id}, got {deleted_project['id']}"
#     assert deleted_project['name'] == 'Updated Project', f"Expected 'Updated Project', got {deleted_project['name']}"
#     print("Test delete_project: Passed")
# except DatabaseError as e:
#     print(f"Test delete_project: Failed with DatabaseError: {str(e)}")
# except Exception as e:
#     print(f"Test delete_project: Failed with Exception: {str(e)}")

# # 6. Test `delete_projects` function
# try:
#     deleted_projects = project_manager.delete_projects()
#     assert isinstance(deleted_projects, list), f"Expected list, got {type(deleted_projects)}"
#     print("Test delete_projects: Passed")
# except DatabaseError as e:
#     print(f"Test delete_projects: Failed with DatabaseError: {str(e)}")
# except Exception as e:
#     print(f"Test delete_projects: Failed with Exception: {str(e)}")

# # 7. Test `_abbreviate` function
# try:
#     text = "Sample Project"
#     abbreviation = project_manager._abbreviate(text)
#     assert abbreviation == "SP", f"Expected 'SP', got {abbreviation}"
#     print("Test _abbreviate: Passed")
# except Exception as e:
#     print(f"Test _abbreviate: Failed with Exception: {str(e)}")

# # 8. Test `_generate_unique_id` function
# try:
#     unique_id = project_manager._generate_unique_id("Sample Project", "Client X")
#     assert isinstance(unique_id, str) and len(unique_id) > 0, f"Expected non-empty string, got {unique_id}"
#     print("Test _generate_unique_id: Passed")
# except Exception as e:
#     print(f"Test _generate_unique_id: Failed with Exception: {str(e)}")
