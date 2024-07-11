import sqlite3
import os

class DBManager():

    # ===========================================
    # Default/Initialization Management Functions
    # ===========================================

    def __init__(self):
        super().__init__()
        self.db_file = 'autoloc.db'
        self.connection = None
        self.create_db()
        self.create_tables()
        self.insert_default_records()

    def create_db(self):
        self.connection = sqlite3.connect(self.db_file)

    def create_tables(self):
        with self.connection:
            cursor = self.connection.cursor()
            cursor.execute('''CREATE TABLE IF NOT EXISTS file_types (
                                id INTEGER PRIMARY KEY AUTOINCREMENT,
                                full_name TEXT NOT NULL,
                                short_name TEXT NOT NULL,
                                extension TEXT NOT NULL,
                                UNIQUE(full_name, short_name, extension))''')
            cursor.execute('''CREATE TABLE IF NOT EXISTS source_locales (
                                id INTEGER PRIMARY KEY AUTOINCREMENT,
                                name TEXT NOT NULL,
                                language_code TEXT NOT NULL,
                                country_code TEXT NOT NULL,
                                UNIQUE(name, language_code, country_code))''')
            cursor.execute('''CREATE TABLE IF NOT EXISTS target_locales (
                                id INTEGER PRIMARY KEY AUTOINCREMENT,
                                name TEXT NOT NULL,
                                language_code TEXT NOT NULL,
                                country_code TEXT NOT NULL,
                                UNIQUE(name, language_code, country_code))''')
            cursor.execute('''CREATE TABLE IF NOT EXISTS projects (
                                id INTEGER PRIMARY KEY AUTOINCREMENT,
                                name TEXT NOT NULL,
                                description TEXT,
                                root_dir TEXT NOT NULL,
                                UNIQUE(name, root_dir))''')
            cursor.execute('''CREATE TABLE IF NOT EXISTS project_file_types (
                                id INTEGER PRIMARY KEY AUTOINCREMENT,
                                full_name TEXT NOT NULL,
                                short_name TEXT NOT NULL,
                                extension TEXT NOT NULL,
                                project_id INTEGER NOT NULL,
                                UNIQUE(full_name, short_name, extension, project_id),
                                FOREIGN KEY(project_id) REFERENCES projects(id))''')
            cursor.execute('''CREATE TABLE IF NOT EXISTS project_source_locales (
                                id INTEGER PRIMARY KEY AUTOINCREMENT,
                                name TEXT NOT NULL,
                                language_code TEXT NOT NULL,
                                country_code TEXT NOT NULL,
                                project_id INTEGER NOT NULL UNIQUE,
                                FOREIGN KEY(project_id) REFERENCES projects(id))''')
            cursor.execute('''CREATE TABLE IF NOT EXISTS project_target_locales (
                                id INTEGER PRIMARY KEY AUTOINCREMENT,
                                name TEXT NOT NULL,
                                language_code TEXT NOT NULL,
                                country_code TEXT NOT NULL,
                                project_id INTEGER NOT NULL,
                                UNIQUE(name, language_code, country_code, project_id),
                                FOREIGN KEY(project_id) REFERENCES projects(id))''')

    def insert_default_records(self):
        with self.connection:
            cursor = self.connection.cursor()

            # Insert default file types if they don't exist
            file_types = [
                ('Hypertext Markup Language', 'HTML', '.html'),
                ('JavaScript', 'JS', '.js'),
                ('Embedded JavaScript', 'EJS', '.ejs'),
                ('TypeScript XML', 'TSX', '.tsx'),
                ('Comma Separated Value', 'CSV', '.csv'),
                ('Portable Document Format', 'PDF', '.pdf')
            ]
            for full_name, short_name, extension in file_types:
                try:
                    cursor.execute('INSERT INTO file_types (full_name, short_name, extension) VALUES (?, ?, ?)', 
                                (full_name, short_name, extension))
                except sqlite3.IntegrityError:
                    pass

            # Insert default source locales if they don't exist
            source_locales = [
                ('Japanese', 'ja', 'JP'),
                ('English', 'en', 'US'),
                ('Simplified Chinese', 'zh', 'CN'),
                ('Traditional Chinese', 'zh', 'TW'),
                ('Korean (South Korea)', 'ko', 'KR')
            ]
            for name, language_code, country_code in source_locales:
                try:
                    cursor.execute('INSERT INTO source_locales (name, language_code, country_code) VALUES (?, ?, ?)', 
                                (name, language_code, country_code))
                except sqlite3.IntegrityError:
                    pass

            # Insert default target locales if they don't exist
            target_locales = [
                ('Japanese', 'ja', 'JP'),
                ('English', 'en', 'US'),
                ('Simplified Chinese', 'zh', 'CN'),
                ('Traditional Chinese', 'zh', 'TW'),
                ('Korean (South Korea)', 'ko', 'KR')
            ]
            for name, language_code, country_code in target_locales:
                try:
                    cursor.execute('INSERT INTO target_locales (name, language_code, country_code) VALUES (?, ?, ?)', 
                                (name, language_code, country_code))
                except sqlite3.IntegrityError:
                    pass

            self.connection.commit()

    def open_connection(self):
        if self.connection is None:
            self.create_db()

    def close_connection(self):
        if self.connection:
            self.connection.close()
            self.connection = None

    # =====================================
    # General Data Management Functions
    # =====================================

    def reinit_db(self):
        """
        Re-initializes the "autoloc.db" file with new tables and data.
        """
        self.close_connection()
        if os.path.exists(self.db_file):
            os.remove(self.db_file)
        self.create_db()
        self.create_tables()
        self.insert_default_records()


    def get_table_records(self, table):
        self.open_connection()
        cursor = self.connection.cursor()
        cursor.execute(f'SELECT * FROM {table}')
        data = cursor.fetchall()
        self.close_connection()
        return data

    def get_data(self, table, condition):
        """
        Retrieves a record by a specified condition from a specified table.

        :param table: The name of the table to retrieve the record from.
        :param condition: The condition to filter the record (e.g., "id = 1" or "name = 'example'").
        :return: A tuple containing the record details or None if not found.
        """
        self.open_connection()
        cursor = self.connection.cursor()
        cursor.execute(f'SELECT * FROM {table} WHERE {condition}')
        data = cursor.fetchall()
        self.close_connection()
        return data

    def insert_data(self, table, columns, values):
        self.open_connection()
        cursor = self.connection.cursor()
        placeholders = ', '.join('?' * len(values))
        try:
            cursor.execute(f'INSERT INTO {table} ({columns}) VALUES ({placeholders})', values)
            self.connection.commit()
        except sqlite3.IntegrityError:
            pass
        self.close_connection()

    def update_data(self, table, set_statement, condition):
        self.open_connection()
        cursor = self.connection.cursor()
        try:
            cursor.execute(f'UPDATE {table} SET {set_statement} WHERE {condition}')
            self.connection.commit()
        except sqlite3.IntegrityError:
            pass
        self.close_connection()

    def delete_data(self, table, condition):
        self.open_connection()
        cursor = self.connection.cursor()
        cursor.execute(f'DELETE FROM {table} WHERE {condition}')
        self.connection.commit()
        self.close_connection()
    
    def delete_all_records(self, table):
        """
        Deletes all records from the specified table.

        :param table: The name of the table from which to delete all records.
        """
        self.open_connection()
        cursor = self.connection.cursor()
        cursor.execute(f'DELETE FROM {table}')
        self.connection.commit()
        self.close_connection()
    
    # =====================================
    # File Types Data Management Functions
    # =====================================

    def get_file_types(self):
        return self.get_table_records('file_types')
    
    def get_file_type(self, file_type_id):
        return self.get_data('file_types', f'id = {file_type_id}')

    def insert_file_type(self, full_name, short_name, extension):
        self.insert_data('file_types', 'full_name, short_name, extension', (full_name, short_name, extension))

    def update_file_type(self, file_type_id, full_name, short_name, extension):
        set_statement = f"full_name = '{full_name}', short_name = '{short_name}', extension = '{extension}'"
        condition = f"id = {file_type_id}"
        self.update_data('file_types', set_statement, condition)

    def delete_file_type(self, file_type_id):
        condition = f"id = {file_type_id}"
        self.delete_data('file_types', condition)
    
    # ========================================
    # Source Locales Data Management Functions
    # ========================================

    def get_source_locales(self):
        return self.get_table_records('source_locales')
    
    def get_source_locale(self, locale_id):
        return self.get_data('source_locales', f'id = {locale_id}')

    def insert_source_locale(self, name, language_code, country_code):
        self.insert_data('source_locales', 'name, language_code, country_code', (name, language_code, country_code))

    def update_source_locale(self, locale_id, name, language_code, country_code):
        set_statement = f"name = '{name}', language_code = '{language_code}', country_code = '{country_code}'"
        condition = f"id = {locale_id}"
        self.update_data('source_locales', set_statement, condition)

    def delete_source_locale(self, locale_id):
        condition = f"id = {locale_id}"
        self.delete_data('source_locales', condition)
    
    # ========================================
    # Target Locales Data Management Functions
    # ========================================

    def get_target_locales(self):
        return self.get_table_records('target_locales')
    
    def get_target_locale(self, locale_id):
        return self.get_data('target_locales', f'id = {locale_id}')

    def insert_target_locale(self, name, language_code, country_code):
        self.insert_data('target_locales', 'name, language_code, country_code', (name, language_code, country_code))

    def update_target_locale(self, locale_id, name, language_code, country_code):
        set_statement = f"name = '{name}', language_code = '{language_code}', country_code = '{country_code}'"
        condition = f"id = {locale_id}"
        self.update_data('target_locales', set_statement, condition)

    def delete_target_locale(self, locale_id):
        condition = f"id = {locale_id}"
        self.delete_data('target_locales', condition)

    # ==================================
    # Project Data Management Functions
    # ==================================

    def get_projects(self):
        return self.get_table_records('projects')
    
    def get_project(self, project_id):
        return self.get_data('projects', f'id = {project_id}')

    def insert_project(self, name, description, root_dir):
        self.insert_data('projects', 'name, description, root_dir', (name, description, root_dir))

    def update_project(self, project_id, name, description, root_dir):
        set_statement = f"name = '{name}', description = '{description}', root_dir = '{root_dir}'"
        condition = f"id = {project_id}"
        self.update_data('projects', set_statement, condition)

    def delete_project(self, project_id):
        condition = f"id = {project_id}"
        self.delete_data('projects', condition)

    def get_project_file_types(self, project_id):
        return self.get_data('project_file_types', f'project_id = {project_id}')

    def insert_project_file_type(self, project_id, full_name, short_name, extension):
        self.insert_data('project_file_types', 'full_name, short_name, extension, project_id', 
                        (full_name, short_name, extension, project_id))

    def update_project_file_type(self, file_type_id, full_name, short_name, extension):
        set_statement = f"full_name = '{full_name}', short_name = '{short_name}', extension = '{extension}'"
        condition = f"id = {file_type_id}"
        self.update_data('project_file_types', set_statement, condition)

    def delete_project_file_type(self, file_type_id):
        condition = f"id = {file_type_id}"
        self.delete_data('project_file_types', condition)

    def get_project_source_locales(self, project_id):
        return self.get_data('project_source_locales', f'project_id = {project_id}')

    def insert_project_source_locale(self, project_id, name, language_code, country_code):
        self.insert_data('project_source_locales', 'name, language_code, country_code, project_id', 
                        (name, language_code, country_code, project_id))

    def update_project_source_locale(self, locale_id, name, language_code, country_code):
        set_statement = f"name = '{name}', language_code = '{language_code}', country_code = '{country_code}'"
        condition = f"id = {locale_id}"
        self.update_data('project_source_locales', set_statement, condition)

    def delete_project_source_locale(self, locale_id):
        condition = f"id = {locale_id}"
        self.delete_data('project_source_locales', condition)

    # Project Target Locales functions
    def get_project_target_locales(self, project_id):
        return self.get_data('project_target_locales', f'project_id = {project_id}')

    def insert_project_target_locale(self, project_id, name, language_code, country_code):
        self.insert_data('project_target_locales', 'name, language_code, country_code, project_id', 
                        (name, language_code, country_code, project_id))

    def update_project_target_locale(self, locale_id, name, language_code, country_code):
        set_statement = f"name = '{name}', language_code = '{language_code}', country_code = '{country_code}'"
        condition = f"id = {locale_id}"
        self.update_data('project_target_locales', set_statement, condition)

    def delete_project_target_locale(self, locale_id):
        condition = f"id = {locale_id}"
        self.delete_data('project_target_locales', condition)
    


