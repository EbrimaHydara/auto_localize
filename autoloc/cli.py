import argparse
from .main import run_autoloc

def main():
    parser = argparse.ArgumentParser(description='AutoLoc Script for Website Localization')
    parser.add_argument('--source', required=True, help='Path to the source directory')
    parser.add_argument('--locales', required=True, nargs='+', help='List of target locales')
    args = parser.parse_args()
    
    run_autoloc(args.source, args.locales)
