# 🧵 05_std_streams

## 🧠 About This Folder

This folder introduces Node.js **standard I/O streams**: `stdin`, `stdout`, and `stderr`. These are essential for interacting with the terminal, building CLI tools, piping data, and properly logging outputs or errors in production environments.

---

## 🔧 Real-World Applications

### 🛠 Web Tooling

- CLI prompts for tools like `create-react-app` or `vite`
- Outputting clean logs while piping progress bars
- Handling user interaction in terminal-based apps

### 🚀 DevOps and CI/CD

- Redirecting output in shell scripts:

  ```bash
  node script.js > output.log 2> error.log
  ```

- Separating error logs in production environments
- Automating pipelines that check output status

---

## 📌 Key Learnings

- `stdin` allows interactive input (e.g. passwords, prompts)
- `stdout` is ideal for logs, data, and streaming output
- `stderr` ensures errors are distinguishable from normal logs

These streams are the **foundation of Node.js CLI interactions** and critical for **robust DevOps scripts**.
