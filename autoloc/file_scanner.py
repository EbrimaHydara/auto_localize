import os

def scan_files(root_dir):
    files = []
    for subdir, _, file_list in os.walk(root_dir):
        for file_name in file_list:
            if file_name.endswith(('.html', '.js')):
                files.append(os.path.join(subdir, file_name))
    return files
