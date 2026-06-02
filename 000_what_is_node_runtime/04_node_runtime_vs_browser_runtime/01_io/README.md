# 01: Understanding I/O (Input/Output)

In computer architecture, **I/O** is the communication between an information processing system (like your computer program running in CPU and RAM) and the outside world (like disk drives, networks, keyboards, and displays).

---

## 1. The Core Streams

Operating systems provide three default I/O streams to every process:

* **Standard Input (stdin)**: The stream where data flows *into* the program (typically from your keyboard or another process).

* **Standard Output (stdout)**: The stream where data flows *out* of the program (typically displayed on your terminal screen).

* **Standard Error (stderr)**: A separate output stream specifically used for error messages and diagnostics, ensuring they don't get mixed up with regular output data.

---

## 2. Running the Demo Script

We have written a Python script called **`io_demo.py`** in this folder to show this flow in action.

### Step 1: Open Your Terminal
Navigate to this lesson's folder.

### Step 2: Run the Script
Execute the Python script:

```bash
python3 io_demo.py
```

### Step 3: Follow the Prompts
Type a message when requested and watch how data transitions from:
1. Keyboard (Input) to CPU/RAM memory.
2. RAM memory to a disk file (Output).
3. Disk file (Input) back to RAM memory.
4. RAM memory to the terminal screen (Output).

---

## 3. How This Relates to Node.js

Node.js is designed from the ground up for high-throughput I/O. Understanding these streams is crucial because:

* **Node.js Standard Streams**: The global `process` object provides direct access to these default OS streams:
  * `process.stdin` allows your Node.js application to listen to terminal keyboard inputs.
  * `process.stdout` is the underlying write stream used by `console.log()`.
  * `process.stderr` is used by `console.error()` to write diagnostics out-of-band.

* **Heavy I/O Modules**: Node.js core modules like `fs` (for reading and writing files) and `http` or `net` (for network requests) are wrappers around OS-level I/O calls.

* **Non-Blocking Execution**: Because physical I/O is slow (orders of magnitude slower than running operations in CPU/RAM), Node.js never lets I/O block its main execution thread. Instead of waiting for a file write or database lookup to complete, it delegates the operation to the operating system and moves on to execute other code immediately.

