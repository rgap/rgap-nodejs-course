/**
 * 📤 BACKUP SCRIPT WITH IPC (Child Process)
 *
 * This script is meant to be run via `child_process.fork()` from `fork_basic.js`.
 * When run this way, a communication channel (IPC) is automatically available.
 * We can use `process.send()` to send messages back to the parent.
 *
 * ✅ Example Use Cases:
 *   - Reporting progress, completion status, or errors
 *   - Returning a backup path or summary
 *   - Keeping parent informed in multi-worker systems
 */

console.log("🗂️ Starting simulated backup...");

// Optional: inform the parent that we started
if (process.send) {
  process.send({ status: "started", message: "Backup started..." });
}

// Simulate async work (e.g. copying files, compressing folders)
setTimeout(() => {
  const backupPath = "/backups/data-2025-05-08.zip";

  // Send result to parent
  if (process.send) {
    process.send({
      status: "done",
      path: backupPath,
      message: "Backup completed successfully",
    });
  }

  console.log(`✅ Backup saved at: ${backupPath}`);
  process.exit(0);
}, 1500);
