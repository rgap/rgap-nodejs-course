#!/bin/bash

# 🐳 This script manually orchestrates a Docker container running a mounted app.sh script.

# Start a containerized app with volume mounting
echo "🔄 Starting container..."
container_id=$(docker run -d --rm \
    -v "$(pwd)/game_server.sh:/game_server.sh" \
    alpine sh /game_server.sh)

# Monitor the container and restart it if it stops
while true; do
    # 🔍 Check if the container is still running
    is_running=$(docker ps -q -f id=$container_id)

    if [ -z "$is_running" ]; then
        echo "❌ Container stopped. Restarting..."
        # 🔁 Restart container with the same volume mount
        container_id=$(docker run -d --rm \
            -v "$(pwd)/game_server.sh:/game_server.sh" \
            alpine sh /game_server.sh)
    fi

    # 🕒 Wait 5 seconds before checking again
    sleep 5
done
