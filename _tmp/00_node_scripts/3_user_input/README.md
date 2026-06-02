# Reading Interactive User Input in Node.js

This directory contains a script demonstrating how to pause execution, prompt the user for input in the terminal, capture the response, and display a customized greeting.

## Running the Script

To run this script, navigate to this directory in your terminal and execute:

```bash
node user_input.js
```

---

## Theory & Core Concepts

### 1. Streams and I/O (Input/Output)

A terminal application communicates via standard input and output channels:
* **`process.stdin` (Standard Input)**: A stream representing keyboard input or redirection to the terminal.
* **`process.stdout` (Standard Output)**: A stream representing writing out text to the user's terminal window.

### 2. The `readline` Module

Node.js provides a built-in module called **`readline`** to read input data from a readable stream (like `process.stdin`) line-by-line.

### 3. Creating an Interface

To prompt and receive user responses, we first establish a communication interface:
```javascript
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

### 4. Asynchronous `rl.question` callback

The **`rl.question(query, callback)`** method prints the query prompt to the screen and waits for the user to press Enter. 

* This method is **asynchronous** and non-blocking. Instead of halting the event loop entirely, it registers a listener on the `process.stdin` stream.
* Once the user presses **Enter**, Node.js triggers the callback function, passing the typed text as the first argument (`answer`).

### 5. Cleaning Up with `rl.close()`

When you are done requesting input, you must call **`rl.close()`**. 

> [!IMPORTANT]
> If you forget to close the `readline.Interface` instance, the Node.js event loop will keep the process active indefinitely waiting for potential further keyboard inputs. Closing the interface tells Node.js it can safely exit.
