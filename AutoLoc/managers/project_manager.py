from managers.db_manager import DBManager  # Import DBManager from the same module
from datetime import datetime
from managers.error_manager import (
    DatabaseError,
    InitializationError,
    InvalidUserInputError
)

class ProjectManager:
    """
    The ProjectManager class handles all project-related functionalities for the AutoLoc app.
    It manages CRUD operations for projects using the DBManager.
    """

    def __init__(self):
        try:
            self.db_manager = DBManager()  # Initialize DBManager for database operations
        except InitializationError as e:
            raise InitializationError(f"ProjectManager Initialization Error: {str(e)}")

    def get_projects(self):
        """
        Retrieves all projects from the projects table.
        :return: A list of projects or an error message
        """
        try:
            records = self.db_manager.get_records('projects')
            return records
        except DatabaseError as e:
            raise DatabaseError(f"ProjectManager Get Projects Error: {str(e)}")

    def get_project(self, project_id):
        """
        Retrieves a specific project from the projects table.
        :param project_id: The ID of the project to retrieve
        :return: The project record or an error message
        """
        try:
            record = self.db_manager.get_record('projects', project_id)
            return record
        except DatabaseError as e:
            raise DatabaseError(f"ProjectManager Get Project Error: {str(e)}")

    def add_project(self, name, client, description, status="In Progress", start_date=None, end_date=None, lead_engineer=None):
        """
        Adds a new project record to the projects table.
        :param name: Name of the project
        :param client: Client associated with the project
        :param description: Description of the project
        :param status: Status of the project (default: "In Progress")
        :param start_date: Start date of the project (optional)
        :param end_date: End date of the project (optional)
        :param lead_engineer: Lead engineer of the project (optional)
        :return: The inserted project record or an error message
        """
        try:
            unique_id = self._generate_unique_id(name, client)
            current_date = datetime.now().strftime('%Y-%m-%d')
            data = {
                'name': name,
                'unique_id': unique_id,
                'client': client,
                'description': description,
                'status': status,
                'start_date': start_date,
                'end_date': end_date,
                'last_updated_date': current_date,  # Set to the current date
                'lead_engineer': lead_engineer
            }
            result = self.db_manager.insert_record('projects', data)
            return result
        except DatabaseError as e:
            raise DatabaseError(f"ProjectManager Add Project Error: {str(e)}")

    def update_project(self, project_id, name, client, description, status="In Progress", start_date=None, end_date=None, lead_engineer=None):
        """
        Updates a project record in the projects table.
        :param project_id: The ID of the project to update
        :param name: New name of the project
        :param client: New client associated with the project
        :param description: New description of the project
        :param status: New status of the project
        :param start_date: New start date of the project (optional)
        :param end_date: New end date of the project (optional)
        :param lead_engineer: New lead engineer of the project (optional)
        :return: The updated project record or an error message
        """
        try:
            unique_id = self._generate_unique_id(name, client)
            current_date = datetime.now().strftime('%Y-%m-%d')
            data = {
                'name': name,
                'unique_id': unique_id,
                'client': client,
                'description': description,
                'status': status,
                'start_date': start_date,
                'end_date': end_date,
                'last_updated_date': current_date,  # Set to the current date
                'lead_engineer': lead_engineer
            }
            result = self.db_manager.update_record('projects', project_id, data)
            return result
        except DatabaseError as e:
            raise DatabaseError(f"ProjectManager Update Project Error: {str(e)}")

    def delete_project(self, project_id):
        """
        Deletes a specific project record from the projects table.
        :param project_id: The ID of the project to delete
        :return: The deleted project record or an error message
        """
        try:
            result = self.db_manager.delete_record('projects', project_id)
            return result
        except DatabaseError as e:
            raise DatabaseError(f"ProjectManager Delete Project Error: {str(e)}")

    def delete_projects(self):
        """
        Deletes all project records from the projects table.
        :return: A list of deleted project records or an error message
        """
        try:
            result = self.db_manager.delete_records('projects')
            return result
        except DatabaseError as e:
            raise DatabaseError(f"ProjectManager Delete Projects Error: {str(e)}")

    def _abbreviate(self, text):
        """
        Creates an abbreviation from the given text by taking the first letter of each word.
        :param text: The text to abbreviate
        :return: The abbreviation as a string
        """
        try:
            words = text.split()  # Split the text into words
            abbreviation = ''.join(word[0].upper() for word in words)  # Take the first letter of each word and convert to uppercase
            return abbreviation
        except Exception as e:
            raise Exception(f"ProjectManager Abbreviate Error: {str(e)}")

    def _generate_unique_id(self, name, client):
        """
        Generates a unique identifier for a project based on the abbreviated name and client.
        :param name: The project name
        :param client: The client associated with the project
        :return: A unique identifier string
        """
        try:
            name_abbr = self._abbreviate(name)  # Abbreviate the project name
            client_abbr = self._abbreviate(client)  # Abbreviate the client name
            unique_id = f"{name_abbr}_{client_abbr}_{datetime.now().strftime('%Y%m%d%H%M%S')}"
            return unique_id
        except Exception as e:
            raise Exception(f"ProjectManager Generate Unique ID Error: {str(e)}")
