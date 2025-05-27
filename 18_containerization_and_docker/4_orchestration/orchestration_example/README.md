# 🔧 Manual Orchestration Example (Without Kubernetes)

This is a **manual orchestration demo** using raw Docker and Bash — no Kubernetes, no Docker Compose, just simple shell scripting.

It demonstrates how a basic Bash script can **keep a containerized game server running**, automatically restarting it if it shuts down.

---

## 📁 Folder Structure

```
manual_orchestration_example/
├── game_server.sh     # Simulates a game server inside a container
└── orchestrator.sh    # Monitors and restarts the container as needed
```

---

## 📄 game_server.sh

```bash
#!/bin/sh

echo "🎮 Game server starting up..."
sleep 1
echo "✅ Game server is running..."

# Simulate work for a fixed duration
echo "⏳ Processing gameplay session..."
sleep 7

# Use 1 for crash, 0 for maintenance
exit_code=0

if [ $exit_code -eq 1 ]; then
    echo "💥 Game server crashed unexpectedly!"
    sleep 5
else
    echo "🛑 Game server shutting down for maintenance..."
    sleep 5
fi

exit $exit_code
```

This script simulates a game server that runs, processes a task, and then either "crashes" or shuts down normally.

---

## 📄 orchestrator.sh

```bash
#!/bin/bash

# 🐳 This script manually orchestrates a Docker container running a mounted game_server.sh script.

echo "🔄 Starting container..."
container_id=$(docker run -d --rm \
    -v "$(pwd)/game_server.sh:/game_server.sh" \
    alpine sh /game_server.sh)

# Monitor the container and restart it if it stops
while true; do
    is_running=$(docker ps -q -f id=$container_id)

    if [ -z "$is_running" ]; then
        echo "❌ Container stopped. Restarting..."
        container_id=$(docker run -d --rm \
            -v "$(pwd)/game_server.sh:/game_server.sh" \
            alpine sh /game_server.sh)
    fi

    sleep 5
done
```

This Bash script:

- Starts the `game_server.sh` script inside a Docker container
- Monitors the container every 5 seconds
- Restarts it if it stops for **any reason**

---

## ▶️ How to Run It

1. Make both scripts executable:

```bash
chmod +x game_server.sh orchestrator.sh
```

2. Run the orchestrator:

```bash
./orchestrator.sh
```

---

## 🧠 What You Learn

This example shows how **orchestration** works at a fundamental level:

- Monitoring a process
- Automatically restarting on exit
- No external dependencies

This mimics what real orchestrators like:

- 🐳 Docker Compose (`restart: always`)
- ☸️ Kubernetes (pod restarts, liveness checks)
- 🧾 systemd services

...do automatically.

---

## 📚 Related Concepts

- Volume mounting in Docker (`-v ./file:/container/file`)
- Exit codes and conditional logic
- Process supervision
- Manual orchestration vs. automated solutions

---
