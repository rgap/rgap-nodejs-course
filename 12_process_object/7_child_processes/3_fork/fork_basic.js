/**
 * 🔄 THEORY: child_process.fork()
 *
 * `fork()` is a special method in Node.js designed to create new **child Node.js processes**.
 * It behaves like `spawn()`, but:
 *   - It automatically uses the Node.js binary
 *   - It sets up a built-in IPC (inter-process communication) channel
 *
 * ✅ Ideal For:
 *   - Running background tasks in parallel
 *   - Offloading heavy CPU-bound logic (e.g., PDF/image processing)
 *   - Supervising long-running Node scripts like backups, scrapers, or workers
 *
 * ---
 * 📦 USE CASE: Forking a backup script (`./scripts/backup.js`)
 *
 * Instead of executing it as an external file (`execFile`),
 * we run it as a separate Node process — perfect for tasks
 * that are written in JS and need real-time communication or isolation.
 *
 * This version simply forks the script and listens for exit.
 */

const { fork } = require("child_process");

// Relative path to the child script (must be a Node.js file)
const child = fork("./scripts/backup.js"); // No need to specify 'node'

// Listen for messages (if backup.js uses process.send)
child.on("message", msg => {
  console.log("📩 Message from backup script:", msg);
});

// Listen for errors
child.on("error", err => {
  console.error("❌ Fork error:", err);
});

// Listen for exit event
child.on("exit", code => {
  if (code === 0) {
    console.log("✅ Backup process completed successfully.");
  } else {
    console.error(`❌ Backup process exited with code ${code}`);
  }
});
