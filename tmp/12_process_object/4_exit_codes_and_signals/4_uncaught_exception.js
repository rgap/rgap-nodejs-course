/**
 * ⚠️ THEORY: Handling Uncaught Exceptions
 *
 * By default, an uncaught exception will crash the Node.js process.
 * Listening to 'uncaughtException' lets you log and perform last-ditch cleanup.
 * However, it’s recommended to restart the process after an exception,
 * since the state may be inconsistent.
 *
 * 📅 Available since early Node.js versions.
 */

console.log("▶️ Starting uncaughtException demo");

// Catch any exception not handled elsewhere
process.on("uncaughtException", err => {
  console.error("❗ Uncaught Exception detected:");
  console.error(err.stack || err.message);
  // Perform synchronous cleanup here (e.g., flush logs)

  // After cleanup, exit with failure code
  process.exit(1);
});

// Simulate an unexpected error after a short delay
setTimeout(() => {
  throw new Error("💥 Boom! This error was not caught elsewhere.");
}, 100);
