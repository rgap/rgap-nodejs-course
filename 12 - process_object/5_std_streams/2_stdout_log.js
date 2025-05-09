/**
 * 📤 THEORY: process.stdout
 *
 * `process.stdout` is a writable stream representing standard output.
 * It is commonly used to send logs, responses, or formatted output to the terminal.
 *
 * While `console.log()` is a wrapper around `process.stdout.write()`,
 * the latter gives you finer control over formatting and line breaks.
 *
 * ✅ Use Cases:
 *   - Logging data in CLI tools
 *   - Printing progress bars
 *   - Streaming output to other programs or files (e.g. with `|` pipe)
 *
 * 📅 Built-in since Node’s earliest versions.
 */

process.stdout.write("📢 Hello from process.stdout\n");
process.stdout.write("🔁 Writing without line breaks... ");
process.stdout.write("✅ Done\n");
