# 🧵 What Is a Process?

In operating systems, a **process** is an instance of a computer program that is being executed.
It contains the program code and its current activity, which includes:

- The program counter (which tracks the current position in the code)
- The call stack (functions and calls)
- Memory (heap and stack)
- Registers and program variables

---

## 📦 Key Characteristics of a Process

- **Isolation:** Each process has its own memory space and does not share memory with other processes by default.
- **Heavyweight:** Creating processes is more expensive than creating threads.
- **Independent Failure:** If a process crashes, it typically doesn’t affect other processes.

---

## 🧠 Why It Matters in Node.js

Node.js runs on a **single thread per process**, which means:

- One process = one instance of your Node.js server
- That process can only utilize **one CPU core**
- To scale across multiple cores, you must **create multiple processes** (clustering or using PM2)
