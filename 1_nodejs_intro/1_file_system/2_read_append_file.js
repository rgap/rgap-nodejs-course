// This script demonstrates how to read and append content to a file asynchronously

const fs = require("fs");

// Reading a file
// The readFile method reads the contents of a file asynchronously
// 'utf8' encoding is used to read the file as a string
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    // Handle error if file reading fails
    console.error("Error reading file:", err);
    return;
  }
  // Print the content of the file
  console.log("File content:", data);
});

// Define the content to append
const additionalContent = "\nThis is the additional content to append.";

// Appending content to a file
// The appendFile method appends data to a file asynchronously
fs.appendFile("example.txt", additionalContent, err => {
  if (err) {
    // Handle error if file appending fails
    console.error("Error appending to file:", err);
    return;
  }
  // Confirm that the content was appended successfully
  console.log("Content appended successfully");
});
