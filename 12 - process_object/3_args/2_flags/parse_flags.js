/**
 * Parsing CLI flags using `minimist`
 *
 * Supports:
 *   - node parse_flags.js arg1 arg2 arg3 --username=admin --verbose=true
 *
 * `_` contains positional args.
 */

const minimist = require("minimist");

// Parse args after the script name
const args = minimist(process.argv.slice(2));

console.log("📦 Positional Args:", args._); // ['arg1', 'arg2', 'arg3']
console.log("🏷️ Parsed Flags:", args);
// Example: { _: ['arg1', 'arg2', 'arg3'], username: 'admin', verbose: 'true' }
