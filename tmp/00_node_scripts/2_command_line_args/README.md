# Command Line Arguments in Node.js

This directory contains a script demonstrating how to receive and process input parameters passed to a Node.js script directly from the terminal or CLI.

## Running the Script

To run this script with some arguments, navigate to this directory in your terminal and execute:

```bash
node command_line_args.js value1 value2 value3
```

---

## Theory & Core Concepts

### 1. `process.argv`

The primary way to retrieve parameters from the shell environment in raw Node.js is through the **`process.argv`** array (short for *argument vector*).

When you run a command like `node command_line_args.js arg1 arg2`, the `process.argv` array is populated sequentially:
* **`process.argv[0]`**: The absolute path to the Node.js executable launcher (e.g., `/usr/local/bin/node`).
* **`process.argv[1]`**: The absolute path to the JavaScript file being executed (e.g., `/Users/.../command_line_args.js`).
* **`process.argv[2]` and beyond**: The custom command-line arguments provided by the user.

### 2. Slicing the Array

Since the first two elements of `process.argv` are utility paths needed by the runtime, we use JavaScript's **`Array.prototype.slice()`** method to extract only the arguments relevant to our business logic:

```javascript
const args = process.argv.slice(2);
```

This extracts a sub-array starting from index `2` to the end of the array, returning only `['value1', 'value2', 'value3']`.

### 3. Argument Parsing

In real-world Node.js CLI programs, handling options/flags (e.g. `--port 3000` or `-v`) manually via `process.argv` can become tedious. Instead, developers often use library solutions like:
* **`util.parseArgs()`** (built-in helper since Node.js v18.3.0 / v20.0.0)
* Third-party packages: **`commander`**, **`yargs`**, or **`minimist`**
