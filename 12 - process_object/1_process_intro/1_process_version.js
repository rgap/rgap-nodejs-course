// 01_intro_to_process/process_version.js

/**
 * 🧠 THEORY: process.version
 *
 * The `process` object in Node.js is a global object that provides information
 * and control over the current Node.js process.
 *
 * One of the most basic properties is `process.version`, which returns the
 * Node.js version string (e.g., 'v18.17.1'). This can be useful for
 * debugging, enforcing compatibility, or logging.
 *
 * The `process` object became globally available in the very first versions
 * of Node.js, and `process.version` has existed since around Node.js v0.1.x.
 */

console.log("🔢 Node.js version:", process.version);
