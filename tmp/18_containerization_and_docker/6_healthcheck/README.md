# 🩺 Docker HEALTHCHECK Example

This example demonstrates how to add a **HEALTHCHECK** to a container using a simple Express app and monitor its status using a live-watching script.

---

## 💡 What It Does

Docker will run a `curl`-style check every 10 seconds to ensure your app responds on port 3000.

---

## 📁 What's Inside

- `Dockerfile` — defines the container and health check
- `src/app.js` — minimal Express app
- `watch-health.sh` — live health status monitor

---

## ▶️ How to Use

```bash
docker build -t healthcheck-app .
docker run -d --name hc-test healthcheck-app
```

---

## 👀 Continuous Health Watch

```bash
./watch-health.sh hc-test
```

Outputs something like:

```
🕒 12:34:56 - Health: healthy
🕒 12:34:58 - Health: healthy
```

---

## 🧪 Docker Native Way (Optional)

```bash
docker inspect --format='{{.State.Health.Status}}' hc-test
```

Or for detailed JSON output:

```bash
docker inspect --format='{{json .State.Health}}' hc-test | jq
```

---

## 🔁 Health States

- `starting` — Initial state
- `healthy` — Passed health checks
- `unhealthy` — Failed 3 checks in a row

---

## 🔧 When to Use This?

- Ensuring API or DB services are ready
- Validating app availability before other containers depend on it
- Marking broken containers for restart
