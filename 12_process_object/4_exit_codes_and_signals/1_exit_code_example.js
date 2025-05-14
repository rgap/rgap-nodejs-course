/**
 * 🚪 THEORY: Exit Codes in Node.js
 *
 * Node.js allows developers to specify an exit code using `process.exit(code)`.
 * Exit codes are essential in scripting, automation, and DevOps for indicating
 * the success or failure of a script.
 *
 * 📌 Common exit codes:
 *   - 0 → success
 *   - 1 → generic failure (manual or from `process.exit(1)`)
 *   - other numbers → app-specific status indicators
 *
 * ⚙️ By default, Node exits with code 0 unless an unhandled error occurs.
 *
 * 📅 `process.exit()` has been available since the earliest versions of Node.js.
 *
 * 🔧 Use case examples:
 *   - CI pipelines checking if a deploy script fails
 *   - Pre-push Git hooks that validate lint/test steps
 */
const isReady = false;

if (!isReady) {
  console.error("❌ Error: Not ready to proceed. Exiting with code 1.");
  process.exit(1); // Non-zero code indicates failure
}

console.log("✅ All good. Exiting with code 0.");
process.exit(0);