# # Usage examples for DBManager functions

# # is followed by comment
#   is followed by code

# db_manager = DBManager()

# # =====================================
# # General Data Management Functions
# # =====================================

# # Get all records from a table
# file_types = db_manager.get_table_records('file_types')
# print("All file types:", file_types)

# # Get a specific record by condition
# file_type = db_manager.get_data('file_types', "id = 1")
# print("File type with ID 1:", file_type)

# # Insert a new record into a table
# db_manager.insert_data('file_types', 'full_name, short_name, extension', ('Markdown', 'MD', '.md'))
# print("Inserted new file type: Markdown")

# # Update an existing record in a table
# db_manager.update_data('file_types', "full_name = 'Markdown File', short_name = 'MD', extension = '.md'", "id = 1")
# print("Updated file type with ID 1")

# # Delete a record from a table
# db_manager.delete_data('file_types', "id = 1")
# print("Deleted file type with ID 1")

# # =====================================
# # File Types Data Management Functions
# # =====================================

# # Get all file types
# file_types = db_manager.get_file_types()
# print("All file types:", file_types)

# # Get a specific file type by ID
# file_type = db_manager.get_file_type(1)
# print("File type with ID 1:", file_type)

# # Insert a new file type
# db_manager.insert_file_type('Markdown', 'MD', '.md')
# print("Inserted new file type: Markdown")

