# 🍃 Basic Usage Example: Running MongoDB in Docker

This is the **simplest real-world example** of using Docker:
➡️ Running a MongoDB database in an isolated container.

No code, no setup — just a Docker command.

---

## 🧱 What Will This Do?

It will:

- Start a MongoDB server inside a container
- Expose port 27017 to your machine
- Store data inside the container (temporary)

---

## ✅ Step 1: Pull the MongoDB Image

```bash
docker pull mongo
```

This downloads the **official MongoDB image** from Docker Hub.

---

## ✅ Step 2: Run the Container

```bash
docker run --name my-mongo -d -p 27017:27017 mongo
```

### What this means:

- `--name my-mongo`: name the container
- `-d`: run in background (detached mode)
- `-p 27017:27017`: map container port to host port
- `mongo`: use the image named `mongo`

---

## ✅ Step 3: Connect to MongoDB

You can connect using:

- MongoDB Compass
- A MongoDB shell
- Another Docker container or local script

Example using `mongo` CLI:

```bash
docker exec -it my-mongo mongosh
```

You’ll get a prompt like this:

```bash
test> db.users.insertOne({ name: "Alice" })
test> db.users.find()
```

---

## 🧹 To Stop and Remove the Container

```bash
docker stop my-mongo
docker rm my-mongo
```

---

## 🧠 Why This Example?

- No app code needed
- Shows Docker's power: run real software instantly
- You now have a MongoDB server running in isolation!
