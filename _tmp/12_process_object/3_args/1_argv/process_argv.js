/**
 * 🧠 THEORY: process.argv
 *
 * `process.argv` is an array containing the command-line arguments
 * passed to the Node.js process.
 *
 * ✅ Structure:
 *   - `process.argv[0]`: path to Node.js binary
 *   - `process.argv[1]`: path to the script file being executed
 *   - `process.argv[2+]`: actual arguments provided by the user
 *
 * 📌 Try running this script with different arguments:
 *  - `node process_argv.js arg1 arg2 arg3`
 *  - `node process_argv.js --flag value`
 *  - `node process_argv.js --option1=value1 --option2=value2`
 *
 *  Althought the flags are nto supported by default, you can
 *  implement your own parser to handle them.
 *
 * 📅 Available since Node.js v0.1.27
 */

console.log("🧾 Raw Arguments:", process.argv);

const userArgs = process.argv.slice(2);
console.log("📦 User Arguments:", userArgs);
