/**
 * 🌐 THEORY: Using multiple .env files for different environments
 *
 * It's common to use separate `.env` files for each environment, such as:
 *   - `.env.development`
 *   - `.env.production`
 *   - `.env.test`
 *
 * These files can be loaded conditionally based on `process.env.NODE_ENV`,
 * allowing clean separation of configuration.
 *
 * ✅ Example folder structure:
 *     .env.development
 *     .env.production
 *     .env.test
 *
 * ✅ Use `dotenv-flow` or custom logic to load the correct file:
 *     npm install dotenv dotenv-flow
 *
 *     // OR manually:
 *     require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
 *
 * 🛠 Common use case:
 *     NODE_ENV=production node dotenv_multiple_envs.js
 *
 * 📌 Be sure to handle fallback behavior if the file doesn't exist.
 */

const path = `.env.${process.env.NODE_ENV || "development"}`;
require("dotenv").config({ path });

console.log("📁 Loaded from:", path);
console.log("🔐 API_KEY:", process.env.API_KEY);
console.log("🔧 NODE_ENV:", process.env.NODE_ENV);
