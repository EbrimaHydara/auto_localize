import sqlite3
import os

class DBManager():

    # ===========================================
    # Default/Initialization Management Functions
    # ===========================================

    def __init__(self):
        super().__init__()
        self.db_file = os.path.join(os.path.dirname(__file__), 'autoloc.db')
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
                                base_url TEXT NOT NULL,
                                UNIQUE(name, root_dir, base_url))''')
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

    def insert_project(self, name, description, root_dir, base_url):
        self.insert_data('projects', 'name, description, root_dir, base_url', (name, description, root_dir, base_url))

    def update_project(self, project_id, name, description, root_dir, base_url):
        set_statement = f"name = '{name}', description = '{description}', root_dir = '{root_dir}', base_url = '{base_url}'"
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
    

