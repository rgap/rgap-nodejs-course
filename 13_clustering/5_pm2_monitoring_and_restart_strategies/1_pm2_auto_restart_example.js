/**
 * 🔄 PM2 Auto-Restart Example
 *
 * This script simulates a crashing application. When run with PM2,
 * the process will automatically be restarted upon crash or exit.
 *
 * ✅ PM2 watches for process exits and restarts the app based on policy.
 *
 * To run:
 *    pm2 start 1_pm2_auto_restart_example.js --watch
 *
 * To simulate crash:
 *    Access /crash in browser or Postman.
 */

const express = require("express");
const process = require("process");

const app = express();
const PORT = process.env.PORT || 3000;

console.log(`🚀 App started with PID: ${process.pid}`);

app.get("/", (req, res) => {
  res.send("✅ App is running and healthy.");
});

app.get("/crash", (req, res) => {
  console.log("💥 Simulating crash...");
  res.send("App will crash now.");
  process.exit(1); // simulate unexpected error
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
