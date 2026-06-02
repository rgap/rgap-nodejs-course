# 🧱 What is Containerization?

**Containerization** is a lightweight form of virtualization that allows you to package and run applications and their dependencies in isolated user spaces—called **containers**—on a shared operating system.

# 🐳 What is Docker?

**Docker** is a platform for developing, shipping, and running applications in containers.

# ⚖️ Containers vs Virtual Machines

| Feature          | Containers                          | Virtual Machines                 |
| ---------------- | ----------------------------------- | -------------------------------- |
| **Startup Time** | Seconds                             | Minutes                          |
| **Size**         | MBs                                 | GBs                              |
| **Isolation**    | Process-level (shared OS kernel)    | Full OS isolation                |
| **Performance**  | Close to native                     | Slight overhead                  |
| **Use Case**     | Microservices, CI/CD, rapid deploys | Heavy apps, different OS per app |

> Containers are often used where speed and portability matter. VMs are preferred when deep isolation is required.

## Main Components

- **Docker Engine**: Core runtime for building and running containers
  📌 _Example:_

```bash
# Build an image from a Dockerfile
docker build -t myapp-image .

# Run a container from the image
docker run -d -p 3000:3000 myapp-image
```

- **Docker CLI**: Command-line tool for interacting with Docker
  📌 _Example:_

```bash
# Display Docker version
docker --version

# List running containers
docker ps

# Stop a container
docker stop <container_id>
```

- **Docker Hub**: Public registry for sharing images
  📌 _Example:_

```bash
# Pull MongoDB image from Docker Hub
docker pull mongo

# Login and push a custom MongoDB-based image
docker login
docker tag custom-mongo username/custom-mongo:latest
docker push username/custom-mongo:latest
```

- **Docker Compose**: Tool to define and run multi-container applications
  📌 _Example:_

```yaml
version: "3"
services:
  mongo:
    image: mongo
    container_name: my-mongo
    ports:
      - "27017:27017"
    volumes:
      - ./data:/data/db
```

```bash
# Run all services
docker-compose up
```
