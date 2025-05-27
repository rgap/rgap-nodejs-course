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
