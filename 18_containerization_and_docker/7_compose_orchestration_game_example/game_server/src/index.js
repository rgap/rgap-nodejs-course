const express = require("express");
const app = express();

const port = 3000;
let tick = 0;

app.get("/", (_req, res) => {
  tick++;
  res.send(`🎮 Game server running. Request #${tick}`);
});

// Simulate automatic shutdown for testing restart
setTimeout(() => {
  console.log("🛑 Game server shutting down for simulated maintenance...");
  process.exit(0); // or use 1 to simulate a crash
}, 10000); // 10 seconds

app.listen(port, () => {
  console.log(`🚀 Game server listening on http://localhost:${port}`);
});
