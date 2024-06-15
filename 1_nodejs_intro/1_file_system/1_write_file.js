// This script demonstrates both synchronous and asynchronous ways to write content to a file

const fs = require("fs");

// Define the content to write into the file
const content = "This is the content to write into the file.";

// Synchronous write
try {
  // The writeFileSync method writes data to a file synchronously
  // This means the execution of the code will pause until the file is completely written
  fs.writeFileSync("example.txt", content);
  console.log("File written successfully (sync)");
} catch (err) {
  // Handle error if file writing fails
  console.error("Error writing to file (sync):", err);
}

// Asynchronous write
fs.writeFile("example.txt", content, err => {
  if (err) {
    // Handle error if file writing fails
    console.error("Error writing to file (async):", err);
    return;
  }
  // Confirm that the file was written successfully
  console.log("File written successfully (async)");
  // Additional asynchronous code can be run here without blocking
});
