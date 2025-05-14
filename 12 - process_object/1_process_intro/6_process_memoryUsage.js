/**
 * 🧠 THEORY: process.memoryUsage()
 *
 * This function returns a snapshot of memory usage at runtime. It's returned as an object in bytes.
 * It's vital in long-running processes (servers, workers) to understand memory footprint.
 *
 * 🔍 Properties:
 *   - rss: Resident Set Size → Total memory allocated, including code, heap, and C++ bindings.
 *   - heapTotal: Total size of allocated heap.
 *   - heapUsed: Memory actually used on the heap.
 *   - external: Memory used by native modules (e.g., Buffers).
 *   - arrayBuffers: Memory for ArrayBuffer and related views.
 *
 * ✅ Use Cases:
 *   - Detect memory leaks.
 *   - Monitor process health in production.
 *   - Log or alert when usage exceeds a threshold.
 *
 * 🧪 Tools like PM2, New Relic, or custom health dashboards can periodically call this function
 * to visualize and alert on memory behavior.
 */
console.log("📊 Memory usage:", process.memoryUsage());
