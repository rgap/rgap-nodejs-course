// This script demonstrates how to create and delete a directory asynchronously

const fs = require("fs");

// Creating a directory
// The mkdir method creates a new directory asynchronously
fs.mkdir("new_directory", err => {
  if (err) {
    // Handle error if directory creation fails
    console.error("Error creating directory:", err);
    return;
  }
  // Confirm that the directory was created successfully
  console.log("Directory created successfully");
});

// Deleting a directory
// The rmdir method removes a directory asynchronously
fs.rmdir("new_directory", err => {
  if (err) {
    // Handle error if directory deletion fails
    console.error("Error deleting directory:", err);
    return;
  }
  // Confirm that the directory was deleted successfully
  console.log("Directory deleted successfully");
});
