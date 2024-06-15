// This script demonstrates how to rename and delete a file asynchronously

const fs = require("fs");

// Renaming a file
// The rename method renames a file asynchronously
fs.rename("example.txt", "renamed_example.txt", err => {
  if (err) {
    // Handle error if file renaming fails
    console.error("Error renaming file:", err);
    return;
  }
  // Confirm that the file was renamed successfully
  console.log("File renamed successfully");
});

// Deleting a file
// The unlink method deletes a file asynchronously
fs.unlink("renamed_example.txt", err => {
  if (err) {
    // Handle error if file deletion fails
    console.error("Error deleting file:", err);
    return;
  }
  // Confirm that the file was deleted successfully
  console.log("File deleted successfully");
});
