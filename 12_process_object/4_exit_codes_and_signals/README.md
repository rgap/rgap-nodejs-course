# 🔌 04_exit_codes_and_signals

## 🧠 About This Folder

This module explores how Node.js processes handle:

- **Exit codes** (`process.exit(code)`)
- **OS signals** (`SIGINT`, `SIGTERM`, `SIGHUP`, etc.)
- **Process lifecycle events** (`beforeExit`, `exit`)
- **Uncaught exceptions** (`uncaughtException`)
- **Unhandled promise rejections** (`unhandledRejection`)

These features are critical for writing production-ready applications that can terminate gracefully, clean up resources, and signal errors to the system.

---

## 🔍 Key Concepts

- **Exit Codes**  
  Signal success (`0`) or failure (`>0`) to the OS or calling scripts.

- **OS Signals**  
  Intercept termination requests (`SIGINT`, `SIGTERM`, `SIGHUP`, etc.) for cleanup.

- **Process Lifecycle Events**

  - `beforeExit`: emitted when the event loop is empty; you can schedule more work here.
  - `exit`: emitted just before the process exits; only synchronous cleanup is allowed.

- **Error Handling**

  - `uncaughtException`: last-chance handler for uncaught errors (process should be restarted afterward).
  - `unhandledRejection`: catches promise rejections without a `.catch()`.

- **Common Resources to Clean Up**
  - HTTP servers
  - Database connections (e.g., MongoDB, PostgreSQL pools)
  - WebSocket / Socket.io servers
  - File streams (log files, uploads)
  - Message-queue clients (RabbitMQ, Kafka)
  - Cache clients (Redis, Memcached)
  - Timers and intervals

---

## 🧰 Real-World Use Cases

### 🚀 DevOps & Containers

- **CI/CD pipelines** use exit codes to determine pass/fail of build and deploy steps.
- **Docker & Kubernetes** send `SIGTERM` to containers to trigger graceful shutdown before killing.

### 🛠 Production Services

- **API servers** avoid dropping in-flight requests by closing the server to new connections and waiting for active ones to finish.
- **Databases** ensure all writes are committed or rolled back before shutting down.
- **Logging & Monitoring** flush buffers and close file streams to preserve logs.

---

## ✅ Summary

By combining exit codes, signal handlers, lifecycle events, and exception/rejection handling, you can build Node.js services that:

1. Clean up all open resources (servers, DBs, streams).
2. Log and surface errors in a controlled way.
3. Exit with appropriate status codes for automation and monitoring.
4. Maintain reliability and predictability in production environments.
