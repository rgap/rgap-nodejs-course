/**
 * 🔐 THEORY: child_process.execFile()
 *
 * `execFile()` runs a specified file **without invoking a shell**, making it safer than `exec()`.
 * It's ideal when you:
 *   - Know exactly which script or binary to run
 *   - Want to avoid shell expansion or injection attacks
 *   - Need to pass arguments to compiled binaries or internal scripts
 *
 * It buffers output like `exec()`, so it's best for short, quick commands.
 *
 * ---
 * ✅ REALISTIC USE CASE: Run a local helper script securely
 *
 * Imagine you have a Node.js or Python script in the `scripts/` folder that:
 *   - Performs a backup
 *   - Generates a PDF or image
 *   - Uploads files
 *
 * In DevOps workflows or backend jobs, you want to trigger this tool safely.
 *
 * Example: `node ./scripts/backup.js`
 *
 * ---
 * ⚠️ WARNING:
 *   - No shell = no globbing, no redirection, no `&&`
 *   - Use absolute or relative paths
 */

const { execFile } = require("child_process");

// 📁 This could be your internal tool (must be in project folder)
const executable = "node"; // Binary to execute
const scriptPath = "./scripts/backup.js"; // Path to the file
const args = [scriptPath]; // Any additional args go here

execFile(executable, args, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ execFile error: ${error.message}`);
    process.exit(1);
  }

  if (stderr) {
    console.error(`⚠️ stderr: ${stderr.trim()}`);
  }

  console.log(`📁 Output from backup script:\n${stdout.trim()}`);
});
