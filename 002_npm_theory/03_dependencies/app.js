// 03_dependencies/app.js

console.log("=== Node.js App ===\n");

// 1. Load the third-party package
const figlet = require('figlet');

// 2. Use the package
const asciiArt = figlet.textSync('Hello NPM!');

console.log("✅ Success! 'figlet' was loaded from node_modules.");
console.log(asciiArt);
