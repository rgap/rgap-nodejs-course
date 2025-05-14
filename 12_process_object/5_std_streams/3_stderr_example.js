/**
 * ❌ THEORY: process.stderr
 *
 * `process.stderr` is a writable stream used specifically for error output.
 * It's separate from `stdout` so tools and shell environments can handle errors distinctly.
 *
 * ✅ Use Cases:
 *   - Logging errors while keeping logs cleanly separated from regular output
 *   - Redirecting only errors to files: `node script.js 2> error.log`
 *   - CI/CD systems that flag error streams
 *
 * 📌 Same API as `process.stdout.write()`, but used intentionally for problems.
 * 📅 Present since early Node versions.
 */

process.stderr.write("❗ An error occurred. Please check your input.\n");
