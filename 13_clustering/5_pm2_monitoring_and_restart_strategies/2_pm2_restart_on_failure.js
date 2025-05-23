/**
 * 📄 Realistic PM2 Auto-Restart Example: Report Generator with Crash Handling
 *
 * This server simulates a real-world reporting service that can occasionally crash
 * due to bugs like memory leaks, unhandled exceptions, or unpredictable input.
 *
 * PM2 watches this process and restarts it automatically when it exits abnormally.
 *
 * 🛠️ Why might a real server crash and need restarting?
 * - 🧠 Unhandled exceptions (e.g., bad JSON parsing, undefined variables)
 * - 🧮 Memory leaks over time (heap overflows, high memory usage)
 * - 🧪 Bugs triggered only under certain conditions (e.g., certain input)
 * - 📉 External service failures causing cascading errors
 *
 * PM2 ensures high availability by restarting the app immediately, avoiding downtime.
 *
 * ▶️ To run:
 *    pm2 start 2_pm2_restart_on_failure.js --watch
 *
 * 💻 To test:
 *    - GET /generate-report  (has a random chance to crash)
 *    - GET /status           (simple health check route)
 */

const express = require("express");
const process = require("process");

const app = express();
const PORT = process.env.PORT || 3000;

console.log(`🚀 Report service started. PID: ${process.pid}`);

app.get("/status", (req, res) => {
  res.send("✅ Service is running.");
});

app.get("/generate-report", (req, res) => {
  const crashChance = Math.random();

  console.log(`📄 Generating report (PID ${process.pid})...`);

  // ⚠️ Simulate a crash scenario (20% chance)
  if (crashChance < 0.2) {
    console.error("💥 Simulated crash: report generation failed unexpectedly.");
    res.send("❌ Crash occurred. Service will restart via PM2.");
    process.exit(1); // PM2 will detect this and restart the app
  }

  // 🧮 Simulate heavy computation (CPU-intensive task)
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += Math.sqrt(i) * 0.00001;
  }

  res.send(`📄 Report successfully generated by PID ${process.pid}: ${result.toFixed(2)}`);
});

app.listen(PORT, () => {
  console.log(`📡 Listening at http://localhost:${PORT}`);
});
