// 02_user_input_readline/readline_demo.js

const readline = require("readline");

console.log("=== Node.js readline Interactive Demonstration ===\n");

// 1. Create a communication interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 2. Ask the first question
rl.question("What is your name? ", name => {
  // Trim user input to clean up extra spacing
  const formattedName = name.trim() || "Guest";

  // 3. Ask the second question inside the first callback (nesting)
  rl.question(`Nice to meet you, ${formattedName}! How old are you? `, ageInput => {
    const age = parseInt(ageInput, 10);

    // 4. Input validation
    if (isNaN(age) || age <= 0) {
      console.log("\n⚠️  Oops! That doesn't look like a valid age.");
    } else {
      console.log(`\n🎉 Outstanding! In 10 years, you will be ${age + 10} years old.`);
    }

    // 5. Close the interface to release stdin
    rl.close();
  });
});

// 6. Handle the close event
rl.on("close", () => {
  console.log("Readline interface closed. Exiting process... Goodbye!");
  process.exit(0);
});
