from setuptools import setup, find_packages

setup(
    name='autoloc',
    version='1.0.0',
    packages=find_packages(),
    install_requires=[
        # List your dependencies here
    ],
    entry_points={
        'console_scripts': [
            'autoloc=autoloc.cli:main',
        ],
    },
)
