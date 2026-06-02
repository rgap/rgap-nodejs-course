# ❤️ Game Server with Healthcheck & Auto-Restart (Docker Compose)

This version of the game server uses both:

- ✅ `restart: always` — to auto-restart on crash
- 🩺 `HEALTHCHECK` — to detect _silent failures_ or unresponsiveness

---

## 📁 Folder Structure

```
compose_orchestration_with_healthcheck/
├── docker-compose.yml
└── game_server/
    ├── Dockerfile
    ├── package.json
    └── src/
        └── index.js
```

---

## ▶️ How to Run It

```bash
docker compose up
```

Visit: [http://localhost:3000](http://localhost:3000)

The server will simulate a crash after 15 seconds. Docker will restart it automatically.

---

## ⚙️ Healthcheck Behavior

The Compose file includes:

```yaml
healthcheck:
  test: ["CMD", "wget", "--spider", "--quiet", "http://localhost:3000"]
  interval: 10s
  timeout: 3s
  retries: 3
  start_period: 5s
```

Docker will:

- Ping `http://localhost:3000` every 10 seconds
- If it fails 3 times in a row, the container is marked `unhealthy`

---

## ✅ Why Use `HEALTHCHECK`?

| Feature                  | `restart: always` | With `HEALTHCHECK` |
| ------------------------ | ----------------- | ------------------ |
| Restarts on crash        | ✅ Yes            | ✅ Yes             |
| Detects silent failure   | ❌ No             | ✅ Yes             |
| Helps with orchestration | ❌ No             | ✅ Yes             |

> Health checks provide **awareness** about the app's internal behavior — not just if the process is alive.

---

## 📚 Concepts Covered

- Docker Compose orchestration
- Restart policies
- Health monitoring in containers
