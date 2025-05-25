# 🐳 Dockerfile for a Node.js Web Application (Improved Structure)

# 1. Use a base image — a lightweight version of Node.js on Alpine Linux
FROM node:18-alpine

# Why use `node:alpine`?
# ✅ Smaller image size (~30MB)
# ✅ Faster downloads and deployments
# ⚠️ May need build tools for native packages

# 2. Set the working directory inside the container
WORKDIR /app

# Why?
# All future paths (COPY, RUN, CMD) will be relative to this directory

# 3. Copy only the package*.json files first for dependency caching
COPY package*.json ./

# Why?
# This lets Docker cache dependencies and avoid reinstalling if unchanged

# 4. Install Node.js dependencies
RUN npm install

# 5. Copy the rest of the application code, preserving folder structure
COPY ./src ./src

# Now your app will be inside /app/src/app.js

# 6. Expose the port your app will use (for documentation and tooling)
EXPOSE 3000

# 7. Define the default command to start the app
CMD ["node", "src/app.js"]

# Why use JSON array syntax?
# It's safer and avoids shell parsing issues (especially on Windows)
