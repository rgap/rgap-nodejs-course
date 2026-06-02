/**
 * 🧪 Demonstration: Blocking Tasks in a Single Thread
 *
 * This example shows what happens when two heavy CPU-bound tasks
 * are run sequentially in Node.js — which is single-threaded by default.
 *
 * Unlike true multi-threaded environments, Node will execute these
 * tasks one after the other, blocking the event loop.
 *
 * ❗ Important:
 * Although we call this a "Thread vs Process" example, this script still
 * runs inside a single process and a single thread. There's no real parallelism here.
 * To truly parallelize these tasks, you'd use `cluster`, `child_process`, or `worker_threads`.
 */

function blockCpuTask(label) {
  console.time(label);
  let count = 0;
  for (let i = 0; i < 1e9; i++) {
    count += i;
  }
  console.timeEnd(label);
}

// 🚫 These tasks block the main thread one after another
blockCpuTask("🔁 Task A");
blockCpuTask("🔁 Task B");

/**
 * 💡 Observation:
 * - Task B waits for Task A to finish because they're both on the main thread.
 * - No true concurrency is happening here.
 *
 * 🧠 In a production app, blocking tasks like these should be offloaded
 * to background workers, separate processes, or using Worker Threads.
 */
