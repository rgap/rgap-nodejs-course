// This script acts as a simple calculator that adds two numbers
const readline = require("readline");

// Create an interface to read input from stdin and output to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for the first number
rl.question("Enter the first number: ", num1 => {
  // Ask the user for the second number
  rl.question("Enter the second number: ", num2 => {
    // Parse the numbers and calculate the sum
    const sum = parseFloat(num1) + parseFloat(num2);
    // Print the result
    console.log(`The sum is: ${sum}`);
    // Close the readline interface
    rl.close();
  });
});
