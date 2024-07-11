import os
import shutil
from datetime import datetime
from file_localizer import FileLocalizer

class PDFFileLocalizer(FileLocalizer):
    def __init__(self, project_id):
        """
        Initializes the PDFFileLocalizer class with the given project ID.
        
        :param project_id: The ID of the project.
        """
        super().__init__(project_id)

    def localize_pdf_files(self):
        """
        Localizes all PDF files in the project's root directory and subdirectories.
        """
        pdf_files = self.get_files_by_extension('.pdf')
        for pdf_file in pdf_files:
            self._duplicate_pdf_file(pdf_file)
        # Get localized pdf files for report
        localized_pdf_files = self.get_files_by_extension('.pdf')
        self._write_report(localized_pdf_files)

    def _duplicate_pdf_file(self, pdf_file):
        """
        Duplicates the PDF file for each target locale and saves the content.

        :param pdf_file: The path to the PDF file being processed.
        """
        for locale in self.target_locales:
            language_code, country_code = locale[2], locale[3]
            duplicate_file_path = self._get_locale_file_path(pdf_file, language_code, country_code)
            shutil.copy(pdf_file, duplicate_file_path)

    def _get_locale_file_path(self, pdf_file, language_code, country_code):
        """
        Generates the file path for the given locale.

        :param pdf_file: The path to the original PDF file.
        :param language_code: The language code for the target locale.
        :param country_code: The country code for the target locale.
        :return: The file path for the given locale.
        """
        file_dir, file_name = os.path.split(pdf_file)
        file_name_without_ext, file_ext = os.path.splitext(file_name)
        new_file_name = f"{file_name_without_ext}_{language_code}_{country_code}{file_ext}"
        return os.path.join(file_dir, new_file_name)

    def _write_report(self, pdf_files):
        """
        Writes a report of all the PDF files affected and their duplicates.

        :param pdf_files: A list of the PDF files processed.
        """
        report_path = os.path.join(self.root_dir, 'locales', 'reports')
        os.makedirs(report_path, exist_ok=True)
        report_file = os.path.join(report_path, f'pdf_files_localization_report_{datetime.now().strftime("%Y%m%d_%H%M%S")}.txt')

        report_header = f"PDF FILES LOCALIZATION REPORT: {datetime.now().strftime("%Y%m%d_%H%M%S")}\n\n"
        report_header += f"The following list shows the files that are localized.\n\n"

        with open(report_file, 'w', encoding='utf-8') as file:
            file.write(report_header)
            file_counter = 1
            for pdf_file in pdf_files:
                file.write(f'{file_counter}: {pdf_file}\n')
                file_counter += 1
                # for locale in self.target_locales:
                #     language_code, country_code = locale[2], locale[3]
                #     file.write(f'Duplicate: {self._get_locale_file_path(pdf_file, language_code, country_code)}\n')







# # Usage examples for PDFFileLocalizer functions

# # is followed by comment
#   is followed by code

# from file_localizers.pdf_file_localizer import PDFFileLocalizer

# # Initialize the PDFFileLocalizer with a given project ID
# project_id = 1
# pdf_localizer = PDFFileLocalizer(project_id)

# # Localize all PDF files in the project's root directory and subdirectories
# pdf_localizer.localize_pdf_files()

# # Assuming the following methods are publicly accessible and could be called individually if needed:
# # Retrieve and print the locales directory path
# locales_path = pdf_localizer.get_locales_path()
# print(f"Locales Directory Path: {locales_path}")

# # Get and print all PDF files with a specific extension in the project's root directory and subdirectories
# pdf_files = pdf_localizer.get_files_by_extension('.pdf')
# print("PDF Files:")
# for pdf_file in pdf_files:
#     print(pdf_file)

# # Process a specific PDF file for localization (usually called within localize_pdf_files)
# pdf_file_path = 'path/to/specific/file.pdf'
# pdf_localizer._duplicate_pdf_file(pdf_file_path)  # Note: This method is typically internal, hence prefixed with '_'
