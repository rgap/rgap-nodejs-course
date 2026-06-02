// app.js — reading a file with async/await

const fs = require('fs/promises');

// async functions always return a Promise
async function main() {
  console.log('1. Starting...');

  try {
    // await pauses HERE until the file is read
    const data = await fs.readFile('message.txt', 'utf8');
    console.log('3. File contents:');
    console.log(data);
  } catch (err) {
    console.error('3. Error:', err.message);
  }
}

// Calling main() returns a Promise.
// Code OUTSIDE main() continues running immediately.
main();

console.log('2. This runs synchronously, before main() finishes awaiting...');
