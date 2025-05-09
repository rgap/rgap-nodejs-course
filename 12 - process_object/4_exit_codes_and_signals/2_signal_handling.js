/**
 * 🧠 THEORY: Handling Operating System Signals in Node.js
 *
 * Node.js can capture OS-level signals before the app is terminated.
 * This allows cleanup of open connections, logs, or graceful service shutdowns.
 *
 * 📌 This is critical in production (e.g., Docker, Kubernetes, PM2).
 *
 * ---
 * 📒 COMMON SIGNALS AND MEANINGS:
 *
 * SIGINT   → "Signal Interrupt"
 *     • Sent when the user presses Ctrl+C in the terminal
 *     • Used mostly during development or manual script termination
 *
 * SIGTERM  → "Signal Terminate"
 *     • Sent by `kill <pid>` command or Docker/Kubernetes to stop a process
 *     • Clean, controlled shutdown before process is replaced or stopped
 *
 * SIGHUP   → "Signal Hang Up"
 *     • Sent when terminal closes or SSH session ends
 *     • Originally for modems; now often used to reload configs or restart daemons
 *
 * SIGUSR1  → "User-defined Signal 1"
 *     • Developer-defined purpose (e.g., reload config, log rotation)
 *     • Often used by tools like `nodemon`
 *
 * SIGUSR2  → "User-defined Signal 2"
 *     • Same as above — free for custom purposes (e.g., debug trigger)
 */

const pid = process.pid;
console.log(`📡 Process started. PID: ${pid}`);
console.log("✅ Try sending different signals to see how they’re handled.");

// 🛑 Catch SIGINT: Ctrl+C in the terminal
process.on("SIGINT", () => {
  console.log("🔌 Caught SIGINT (Ctrl+C). Cleaning up before exit...");
  setTimeout(() => {
    console.log("✅ Graceful shutdown complete.");
    process.exit(0); // Exit normally
  }, 1000);
});

// 🛑 Catch SIGTERM: kill <pid> (sent by Docker/Kubernetes)
process.on("SIGTERM", () => {
  console.log("🛑 Caught SIGTERM (e.g., kill <pid>). Performing cleanup...");
  setTimeout(() => {
    console.log("✅ Shutdown complete (SIGTERM).");
    process.exit(0);
  }, 1000);
});

// 🔁 Catch SIGHUP: closing terminal/SSH
process.on("SIGHUP", () => {
  console.log("🔁 Caught SIGHUP (hangup). Maybe reloading config or shutting down...");
  setTimeout(() => {
    console.log("✅ Handled SIGHUP.");
    process.exit(0);
  }, 1000);
});

// 🧪 Catch SIGUSR1: User-defined signal 1
process.on("SIGUSR1", () => {
  console.log("🧪 Caught SIGUSR1. Developer-defined action (e.g., reload configs).");
  // Optional: no exit — continue running
});

// 🧪 Catch SIGUSR2: User-defined signal 2
process.on("SIGUSR2", () => {
  console.log("🧪 Caught SIGUSR2. Triggering custom debug or metrics.");
  // Optional: no exit
});

// 🔁 Keep process alive to allow manual testing of signals
setInterval(() => {}, 1000);

/**
 * 🧪 How to Test Each Signal (on Mac/Linux):
 *
 * 1. Find the process ID:
 *      node handle_signals.js
 *      ⤷ Output will show: PID: 12345
 *
 * 2. From another terminal, run:
 *
 *    - SIGINT  → Ctrl + C in terminal window
 *    - SIGTERM → kill 12345
 *    - SIGHUP  → kill -SIGHUP 12345
 *    - SIGUSR1 → kill -SIGUSR1 12345
 *    - SIGUSR2 → kill -SIGUSR2 12345
 *
 * 💡 These signals simulate Docker, PM2, SSH session closures, or manual kills.
 */
