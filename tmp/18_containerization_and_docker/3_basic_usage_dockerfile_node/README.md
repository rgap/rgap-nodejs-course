# 🧼 Clean and Standard Dockerfile for Node.js

This example shows a more **realistic** and **standard** way to containerize a simple Node.js app.

---

## 📁 Project Structure

```
node_standard_dockerfile_option_a/
├── Dockerfile
├── .dockerignore
├── package.json
├── src/
│   └── app.js
└── README.md
```

---

## 🐳 Dockerfile Explanation

```Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY ./src/app.js .

EXPOSE 3000

CMD ["node", "app.js"]
```

### 🔍 Key Points

- **Layer caching**: `COPY package*.json` before copying app files = faster rebuilds.
- **EXPOSE 3000**: Optional, helps documentation and orchestration tools.

---

## 🔨 Docker Build

```bash
docker build -t my-node-app .
```

This command builds a Docker image.

| Step                | Happens on...             | Description                                                             |
| ------------------- | ------------------------- | ----------------------------------------------------------------------- |
| `docker build`      | 🖥️ Host                   | Tells Docker to start building an image                                 |
| `.` (dot)           | 🖥️ Host                   | Uses current folder (project directory) as the build context            |
| `Dockerfile`        | 🖥️ Host                   | Docker reads and executes each line                                     |
| `COPY`, `RUN`, etc. | 🐳 Inside build container | Each command runs in a temporary build container to create image layers |
| Final image storage | 🐳 Docker Engine          | The image is stored inside Docker's local system, not as a normal file  |

✅ Result:

- Image is named `my-node-app`
- Stored **inside Docker**, not visible in your file browser
- List it with: `docker images`

---

## ▶️ Docker Run

```bash
docker run --name express-container -p 3000:3000 my-node-app
```

This command runs a container from your image.

| Step                       | Happens on...                  | Description                                                          |
| -------------------------- | ------------------------------ | -------------------------------------------------------------------- |
| `docker run`               | 🖥️ Host                        | Starts a new container from your image                               |
| `--name express-container` | 🖥️ Host                        | Assigns a name to your container                                     |
| `-p 3000:3000`             | 🖥️ + 🐳 Both                   | Maps container port 3000 to host port 3000                           |
| App starts                 | 🐳 Inside container            | Runs `node app.js` as defined in Dockerfile                          |
| Access via browser         | 🖥️ Host browser → 🐳 Container | You visit http://localhost:3000 to reach the container’s Express app |

✅ Result:

- The container named `express-container` runs in the background
- Express listens on port 3000 inside the container
- You access it at [http://localhost:3000](http://localhost:3000)

Visit: [http://localhost:3000](http://localhost:3000)
