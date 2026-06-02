# 01_reading_and_writing: Reading and Writing Files

In this lesson, you will read files, write new files, and append to existing ones using the `fs/promises` API.

---

## 1. Reading a File

```javascript
const fs = require('fs/promises');

async function main() {
  const content = await fs.readFile('notes.txt', 'utf8');
  console.log(content);
}

main();
```

- The second argument `'utf8'` tells Node.js to decode the file as a text string.
- Without it, `readFile` returns a raw `Buffer` (binary data).

---

## 2. Writing a File

`fs.writeFile()` creates the file if it doesn't exist, or **completely replaces** its contents if it does:

```javascript
async function main() {
  await fs.writeFile('output.txt', 'Hello, file system!\n');
  console.log('File written.');
}
```

> [!WARNING]
> `writeFile` **overwrites** the file. If the file already has content, it will be lost.

---

## 3. Appending to a File

`fs.appendFile()` adds content to the **end** of a file without touching existing content:

```javascript
async function main() {
  await fs.appendFile('log.txt', `${new Date().toISOString()} — App started\n`);
  console.log('Log entry added.');
}
```

If the file doesn't exist, `appendFile` creates it.

---

## 4. Checking if a File Exists

The modern approach is to attempt the operation and catch the error:

```javascript
async function fileExists(path) {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

const exists = await fileExists('notes.txt');
console.log('Exists:', exists);
```

---

## 5. Verification Exercise

Run the provided script:
```bash
node app.js
```

It will:
1. Write a fresh `output.txt`
2. Read it back and print the content
3. Append a timestamped log entry to `log.txt`
4. Read and print `log.txt`

Run the script a second time and notice that `log.txt` grows with a new timestamp entry each time.
