// 3_simulate_parallel_using_cluster.js

/**
 * ⚙️ Realistic Example: Parallel Request Handlers with Cluster
 *
 * This version simulates a realistic case where each worker
 * is assigned a different task — for example, one simulates report generation,
 * another simulates PDF rendering, both CPU-intensive.
 *
 * ✅ Each worker does a distinct operation in parallel,
 * helping scale Node.js on multi-core systems.
 */

const cluster = require("cluster");
const os = require("os");

// Task A: Simulate PDF generation
function generatePdfReport() {
  console.time("📝 PDF Generation");
  let sum = 0;
  for (let i = 0; i < 1e5; i++) {
    for (let j = 0; j < 1e4; j++) {
      total += Math.sin(i) * Math.tan(j) * 0.0000001;
    }
  }
  console.timeEnd("📝 PDF Generation");
}

// Task B: Simulate data analytics
function runAnalyticsJob() {
  console.time("📊 Analytics Job");
  let product = 1;
  for (let i = 0; i < 1e5; i++) {
    for (let j = 0; j < 1e4; j++) {
      total += Math.sin(i) * Math.tan(j) * 0.0000001;
    }
  }
  console.timeEnd("📊 Analytics Job");
}

// 🧠 Master forks two workers
if (cluster.isPrimary) {
  console.log(`🧠 Master ${process.pid} is running`);

  const tasks = ["pdf", "analytics"];

  // Assign a specific task via environment variable
  for (let i = 0; i < tasks.length; i++) {
    cluster.fork({ TASK_TYPE: tasks[i] });
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`❌ Worker ${worker.process.pid} died`);
  });
} else {
  const task = process.env.TASK_TYPE;
  console.log(`🔧 Worker ${process.pid} running task: ${task}`);

  if (task === "pdf") {
    generatePdfReport();
  } else if (task === "analytics") {
    runAnalyticsJob();
  }

  process.exit();
}

/**
 * 🔁 Flow Summary:
 * - Master forks one worker for each distinct task using env vars.
 * - Workers branch logic based on TASK_TYPE.
 * - Now each worker executes a different job in parallel.
 *
 * 📌 This pattern allows realistic multi-core utilization
 * for different routes or services (e.g., `/generate-report`, `/run-analytics`).
 */
