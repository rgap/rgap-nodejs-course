/**
 * ⚙️ THEORY: process.cpuUsage()
 *
 * `process.cpuUsage()` returns the user and system CPU time usage of the current process,
 * measured in microseconds.
 *
 * ✅ Use Cases:
 *   - Microbenchmarking functions
 *   - Profiling performance in real-time services
 *   - Comparing CPU time across versions or builds
 *
 * 📅 Introduced in Node.js v6.1.0
 * 📌 Combined with uptime and memory metrics for full observability.
 */

const usage = process.cpuUsage();

console.log("🧮 CPU Usage:");
console.log(`- User CPU Time   : ${usage.user / 1000} ms`);
console.log(`- System CPU Time : ${usage.system / 1000} ms`);