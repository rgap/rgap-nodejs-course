# ⚙️ 06_process_management

## 🧠 About This Folder

This module explores how to inspect and monitor the current Node.js process at runtime. These insights are useful for:
- Performance diagnostics
- Long-running service health checks
- Debugging memory leaks
- Logging process identity and metadata

---

## 📚 Files and Concepts

| File                 | Concept             | Description |
|----------------------|---------------------|-------------|
| `process_uptime.js`  | `process.uptime()`  | Shows how long the current Node process has been running |
| `memory_usage.js`    | `process.memoryUsage()` | Reports memory stats (heap, RSS, external, etc.) |
| `cpu_usage.js`       | `process.cpuUsage()` | Captures CPU time used by the process |
| `pid_and_title.js`   | `process.pid`, `process.title` | Retrieves process ID, parent PID, and title name |

---

## 🔧 Real-World Use Cases

### 🚀 DevOps

- Log uptime in container health checks
- Restart containers/services based on memory or CPU limits
- Identify PID to attach loggers, debuggers, or profilers
- Send alerts when heap grows beyond a threshold

### 🧪 Web Performance Monitoring

- Instrument Express.js apps with CPU/memory usage logs
- Alert when process stats deviate from baseline
- Profile performance in staging/production environments

---

## 📌 Key Learnings

- `process.uptime()` helps you understand lifecycle duration
- `process.memoryUsage()` gives visibility into RAM behavior
- `process.cpuUsage()` is useful for microbenchmarking or diagnosing load spikes
- `process.pid`, `process.ppid`, and `process.title` help with process control and debugging

These are the building blocks of robust Node.js service observability.