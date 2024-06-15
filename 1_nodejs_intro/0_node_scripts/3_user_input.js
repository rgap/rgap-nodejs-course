// This script takes user input from the command line and greets the user
const readline = require("readline");

// Create an interface to read input from stdin and output to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for their name
rl.question("What is your name? ", answer => {
  // Print a greeting message
  console.log(`Hello, ${answer}!`);
  // Close the readline interface
  rl.close();
});
