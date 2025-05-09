# 🔌 04_exit_codes_and_signals

## 🧠 About This Folder

This module explores how Node.js processes handle **exit codes** and **OS signals** like `SIGINT` and `SIGTERM`. These features are critical for writing production-ready applications that can terminate gracefully or signal errors to the system.

---

## 🧰 Real-World Use Cases

### 🚀 DevOps

- **CI/CD Feedback**:

  - Use `process.exit(1)` to halt a pipeline step when validation fails.
  - Exit code 0 signals success to platforms like GitHub Actions or GitLab CI.

- **Container Lifecycle**:

  - Handle `SIGTERM` in Docker or Kubernetes to close HTTP servers cleanly.
  - Avoid leaving zombie processes or corrupt state.

- **Process managers (PM2, forever)**:
  - React to signals and logs to auto-restart or scale down services.

### 🛠 Web Development

- **API Servers**:

  - Prevent in-flight requests from being dropped.
  - Log events for error monitoring services before termination.

- **Database connections**:
  - Close DB pools to avoid connection leaks when shutting down Express apps.

---

## 🔍 Key Concepts

- `process.exit(code)` lets you define success (0) or failure (non-zero).
- Signals like `SIGINT` and `SIGTERM` can be intercepted using `process.on()`.
- Graceful shutdown patterns avoid crashing and support production reliability.

---

## ✅ Summary

This folder demonstrates low-level lifecycle handling that every modern Node.js app should implement — especially when building robust backend services or automating tasks in CI/CD.
