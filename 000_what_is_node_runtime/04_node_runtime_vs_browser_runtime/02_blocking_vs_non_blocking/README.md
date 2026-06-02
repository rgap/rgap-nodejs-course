# 02: Blocking vs. Non-Blocking

How a program handles waiting is one of the most important concepts in modern systems engineering. Let's compare blocking and non-blocking architectures.

---

## 1. What's the Difference?

* **Blocking (Synchronous)**:
  * The program thread cannot do anything else while waiting for an operation (like database queries or file loading).
  * The thread is frozen and CPU cycles are wasted while waiting for external hardware to respond.
  * Total duration is the **sum** of all task times.

* **Non-Blocking (Asynchronous)**:
  * The program thread initiates the operation, hands it over to the operating system, and immediately returns to run other tasks.
  * When the OS completes the task, it sends a notification (or callback) back to the program.
  * Total duration is only as long as the **single slowest task**.

---

## 2. Running the Demo Script

We have written a Python script called **`blocking_vs_non_blocking.py`** in this folder to demonstrate both execution flows side-by-side.

### Step 1: Navigate to the Folder
Open your terminal inside this folder.

### Step 2: Run the Script
Execute the Python script:

```bash
python3 blocking_vs_non_blocking.py
```

### Step 3: Observe the Log Output
Compare the output styles:

* **Blocking Demo**: Notice that Task 2 cannot start until Task 1 completes. Total time is approximately `1.5s + 1.0s + 0.5s = 3.0s`.

* **Non-Blocking Demo**: Notice that all three tasks start at the same time. Task 3 finishes first because it has the shortest duration, followed by Task 2, and then Task 1. Total time is approximately `1.5s` (the duration of the longest task).

---

## 3. How This Relates to Node.js

This is the exact core philosophy of Node.js!

* **The Single-Threaded Threat**: In multi-threaded environments (like Java or Python with threads), blocking a single thread only freezes that specific thread. In Node.js, **all JavaScript executes on a single main thread**. If you write blocking synchronous code, you freeze the entire server. No other requests can be handled until the block is resolved.

* **Synchronous vs. Asynchronous Node APIs**: Node.js core modules provide dual APIs for almost all operations:
  * **Blocking**: Methods ending in `Sync` (e.g., `fs.readFileSync()`, `crypto.pbkdf2Sync()`). These halt the entire event loop. They are generally only safe to use during application startup configurations.
  * **Non-Blocking**: Standard asynchronous methods (e.g., `fs.readFile()`, `crypto.pbkdf2()`). These immediately release the thread, delegating the heavy work to `libuv` or the OS, returning the result later via callbacks, Promises, or `async/await`.

* **The Event Loop**: Node.js uses a loop structure (the Event Loop) to constantly monitor for completed non-blocking tasks. When the OS finishes reading a file or completing a network fetch, it pushes a callback to the task queue, and the Event Loop runs it the moment the main thread is idle.

