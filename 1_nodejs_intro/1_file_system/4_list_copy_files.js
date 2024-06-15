// This script demonstrates how to list files in a directory and copy a file asynchronously

const fs = require("fs");

// Listing files in a directory
// The readdir method reads the contents of a directory asynchronously
fs.readdir(".", (err, files) => {
  if (err) {
    // Handle error if directory reading fails
    console.error("Error reading directory:", err);
    return;
  }
  // Print the list of files
  console.log("Files in directory:", files);
});

// Copying a file
// The copyFile method copies a file asynchronously
fs.copyFile("example.txt", "copy_example.txt", err => {
  if (err) {
    // Handle error if file copying fails
    console.error("Error copying file:", err);
    return;
  }
  // Confirm that the file was copied successfully
  console.log("File copied successfully");
});
