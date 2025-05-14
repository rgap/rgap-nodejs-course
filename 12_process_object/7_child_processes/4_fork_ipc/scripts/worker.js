/**
 * 🧠 IPC WORKER SCRIPT
 *
 * This worker script is forked by a parent process using `child_process.fork()`.
 * It listens for incoming tasks via `process.on("message")`, and replies using `process.send()`.
 *
 * ✅ Real-World Use Cases:
 *   - Centralized job processing (backup, cleanup, scraping)
 *   - Queue processors
 *   - CLI automation workers
 */

process.on("message", msg => {
  console.log("📨 Task received from parent:", msg);

  if (!msg.task) {
    process.send?.({
      status: "error",
      error: "No task specified",
    });
    return;
  }

  if (msg.task === "backup") {
    console.log("🗂️ Performing simulated backup...");

    // Simulate async task
    setTimeout(() => {
      const path = "/backups/data-2025-05-08.zip";

      process.send?.({
        status: "done",
        task: "backup",
        path,
        message: "Backup completed successfully",
      });

      console.log(`✅ Backup completed and stored at ${path}`);
    }, 1500);
  } else {
    process.send?.({
      status: "error",
      task: msg.task,
      error: `Unknown task: ${msg.task}`,
    });
  }
});
