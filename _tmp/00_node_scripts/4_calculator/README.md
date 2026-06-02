# Nested Async Prompts (Calculator) in Node.js

This directory contains a script for a basic interactive terminal calculator that prompts the user for two numbers sequentially and outputs their sum.

## Running the Script

To run this script, navigate to this directory in your terminal and execute:

```bash
node calculator.js
```

---

## Theory & Core Concepts

### 1. Callback Nesting for Sequential Flows

Because Node.js is event-driven and non-blocking, `rl.question` expects a callback function rather than pausing execution line-by-line like `scanf` in C or `input()` in Python.

To collect multiple pieces of user information sequentially, we must **nest** the callbacks:
```javascript
rl.question("Prompt 1: ", response1 => {
  rl.question("Prompt 2: ", response2 => {
    // Both responses are available here
  });
});
```
This is a simple demonstration of **nested callbacks** (sometimes called "callback hell" if it goes too deep). In modern Node.js, we can promisify `readline` to write this sequentially using `async/await` (e.g., via `readline/promises`).

### 2. Input Type Conversion

Values returned from `rl.question` callbacks are always of type **`string`**. 

To perform mathematical addition, we must explicitly parse the strings to numerical types using:
* **`parseFloat(string)`**: Converts the string to a floating-point number.
* **`parseInt(string, radix)`**: Converts the string to an integer.

If you don't parse the values and try to add them (e.g., `"5" + "10"`), JavaScript will perform **string concatenation** and output `"510"` instead of `15`.

### 3. Graceful Cleanup

Only call `rl.close()` in the final, innermost callback where you are done interacting with standard input. Calling it too early will terminate the streams and prevent further prompts from capturing input.
