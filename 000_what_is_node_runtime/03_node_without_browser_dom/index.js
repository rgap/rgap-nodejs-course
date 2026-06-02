// This script demonstrates that browser-specific globals do not exist in Node.js.
// We wrap them in try...catch blocks to prevent the script from crashing.

console.log("Executing Node.js script...\n");

// 1. Attempting to access window
try {
  console.log("Attempting to access window...");
  console.log(window);
} catch (error) {
  console.log("❌ Result: Caught expected error!");
  console.log("   Message:", error.message); // ReferenceError: window is not defined
}

console.log("\n--------------------------------------------------\n");

// 2. Attempting to access document (DOM)
try {
  console.log("Attempting to access document...");
  console.log(document);
} catch (error) {
  console.log("❌ Result: Caught expected error!");
  console.log("   Message:", error.message); // ReferenceError: document is not defined
}

console.log("\nScript finished executing cleanly after handling errors!");
