# Dockerfile for backend
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy poetry files
COPY pyproject.toml poetry.lock ./

# Install Poetry
RUN pip install poetry

# Install dependencies
RUN poetry install --no-dev

# Copy the application code
COPY . .

# Expose the backend port
EXPOSE 8000

# Start the FastAPI application
CMD ["poetry", "run", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
