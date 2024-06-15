// This script demonstrates how to create and delete directories and files recursively

const fs = require("fs");
const path = require("path");

// Define the directory and file structure
const baseDir = "recursive_dir";
const subDir = path.join(baseDir, "sub_dir");
const filePath = path.join(subDir, "file.txt");

// Creating directories recursively
// The mkdir method creates a new directory and its subdirectories asynchronously
fs.mkdir(subDir, { recursive: true }, err => {
  if (err) {
    console.error("Error creating directories:", err);
    return;
  }
  console.log("Directories created successfully");

  // Creating a file in the nested directory
  fs.writeFile(filePath, "Hello, world!", err => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("File written successfully");

    // Deleting the file
    fs.unlink(filePath, err => {
      if (err) {
        console.error("Error deleting file:", err);
        return;
      }
      console.log("File deleted successfully");

      // Deleting the directories recursively
      //   fs.rm(baseDir, { recursive: true }, err => {
      //     if (err) {
      //       console.error("Error deleting directories:", err);
      //       return;
      //     }
      //     console.log("Directories deleted successfully");
      //   });
    });
  });
});
