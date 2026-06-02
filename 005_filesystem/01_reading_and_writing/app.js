// app.js — reading, writing, and appending files

const fs = require('fs/promises');

async function main() {
  // 1. Write a file (creates or overwrites)
  await fs.writeFile('output.txt', 'Hello from Node.js!\nThis was written by writeFile.\n');
  console.log('✅ output.txt written.');

  // 2. Read it back
  const written = await fs.readFile('output.txt', 'utf8');
  console.log('\n📄 output.txt contents:');
  console.log(written);

  // 3. Read the pre-existing notes file
  const notes = await fs.readFile('notes.txt', 'utf8');
  console.log('📄 notes.txt contents:');
  console.log(notes);

  // 4. Append a timestamped log entry
  const entry = `${new Date().toISOString()} — Script ran\n`;
  await fs.appendFile('log.txt', entry);
  console.log('✅ Log entry appended to log.txt.');

  // 5. Read and display the entire log
  const log = await fs.readFile('log.txt', 'utf8');
  console.log('\n📋 log.txt contents:');
  console.log(log);
}

main().catch(err => {
  console.error('Error:', err.message);
});
