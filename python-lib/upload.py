import os
import subprocess
from dotenv import load_dotenv

load_dotenv()
# Replace the following variables with your own values
PACKAGE_NAME = "date-convert-ad-bs"

# Get the PyPI username and password from environment variables
USERNAME = os.environ.get('PYPI_USER')
PASSWORD = os.environ.get('PYPI_PASS')

if not USERNAME or not PASSWORD:
    raise ValueError(
        "Please set the PYPI_USER and PYPI_PASS environment variables")

# Build the distribution files
subprocess.check_call(["python3", "setup.py", "sdist", "bdist_wheel"])


# Create a list of all files in the "dist" directory
files = ["dist/" + f for f in os.listdir("dist")]


# Upload each file using Twine
for file_path in files:
    subprocess.check_call(
        ["twine", "upload", "-u", USERNAME, "-p", PASSWORD, file_path])
