import os
import shutil

def copy_files_with_extension(src_dir, dst_dir, file_extension):
    """
    Copies all files with a specific extension from the source directory to the destination directory,
    preserving the path tree structure.

    :param src_dir: The source directory path where the files are located.
    :param dst_dir: The destination directory path where the files will be copied.
    :param file_extension: The file extension to filter files to be copied (e.g., '.txt').
    """
    # Iterate over all files in the source directory
    for root, _, files in os.walk(src_dir):
        for file in files:
            if file.endswith(file_extension):
                # Construct the full file path
                src_file_path = os.path.join(root, file)
                
                # Calculate the relative path from the source directory
                relative_path = os.path.relpath(root, src_dir)
                
                # Construct the destination directory path based on the relative path
                dst_directory_path = os.path.join(dst_dir, relative_path)
                
                # Ensure the destination subdirectory exists
                if not os.path.exists(dst_directory_path):
                    os.makedirs(dst_directory_path)
                
                # Construct the full destination file path
                dst_file_path = os.path.join(dst_directory_path, file)
                
                # Copy the file
                shutil.copy2(src_file_path, dst_file_path)
                print(f"Copied: {src_file_path} to {dst_file_path}")

# Usage example
source_directory = "Project_Files/RMI/Source_Code_Samples"
destination_directory = "QA_Files"
file_ext = ".vue"  # Replace with the desired file extension

copy_files_with_extension(source_directory, destination_directory, file_ext)
