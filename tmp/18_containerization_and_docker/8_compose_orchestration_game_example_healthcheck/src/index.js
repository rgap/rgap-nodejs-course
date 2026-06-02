const express = require("express");
const app = express();
const port = 3000;

let requestCount = 0;
app.get("/", (_req, res) => {
  requestCount++;
  res.send(`🎮 Game server is running. Request #${requestCount}`);
});

// Simulate crash after 15s
setTimeout(() => {
  console.log("💥 Simulating crash...");
  process.exit(1);
}, 15000);

app.listen(port, () => {
  console.log(`🚀 Game server listening at http://localhost:${port}`);
});
