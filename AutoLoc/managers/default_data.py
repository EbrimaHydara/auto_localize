# default_data.py

# Dictionary for create table statements
CREATE_TABLE_STATEMENTS = {
    'app_settings': """
        CREATE TABLE IF NOT EXISTS app_settings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            dark_mode BOOLEAN DEFAULT FALSE,
            duplicate_html BOOLEAN DEFAULT FALSE,
            use_key_namespace BOOLEAN DEFAULT FALSE,
            UNIQUE(id)
        )
    """,
    'file_types': """
        CREATE TABLE IF NOT EXISTS file_types (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            code_type TEXT,
            name TEXT,
            extension TEXT,
            is_active BOOLEAN DEFAULT TRUE,
            UNIQUE(code_type, name, extension)
        )
    """,
    'locales': """
        CREATE TABLE IF NOT EXISTS locales (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            code TEXT,
            UNIQUE(name, code)
        )
    """,
    'projects': """
        CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            unique_id TEXT,
            client TEXT,
            description TEXT,
            status TEXT DEFAULT 'In Progress',
            start_date TEXT NULL,
            end_date TEXT NULL,
            last_updated_date TEXT NULL,
            lead_engineer TEXT NULL,
            UNIQUE(name, client, unique_id)
        )
    """,
    'source_codes': """
        CREATE TABLE IF NOT EXISTS source_codes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            project_id INTEGER,
            name TEXT,
            unique_id TEXT,
            code_type TEXT,
            source_locale TEXT,
            original_source_code_path TEXT NULL,
            commons_paths TEXT NULL,
            localized_source_code_path TEXT NULL,
            status TEXT DEFAULT 'In Progress',
            notes TEXT NULL,
            UNIQUE(project_id, name, unique_id, source_locale),
            FOREIGN KEY(project_id) REFERENCES projects(id)
        )
    """,
    'target_locales': """
        CREATE TABLE IF NOT EXISTS target_locales (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            code TEXT,
            source_code_id INTEGER,
            UNIQUE(name, code, source_code_id),
            FOREIGN KEY(source_code_id) REFERENCES source_codes(id)
        )
    """
}

# Dictionary for default records
DEFAULT_RECORDS = {
    'app_settings': [
        (1, False, False, False)
    ],
    'locales': [
        ('Japanese', 'ja-JP'),
        ('English (US)', 'en-US'),
        ('Simplified Chinese (CN)', 'zh-CN'),
        ('Traditional Chinese (TW)', 'zh-TW'),
        ('Korean (South Korea)', 'ko-KR')
    ],
    'file_types': [
        ('Web App', 'HTML', '.html'),
        ('Web App', 'JavaScript', '.js'),
        ('Web App', 'Embedded JavaScript (EJS)', '.ejs'),
        ('Web App', 'TypeScript', '.ts'),
        ('Web App', 'TypeScript XML (TSX)', '.tsx'),
        ('Web App', 'React JSX', '.jsx'),
        ('Web App', 'Vue Single-File Component', '.vue'),
        ('Web App', 'JSON', '.json'),
        ('Android App', 'Android Layout XML Files', '.xml'),
        ('Android App', 'Java Source File', '.java'),
        ('Android App', 'Kotlin Source File', '.kt'),
        ('Android App', 'Android Resource Files', '.xml'),
        ('Android App', 'Android Manifest File', '.xml'),
        ('iOS App', 'Swift Source File', '.swift'),
        ('iOS App', 'Objective-C Implementation File', '.m'),
        ('iOS App', 'Objective-C Header File', '.h'),
        ('iOS App', 'iOS Localizable Strings File', '.strings'),
        ('iOS App', 'Storyboard Interface File', '.storyboard'),
        ('iOS App', 'XIB Interface Builder File', '.xib'),
        ('iOS App', 'Property List Files', '.plist'),
        ('Java App', 'JSF View Files', '.xhtml'),
        ('Java App', 'Java XML File', '.xml'),
        ('Java App', 'Java Source File', '.java'),
        ('Java App', 'Java Properties File', '.properties')
    ]
}
