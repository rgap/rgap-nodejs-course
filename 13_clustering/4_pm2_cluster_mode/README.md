# ⚙️ Node.js Clustering with PM2

This project demonstrates **how to run a clustered Express server using [PM2](https://pm2.keymetrics.io/)**, a production-grade process manager for Node.js.

---

## 📚 What Is PM2?

**PM2** (Process Manager 2) is a powerful tool for managing Node.js applications in production. It simplifies:

- Running multiple processes (clusters)
- Restarting apps after crashes
- Monitoring performance
- Managing logs
- Scaling across CPU cores

PM2 abstracts the complexities of the `cluster` module, letting developers scale applications horizontally with a single flag.

---

## ⏳ Historical Context

| Year      | Milestone                                                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **2011**  | Node.js introduces the [`cluster`](https://nodejs.org/api/cluster.html) module in v0.8 to support multi-core utilization.                |
| **2013**  | PM2 is released to simplify process management and clustering for Node.js apps.                                                          |
| **Today** | PM2 is widely used in production setups, offering features like zero-downtime reloads, monitoring dashboards, and cluster orchestration. |

---

## 🧠 Why Use Clustering?

Node.js is **single-threaded** by default. On modern systems with multiple CPU cores, this means your application can only use **one core**, leaving the rest idle.

Clustering creates **multiple Node.js processes** (workers), allowing:

- 🧠 **Parallel execution**
- ♻️ **Fault tolerance**
- ⚖️ **Load balancing**
- 📈 **Better scalability**

---

## 🔎 Thread vs Process (Quick Recap)

| Concept    | Thread                           | Process                         |
| ---------- | -------------------------------- | ------------------------------- |
| Definition | Lightweight unit of execution    | Complete program instance       |
| Memory     | Shared with other threads        | Isolated from other processes   |
| In Node.js | Limited use (via worker_threads) | `cluster` and PM2 use processes |

---

## 🧪 What This Example Does

- Sets up an Express server with a heavy CPU-bound endpoint: `/generate-report`
- No manual `cluster` code
- Instead, the clustering is **delegated to PM2**, which forks one process per CPU core

---

## 🧰 File: `pm2_generate_report.js`

This file is a **standalone Express server**. PM2 takes care of clustering.

**Key Endpoint:**

- `GET /generate-report` — Simulates a long, CPU-heavy operation

**Behavior:**

- Each request is handled by one of the worker processes
- If you hit this endpoint from multiple browser tabs, each is distributed to a different worker

---

## ▶️ How to Run with PM2

```bash
# Install PM2 globally
npm install -g pm2

# Start the server in cluster mode (1 worker per core)
pm2 start pm2_generate_report.js -i max

# OR start in fork mode (single process)
pm2 start pm2_generate_report.js --name report-server

# Start with environment variables
pm2 start pm2_generate_report.js --env production

# View live logs (stdout and stderr)
pm2 logs

# Filter logs for a specific process
pm2 logs report-server

# Tail logs continuously
pm2 logs --lines 100

# Monitor resource usage in real-time (CPU, memory)
pm2 monit

# See running PM2 processes and statuses
pm2 list

# Get detailed info on one process
pm2 describe report-server

# Restart all processes
pm2 restart all

# Restart a specific process by name or ID
pm2 restart report-server

# Reload processes (zero-downtime for cluster mode)
pm2 reload all

# Stop a specific process
pm2 stop report-server

# Stop all processes
pm2 stop all

# Delete a specific process
pm2 delete report-server

# Delete all processes
pm2 delete all

# Save current process list for resurrection on reboot
pm2 save

# Startup script to resurrect processes on boot
pm2 startup

# Kill the PM2 daemon entirely
pm2 kill

```
