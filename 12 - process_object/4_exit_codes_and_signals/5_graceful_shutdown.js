/**
 * 🧹 THEORY: Graceful Shutdown Pattern in Node.js
 *
 * A "graceful shutdown" means your app properly closes all open resources
 * (HTTP servers, DB connections, file streams, WebSocket servers, timers, etc.)
 * before the process exits.
 *
 * ✅ Why is this important?
 *   - Prevents dropping ongoing HTTP requests
 *   - Ensures DB writes are completed or rolled back
 *   - Avoids leaving zombie processes or open ports
 *   - Helps monitoring tools distinguish clean exits from crashes
 *   - Flushes logs and closes file streams cleanly
 *
 * ✅ Common Resources to Clean Up:
 *   - HTTP servers
 *   - Database connections (e.g., MongoDB, PostgreSQL pools)
 *   - Message queues (RabbitMQ, Kafka clients)
 *   - File streams (log files, uploads)
 *   - WebSocket / Socket.io servers
 *   - Timers and intervals
 *   - Pending Promises (unhandled rejections)
 *   - Cache clients (Redis, Memcached)
 */

const http = require("http");
const mongoose = require("mongoose");
const WebSocket = require("ws");
const fs = require("fs");

// ———————————————
// Example: MongoDB connection via Mongoose
// ———————————————
mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("✅ MongoDB connected");
});

// ———————————————
// Example: WebSocket server (e.g., real-time events)
// ———————————————
const wss = new WebSocket.Server({ port: 8080 });
wss.on("connection", socket => {
  console.log("🔌 WebSocket client connected");
});

// ———————————————
// Example: File stream for logging
// ———————————————
const logStream = fs.createWriteStream("./app.log", { flags: "a" });

// ———————————————
// Example: Periodic task / heartbeat
// ———————————————
const intervalId = setInterval(() => {
  console.log("⏲️ Heartbeat");
}, 5000);

// ———————————————
// HTTP server setup
// ———————————————
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("✅ Server is running. Hello!\n");
});
server.listen(3000, () => {
  console.log("🚀 HTTP server listening on port 3000");
});

/**
 * 🛑 Shutdown Handler
 *
 * Called on termination signals or fatal errors.
 * Cleans up all resources before exiting.
 */
async function shutdown(signal) {
  console.log(`📴 Received ${signal}. Shutting down gracefully...`);

  // 1) Stop accepting new HTTP connections
  server.close(() => console.log("✅ HTTP server closed"));

  // 2) Close WebSocket server
  wss.close(() => console.log("✅ WebSocket server closed"));

  // 3) Clear any intervals or timers
  clearInterval(intervalId);
  console.log("✅ Cleared intervals");

  // 4) Close database connections
  try {
    await mongoose.connection.close();
    console.log("✅ MongoDB connection closed");
  } catch (err) {
    console.error("⚠️ Error closing MongoDB connection:", err);
  }

  // 5) Close file streams
  logStream.end(() => console.log("✅ Log stream closed"));

  // 6) (Optional) Close other clients, e.g., Redis, message queues...
  // await redisClient.quit();
  // console.log("✅ Redis client disconnected");

  // Wait briefly to ensure all callbacks complete
  setTimeout(() => {
    console.log("🚪 All cleanups done. Exiting now.");
    process.exit(0);
  }, 100);
}

// Intercept termination signals
["SIGINT", "SIGTERM", "SIGHUP"].forEach(sig => {
  process.on(sig, () => shutdown(sig));
});

// Catch unhandled Promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("❗ Unhandled Rejection at:", promise, "reason:", reason);
  // Recommended: shutdown or restart process
});

// Catch uncaught exceptions
process.on("uncaughtException", err => {
  console.error("❗ Uncaught Exception:", err.stack || err);
  shutdown("uncaughtException");
});
