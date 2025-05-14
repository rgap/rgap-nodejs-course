/**
 * 🔄 THEORY: process ‘beforeExit’ and ‘exit’ Events
 *
 * Node.js emits two lifecycle events when the event loop is empty:
 *
 *  • 'beforeExit'
 *      – Emitted when Node has no more work scheduled, but before it actually exits.
 *      – You can schedule more work here; if you do, Node will continue running.
 *
 *  • 'exit'
 *      – Emitted just before the process exits.
 *      – Cannot schedule additional work (callbacks ignored).
 *      – Use to perform final sync-only cleanup (no async).
 *
 * 📅 Both events have been available since Node.js v0.10.
 */

console.log("▶️ Script start");

// Schedule a simple task
setTimeout(() => {
  console.log("⏰ Timeout callback – still running event loop.");
}, 100);

// Handle beforeExit
process.on("beforeExit", code => {
  console.log(`🕛 beforeExit event (code: ${code}). Scheduling one more task.`);
  // Scheduling an extra async operation will keep the process alive
  setTimeout(() => {
    console.log("🛠️ Extra work completed during beforeExit.");
  }, 50);
});

// Handle exit
process.on("exit", code => {
  console.log(`🚪 exit event (code: ${code}). Cleaning up synchronously.`);
  // Only synchronous operations are allowed here
  // e.g., fs.writeFileSync, console.log, etc.
});

console.log("✅ End of script body");
