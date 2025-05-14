/**
 * 📦 THEORY: Using dotenv to load environment variables
 *
 * The `dotenv` package allows you to load environment variables from a `.env` file
 * into `process.env`. This is useful for local development, staging, and CI.
 *
 * ✅ Installation:
 *     npm install dotenv
 *
 * ✅ Example `.env` file:
 *     API_KEY=abcd1234
 *     NODE_ENV=development
 *
 * ✅ Usage in code:
 *     require("dotenv").config();
 *
 * This loads variables into process.env before accessing them.
 *
 * ⚠️ SECURITY WARNING: Never commit `.env` files with secrets to version control!
 *
 * Environment variables allow you to:
 *  - Avoid hardcoding credentials or configuration
 *  - Customize behavior based on deployment environment (dev, prod, etc.)
 *  - Integrate with OS-level or CI/CD settings
 */

require("dotenv").config();

console.log("🔐 dotenv API_KEY:", process.env.API_KEY);
console.log("🌱 dotenv NODE_ENV:", process.env.NODE_ENV);
