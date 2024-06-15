// Importing required modules
const fs = require("fs"); // 'fs' module provides an API for interacting with the file system
const path = require("path"); // 'path' module provides utilities for working with file and directory paths

// Path to the log file
// __dirname is a Node.js variable that contains the directory name of the current module
// path.join(...) combines the directory name with the filename 'app.log' to create an absolute path
const logFilePath = path.join(__dirname, "app.log");

// Function to log a message to the file
function logMessage(message) {
  // Get the current timestamp in ISO format
  const timestamp = new Date().toISOString();
  // Create a log entry string with the timestamp and message
  const logEntry = `${timestamp} - ${message}\n`;

  // Append the log entry to the log file asynchronously
  // fs.appendFile(...) adds data to a file, creating the file if it does not exist
  // The callback function is executed after the append operation completes
  fs.appendFile(logFilePath, logEntry, err => {
    if (err) {
      // Handle error if log writing fails
      console.error("Error writing to log file:", err);
    }
  });
}

// Example usage of the logMessage function
// These function calls log messages indicating that the application has started and that an error occurred
logMessage("Application started");
logMessage("An error occurred");
