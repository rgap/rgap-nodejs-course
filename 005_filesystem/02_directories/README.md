# 02_directories: Creating and Reading Directories

In this lesson, you will learn how to create new directories, read directory contents, and delete files/folders asynchronously using `fs/promises`.

---

## 1. Creating a Directory

Use `fs.mkdir()` to create a new folder:

```javascript
const fs = require('fs/promises');

async function createFolder() {
  await fs.mkdir('my-new-folder');
  console.log('Folder created!');
}
```

### Recursive Creation
If you want to create nested directories like `parent/child/grandchild` where the parent doesn't exist yet, pass `{ recursive: true }`:

```javascript
await fs.mkdir('parent/child/grandchild', { recursive: true });
```
Without `{ recursive: true }`, Node.js will throw an error if the parent folder does not already exist.

---

## 2. Reading a Directory

Use `fs.readdir()` to list the files and folders inside a directory:

```javascript
const items = await fs.readdir('.');
console.log(items); // Prints an array of strings (names of files/directories)
```

### Listing with Details
To distinguish between files and directories, pass `{ withFileTypes: true }`. This returns an array of `Dirent` objects which have helper methods like `.isFile()` and `.isDirectory()`:

```javascript
const entries = await fs.readdir('.', { withFileTypes: true });

for (const entry of entries) {
  const type = entry.isDirectory() ? '📂 Folder' : '📄 File';
  console.log(`${type}: ${entry.name}`);
}
```

---

## 3. Removing Files and Directories

To delete a file, use `fs.unlink()`:
```javascript
await fs.unlink('somefile.txt');
```

To delete an empty directory, use `fs.rmdir()`:
```javascript
await fs.rmdir('empty-folder');
```

To delete a directory and all of its contents (files and subfolders), use the modern, recommended `fs.rm()` with `{ recursive: true, force: true }`:
```javascript
await fs.rm('my-new-folder', { recursive: true, force: true });
```
- `recursive: true` ensures subdirectories and files are deleted.
- `force: true` ignores errors if the path does not exist.

---

## 4. Verification Exercise

We have provided a script `app.js` that:
1. Creates a `sandbox` directory.
2. Creates two sample files inside it.
3. Reads and lists the contents of the `sandbox` directory.
4. Cleans up by deleting the `sandbox` directory and its contents.

Run the script to see it in action:
```bash
node app.js
```
