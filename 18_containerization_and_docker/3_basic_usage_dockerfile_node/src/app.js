// 🟢 Express-based Node.js app
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("✅ Hello from Express inside Docker!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Express app running on http://localhost:${PORT}`);
});
