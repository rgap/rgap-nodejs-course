// 06_package_lock/lock_verifier.js

// 1. Load the mock package-lock.json from this exact folder
const lockData = require('./package-lock.json');

console.log("=== Node.js Package-Lock Verifier ===\n");

console.log(`✅ Successfully loaded package-lock.json!`);
console.log(`Lockfile Schema Version: ${lockData.lockfileVersion}\n`);

const packagesList = Object.keys(lockData.packages || {});
const externalPackages = packagesList.filter(pkg => pkg.startsWith('node_modules/'));

console.log("Locked Dependency Details:");
externalPackages.forEach(pkgName => {
  const info = lockData.packages[pkgName];
  console.log(`📦 Package: ${pkgName.replace('node_modules/', '')}`);
  console.log(`   - Locked Version:  v${info.version}`);
  console.log(`   - Download Source: ${info.resolved}`);
  console.log(`   - Integrity Hash:  ${info.integrity}`);
  console.log("");
});

console.log("These cryptographic integrity hashes guarantee that when someone runs");
console.log("'npm install' or 'npm ci', the packages downloaded will exactly match");
console.log("what you installed, ensuring no modified or malicious code enters production.");

console.log("\n=====================================");
console.log("Lockfile verification finished.");
