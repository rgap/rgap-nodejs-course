/**
 * 🆔 THEORY: process.pid, process.ppid, and process.title
 *
 * These properties provide identity information about the current Node.js process.
 *
 * ✅ Use Cases:
 *   - Sending signals (e.g. `kill <pid>`) to a specific process
 *   - Logging process metadata
 *   - Monitoring parent/child process relations
 *
 * 📌 `process.title` can be modified (unlike `pid`), affecting what’s seen in `ps` or `top`.
 * 📅 All available since early Node.js versions.
 */

console.log("🆔 Process ID       :", process.pid);
console.log("👪 Parent Process ID:", process.ppid);
console.log("🏷️ Process Title    :", process.title);