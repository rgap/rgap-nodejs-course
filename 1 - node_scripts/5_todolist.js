// This script implements a simple to-do list using command line input
const readline = require("readline");

// Create an interface to read input from stdin and output to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Initialize an empty array to store the to-do list tasks
let todoList = [];

// Function to display the menu and handle user input
function showMenu() {
  console.log("\n1. Add a task");
  console.log("2. Show all tasks");
  console.log("3. Exit");
  rl.question("\nChoose an option: ", option => {
    if (option === "1") {
      // Add a task
      rl.question("Enter a task: ", task => {
        todoList.push(task);
        console.log(`Task added: ${task}`);
        showMenu();
      });
    } else if (option === "2") {
      // Show all tasks
      console.log("\nTo-do list:");
      todoList.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
      showMenu();
    } else if (option === "3") {
      // Exit the program
      rl.close();
    } else {
      // Invalid option
      console.log("Invalid option. Try again.");
      showMenu();
    }
  });
}

// Display the menu
showMenu();
