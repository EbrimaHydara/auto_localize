# error_manager.py

class AppError(Exception):
    """Base class for all application errors."""
    pass


class InitializationError(AppError):
    """Raised when there is an initialization error."""
    pass


class PermissionError(AppError):
    """Raised when there is a permission error."""
    pass


class DatabaseError(AppError):
    """Raised when there is a database creation or access error."""
    pass


class DatabaseConnectionError(DatabaseError):
    """Raised when there is a problem connecting to or interacting with the database."""
    pass


class FileTypeError(AppError):
    """Raised when an unsupported or invalid file type is encountered."""
    pass


class TextExtractionError(AppError):
    """Raised when there is an issue extracting translatable text from a file."""
    pass


class LocalizationRenderError(AppError):
    """Raised when rendering localized text back into the source code fails."""
    pass


class ConfigurationError(AppError):
    """Raised when there is an error in the app's configuration settings."""
    pass


class DependencyError(AppError):
    """Raised when a required dependency is missing or cannot be loaded."""
    pass


class ResourceFileError(AppError):
    """Raised when there is an error with locale resource files (creating, reading, or writing)."""
    pass


class UIError(AppError):
    """Raised when there is an issue with the user interface."""
    pass


class InvalidUserInputError(AppError):
    """Raised when the user provides invalid input through the UI."""
    pass


class FilePermissionError(AppError):
    """Raised when there is an issue with file or directory permissions."""
    pass


class LocaleManagementError(AppError):
    """Raised when there is an issue managing locale settings."""
    pass
