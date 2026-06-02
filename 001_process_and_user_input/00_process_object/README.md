# 00_process_object: The Global Process Object

In this lesson, you will learn about one of the most important global objects in Node.js: the **`process`** object. 

---

## 1. What is the `process` Object?

In the browser runtime environment, the primary interface between your JavaScript code and the window/tab is the `window` object. 

In Node.js, since we do not run inside a browser tab, we do not have a `window` object. Instead, the bridge between your running JavaScript code and the computer's **Operating System (OS)** is the **`process`** object.

The `process` object is a global instance of an `EventEmitter` (which you will learn about later) that provides:
1. Information about the current Node.js process and execution environment.
2. Control over the execution lifecycle (e.g., exiting a script).
3. Standard Input/Output (I/O) communication streams.

Because it is a global object, you do **not** need to use `require()` or `import` to use it. You can access `process` directly in any JavaScript file.

---

## 2. Key Properties of the `process` Object

Here are the most frequently used properties for inspecting the environment and system:

### A. Environment Information
* **`process.pid`**: Returns the Process ID (PID) assigned to this running application by the operating system.
* **`process.platform`**: Returns a string identifying the operating system platform (e.g., `'darwin'` for macOS, `'win32'` for Windows, `'linux'` for Linux).
* **`process.arch`**: Returns the CPU architecture of the machine (e.g., `'x64'` or `'arm64'`).
* **`process.version`**: Returns the Node.js version string (e.g., `'v20.11.0'`).

### B. Directory and Execution Path
* **`process.cwd()`**: A **function** that returns the Current Working Directory of the Node.js process. This is the directory from which you *executed* the command in the terminal, not necessarily where the script file is located.

### C. Environment Variables
* **`process.env`**: Returns an object containing the user environment variables. This is commonly used in backend development to read settings like port numbers, database credentials, and secret API keys (e.g., `process.env.PORT` or `process.env.NODE_ENV`).

---

## 3. Controlling Execution Lifecycle: `process.exit()`

When a Node.js script finishes executing its last instruction and has no active timers or network listeners, it exits automatically. 

However, you can force the process to exit immediately at any point using:
```javascript
process.exit(code);
```

### Exit Codes
The `code` is an integer that tells the operating system whether the program finished successfully or encountered an error:
* **`0` (Success)**: The program completed its task without errors. (This is the default if you call `process.exit()` with no code).
* **`1` (General Failure)**: The program encountered an error and had to stop. (Any non-zero code signals an error to terminal shells or container managers).

---

## 4. standard I/O Streams (Introduction)

The `process` object exposes three standard communication streams:
1. **`process.stdout`**: Standard Output. Used to write data to the console (under the hood, `console.log()` is just a wrapper around `process.stdout.write()`).
2. **`process.stdin`**: Standard Input. Used to receive input typed into the terminal.
3. **`process.stderr`**: Standard Error. Used to output error messages separate from regular stdout.

In the next lessons, we will leverage these streams to read arguments and capture user inputs.

---

## 5. Verification Exercise

Let's test this in code. Run the accompanying demonstration script to see these properties in action:

```bash
node process_demo.js
```