# # Update an existing file type
# db_manager.update_file_type(1, 'Markdown File', 'MD', '.md')
# print("Updated file type with ID 1")

# # Delete a file type
# db_manager.delete_file_type(1)
# print("Deleted file type with ID 1")

# # ========================================
# # Source Locales Data Management Functions
# # ========================================

# # Get all source locales
# source_locales = db_manager.get_source_locales()
# print("All source locales:", source_locales)

# # Get a specific source locale by ID
# source_locale = db_manager.get_source_locale(1)
# print("Source locale with ID 1:", source_locale)

# # Insert a new source locale
# db_manager.insert_source_locale('Spanish', 'es', 'ES')
# print("Inserted new source locale: Spanish")

# # Update an existing source locale
# db_manager.update_source_locale(1, 'Spanish', 'es', 'ES')
# print("Updated source locale with ID 1")

# # Delete a source locale
# db_manager.delete_source_locale(1)
# print("Deleted source locale with ID 1")

# # ========================================
# # Target Locales Data Management Functions
# # ========================================

# # Get all target locales
# target_locales = db_manager.get_target_locales()
# print("All target locales:", target_locales)

# # Get a specific target locale by ID
# target_locale = db_manager.get_target_locale(1)
# print("Target locale with ID 1:", target_locale)

