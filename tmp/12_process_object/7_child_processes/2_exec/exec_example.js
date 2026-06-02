/**
 * 📟 THEORY: child_process.exec()
 *
 * `exec()` is used in Node.js to run a shell command and buffer its entire output into memory.
 * It's perfect for **quick, one-line commands** like:
 *   - Getting system info: `node -v`, `git --version`
 *   - Reading single output lines from shell tools
 *
 * Unlike `spawn()`, which gives streams, `exec()` gives you:
 *   - `stdout` (full result as a string)
 *   - `stderr`
 *   - `error` object (if command fails)
 *
 * ---
 * ✅ REALISTIC USE CASE: Validate Environment in a DevOps Script
 *
 * Before running a build, we want to:
 *   - Make sure the correct Node.js version is installed
 *   - Abort the script early if the version is too old
 *   - Provide helpful logs in CI tools like GitHub Actions, GitLab CI, Jenkins, etc.
 *
 * ---
 * ⚠️ Important:
 *   - Use `exec()` only when the output is small and needs to be captured all at once
 *   - For long-running or large-output tasks, use `spawn()` instead
 */

const { exec } = require("child_process");

// 🔍 Run the shell command `node -v` to get the current version
exec("node -v", (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Failed to run 'node -v': ${error.message}`);
    process.exit(1);
  }

  if (stderr) {
    console.error(`⚠️ stderr: ${stderr}`);
  }

  const version = stdout.trim(); // example output: "v18.16.0"
  console.log(`📦 Current Node version: ${version}`);

  // ✅ Require at least version 18
  const majorVersion = parseInt(version.replace(/^v/, "").split(".")[0]);

  if (majorVersion < 18) {
    console.error("❌ Node.js version 18+ is required. Aborting build.");
    process.exit(1);
  }

  console.log("✅ Node.js version is compatible. Proceeding with build...");
});
