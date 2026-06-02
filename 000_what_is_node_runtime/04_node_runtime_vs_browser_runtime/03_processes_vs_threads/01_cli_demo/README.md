# 01: CLI Demo (Processes vs. Threads)

This folder contains a command-line script demonstrating the core systems difference between threads (sharing memory space) and processes (having isolated memory spaces).

---

## 1. Running the Script

Open your terminal in this folder and run:

```bash
python3 processes_vs_threads.py
```

---

## 2. Explanation of the Outputs

* **Threads (Shared Memory)**:
  * Notice that both Thread A and Thread B run under the same **Process ID (PID)**.
  * Since they share the same memory space, when they increment the counter, they edit the exact same variable. The parent process sees the final counter incremented to `2`.

* **Child Process (Isolated Memory)**:
  * Notice that the Child Process runs under a different **PID**.
  * Since its memory is isolated, any changes it makes to the counter are done on its own copy of the variables. The parent process's counter remains unchanged at `0`.
