// 05_semantic_versioning/semver_simulator.js

// Load the mock package.json from this exact folder
const pkg = require('./package.json');

console.log("=== Node.js SemVer Constraint Checker ===\n");

console.log(`Analyzing dependencies for: ${pkg.name} v${pkg.version}\n`);

const deps = pkg.dependencies;

console.log("1. Caret (^)");
console.log(`📦 uuid constraint: ${deps.uuid}`);
console.log("   👉 Allowed updates: Minor and Patch. (e.g. 9.1.0, 9.1.5)");
console.log("   👉 Blocked updates: Major (e.g. 10.0.0).\n");

console.log("2. Tilde (~)");
console.log(`📦 express constraint: ${deps.express}`);
console.log("   👉 Allowed updates: Patch only. (e.g. 4.18.3)");
console.log("   👉 Blocked updates: Minor or Major (e.g. 4.19.0, 5.0.0).\n");

console.log("3. Exact Version");
console.log(`📦 lodash constraint: ${deps.lodash}`);
console.log("   👉 Allowed updates: NONE. Must install exactly 4.17.21.");

console.log("\n=======================================================");
console.log("SemVer check complete!");
