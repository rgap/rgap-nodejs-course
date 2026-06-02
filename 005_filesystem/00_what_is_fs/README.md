# 00_what_is_fs: The Node.js File System Module

In this lesson, you will learn what the `fs` module is and how Node.js gives you access to the file system from JavaScript code.

---

## 1. What is the `fs` Module?

The **`fs` module** (short for "file system") is a built-in Node.js module that lets your JavaScript code interact with files and directories on disk:

- Read files
- Write files
- Append to files
- Delete files and folders
- Check if a file exists
- List directory contents
- Rename and move files

It comes with Node.js — no installation needed.

---

## 2. Two API Flavors

The `fs` module offers two versions of every operation:

| API | How to import | Style |
| :--- | :--- | :--- |
| **Callback-based** | `require('fs')` | Old-style, uses error-first callbacks |
| **Promise-based** | `require('fs/promises')` | Modern, works with async/await |

Always prefer the **Promise-based** API in modern Node.js code:

```javascript
// Prefer this in modern code:
const fs = require('fs/promises');

// Use this only with older code or callbacks:
const fsCallback = require('fs');
```

---

## 3. Sync vs. Async Operations

The callback-based `fs` module also has **synchronous** variants for every method (e.g., `fs.readFileSync`, `fs.writeFileSync`). These block the event loop until the operation completes.

| Method | Blocks? | Use Case |
| :--- | :--- | :--- |
| `fs.readFile()` | No | Web servers, production code |
| `fs.readFileSync()` | Yes | One-off scripts, startup initialization |
| `fs/promises.readFile()` | No | Modern async/await code |

> [!WARNING]
> Never use `Sync` methods in a web server's request handlers — they block every other request from being processed while waiting for disk I/O.

---

## 4. No Exercise Yet

The next lessons will cover the most important `fs` operations in detail with hands-on scripts.
