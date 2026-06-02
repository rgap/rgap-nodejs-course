# 03: Processes vs. Threads

Operating systems use both processes and threads to execute code, but they manage computer memory for them in fundamentally different ways.

---

## 1. Key Definitions

* **Process**:
  * An isolated, self-contained running instance of a program (like a running application).
  * Has its own private allocation of system memory (RAM). One process cannot read or write to another process's memory without explicit OS cooperation.
  * If one process crashes, it does not crash other processes.

* **Thread**:
  * A lightweight unit of execution *inside* a process.
  * **Shares the same memory space** as the parent process and all other threads in that process.
  * Can read and write to the same variables concurrently.
  * If a thread throws an unhandled exception or crashes, it can bring down the entire process and all sibling threads.

## 2. Exploring the Lessons & Demos

To help you fully digest these concepts, this directory contains progressive subfolders:

### 1. **`01_cli_demo`**
* **Goal**: Run a command-line script showing threads sharing memory vs processes copying memory in Python.
* **Format**: A standard CLI Python script.

### 2. **`02_single_thread_demo`**
* **Goal**: Understand and witness the single-threaded nature of JavaScript in Node.js, and learn the dangers of blocking the Event Loop.
* **Format**: An interactive CLI Node.js script.

---

Navigate to each folder and read its respective **README** to get started!

---

## 3. How This Relates to Node.js

Understanding the trade-offs of processes and threads explains the internal design decisions of Node.js:

* **JavaScript Runs Single-Threaded**: When you write JavaScript in Node.js, it executes sequentially on one main thread. Node does this to simplify programming by completely avoiding concurrency race conditions in user-land JavaScript.

* **Internal Libuv Thread Pool**: Although your JS code runs on one thread, Node.js uses a C++ background thread pool (managed by the `libuv` library) to run slow system operations in parallel. By default, it allocates four background threads for tasks like file management (`fs`), compression (`zlib`), DNS lookups, and encryption (`crypto`).

* **Node.js Worker Threads**: If you need to perform heavy CPU computations (e.g., image resizing or machine learning models) in parallel, Node.js offers the `worker_threads` module. This allows you to spawn multiple JS execution threads that run concurrently and can share memory using `SharedArrayBuffer`.

* **Node.js Child Processes & Clustering**: Because a single thread can only utilize one CPU core, Node.js applications scale across multi-core systems by spawning multiple processes. Using the `child_process` module or `cluster` module, you can spin up separate process workers. Since each worker runs on its own isolated V8 engine instance and RAM space, a crash in one worker does not affect the health of the others.

