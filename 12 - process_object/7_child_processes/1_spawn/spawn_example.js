/**
 * 🧬 THEORY: child_process.spawn()
 *
 * In Node.js, `spawn()` is used to launch a **new external process** asynchronously.
 * It gives you full access to the input/output streams (`stdin`, `stdout`, `stderr`) of that process.
 * Unlike `exec()`, which buffers output in memory, `spawn()` is **stream-based** and better for large or long-running commands.
 *
 * ---
 * ✅ REALISTIC USE CASE: DevOps Automation
 *
 * Imagine a monorepo or project with a `frontend/` folder. You want to install dependencies in it
 * during a CI/CD build or setup script.
 *
 *     e.g., cd frontend && npm install
 *
 * With `spawn()`, we can run this command directly and stream logs in real-time
 * to the terminal or CI logs.
 *
 * ---
 * 📌 Advantages:
 *   - Handles large outputs without memory overflow
 *   - Logs immediately instead of waiting for the process to finish
 *   - Avoids shell parsing (safe from injection attacks)
 *
 * ---
 * ⚠️ Notes:
 *   - `spawn()` does not run in a shell by default (no `cd && npm`).
 *     We must pass a working directory (`cwd`) option instead.
 *   - If you need shell behavior (`cd`, `&&`, `|`), use `shell: true`.
 */

const { spawn } = require("child_process");

// 📁 Set working directory to "frontend"
const workingDir = "./frontend";

// 🛠️ Run `npm install` in that directory
const npmInstall = spawn("npm", ["install"], {
  cwd: workingDir, // change directory before running
  stdio: "pipe", // use pipe mode to manually handle logs
  shell: false, // optional, safe default
});

// 🧾 Listen to standard output from npm install
npmInstall.stdout.on("data", data => {
  console.log(`📦 stdout: ${data.toString().trim()}`);
});

// ❗ Listen to standard error for any issues
npmInstall.stderr.on("data", data => {
  console.error(`❗ stderr: ${data.toString().trim()}`);
});

// ✅ When done, log the exit status
npmInstall.on("close", code => {
  if (code === 0) {
    console.log("✅ npm install completed successfully.");
  } else {
    console.log(`❌ npm install failed with exit code ${code}`);
  }
});
