// 03_interactive_calculator/calculator.js

const readline = require("readline");

// Helper function to perform calculations
function calculate(operation, num1, num2) {
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  // 1. Validation: Ensure both inputs are valid numbers
  if (isNaN(n1) || isNaN(n2)) {
    return { success: false, message: "Error: Both inputs must be valid numbers." };
  }

  const op = operation.toLowerCase();

  // 2. Perform math based on operation
  switch (op) {
    case "add":
    case "+":
      return { success: true, expression: `${n1} + ${n2}`, result: n1 + n2 };
    case "subtract":
    case "-":
      return { success: true, expression: `${n1} - ${n2}`, result: n1 - n2 };
    case "multiply":
    case "*":
      return { success: true, expression: `${n1} * ${n2}`, result: n1 * n2 };
    case "divide":
    case "/":
      if (n2 === 0) {
        return { success: false, message: "Error: Division by zero is not allowed." };
      }
      return { success: true, expression: `${n1} / ${n2}`, result: n1 / n2 };
    default:
      return {
        success: false,
        message: `Error: Unsupported operation '${operation}'. Choose add (+), subtract (-), multiply (*), or divide (/).`,
      };
  }
}

// Extract command-line arguments
const args = process.argv.slice(2);

// Check if direct CLI arguments were provided
if (args.length >= 3) {
  const [operation, num1, num2] = args;
  const outcome = calculate(operation, num1, num2);

  if (outcome.success) {
    console.log(`Result: ${outcome.expression} = ${outcome.result}`);
    process.exit(0);
  } else {
    console.error(`❌ ${outcome.message}`);
    process.exit(1);
  }
} else {
  // If arguments are missing, fall back to interactive mode
  console.log("=== Interactive Terminal Calculator ===");
  console.log("No command line arguments detected. Let's enter them manually.\n");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Prompt sequence
  rl.question("Enter first number: ", num1Input => {
    rl.question("Enter second number: ", num2Input => {
      rl.question("Select operation (add/+, subtract/-, multiply/*, divide//): ", opInput => {
        const outcome = calculate(opInput, num1Input, num2Input);

        console.log(""); // Empty line for readability
        if (outcome.success) {
          console.log(`🎉 Result: ${outcome.expression} = ${outcome.result}`);
        } else {
          console.error(`❌ ${outcome.message}`);
        }

        rl.close();
      });
    });
  });

  rl.on("close", () => {
    console.log("Calculator closed. Goodbye!");
    process.exit(0);
  });
}
