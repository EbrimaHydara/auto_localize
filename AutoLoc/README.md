# AutoLoc - Automated Localization Tool

## Background and Introduction
AutoLoc is an automatic localization tool designed to streamline the process of localizing source code for various software projects. With support for multiple file types, it enables the extraction, management, and translation of translatable strings across applications, enhancing localization efficiency. Originally built to meet the localization needs of Rakuten Mobile Inc. (RMI), AutoLoc's architecture supports internationalization with multi-language support.

## Use Case and Main Functions
AutoLoc's primary use case is to automate localization for web and mobile applications, particularly for multilingual support. Key functionalities include:
- Managing projects and source code for localization.
- Extracting translatable strings from supported file types (HTML, JavaScript, JSX, JSON, etc.) to JSON resource files.
- Generating unique keys for translatable content.
- Managing locale-specific resource files for each target language.
- Providing the ability to revert localization to the original state.

## Main Structure
The application is structured around the following modules:
- managers: Handles settings, projects, source code, errors, and locales.
- localizers: Contains localizer classes for each file type.
- main script (`autoloc.py`): Initializes localization processes and manages operations using `L10nManager`.
- setup script (`setup.py`): Provides initial setup, including database entries and configuration settings.

## Required Environment
- Operating System: Compatible with Windows, macOS, and Linux.
- Dependencies:
  - Python 3.x
  - Required packages in `requirements.txt`
  - The application also requires access to source code and localization files in specific formats. Currently, the applications only support the following file types:
    - HTML, JS, EJS, JSX, TS, TSX, JSON, & CSV.

## Installation and Setup
1. Install Python dependencies using:
    ```bash
    pip install -r requirements.txt
    ```
2. If required, change the configurations of the app by editing and running the `setup.py` before running `autoloc.py` for localization.

## Running `autoloc.py`
You must run `setup.py` script for the first time of using the app. This sets up initial project data and configuration, allowing customization of settings and project details. Ensure all configurations are complete and accurate in `setup.py` before running `setup.py`. 
After running the `setup.py` without any errors, then run the `autoloc.py` to localize the source code. You don't need to re-run `setup.py` unless you have deleted the DB or working on a new environment. 

Example:
- Run setup:
```bash
    python setup.py
```

- Run autoloc:
```bash
    python autoloc.py
```

## Database Default Data
The app's database includes:
- Project details for each localization project.
- Source code paths and types.
- Target locales for translations.
