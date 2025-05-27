const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("✅ App is healthy!");
});

app.listen(port, () => {
  console.log(`🚀 App listening at http://localhost:${port}`);
});
