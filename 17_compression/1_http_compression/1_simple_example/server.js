/**
 * 📦 Simple HTTP Compression Example with Express
 *
 * This example uses the `compression` middleware to gzip or brotli
 * compress HTTP responses in a Node.js server. This reduces
 * the size of responses sent to the client, speeding up load times.
 *
 * 🛠️ Use Case: Web APIs and websites where response size affects performance.
 */

const express = require("express");
const compression = require("compression");

const app = express();
const PORT = 3000;

// ✅ Apply compression middleware to all responses
// This wraps the response in gzip or brotli IF the client supports it
app.use(compression());

// 🧪 Test route with a large response
app.get("/data", (req, res) => {
  // Simulate a large plain-text response (lots of repetition)
  const largeData = "Lorem ipsum dolor sit amet. ".repeat(1000);

  // Middleware will compress this before sending it
  // The client will receive compressed data (smaller size)
  // but will decompress it and see the full original text
  res.send(largeData);
});

// 🔁 Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
