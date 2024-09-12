from db_manager import DBManager

def test_db_manager():
    print("Testing DBManager...")

    # Create an instance of DBManager
    try:
        db_manager = DBManager()
        print("DBManager initialized successfully.")
    except Exception as e:
        print(f"DBManager Initialization Error: {e}")
        return

    # Test database connection
    try:
        if db_manager.connection:
            print("Database connection is active.")
        else:
            print("Error: No active database connection.")
    except Exception as e:
        print(f"Database Connection Error: {e}")

    # Test create tables
    try:
        db_manager.create_tables()
        print("Tables created successfully.")
    except Exception as e:
        print(f"Table Creation Error: {e}")

    # Test insert default records
    try:
        db_manager.insert_records()
        print("Default records inserted successfully.")
    except Exception as e:
        print(f"Insert Records Error: {e}")

    # Test each table individually

    # Test `app_settings` table
    test_table(db_manager, 'app_settings', {'dark_mode': True, 'duplicate_html': True, 'use_key_namespace': True})

    # Test `locales` table
    test_table(db_manager, 'locales', {'name': 'Test Locale', 'code': 'tl-TL'})

    # Test `projects` table
    test_table(db_manager, 'projects', {
        'name': 'Test Project', 'unique_id': '123456', 'client': 'Test Client', 
        'description': 'A sample project for testing', 'status': 'In Progress'
    })

    # Test `source_codes` table
    test_table(db_manager, 'source_codes', {
        'project_id': 1, 'name': 'Test Source', 'unique_id': 'sc-001', 'code_type': 'HTML', 
        'source_locale': 'en-US'
    })

    # Test `target_locales` table
    test_table(db_manager, 'target_locales', {'name': 'Test Target Locale', 'code': 'tt-TL', 'source_code_id': 1})

    # Test `file_types` table
    test_table(db_manager, 'file_types', {'code_type': 'Web App', 'name': 'Test Type', 'extension': '.test'})

    # Reset the database to ensure it can be cleared properly
    try:
        db_manager.reset_db()
        print("Database reset successfully by clearing all tables.")
    except Exception as e:
        print(f"Reset DB Error: {e}")

    # Close the database connection
    try:
        db_manager.close_connection()
        print("Database connection closed successfully.")
    except Exception as e:
        print(f"Close Connection Error: {e}")

    print("DBManager tests completed.")

def test_table(db_manager, table_name, test_data):
    """
    Helper function to test operations on a specific table.
    :param db_manager: An instance of DBManager
    :param table_name: The name of the table to test
    :param test_data: A dictionary containing test data for insertion
    """
    print(f"\nTesting table: {table_name}")

    # Insert a new record
    try:
        result = db_manager.insert_record(table_name, test_data)
        print(f"Insert Record Result for {table_name}: {result}")
    except Exception as e:
        print(f"Insert Record Error for {table_name}: {e}")

    # Retrieve all records
    try:
        records = db_manager.get_records(table_name)
        if records:
            print(f"Records retrieved from {table_name}: {records}")
        else:
            print(f"No records found in {table_name}.")
    except Exception as e:
        print(f"Get Records Error for {table_name}: {e}")

    # Retrieve a specific record
    try:
        if records:
            record_id = records[0][0]  # Assuming the first column is the ID
            record = db_manager.get_record(table_name, record_id)
            print(f"Specific Record retrieved from {table_name}: {record}")
        else:
            print(f"No specific record found in {table_name} to retrieve.")
    except Exception as e:
        print(f"Get Record Error for {table_name}: {e}")

    # Update a record
    try:
        if records:
            record_id = records[0][0]  # Assuming the first column is the ID
            update_data = {key: f"Updated {value}" for key, value in test_data.items()}
            result = db_manager.update_record(table_name, record_id, update_data)
            print(f"Update Record Result for {table_name}: {result}")
        else:
            print(f"No records found in {table_name} to update.")
    except Exception as e:
        print(f"Update Record Error for {table_name}: {e}")

    # Delete a specific record
    try:
        if records:
            record_id = records[0][0]  # Assuming the first column is the ID
            result = db_manager.delete_record(table_name, record_id)
            print(f"Delete Record Result for {table_name}: {result}")
        else:
            print(f"No records found in {table_name} to delete.")
    except Exception as e:
        print(f"Delete Record Error for {table_name}: {e}")

    # Delete all records
    try:
        result = db_manager.delete_records(table_name)
        print(f"Delete All Records Result for {table_name}: {result}")
    except Exception as e:
        print(f"Delete All Records Error for {table_name}: {e}")

if __name__ == "__main__":
    test_db_manager()
