from db_manager import DBManager
from error_manager import (
    DatabaseError,
    DatabaseConnectionError,
    FilePermissionError,
    InitializationError,
)
import os

# Initialize DBManager
db_manager = DBManager()

# 1. Test `insert_record` function
try:
    data = {'name': 'Test Project', 'client': 'Client A', 'description': 'A sample project'}
    inserted_record = db_manager.insert_record('projects', data)
    assert inserted_record['name'] == 'Test Project', f"Expected 'Test Project', got {inserted_record['name']}"
    assert inserted_record['client'] == 'Client A', f"Expected 'Client A', got {inserted_record['client']}"
    print("Test insert_record: Passed")
except DatabaseError as e:
    print(f"Test insert_record: Failed with DatabaseError: {str(e)}")
except Exception as e:
    print(f"Test insert_record: Failed with Exception: {str(e)}")

# 2. Test `update_record` function
try:
    record_id = inserted_record['id']
    updated_data = {'name': 'Updated Project', 'client': 'Client B', 'description': 'Updated description'}
    updated_record = db_manager.update_record('projects', record_id, updated_data)
    assert updated_record['name'] == 'Updated Project', f"Expected 'Updated Project', got {updated_record['name']}"
    assert updated_record['client'] == 'Client B', f"Expected 'Client B', got {updated_record['client']}"
    print("Test update_record: Passed")
except DatabaseError as e:
    print(f"Test update_record: Failed with DatabaseError: {str(e)}")
except Exception as e:
    print(f"Test update_record: Failed with Exception: {str(e)}")

# 3. Test `delete_record` function
try:
    deleted_record = db_manager.delete_record('projects', record_id)
    assert deleted_record['id'] == record_id, f"Expected ID {record_id}, got {deleted_record['id']}"
    assert deleted_record['name'] == 'Updated Project', f"Expected 'Updated Project', got {deleted_record['name']}"
    print("Test delete_record: Passed")
except DatabaseError as e:
    print(f"Test delete_record: Failed with DatabaseError: {str(e)}")
except Exception as e:
    print(f"Test delete_record: Failed with Exception: {str(e)}")

# 4. Test `get_records` function
try:
    records = db_manager.get_records('projects')
    assert isinstance(records, list), f"Expected list, got {type(records)}"
    print("Test get_records: Passed")
except DatabaseError as e:
    print(f"Test get_records: Failed with DatabaseError: {str(e)}")
except Exception as e:
    print(f"Test get_records: Failed with Exception: {str(e)}")

# 5. Test `get_record` function
try:
    if records:
        record_id = records[0]['id']
        record = db_manager.get_record('projects', record_id)
        assert isinstance(record, sqlite3.Row), f"Expected sqlite3.Row, got {type(record)}"
        assert record['id'] == record_id, f"Expected ID {record_id}, got {record['id']}"
        print("Test get_record: Passed")
    else:
        print("No records found to test get_record.")
except DatabaseError as e:
    print(f"Test get_record: Failed with DatabaseError: {str(e)}")
except Exception as e:
    print(f"Test get_record: Failed with Exception: {str(e)}")

# 6. Test `delete_records` function
try:
    deleted_records = db_manager.delete_records('projects')
    assert isinstance(deleted_records, list), f"Expected list, got {type(deleted_records)}"
    print("Test delete_records: Passed")
except DatabaseError as e:
    print(f"Test delete_records: Failed with DatabaseError: {str(e)}")
except Exception as e:
    print(f"Test delete_records: Failed with Exception: {str(e)}")

# 7. Test `reset_db` function
try:
    result = db_manager.reset_db()
    assert result is None, f"Unexpected result: {result}"
    print("Test reset_db: Passed")
except DatabaseError as e:
    print(f"Test reset_db: Failed with DatabaseError: {str(e)}")
except Exception as e:
    print(f"Test reset_db: Failed with Exception: {str(e)}")

# 8. Test `create_tables` function
try:
    result = db_manager.create_tables()
    assert result is None, f"Unexpected result: {result}"
    print("Test create_tables: Passed")
except DatabaseError as e:
    print(f"Test create_tables: Failed with DatabaseError: {str(e)}")
except Exception as e:
    print(f"Test create_tables: Failed with Exception: {str(e)}")

# 9. Test `close_connection` function
try:
    db_manager.close_connection()
    print("Test close_connection: Passed")
except Exception as e:
    print(f"Test close_connection: Failed with Exception: {str(e)}")
