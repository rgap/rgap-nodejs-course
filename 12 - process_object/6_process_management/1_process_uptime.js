/**
 * ⏱️ THEORY: process.uptime()
 *
 * `process.uptime()` returns the number of seconds the Node.js process has been running.
 * This is useful for monitoring, profiling, and logging long-running services.
 *
 * ✅ Use Cases:
 *   - Periodic health checks or metrics dashboards
 *   - Logging service lifetime for debugging
 *   - Warning when uptime is unusually long (e.g., missed restart)
 *
 * 🧠 Returns a float in seconds. Multiply by 1000 if you want milliseconds.
 * 📅 Available since Node.js v0.5.0
 */

const seconds = process.uptime();
console.log(`⏱️ Uptime: ${seconds.toFixed(2)} seconds`);