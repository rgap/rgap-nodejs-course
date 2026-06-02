// 00_process_object/process_demo.js

console.log("=== Node.js process Object Demonstration ===\n");

// 1. Logging environment properties
console.log(`1. Process ID (PID):    ${process.pid}`);
console.log(`2. Operating System:    ${process.platform}`);
console.log(`3. CPU Architecture:    ${process.arch}`);
console.log(`4. Node.js Version:     ${process.version}`);

// 2. Logging directory path
console.log(`5. Current Working Dir: ${process.cwd()}`);

// 3. System Uptime (seconds)
console.log(`6. Script Uptime:       ${process.uptime().toFixed(4)} seconds`);

// 4. Memory Usage (Heap Used)
const memoryUsedMB = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
console.log(`7. V8 Heap Memory Used: ${memoryUsedMB} MB\n`);

// 5. Simulating a controlled exit
console.log("Exiting process with success code (0)...");
process.exit(0);

// This code will never be executed
console.log("This line will never print because the process has exited.");
