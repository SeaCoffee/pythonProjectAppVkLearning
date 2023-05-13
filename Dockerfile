# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Install system dependencies for MySQL
RUN apt-get update && \
    apt-get install -y gcc python3-dev default-libmysqlclient-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

RUN python -m pip install --upgrade pip

# Install any needed packages specified in requirements.txt
RUN pip install -v --trusted-host pypi.python.org -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV FLASK_APP=backend.app:create_app

# Run app.py when the container launches
CMD ["flask", "run", "--host=0.0.0.0", "--port=80"]