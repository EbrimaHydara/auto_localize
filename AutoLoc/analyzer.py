import os
import shutil
from collections import defaultdict

class FileAnalyzer:
    def __init__(self, source_dir, output_dir, extensions):
        self.source_dir = source_dir
        self.output_dir = output_dir
        self.extensions = extensions
        self.file_counts = defaultdict(int)

    def analyze_and_copy(self):
        for root, dirs, files in os.walk(self.source_dir):
            for file in files:
                if any(file.endswith(ext) for ext in self.extensions):
                    source_file_path = os.path.join(root, file)
                    relative_path = os.path.relpath(root, self.source_dir)
                    output_file_path = os.path.join(self.output_dir, relative_path, file)
                    
                    os.makedirs(os.path.dirname(output_file_path), exist_ok=True)
                    shutil.copy2(source_file_path, output_file_path)
                    print(f"Copied: {source_file_path} to {output_file_path}")
                    
                    file_extension = os.path.splitext(file)[1]
                    self.file_counts[file_extension] += 1

        self.generate_report()

    def generate_report(self):
        report_header = "File Count by Type Report\n\n"
        report_path = os.path.join(self.output_dir, 'report.txt')
        os.makedirs(os.path.dirname(report_path), exist_ok=True)
        with open(report_path, 'w') as report_file:
            report_file.write(report_header)
            for ext, count in self.file_counts.items():
                report_file.write(f"{ext}: {count}\n")
        print(f"Report generated at: {report_path}")

if __name__ == "__main__":
    # Define the source directory and output directory here
    source_directory = '../../../Rakuten Mobile/Original Source Code/mno_marketing-master/src'
    output_directory = '../../RMI_Source_Code_Analysis'
    
    # Define the file extensions to filter
    file_extensions = ['.html', '.js', '.ejs', '.json','.csv', '.ts','.tsx', '.vue', '.pdf', '.png', '.jpg', '.jpeg', '.svg']

    analyzer = FileAnalyzer(source_directory, output_directory, file_extensions)
    analyzer.analyze_and_copy()
