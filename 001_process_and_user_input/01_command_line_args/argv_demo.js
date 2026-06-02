// 01_command_line_args/argv_demo.js

console.log("=== Node.js process.argv Demonstration ===\n");

// 1. Logging the raw process.argv array
console.log("Raw process.argv array:");
console.log(process.argv);
console.log("");

// 2. Extracting only the user-provided arguments
const userArgs = process.argv.slice(2);
console.log("Extracted User Arguments (sliced from index 2):");
console.log(userArgs);
console.log("");

// 3. Showing individual argument values
if (userArgs.length === 0) {
  console.log("No arguments were passed! Try running: ");
  console.log("node argv_demo.js Alice 30 --admin\n");
} else {
  console.log(`Number of arguments: ${userArgs.length}`);
  userArgs.forEach((arg, index) => {
    console.log(`  Argument [${index}]: ${arg}`);
  });
  console.log("");
}

// 4. Advanced: Basic parsing of key-value flags (e.g., --name=Alice)
const flags = {};
userArgs.forEach(arg => {
  if (arg.startsWith("--")) {
    const [key, value] = arg.slice(2).split("=");
    flags[key] = value !== undefined ? value : true;
  }
});

if (Object.keys(flags).length > 0) {
  console.log("Parsed Flags:");
  console.log(flags);
  console.log("");
}
