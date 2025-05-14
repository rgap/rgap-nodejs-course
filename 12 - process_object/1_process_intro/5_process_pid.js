/**
 * 🧠 THEORY: process.pid
 *
 * `process.pid` gives the **process identifier** (PID), a unique number assigned by the OS.
 * Every running process on your system has a PID.
 *
 * 📌 Use Cases:
 *   - Logging: Include PID in logs to trace multiple processes.
 *   - Monitoring: Tools like PM2 or systemd monitor and restart processes using PID.
 *   - Signal Handling: You can send signals (`SIGINT`, `SIGTERM`) to a process using its PID.
 *
 * ✅ Example:
 *   Run `ps -A | grep node` to see all Node processes and their PIDs.
 *   You can then use `kill <PID>` to stop one.
 *
 * 🔐 SECURITY NOTE: Avoid logging PIDs in public APIs or exposing them to users.
 */
console.log("🆔 Process ID:", process.pid);
