// This script prints the command line arguments passed to it
// To run: node command_line_args.js arg1 arg2

// Extract command-line arguments passed after the script name
const args = process.argv.slice(2);

// Print the entire process.argv array
console.log("process.argv:", process.argv);

// Print the extracted command line arguments
console.log("Command line arguments:", args);
