// 00_what_is_npm/npm_info.js

console.log("=== Node.js Basic Environment Inspector ===\n");

// 1. Basic Node and OS Info
console.log(`Node.js Version:       ${process.version}`);
console.log(`Operating System:      ${process.platform}`);
console.log(`CPU Architecture:      ${process.arch}\n`);

// 2. Instructions for NPM CLI
console.log("To check your NPM environment, run these commands manually in your terminal:");
console.log("  Check NPM version:     npm -v");
console.log("  Check default registry:npm config get registry");
console.log("  Check global root:     npm root -g\n");

console.log("=========================================");
console.log("Inspector script executed successfully!");
