from app_manager import AppManager
import sqlite3
import os
from error_manager import (
    DatabaseError,
    DatabaseConnectionError,
    FilePermissionError,
    InitializationError,
)

class DBManager:
    """
    The DBManager handles all database-related functionalities of the AutoLoc app.
    It manages the creation and management of the SQLite database, tables, and records.
    """

    def __init__(self):
        # Initialize AppManager and retrieve the database file path
        try:
            app_manager = AppManager()  # Initialize the AppManager class
            self.app_db_file_path = app_manager.get_app_db_file_path()
            self.connection = None
            self.connect_db()
            self.create_db()
            self.create_tables()
            self.insert_records()
        except (InitializationError, DatabaseError) as e:
            raise InitializationError(f"DBManager Initialization Error: {str(e)}")

    def connect_db(self):
        """
        Establishes a connection to the SQLite database file.
        """
        try:
            self.connection = sqlite3.connect(self.app_db_file_path)
        except sqlite3.DatabaseError as e:
            raise DatabaseConnectionError(f"DBManager Connection Error: {str(e)}")

    def create_db(self):
        """
        Creates the SQLite database file if it does not exist.
        """
        try:
            if not os.path.exists(self.app_db_file_path):
                open(self.app_db_file_path, 'w').close()
        except Exception as e:
            raise DatabaseError(f"DBManager Database Creation Error: {str(e)}")

    def create_tables(self):
        """
        Creates the necessary tables in the SQLite database if they do not exist.
        """
        try:
            cursor = self.connection.cursor()

            # Create app_settings table
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS app_settings (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    dark_mode BOOLEAN DEFAULT FALSE,
                    duplicate_html BOOLEAN DEFAULT FALSE,
                    use_key_namespace BOOLEAN DEFAULT FALSE,
                    UNIQUE(id)
                )
            """)

            # Create file_types table
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS file_types (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    code_type TEXT,
                    name TEXT,
                    extension TEXT,
                    is_active BOOLEAN DEFAULT TRUE,
                    UNIQUE(code_type, name, extension)
                )
            """)

            # Create other necessary tables
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS locales (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    code TEXT,
                    UNIQUE(name, code)
                )
            """)
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS projects (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    unique_id TEXT,
                    client TEXT,
                    description TEXT,
                    status TEXT DEFAULT 'In Progress',
                    start_date TEXT NULL,
                    end_date TEXT NULL,
                    last_updated_date TEXT NULL,
                    lead_engineer TEXT NULL,
                    UNIQUE(name, client, unique_id)
                )
            """)
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS source_codes (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    project_id INTEGER,
                    name TEXT,
                    unique_id TEXT,
                    code_type TEXT,
                    source_locale TEXT,
                    original_source_code_path TEXT NULL,
                    commons_paths TEXT NULL,
                    localized_source_code_path TEXT NULL,
                    status TEXT DEFAULT 'In Progress',
                    notes TEXT NULL,
                    UNIQUE(project_id, name, unique_id, source_locale),
                    FOREIGN KEY(project_id) REFERENCES projects(id)
                )
            """)
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS target_locales (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    code TEXT,
                    source_code_id INTEGER,
                    UNIQUE(name, code, source_code_id),
                    FOREIGN KEY(source_code_id) REFERENCES source_codes(id)
                )
            """)

            self.connection.commit()
        except sqlite3.DatabaseError as e:
            raise DatabaseError(f"DBManager Table Creation Error: {str(e)}")

    def insert_records(self):
        """
        Inserts default records into the app_settings and file_types tables.
        """
        try:
            cursor = self.connection.cursor()

            # Insert default record into app_settings table
            cursor.execute("""
                INSERT OR IGNORE INTO app_settings (id, dark_mode, duplicate_html, use_key_namespace) 
                VALUES (1, FALSE, FALSE, FALSE)
            """)

            # Insert default records into locales table
            cursor.executemany("INSERT OR IGNORE INTO locales (name, code) VALUES (?, ?)", [
                ('Japanese', 'ja-JP'),
                ('English (US)', 'en-US'),
                ('Simplified Chinese (CN)', 'zh-CN'),
                ('Traditional Chinese (TW)', 'zh-TW'),
                ('Korean (South Korea)', 'ko-KR')
            ])

            # Insert default records into file_types table
            file_types = [
                ('Web App', 'HTML', '.html'),
                ('Web App', 'JavaScript', '.js'),
                ('Web App', 'Embedded JavaScript (EJS)', '.ejs'),
                ('Web App', 'TypeScript', '.ts'),
                ('Web App', 'TypeScript XML (TSX)', '.tsx'),
                ('Web App', 'React JSX', '.jsx'),
                ('Web App', 'Vue Single-File Component', '.vue'),
                ('Web App', 'JSON', '.json'),

                ('Android App', 'Android Layout XML Files', '.xml'),
                ('Android App', 'Java Source File', '.java'),
                ('Android App', 'Kotlin Source File', '.kt'),
                ('Android App', 'Android Resource Files', '.xml'),
                ('Android App', 'Android Manifest File', '.xml'),

                ('iOS App', 'Swift Source File', '.swift'),
                ('iOS App', 'Objective-C Implementation File', '.m'),
                ('iOS App', 'Objective-C Header File', '.h'),
                ('iOS App', 'iOS Localizable Strings File', '.strings'),
                ('iOS App', 'Storyboard Interface File', '.storyboard'),
                ('iOS App', 'XIB Interface Builder File', '.xib'),
                ('iOS App', 'Property List Files', '.plist'),

                ('Java App', 'JSF View Files', '.xhtml'),
                ('Java App', 'Java XML File', '.xml'),
                ('Java App', 'Java Source File', '.java'),
                ('Java App', 'Java Properties File', '.properties')
            ]

            cursor.executemany("""
                INSERT OR IGNORE INTO file_types (code_type, name, extension, is_active) 
                VALUES (?, ?, ?, TRUE)
            """, file_types)

            self.connection.commit()
            print("Default records inserted into the app_settings, locales, and file_types tables successfully.")
        except sqlite3.DatabaseError as e:
            raise DatabaseError(f"DBManager Record Insertion Error: {str(e)}")

    def reset_db(self):
        """
        Resets the database by deleting all records from each table
        and recreating default records as needed.
        """
        try:
            # Connect to the database
            self.connect_db()

            # Clear all records from each table using delete_records method
            self.delete_records('app_settings')
            self.delete_records('locales')
            self.delete_records('projects')
            self.delete_records('source_codes')
            self.delete_records('target_locales')
            self.delete_records('file_types')

            # Insert default records into DB
            self.insert_records()
            
            print("Database reset successfully by clearing all tables.")
        except (DatabaseError, DatabaseConnectionError) as e:
            raise DatabaseError(f"DBManager Reset Error: {str(e)}")

    def delete_records(self, table_name):
        """
        Deletes all records from a given table.
        :param table_name: The name of the table to clear
        :return: Success message or error message
        """
        try:
            cursor = self.connection.cursor()
            cursor.execute(f"DELETE FROM {table_name}")
            self.connection.commit()
            return "All records deleted successfully"
        except sqlite3.DatabaseError as e:
            raise DatabaseError(f"DBManager Delete Records Error: {str(e)}")

    def get_record(self, table_name, record_id):
        """
        Retrieves a specific record from a given table.
        :param table_name: The name of the table to query
        :param record_id: The ID of the record to retrieve
        :return: The record data or an error message
        """
        try:
            cursor = self.connection.cursor()
            cursor.execute(f"SELECT * FROM {table_name} WHERE id = ?", (record_id,))
            return cursor.fetchone()
        except sqlite3.DatabaseError as e:
            raise DatabaseError(f"DBManager Get Record Error: {str(e)}")

    def get_records(self, table_name):
        """
        Retrieves all records from a given table.
        :param table_name: The name of the table to query
        :return: A list of records or an error message
        """
        try:
            cursor = self.connection.cursor()
            cursor.execute(f"SELECT * FROM {table_name}")
            return cursor.fetchall()
        except sqlite3.DatabaseError as e:
            raise DatabaseError(f"DBManager Get Records Error: {str(e)}")

    def insert_record(self, table_name, data):
        """
        Inserts a record into a specified table.
        :param table_name: The name of the table to insert data into
        :param data: A dictionary containing column names as keys and data as values
        :return: Success message or error message
        """
        try:
            cursor = self.connection.cursor()
            columns = ', '.join(data.keys())
            placeholders = ', '.join(['?'] * len(data))
            cursor.execute(f"INSERT INTO {table_name} ({columns}) VALUES ({placeholders})", tuple(data.values()))
            self.connection.commit()
            return "Record inserted successfully"
        except sqlite3.DatabaseError as e:
            raise DatabaseError(f"DBManager Insert Record Error: {str(e)}")

    def update_record(self, table_name, record_id, data):
        """
        Updates a specific record in a given table.
        :param table_name: The name of the table to update
        :param record_id: The ID of the record to update
        :param data: A dictionary containing column names as keys and updated data as values
        :return: Success message or error message
        """
        try:
            cursor = self.connection.cursor()
            updates = ', '.join([f"{k} = ?" for k in data.keys()])
            values = list(data.values()) + [record_id]
            cursor.execute(f"UPDATE {table_name} SET {updates} WHERE id = ?", values)
            self.connection.commit()
            return "Record updated successfully"
        except sqlite3.DatabaseError as e:
            raise DatabaseError(f"DBManager Update Record Error: {str(e)}")

    def delete_record(self, table_name, record_id):
        """
        Deletes a specific record from a given table.
        :param table_name: The name of the table to delete data from
        :param record_id: The ID of the record to delete
        :return: Success message or error message
        """
        try:
            cursor = self.connection.cursor()
            cursor.execute(f"DELETE FROM {table_name} WHERE id = ?", (record_id,))
            self.connection.commit()
            return "Record deleted successfully"
        except sqlite3.DatabaseError as e:
            raise DatabaseError(f"DBManager Delete Record Error: {str(e)}")

    def close_connection(self):
        """
        Closes the SQLite database connection.
        """
        if self.connection:
            self.connection.close()
