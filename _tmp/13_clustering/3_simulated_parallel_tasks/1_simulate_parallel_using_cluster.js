/**
 * ⚙️ Demonstration: Simulate Parallelism Using Cluster
 *
 * This script forks multiple worker processes using Node's `cluster` module.
 * Each worker performs a heavy CPU task in parallel.
 *
 * ✅ Now each blocking task runs in its own process, utilizing separate CPU cores.
 *
 * 📌 How it works:
 * - Node runs the same script file in all processes.
 * - The `cluster.isPrimary` flag determines whether the process runs as a master or a worker.
 * - So yes, each process runs this *entire* file, but only one of the branches (if/else).
 */

const cluster = require("cluster");
const os = require("os");

// Function that simulates a heavy CPU task
function blockCpuTask(label) {
  console.time(label);
  let count = 0;
  for (let i = 0; i < 1e9; i++) {
    count += i;
  }
  console.timeEnd(label);
}

// 🧠 If it's the master process, fork workers
if (cluster.isPrimary) {
  console.log(`🧠 Master ${process.pid} is running`);

  // 🧵 Let's fork two workers
  for (let i = 0; i < 2; i++) {
    cluster.fork();
  }

  // 🧼 Clean up if a worker dies
  cluster.on("exit", (worker, code, signal) => {
    console.log(`❌ Worker ${worker.process.pid} died`);
  });
} else {
  // 🔄 This code runs in every worker process
  console.log(`🔧 Worker ${process.pid} started`);
  blockCpuTask(`Task by Worker ${process.pid}`);
  process.exit();
}

/**
 * 🧠 Summary of the Flow:
 * - Master starts, detects it's primary, and forks N workers.
 * - Each worker re-runs the same script, but `cluster.isPrimary` is false.
 * - So workers skip the forking logic and execute the heavy task.
 * - This enables parallel CPU-bound execution on multiple cores.
 */
