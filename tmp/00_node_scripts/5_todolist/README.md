# Interactive CLI Loop (To-Do List) in Node.js

This directory contains a console-based To-Do List application. It demonstrates maintaining state over a program's execution cycle and using recursion to form a persistent interactive application loop.

## Running the Script

To run this script, navigate to this directory in your terminal and execute:

```bash
node todolist.js
```

---

## Theory & Core Concepts

### 1. In-Memory State Retention

The program retains its current data (the list of tasks) using an in-memory variable `todoList` initialized in the global scope:
```javascript
let todoList = [];
```
Since this array is outside the functions, it survives across multiple option selections, additions, and menus. Note that because this is in-memory, the list is reset whenever the Node.js process terminates.

### 2. Recursion for Event Loops

Since `rl.question` executes asynchronously and does not block program flow, we cannot use a standard synchronous `while(true)` loop to keep the prompt menu open. A synchronous loop would print the menu infinitely and block the event loop, causing a freeze/crash.

Instead, we use **recursion**:
* After adding a task, showing tasks, or receiving an invalid selection, we call the `showMenu()` function again from inside the callback.
* This tells Node.js to wait for the next input, forming a self-sustaining cycle of input prompts.

### 3. Loop Termination

The event loop is kept alive because the recursive path always schedules another input listener via `rl.question`. 

To end the application, we select the exit option which triggers **`rl.close()`** without calling `showMenu()` again. This removes the active input listeners, allowing Node.js to clean up and exit the process.
