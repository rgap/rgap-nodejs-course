# 02_user_input_readline: Interactive Console Inputs

In this lesson, you will learn how to build interactive command-line programs by prompting the user for input and handling their responses in real-time.

---

## 1. Standard Streams: stdin & stdout

To understand interactive console input, we must first look at standard operating system streams:
* **`process.stdin` (Standard Input)**: A stream that receives keyboard inputs typed into the terminal. It is a read-only stream.
* **`process.stdout` (Standard Output)**: A stream used to output text to the terminal screen. It is a write-only stream.

While you could read directly from `process.stdin` using raw stream listeners, Node.js provides a built-in core module called **`readline`** that wraps these streams into a clean, developer-friendly interface.

---

## 2. Using the `readline` Module

The `readline` module is a core Node.js module (no installation required). You load it using `require('readline')`.

### Step 1: Create the Interface
To start receiving inputs, you must construct a communication interface connecting standard input to standard output:

```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,   // Read from keyboard
  output: process.stdout, // Write to terminal
});
```

### Step 2: Prompt a Question
Use the `question()` method to prompt the user. It takes two parameters:
1. The question prompt string.
2. A callback function that executes once the user presses `Enter`. The user's typed response is passed as the first argument to this callback.

```javascript
rl.question("What is your favorite color? ", (answer) => {
  console.log(`Oh! You like the color ${answer}!`);
  
  // Close the interface
  rl.close();
});
```

### Step 3: Close the Interface
It is **critical** to call `rl.close()` when your interaction is complete. 

If you do not close the interface, Node.js will keep the event loop active (waiting for more inputs on `stdin`), and your script will run indefinitely, hanging in the terminal.

---

## 3. The Close Event Listener

You can listen for the `'close'` event on the readline interface. This is useful for writing cleanup code or final parting messages once the interface terminates:

```javascript
rl.on("close", () => {
  console.log("\nThank you! Goodbye.");
  process.exit(0);
});
```

---

## 4. Verification Exercise

Run the accompanying demonstration script to test an interactive flow:

```bash
node readline_demo.js
```
