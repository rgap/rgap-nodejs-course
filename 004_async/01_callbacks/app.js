// app.js — reading a file with a callback

const fs = require('fs');

console.log('1. Starting file read...');

fs.readFile('message.txt', 'utf8', function (err, data) {
  // Always check for errors first
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }
  console.log('3. File contents:');
  console.log(data);
});

// This line runs BEFORE the file is read
console.log('2. This runs while the file is being read...');
