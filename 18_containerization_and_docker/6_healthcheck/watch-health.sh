#!/bin/bash

# 📦 Continuous health watcher for a container
# Usage: ./watch-health.sh <container_name>

container_name="$1"

if [ -z "$container_name" ]; then
    echo "❗ Please provide a container name."
    echo "👉 Usage: ./watch-health.sh <container_name>"
    exit 1
fi

echo "👀 Watching health status of: $container_name (CTRL+C to stop)"
echo

while true; do
    status=$(docker inspect --format='{{.State.Health.Status}}' "$container_name" 2>/dev/null)
    if [ $? -ne 0 ]; then
        echo "❌ Container not found: $container_name"
        exit 1
    fi

    echo "🕒 $(date +'%T') - Health: $status"
    sleep 2
done
