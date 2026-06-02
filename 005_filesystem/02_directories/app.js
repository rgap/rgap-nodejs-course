// app.js — demonstrates directory operations (mkdir, readdir, rm) using fs/promises

const fs = require('fs/promises');
const path = require('path');

const sandboxPath = path.join(__dirname, 'sandbox');

async function runDemo() {
  console.log('=== fs/promises Directory Operations Demo ===\n');

  try {
    // 1. Create a directory
    console.log('1. Creating directory: "./sandbox"...');
    await fs.mkdir(sandboxPath, { recursive: true });
    console.log('✅ Created.\n');

    // 2. Create some files inside the sandbox
    console.log('2. Writing sample files inside "./sandbox"...');
    await fs.writeFile(path.join(sandboxPath, 'file1.txt'), 'Hello from file 1!');
    await fs.writeFile(path.join(sandboxPath, 'file2.txt'), 'Hello from file 2!');
    console.log('✅ Wrote file1.txt and file2.txt.\n');

    // 3. Read the directory contents
    console.log('3. Reading "./sandbox" directory contents:');
    const entries = await fs.readdir(sandboxPath, { withFileTypes: true });
    
    entries.forEach(entry => {
      const type = entry.isDirectory() ? '📂 Folder' : '📄 File';
      console.log(`  - [${type}] ${entry.name}`);
    });
    console.log('');

    // 4. Clean up by deleting the directory and its contents
    console.log('4. Cleaning up... Deleting "./sandbox" recursively...');
    await fs.rm(sandboxPath, { recursive: true, force: true });
    console.log('✅ Cleanup complete. Folder deleted successfully.');

  } catch (error) {
    console.error('❌ An error occurred during the demo:', error);
  }

  console.log('\n=============================================');
}

runDemo();
