// app.js — reading a file with Promises

// Node.js 10+ ships a promise-based version of the fs module
const fs = require('fs/promises');

console.log('1. Starting file read...');

fs.readFile('message.txt', 'utf8')
  .then(data => {
    console.log('3. File contents:');
    console.log(data);
  })
  .catch(err => {
    console.error('3. Error reading file:', err.message);
  });

console.log('2. This runs while the file is being read...');
