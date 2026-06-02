/**
 * 🧠 THEORY: Express Server + MongoDB + dotenv with Manual ENV Switching
 *
 * This server connects to MongoDB and uses `.env` files to manage configuration.
 * It demonstrates **runtime environment switching** (e.g., development vs staging)
 * using `dotenv` and CLI arguments like:
 *
 *     node server.js staging
 *     node server.js development
 *
 * ---
 *
 * ✅ Concepts Introduced:
 * - Using `dotenv` with multiple `.env` files
 * - Dynamically switching config at runtime
 * - Loading MongoDB URL and port from `.env`
 * - Connecting to MongoDB using Mongoose
 * - Graceful error handling in async DB setup
 *
 * ---
 *
 * 🛡 Why not just use `dotenv-flow`?
 * We're simulating custom control using `dotenv.config({ path })` to help you
 * understand what's really happening under the hood before introducing more automation.
 */

import dotenv from "dotenv";
import express from "express";
import "./database.js"; // optional side-effect import
import { initMongoDB } from "./database.js";

// 🧪 Read the environment passed via CLI (e.g. 'staging', 'development')
const ENV = process.argv[2] || "development";

/**
 * 📂 Load the appropriate .env file based on the environment
 * This technique is common in early-stage projects before adopting a config framework.
 *
 * - development → .env.dev
 * - staging     → .env.stg
 */
dotenv.config({
  path: ENV === "staging" ? "./.env.stg" : "./.env.dev",
});

const app = express();

// 📦 Middleware to parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 📡 Get the PORT from the loaded environment variables
const PORT = process.env.PORT;

// 🚀 Try to initialize the MongoDB connection before starting the server
initMongoDB()
  .then(() => console.log("✅ MongoDB connected"))
  .catch(error => console.log("❌ MongoDB connection failed:", error));

// 🎯 Start Express server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