# # Insert a new target locale
# db_manager.insert_target_locale('French', 'fr', 'FR')
# print("Inserted new target locale: French")

# # Update an existing target locale
# db_manager.update_target_locale(1, 'French', 'fr', 'FR')
# print("Updated target locale with ID 1")

# # Delete a target locale
# db_manager.delete_target_locale(1)
# print("Deleted target locale with ID 1")

# # ==================================
# # Project Data Management Functions
# # ==================================

# # Get all projects
# projects = db_manager.get_projects()
# print("All projects:", projects)

# # Get a specific project by ID
# project = db_manager.get_project(1)
# print("Project with ID 1:", project)

# # Insert a new project
# db_manager.insert_project('New Project', 'A new test project', '/path/to/project')
# print("Inserted new project: New Project")

# # Update an existing project
# db_manager.update_project(1, 'Updated Project', 'An updated description', '/new/path/to/project')
# print("Updated project with ID 1")

# # Delete a project
# db_manager.delete_project(1)
# print("Deleted project with ID 1")

# # ===========================================
# # Project File Types Data Management Functions
# # ===========================================

# # Get file types for a project
# project_file_types = db_manager.get_project_file_types(1)
# print("File types for project with ID 1:", project_file_types)

# # Insert a file type to a project
# db_manager.insert_project_file_type(1, 'HTML', 'Hypertext Markup Language', '.html')
# print("Inserted file type to project with ID 1: HTML")

# # Update a file type for a project
# db_manager.update_project_file_type(1, 'HTML', 'Hypertext Markup Language', '.html')
# print("Updated file type for project with ID 1")

# # Delete a file type from a project
# db_manager.delete_project_file_type(1)
# print("Deleted file type from project with ID 1")

# # ==============================================
# # Project Source Locales Data Management Functions
# # ==============================================

# # Get source locales for a project
# project_source_locales = db_manager.get_project_source_locales(1)
# print("Source locales for project with ID 1:", project_source_locales)

# # Insert a source locale to a project
# db_manager.insert_project_source_locale(1, 'English', 'en', 'US')
# print("Inserted source locale to project with ID 1: English")

# # Update a source locale for a project
# db_manager.update_project_source_locale(1, 'English', 'en', 'US')
# print("Updated source locale for project with ID 1")

# # Delete a source locale from a project
# db_manager.delete_project_source_locale(1)
# print("Deleted source locale from project with ID 1")

# # ============================================
# # Project Target Locales Data Management Functions
# # ============================================

# # Get target locales for a project
# project_target_locales = db_manager.get_project_target_locales(1)
# print("Target locales for project with ID 1:", project_target_locales)

# # Insert a target locale to a project
# db_manager.insert_project_target_locale(1, 'Spanish', 'es', 'ES')
# print("Inserted target locale to project with ID 1: Spanish")

# # Update a target locale for a project
# db_manager.update_project_target_locale(1, 'Spanish', 'es', 'ES')
# print("Updated target locale for project with ID 1")

# # Delete a target locale from a project
# db_manager.delete_project_target_locale(1)
# print("Deleted target locale from project with ID 1")

# # ============================================
# # Database Reinitialization Function
# # ============================================

# # Reinitialize the database
# db_manager.reinit_db()
# print("Database reinitialized")

