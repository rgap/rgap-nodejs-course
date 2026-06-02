# 🐳 Dockerfile for MongoDB with seed script

FROM mongo:7

# Copy the init script to the Docker entrypoint directory
COPY init.js /docker-entrypoint-initdb.d/

# MongoDB runs any .js or .sh in that dir automatically on first startup
EXPOSE 27017
