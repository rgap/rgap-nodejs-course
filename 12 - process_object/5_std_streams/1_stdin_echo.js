/**
 * ⌨️ THEORY: process.stdin
 *
 * `process.stdin` is a stream used to read input from the terminal.
 * By default, it is in **paused** mode, so you must explicitly call `resume()`
 * and attach a listener to read data.
 *
 * 🛠 Useful for CLI tools that prompt users for input.
 *
 * ✅ Common Use Cases:
 *   - Asking for user credentials or configuration
 *   - Interactive CLI prompts
 *   - REPL-style command input
 *
 * 📅 Available since the earliest versions of Node.js.
 * 📌 In modern tools, libraries like `readline` or `inquirer` build on this.
 */

process.stdin.resume();
process.stdin.setEncoding("utf8");

console.log("⌨️ Type something and press Enter (Ctrl+C to exit):");

process.stdin.on("data", (data) => {
  console.log("📥 You typed:", data.trim());
});
