# 👷 07_child_processes

## 🧠 About This Folder

This module explores Node.js's `child_process` module — used to run shell commands, external programs, and other Node scripts from within your app. This is crucial in **DevOps**, **automation**, **testing frameworks**, and **parallel processing** scenarios.

---

## 🧰 Use Cases in Web Dev & DevOps

### 🚀 DevOps and Automation

- Run OS-level commands like `git`, `docker`, `ffmpeg`, etc.
- Automate deployment steps (restart services, lint, test)
- Execute shell commands conditionally (e.g. check Node version)

### 🛠 Web Development Tools

- Use `fork()` to offload heavy tasks like:
  - Markdown/MDX processing
  - PDF/image generation
  - Web scraping
- Spawn parallel workers for faster builds or large file uploads

---

## 📌 Key Learnings

- `spawn()` is ideal for large or continuous output (streaming)
- `exec()` is simpler for short commands with buffered output
- `execFile()` avoids shell injection risks and is safer
- `fork()` is designed for **Node-to-Node** child processes and supports IPC
- IPC (`process.send()` / `process.on('message')`) is built-in to `fork()` only

---

## 📦 Recommended Libraries

| Tool             | Purpose                                              |
| ---------------- | ---------------------------------------------------- |
| `execa`          | Promise-based wrapper for child_process              |
| `pm2`            | Process manager for production apps                  |
| `worker_threads` | Alternative for true parallelism (same memory space) |
