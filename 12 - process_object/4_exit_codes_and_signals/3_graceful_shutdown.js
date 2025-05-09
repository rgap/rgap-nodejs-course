/**
 * 🧹 THEORY: Graceful Shutdown Pattern in Node.js
 *
 * A "graceful shutdown" means your app properly closes all open resources
 * (HTTP servers, DB connections, file streams, etc.) before the process exits.
 *
 * ✅ Why is this important?
 *   - Prevents dropping ongoing HTTP requests
 *   - Ensures DB writes are completed or rolled back
 *   - Avoids leaving zombie processes or open ports
 *   - Helps monitoring tools distinguish clean exits from crashes
 *
 * ✅ Common Use Cases:
 *   - Microservices deployed in Docker containers
 *   - Servers managed by PM2, systemd, or Kubernetes
 *   - Apps with open sockets, timers, or database connections
 */

const http = require("http");

// ✅ Create a simple HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("✅ Server is running. Hello!\n");
});

// ✅ Start listening on port 3000
server.listen(3000, () => {
  console.log("🚀 Server listening on port 3000");
});

/**
 * 🛑 Shutdown Handler
 *
 * This function is called when a termination signal is received. It ensures:
 *   - The server stops accepting new requests
 *   - Ongoing requests are allowed to finish
 *   - The app exits cleanly
 */
function shutdown(signal) {
  console.log(`📴 Received ${signal}. Shutting down gracefully...`);

  server.close(() => {
    console.log("✅ HTTP server closed cleanly. Exiting now.");
    process.exit(0); // Success exit code
  });

  // Optional: force quit if server doesn't close in time (e.g., hung connections)
  // setTimeout(() => {
  //   console.error("⏱️ Forced exit after timeout");
  //   process.exit(1);
  // }, 10000);
}

/**
 * 📌 OS Signals Used
 *
 *   - SIGINT: "Signal Interrupt" — sent when the user presses Ctrl+C in the terminal.
 *             Used during local development or terminal-based deployment environments.
 *
 *   - SIGTERM: "Signal Terminate" — sent by process managers or container orchestrators
 *              like Docker or Kubernetes when stopping or restarting a service.
 *
 * These signals tell the process to shut down — we intercept them here to clean up first.
 */
process.on("SIGINT", () => shutdown("SIGINT")); // 🧑‍💻 Ctrl+C
process.on("SIGTERM", () => shutdown("SIGTERM")); // 🐳 Docker stop, K8s pod termination
