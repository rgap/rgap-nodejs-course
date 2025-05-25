# 🧱 Custom Dockerfile Example: MongoDB

This folder shows how to create a custom Docker image for MongoDB using a `Dockerfile`.

---

## ✅ Build the Image

```bash
docker build -t custom-mongo .
```

---

## ✅ Run the Container

```bash
docker run --name mongo-container -d -p 27017:27017 custom-mongo
```

---

## 🧠 Why Use a Dockerfile for MongoDB?

Even though MongoDB has an official image, creating a `Dockerfile` lets you:

- Customize the image later (e.g., copy seed scripts)
- Learn how image layers and `CMD` work
- Control build steps and add metadata
