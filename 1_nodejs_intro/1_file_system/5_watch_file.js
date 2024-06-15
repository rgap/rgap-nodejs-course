// This script demonstrates how to watch for changes in a file asynchronously

const fs = require("fs");

// Watching for changes in a file
// The watch method watches for changes in a file or directory
// It triggers the callback function whenever there is a change in the file
fs.watch("example.txt", (eventType, filename) => {
  if (filename) {
    // Print the type of change and the name of the file that changed
    console.log(`${filename} file changed: ${eventType}`);
  }
});
