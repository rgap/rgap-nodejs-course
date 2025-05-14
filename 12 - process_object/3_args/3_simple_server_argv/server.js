/**
 * 🧠 THEORY: Minimal Express Server Using `process.argv`
 *
 * This is the **simplest possible** production-ready Express server.
 * It doesn't use dotenv, commander, or any config abstraction.
 *
 * 🔍 Goal:
 * Understand how Express servers can be launched with basic CLI arguments.
 *
 * ✅ Concepts Introduced:
 * - Creating an Express server
 * - Parsing incoming requests (JSON and URL-encoded data)
 * - Using `process.argv` to accept runtime configuration (like the port)
 * - Listening on a port
 *
 * ---
 *
 * 📦 Why Use `process.argv[2]`?
 * - `process.argv` is a built-in Node.js array that holds CLI arguments.
 * - `process.argv[0]` → node binary path
 * - `process.argv[1]` → path to the script being run
 * - `process.argv[2]` → your first user-supplied argument (e.g., port)
 *
 * 🔁 Example:
 * ```bash
 * node server.js 4000
 * ```
 * will start the server on port 4000.
 *
 * ---
 *
 * 🛠 Real-World Use:
 * - Very useful for quick tests or when integrating scripts into CLI pipelines.
 * - Often replaced later with dotenv or commander for scaling.
 *
 * 🚫 Limitations:
 * - No default `.env` or config file
 * - Cannot handle complex options like database URLs or multiple modes
 * - Not ideal for large teams or deployment pipelines
 */

import express from "express"; // ⚙️ Web framework for building RESTful APIs

const app = express(); // 🎯 Initialize the Express application

// 📦 Middleware to parse JSON request bodies
app.use(express.json());

// 📦 Middleware to parse URL-encoded request bodies (e.g., form submissions)
app.use(express.urlencoded({ extended: true }));

// 🧪 Accept port from command-line arguments, default to 8080
const PORT = process.argv[2] || 8080;

// 🚀 Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
