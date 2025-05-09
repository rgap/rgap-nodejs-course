/**
 * 🧠 THEORY: process.memoryUsage()
 *
 * `process.memoryUsage()` returns an object describing the memory usage of the Node.js process.
 * It includes multiple metrics such as RSS, heapTotal, and heapUsed.
 *
 * ✅ Key Properties:
 *   - rss: Resident Set Size (total memory allocated for process execution)
 *   - heapTotal: total size of the allocated heap
 *   - heapUsed: actual memory used during execution
 *   - external: memory used by C++ objects bound to JavaScript objects
 *
 * 📅 Available since Node.js v0.3.3
 * 📦 Useful for diagnostics, performance monitoring, and alerts.
 */

const mem = process.memoryUsage();

console.log("🧠 Memory Usage:");
console.log(`- RSS        : ${(mem.rss / 1024 / 1024).toFixed(2)} MB`);
console.log(`- Heap Total : ${(mem.heapTotal / 1024 / 1024).toFixed(2)} MB`);
console.log(`- Heap Used  : ${(mem.heapUsed / 1024 / 1024).toFixed(2)} MB`);
console.log(`- External   : ${(mem.external / 1024 / 1024).toFixed(2)} MB`);