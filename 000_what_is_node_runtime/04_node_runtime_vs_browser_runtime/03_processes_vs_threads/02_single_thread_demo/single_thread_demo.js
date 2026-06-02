/**
 * 02_single_thread_demo/single_thread_demo.js
 * 
 * An interactive terminal application demonstrating how Node.js executes JavaScript on a single thread.
 * 
 * Concepts Demonstrated:
 * 1. Event Loop Heartbeat: An active interval prints a green tick every 500ms, representing the event loop being free to process callbacks.
 * 2. Non-Blocking Async Operation: Triggering an asynchronous task (via setTimeout) leaves the thread free, letting ticks continue.
 * 3. Blocking Sync Operation: Triggering a CPU-heavy busy-loop freezes the thread entirely, halting ticks and demonstrating that JavaScript is single-threaded.
 */

const readline = require('readline');

// ANSI Color codes for premium terminal styling
const COLORS = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  red: '\x1b[31m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgBlue: '\x1b[44m'
};

let tickCount = 0;
let heartbeatInterval = null;
let isOperationRunning = false;

// Display the gorgeous dashboard header
function displayHeader() {
  console.clear();
  console.log(`${COLORS.bold}${COLORS.cyan}================================================================${COLORS.reset}`);
  console.log(`${COLORS.bold}${COLORS.cyan}      🚀 NODE.JS SINGLE-THREADED EVENT LOOP DEMONSTRATION 🚀     ${COLORS.reset}`);
  console.log(`${COLORS.bold}${COLORS.cyan}================================================================${COLORS.reset}`);
  console.log(`${COLORS.dim}This interactive script visualizes Node's single-threaded nature in real time.${COLORS.reset}`);
  console.log();
  console.log(`${COLORS.bold}How to Use:${COLORS.reset}`);
  console.log(`  ${COLORS.bold}${COLORS.yellow}[1]${COLORS.reset} Trigger ${COLORS.bold}${COLORS.green}Non-Blocking Async Operation${COLORS.reset} (2-second setTimeout)`);
  console.log(`  ${COLORS.bold}${COLORS.yellow}[2]${COLORS.reset} Trigger ${COLORS.bold}${COLORS.red}Blocking Sync Operation${COLORS.reset} (3-second CPU busy loop)`);
  console.log(`  ${COLORS.bold}${COLORS.yellow}[3]${COLORS.reset} ${COLORS.bold}${COLORS.magenta}Exit Demo${COLORS.reset}`);
  console.log(`${COLORS.cyan}----------------------------------------------------------------${COLORS.reset}`);
  console.log(`${COLORS.dim}[Heartbeat] Watch the green ticks below representing the Event Loop running...${COLORS.reset}`);
  console.log(`${COLORS.cyan}----------------------------------------------------------------${COLORS.reset}`);
}

// Start the Event Loop heartbeat ticks
function startHeartbeat() {
  heartbeatInterval = setInterval(() => {
    tickCount++;
    const timestamp = new Date().toLocaleTimeString();
    process.stdout.write(`\r  ${COLORS.green}💚 [Event Loop Active] Tick #${tickCount} at ${timestamp}${COLORS.reset}`);
  }, 500);
}

// Perform simulated non-blocking work
function triggerNonBlockingAsync() {
  if (isOperationRunning) return;
  isOperationRunning = true;
  
  console.log(`\n\n  ${COLORS.bold}${COLORS.blue}⚡ [Async Action] Starting a 2-second non-blocking wait...${COLORS.reset}`);
  console.log(`     (The JS engine schedules this task and is immediately free to keep running ticks!)`);
  
  setTimeout(() => {
    console.log(`\n\n  ${COLORS.bold}${COLORS.bgGreen} ✅ [Async Action Complete] 2-second wait ended successfully! ${COLORS.reset}`);
    isOperationRunning = false;
    displayPromptHint();
  }, 2000);
}

// Perform simulated blocking work
function triggerBlockingSync() {
  if (isOperationRunning) return;
  isOperationRunning = true;

  console.log(`\n\n  ${COLORS.bold}${COLORS.red}🔥 [Sync Action] Starting a 3-second CPU-blocking busy loop...${COLORS.reset}`);
  console.log(`     ${COLORS.bgRed}${COLORS.bold} ALERT: The main thread will be 100% frozen! No ticks can execute. ${COLORS.reset}`);
  
  // We need to delay printing the "completed" message until after the blocking loop ends.
  // Because it is synchronous, this function will hold execution hostage.
  const start = Date.now();
  const duration = 3000; // 3 seconds
  
  // Force process.stdout to flush before we block the thread
  process.stdout.write('     Freezing... 🥶\n');
  
  // Busy wait loop (100% CPU utilization on the single main JS thread)
  while (Date.now() - start < duration) {
    // Blocking...
  }

  console.log(`\n  ${COLORS.bold}${COLORS.bgBlue} ❄️  [Sync Action Complete] 3-second block finished! ${COLORS.reset}`);
  console.log(`     (Notice how all ticks frozen during this block resumed at the exact same moment.)`);
  
  isOperationRunning = false;
  displayPromptHint();
}

function displayPromptHint() {
  console.log(`\n${COLORS.dim}Press [1], [2], or [3] to select an option...${COLORS.reset}`);
}

// Setup keyboard reading
function setupKeyboardListener() {
  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }

  process.stdin.on('keypress', (str, key) => {
    // Handle Ctrl+C or '3' for exit
    if ((key.ctrl && key.name === 'c') || str === '3') {
      clearInterval(heartbeatInterval);
      console.log(`\n\n${COLORS.bold}${COLORS.magenta}Exiting demo. Have a great day learning Node.js! 👋${COLORS.reset}\n`);
      process.exit();
    }

    if (isOperationRunning) {
      // Ignore keys during active runs, except exit
      return;
    }

    if (str === '1') {
      triggerNonBlockingAsync();
    } else if (str === '2') {
      triggerBlockingSync();
    }
  });
}

// Main execution flow
function main() {
  displayHeader();
  startHeartbeat();
  setupKeyboardListener();
  displayPromptHint();
}

main();
