import os
import json
import csv
from datetime import datetime
from file_localizer import FileLocalizer

class CSVFileLocalizer(FileLocalizer):
    def __init__(self, project_id):
        """
        Initializes the CSVFileLocalizer class with the given project ID.
        
        :param project_id: The ID of the project.
        """
        super().__init__(project_id)

    def localize_csv_files(self):
        """
        Localizes all CSV files in the project's root directory and subdirectories.
        """
        csv_files = self.get_files_by_extension('.csv')
        for csv_file in csv_files:
            self._process_csv_file(csv_file)
        # Get localized csv files for report
        localized_csv_files = self.get_files_by_extension('.csv')
        self._write_report(localized_csv_files)

    def _process_csv_file(self, csv_file):
        """
        Processes an individual CSV file for localization.

        :param csv_file: The path to the CSV file to process.
        """
        csv_content = self._read_csv_file(csv_file)
        self._extract_and_save_csv_content(csv_content, csv_file)
        self._duplicate_csv_file(csv_file, csv_content)

    def _read_csv_file(self, csv_file):
        """
        Reads the content of a CSV file and returns it as a list of dictionaries.

        :param csv_file: The path to the CSV file.
        :return: The content of the CSV file.
        """
        with open(csv_file, 'r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            return list(reader)

    def _extract_and_save_csv_content(self, content, csv_file):
        """
        Extracts and saves the CSV content to JSON files.

        :param content: The content of the CSV file.
        :param csv_file: The path to the CSV file being processed.
        """
        csv_json = {csv_file: content}
        self._save_json_file(csv_json, self.source_locale[2], 'source')

        for locale in self.target_locales:
            self._save_json_file(csv_json, locale[2], 'target')

    def _save_json_file(self, data, locale, locale_type):
        """
        Saves the data to a JSON file for the specified locale.

        :param data: The data to save.
        :param locale: The locale information.
        :param locale_type: The type of locale ('source' or 'target').
        """
        language_code, country_code = locale.split('-')
        json_path = os.path.join(self.locales_dir, f'{language_code}_{country_code}', f'csv_contents_{language_code}_{country_code}.json')
        os.makedirs(os.path.dirname(json_path), exist_ok=True)

        if os.path.exists(json_path):
            with open(json_path, 'r', encoding='utf-8') as file:
                existing_data = json.load(file)
            existing_data.update(data)
        else:
            existing_data = data

        with open(json_path, 'w', encoding='utf-8') as file:
            json.dump(existing_data, file, ensure_ascii=False, indent=4)

    def _duplicate_csv_file(self, csv_file, content):
        """
        Duplicates the CSV file for each target locale and saves the content.

        :param csv_file: The path to the CSV file being processed.
        :param content: The content of the CSV file.
        """
        for locale in self.target_locales:
            language_code, country_code = locale[2], locale[3]
            duplicate_file_path = self._get_locale_file_path(csv_file, locale)
            self._save_csv_file(duplicate_file_path, content)

    def _save_csv_file(self, csv_file, content):
        """
        Saves the content to a CSV file.

        :param csv_file: The path to the CSV file to save.
        :param content: The content to save in the CSV file.
        """
        with open(csv_file, 'w', newline='', encoding='utf-8') as file:
            writer = csv.DictWriter(file, fieldnames=content[0].keys())
            writer.writeheader()
            writer.writerows(content)

    def _get_locale_file_path(self, csv_file, locale):
        """
        Generates the file path for the given locale.

        :param csv_file: The path to the original CSV file.
        :param locale: The locale for which to generate the file path.
        :return: The file path for the given locale.
        """
        file_dir, file_name = os.path.split(csv_file)
        if locale == self.source_locale:
            return os.path.join(file_dir, file_name)
        else:
            return os.path.join(self.locales_dir, f'{locale[2]}_{locale[3]}', f'{file_name}')

    def _write_report(self, csv_files):
        """
        Writes a report of all the CSV files affected and their duplicates.

        :param csv_files: A list of the CSV files processed.
        """
        report_path = os.path.join(self.root_dir, 'locales', 'reports')
        os.makedirs(report_path, exist_ok=True)
        report_file = os.path.join(report_path, f'csv_files_localization_report_{datetime.now().strftime("%Y%m%d_%H%M%S")}.txt')

        report_header = f"CSV FILES LOCALIZATION REPORT: {datetime.now().strftime("%Y%m%d_%H%M%S")}\n\n"
        report_header += f"The following list shows the files that are localized.\n\n"

        with open(report_file, 'w', encoding='utf-8') as file:
            file.write(report_header)
            file_counter = 1
            for csv_file in csv_files:
                file.write(f'{file_counter}: {csv_file}\n')
                file_counter += 1
                # for locale in self.target_locales:
                #     language_code, country_code = locale[2].split('-')
                #     file.write(f'Duplicate: {self.locales_dir}/{language_code}_{country_code}/{os.path.basename(csv_file)}\n')







# # Usage examples for CSVFileLocalizer functions

# # is followed by comment
#   is followed by code

# from file_localizers.csv_file_localizer import CSVFileLocalizer

# # Initialize the CSVFileLocalizer with a given project ID
# project_id = 1
# csv_localizer = CSVFileLocalizer(project_id)

# # Localize all CSV files in the project's root directory and subdirectories
# csv_localizer.localize_csv_files()

# # Assuming the following methods are publicly accessible and could be called individually if needed:
# # Retrieve and print the locales directory path
# locales_path = csv_localizer.get_locales_path()
# print(f"Locales Directory Path: {locales_path}")

# # Get and print all CSV files with a specific extension in the project's root directory and subdirectories
# csv_files = csv_localizer.get_files_by_extension('.csv')
# print("CSV Files:")
# for csv_file in csv_files:
#     print(csv_file)

# # Process a specific CSV file for localization (usually called within localize_csv_files)
# csv_file_path = 'path/to/specific/file.csv'
# csv_localizer._process_csv_file(csv_file_path)  # Note: This method is typically internal, hence prefixed with '_'
