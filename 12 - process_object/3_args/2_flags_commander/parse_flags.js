/**
 * 📦 Parsing CLI flags using `commander`
 *
 * Supports:
 *   - node parse_flags.js arg1 arg2 arg3 --username admin --verbose
 *
 * Commander does not use `args._` like `minimist`, but provides methods for named options.
 * Positional arguments can be captured separately.
 */

const { Command } = require("commander");
const program = new Command();

program
  .name("parse_flags.js")
  .description("CLI that parses flags and positional args using commander")
  .argument("<arg1>")
  .argument("<arg2>")
  .argument("<arg3>")
  .option("--username <username>", "Username for login")
  .option("--verbose", "Enable verbose output");

program.parse(process.argv);

const options = program.opts();
const positionals = program.args;

console.log("📦 Positional Args:", positionals); // ['arg1', 'arg2', 'arg3']
console.log("🏷️ Parsed Flags:", options);
// Example: { username: 'admin', verbose: true }
