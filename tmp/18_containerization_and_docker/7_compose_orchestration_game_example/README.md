# 🎮 Game Server with Auto-Restart via Docker Compose

This example replaces a shell-based game server with a **Node.js Express server** and uses Docker Compose to restart it automatically when it stops.

---

## 📁 Folder Structure

```
compose_orchestration_example/
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

You’ll see the game server start, run for 10 seconds, then shut down... and restart again automatically.

Visit it at: [http://localhost:3000](http://localhost:3000)

---

## 🔁 Auto-Restart Explained

```yaml
restart: always
```

This tells Docker Compose to restart the container every time it exits — simulating what a manual orchestrator would do.

---

## 🧠 Use Cases

- Crash recovery
- Periodic maintenance reboots
- Development preview of orchestration behavior
