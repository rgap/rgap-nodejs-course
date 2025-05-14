/**
 * 🧠 THEORY: Express Server with Commander for CLI Options
 *
 * This setup combines `express` and `commander` to build a server where
 * CLI arguments are parsed declaratively using `.option()`.
 *
 * ✅ Why Use Commander?
 * - `process.argv` is low-level and manual.
 * - `commander` provides a clean interface for handling CLI flags, types, and defaults.
 *
 * 🧪 Example:
 *     node server.js -p 4000 -m production
 *
 * This sets the server to run on port 4000 in "production" mode.
 *
 * 🧰 Real Use Case:
 * - Building developer tools or bootstrapping scripts with flexible options.
 * - Great for microservices or internal CLI-based apps.
 */

import { program } from 'commander'; // For clean CLI parsing
import express from 'express';

const app = express();

/**
 * 🛠️ Define available CLI options:
 * - `-p <port>`: Port to run the server (default: 8080)
 * - `-m <mode>`: Environment mode (default: 'dev')
 */
program
  .option('-p <port>', 'port server', 8080)
  .option('-m <mode>', 'environment server', 'dev');

// Parse and extract the provided CLI arguments
program.parse();
const options = program.opts();

console.log("⚙️ CLI Options:", options);

// Enable body parsing for JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the port and mode specified from CLI args
const PORT = options.p;
const mode = options.m;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
  console.log(`🌎 Mode: ${mode}`);
});
