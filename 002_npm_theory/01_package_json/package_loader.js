// 01_package_json/package_loader.js

console.log("=== Node.js Package Manifest Parser ===\n");

// 1. Define a mock package.json content as a string
const mockPackageJSONContent = `{
  "name": "quiz-game-engine",
  "version": "2.4.1",
  "description": "An interactive terminal trivia engine",
  "main": "server.js",
  "private": true,
  "license": "MIT"
}`;

console.log("--- Loading Manifest ---");
console.log("Parsing mock package.json string...");

try {
  // 2. Parse the JSON string into a live JavaScript object
  const manifest = JSON.parse(mockPackageJSONContent);
  console.log("✅ Successfully parsed JSON into a JavaScript object!\n");

  // 3. Inspect properties programmatically
  console.log("--- Project Inspection Details ---");
  console.log(`Package Name:         ${manifest.name}`);
  console.log(`Current Version:      v${manifest.version}`);
  console.log(`Description:          ${manifest.description}`);
  console.log(`Entry Point Script:   ${manifest.main}`);
  console.log(`Private Package:      ${manifest.private ? 'Yes (Protected)' : 'No (Public)'}`);
  console.log(`License:              ${manifest.license}`);

} catch (error) {
  console.error("❌ Failed to parse package.json. Invalid JSON syntax!");
  console.error(error.message);
}

console.log("\n===============================================");
console.log("Loader demo script executed successfully!");
