# Node.js `process` Object

This directory contains a script that demonstrates the **`process`** object, a fundamental global object in Node.js that provides information about, and control over, the current Node.js process.

## Running the Script

To run this script, navigate to this directory in your terminal and execute:

```bash
node command_line_object.js
```

---

## Theory & Core Concepts

### 1. What is the `process` Object?

The `process` object is a global object in Node.js. Because it is global, you do not need to use `require()` or `import` to use it; it is always available. It acts as a bridge between the running JavaScript application and the underlying operating system environment.

### 2. Key Properties and Methods

Here are some of the most commonly used properties of the `process` object:

* **`process.env`**: Returns an object containing the user environment variables (e.g., `PATH`, `HOME`, `PORT`). This is highly critical in production for configuration management.
* **`process.argv`**: An array containing the command-line arguments passed when the Node.js process was launched.
  * The first element (`argv[0]`) is the absolute system path to the Node.js executable.
  * The second element (`argv[1]`) is the absolute path to the JavaScript file being executed.
  * Subsequent elements are any additional user arguments.
* **`process.platform`**: Identifies the operating system platform (e.g., `'darwin'` for macOS, `'win32'` for Windows, `'linux'` for Linux).
* **`process.arch`**: Identifies the CPU architecture for which the Node.js binary was compiled (e.g., `'x64'`, `'arm64'`).
* **`process.pid`**: The Process ID (PID) allocated by the operating system for this running instance.
* **`process.cwd()`**: A method that returns the current working directory of the Node.js process (the directory from which the script was executed).
* **`process.exit()`**: A method used to terminate the process immediately. It takes an optional exit code (e.g., `0` for success, `1` or non-zero for error).
* **`process.memoryUsage()`**: Returns an object describing the memory usage of the Node.js process, measured in bytes.
