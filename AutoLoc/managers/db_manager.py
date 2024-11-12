from managers.app_manager import AppManager
import sqlite3
import os
from managers.error_manager import (
    DatabaseError,
    DatabaseConnectionError,
    FilePermissionError,
    InitializationError,
)
from managers.default_data import CREATE_TABLE_STATEMENTS, DEFAULT_RECORDS

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
            self.connection.row_factory = sqlite3.Row  # Set row factory to return rows as sqlite3.Row objects
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
            # Execute each create table statement from the imported dictionary
            for table_name, create_statement in CREATE_TABLE_STATEMENTS.items():
                cursor.execute(create_statement)
            self.connection.commit()
        except sqlite3.DatabaseError as e:
            raise DatabaseError(f"DBManager Table Creation Error: {str(e)}")

    def insert_records(self):
        """
        Inserts default records into the tables.
        """
        try:
            cursor = self.connection.cursor()

            # Insert default records from the imported dictionary
            for table_name, records in DEFAULT_RECORDS.items():
                if table_name == 'app_settings':
                    cursor.executemany(f"""
                        INSERT OR IGNORE INTO {table_name} (id, dark_mode, duplicate_html, use_key_namespace) 
                        VALUES (?, ?, ?, ?)
                    """, records)
                elif table_name == 'locales':
                    cursor.executemany(f"INSERT OR IGNORE INTO {table_name} (name, code) VALUES (?, ?)", records)
                elif table_name == 'file_types':
                    cursor.executemany(f"""
                        INSERT OR IGNORE INTO {table_name} (code_type, name, extension, is_active) 
                        VALUES (?, ?, ?, TRUE)
                    """, records)

            self.connection.commit()
            # print("Default records inserted into the tables successfully.")
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
            raise DatabaseError(f"DBManager DB Reset Error: {str(e)}")
    
    def get_records(self, table_name, condition=None):
        """
        Retrieves all records from a given table based on the specified condition.
        :param table_name: The name of the table to query.
        :param condition: A dictionary containing the column and value to filter records (e.g., {'column_name': value}).
        :return: A list of records or raises a DatabaseError.
        """
        try:
            cursor = self.connection.cursor()

            if condition:
                # Extract column and value from the condition
                column = list(condition.keys())[0]
                value = list(condition.values())[0]

                # Fetch records matching the condition
                cursor.execute(f"SELECT * FROM {table_name} WHERE {column} = ?", (value,))
            else:
                # Fetch all records if no condition is provided
                cursor.execute(f"SELECT * FROM {table_name}")

            # Retrieve all records
            records = cursor.fetchall()
            return records
        except sqlite3.DatabaseError as e:
            raise DatabaseError(f"DBManager Get Records Error from {table_name}: {str(e)}")

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
            raise DatabaseError(f"DBManager Get Record Error from {table_name}: {str(e)}")
    
    def insert_record(self, table_name, data):
        """
        Inserts a record into a specified table.
        :param table_name: The name of the table to insert data into
        :param data: A dictionary containing column names as keys and data as values
        :return: The inserted record or an error message
        """
        try:
            cursor = self.connection.cursor()
            columns = ', '.join(data.keys())
            placeholders = ', '.join(['?'] * len(data))
            cursor.execute(f"INSERT INTO {table_name} ({columns}) VALUES ({placeholders})", tuple(data.values()))
            self.connection.commit()
            # Fetch and return the inserted record
            return self.get_record(table_name, cursor.lastrowid)
        except sqlite3.DatabaseError as e:
            raise DatabaseError(f"DBManager Insert Record Error in {table_name}: {str(e)}")

    def update_record(self, table_name, record_id, data):
        """
        Updates a specific record in a given table.
        :param table_name: The name of the table to update
        :param record_id: The ID of the record to update
        :param data: A dictionary containing column names as keys and updated data as values
        :return: The updated record or an error message
        """
        try:
            cursor = self.connection.cursor()
            updates = ', '.join([f"{k} = ?" for k in data.keys()])
            values = list(data.values()) + [record_id]
            cursor.execute(f"UPDATE {table_name} SET {updates} WHERE id = ?", values)
            self.connection.commit()
            # Fetch and return the updated record
            return self.get_record(table_name, record_id)
        except sqlite3.DatabaseError as e:
            raise DatabaseError(f"DBManager Update Record Error in {table_name}: {str(e)}")

    def delete_record(self, table_name, record_id):
        """
        Deletes a specific record from a given table.
        :param table_name: The name of the table to delete data from
        :param record_id: The ID of the record to delete
        :return: The deleted record or an error message
        """
        try:
            # Fetch the record before deletion
            record_to_delete = self.get_record(table_name, record_id)
            cursor = self.connection.cursor()
            cursor.execute(f"DELETE FROM {table_name} WHERE id = ?", (record_id,))
            self.connection.commit()
            return record_to_delete  # Return the deleted record
        except sqlite3.DatabaseError as e:
            raise DatabaseError(f"DBManager Delete Record Error from {table_name}: {str(e)}")
    
    def delete_records(self, table_name, condition=None):
        """
        Deletes all records from a given table based on the condition and returns the deleted records.
        :param table_name: The name of the table to clear.
        :param condition: A dictionary containing the column and value to filter records to delete.
        :return: A list of all deleted records or raises a DatabaseError.
        """
        try:
            cursor = self.connection.cursor()

            if condition:
                # Extract column and value from the condition
                column = list(condition.keys())[0]
                value = list(condition.values())[0]

                # Fetch records to delete
                cursor.execute(f"SELECT * FROM {table_name} WHERE {column} = ?", (value,))
                records_to_delete = cursor.fetchall()

                # Delete the records
                cursor.execute(f"DELETE FROM {table_name} WHERE {column} = ?", (value,))
            else:
                # Fetch all records to delete
                cursor.execute(f"SELECT * FROM {table_name}")
                records_to_delete = cursor.fetchall()

                # Delete all records
                cursor.execute(f"DELETE FROM {table_name}")

            # Commit the changes
            self.connection.commit()

            # Return the list of deleted records
            return records_to_delete
        except sqlite3.DatabaseError as e:
            raise DatabaseError(f"DBManager Delete Records Error from {table_name}: {str(e)}")

    def close_connection(self):
        """
        Closes the SQLite database connection.
        """
        if self.connection:
            self.connection.close()
