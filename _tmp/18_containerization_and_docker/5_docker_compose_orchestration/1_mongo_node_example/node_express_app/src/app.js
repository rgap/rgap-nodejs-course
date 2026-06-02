// 🟢 Express app that connects to MongoDB
const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const mongoUrl = "mongodb://mongo:27017";
const port = 3000;

app.get("/", async (req, res) => {
  const client = new MongoClient(mongoUrl);
  await client.connect();

  const db = client.db("compose-test"); // ✅ Uses existing DB
  const collection = db.collection("visits");

  await collection.insertOne({ time: new Date() });
  const count = await collection.countDocuments();

  res.send(`👋 This page has been visited ${count} times.`);
  client.close();
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
