fork_ipc_message.js;
/**
 * 🔁 THEORY: Two-Way IPC with child_process.fork()
 *
 * When you use `fork()` in Node.js, it creates a full duplex communication channel (IPC)
 * between the parent and child process.
 *
 * You can use:
 *   - `child.send()` to send data to the child
 *   - `process.on('message')` in the child to receive data
 *   - `process.send()` in the child to respond
 *   - `child.on('message')` in the parent to receive the response
 *
 * ✅ Realistic Use Case: Task dispatch system
 *   - The parent assigns a task (e.g. backup, cleanup, report generation)
 *   - The child script executes based on the message it receives
 *   - The child responds with a result or status update
 */

const { fork } = require("child_process");

// 🧠 Start a generic worker script that will act on instructions
const worker = fork("./scripts/worker.js");

// 📨 Receive response from child
worker.on("message", msg => {
  console.log("📩 Message from worker:", msg);

  if (msg.status === "done") {
    console.log(`✅ Task completed: ${msg.task}`);
  }

  if (msg.status === "error") {
    console.error(`❌ Task failed: ${msg.error}`);
  }
});

// 🛠️ Send a task to the child script
worker.send({ task: "backup" });
