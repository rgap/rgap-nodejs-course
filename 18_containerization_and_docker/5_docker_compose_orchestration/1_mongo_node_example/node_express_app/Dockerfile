# 🐳 Dockerfile for Node.js Express App (Compose Version)

# Use lightweight Node.js image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy and install dependencies first (for layer caching)
COPY package.json ./
RUN npm install

# Copy source code
COPY ./src ./src

# Expose the app's port
EXPOSE 3000

# Start the server
CMD ["node", "src/app.js"]
