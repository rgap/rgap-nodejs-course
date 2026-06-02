# Hello World in Node.js

This directory contains a simple script that prints "Hello, World!" to the console. It represents the foundational starting point for writing and running JavaScript on the server side using Node.js.

## Running the Script5

To run this script, navigate to this directory in your terminal and execute:

```bash
node hello.js
```

---

## Theory & Core Concepts

### 1. What is Node.js?

Traditionally, JavaScript was designed to run exclusively inside web browsers (client-side) to make web pages interactive. **Node.js** is a cross-platform, open-source JavaScript runtime environment built on Google Chrome's **V8 JavaScript engine**.

Node.js allows developers to run JavaScript code outside of a browser, enabling the development of command-line tools, backend APIs, desktop applications, and server-side systems.

### 2. The `console` Object & Standard Output (stdout)

- In a web browser, `console.log()` prints messages to the browser's developer console (a graphical inspector interface).
- In Node.js, `console.log()` writes directly to the **Standard Output (stdout)** stream of the operating system's terminal/command prompt.

### 3. Execution Flow

When you run `node hello.js`:

1. The operating system starts a new process executing the `node` binary.

2. The Node.js process reads and compiles the code in `hello.js` using the V8 engine.
3. The script executes synchronously, prints "Hello, World!" to stdout, and the process terminates with exit code `0` (success).
