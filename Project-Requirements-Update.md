App scope: Scripting or simple scraping app
    ○ Write a script that can scan through html files and any other files containing hard coded strings (translatable strings).
    ○ The script must extract every hard coded string and send it to a JSON or PO file while replacing it with a unique key in the file.
    ○ Maintain the structure of the website folder structure but make sure that every localizable file is well prepared for translation by extracting its strings into JSON or PO files ready for translation.
    ○ Name the JSON or PO files same as their corresponding html files' names to ease the process of extracting them into a well-defined directory where TMS can pick them for translation.
    ○ TMS should be able to point to the JSON or PO files repository inside the local file structure of the website.
    ○ Work is expected to be done on the source code (local copy) of the website being localized.
    ○ The localized version of the local copy of the website is then sent to the client to upload/merge with their current website. 
    ○ The continuous localization, translation reviews and validations, automatic updates of translated files are handled by TMS (not by my app)
    ○ I don't need to develop a fully functional management system for the workflows. All workflows are handled by TMS.
    ○ My job scope is limited to string extraction from localizable files in a website file system and dump the strings in translation resource files for TMS to pick-up and translate.
    ○ I must also add the necessary functionality that will enable user language selection from a drop down menu. The selected language option from the drop down menu should automatically change the websites language (content source) from the corresponding translated files for that language.
    ○ I should make sure that the code is not too invasive or aggressive in collecting and replacing translatable texts.
