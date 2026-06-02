# 01_callbacks: The Original Async Pattern

In this lesson, you will learn what callbacks are, how Node.js uses them for async I/O, and why they can become difficult to manage.

---

## 1. What is a Callback?

A **callback** is a function you pass as an argument to another function, to be called later when an operation completes.

```javascript
function doLater(callback) {
  setTimeout(() => {
    callback('done!');
  }, 1000);
}

doLater(function (result) {
  console.log('Result:', result); // prints after 1 second
});
```

---

## 2. The Node.js Error-First Convention

All built-in Node.js async functions use a standard callback signature:

```javascript
function callback(error, result) { ... }
```

- The **first argument** is always an error (or `null` if there was no error)
- The **second argument** is the result

This is called the **error-first** (or "Node-style") callback pattern.

---

## 3. Reading a File with a Callback

The `fs.readFile()` function is one of the most common examples:

```javascript
const fs = require('fs');

fs.readFile('message.txt', 'utf8', function (err, data) {
  if (err) {
    console.error('Failed to read file:', err.message);
    return;
  }
  console.log('File contents:', data);
});

console.log('This prints BEFORE the file is read');
```

> [!IMPORTANT]
> Always check for `err` as the first thing inside every callback. Ignoring errors leads to silent failures.

---

## 4. Callback Hell

What happens when one async operation depends on another?

```javascript
fs.readFile('user.txt', 'utf8', function (err, userId) {
  if (err) return console.error(err);

  fs.readFile(`profile_${userId}.txt`, 'utf8', function (err, profile) {
    if (err) return console.error(err);

    fs.readFile(`settings_${userId}.txt`, 'utf8', function (err, settings) {
      if (err) return console.error(err);

      console.log('Profile:', profile);
      console.log('Settings:', settings);
    });
  });
});
```

This deeply nested structure is called **callback hell** (or the "pyramid of doom"). It is hard to read, hard to debug, and hard to handle errors consistently.

Promises (next lesson) were invented to solve this problem.

---

## 5. Verification Exercise

This folder contains a `message.txt` file and an `app.js` that reads it with a callback.

Run the script:
```bash
node app.js
```

Then modify `app.js` to intentionally pass a filename that doesn't exist (e.g., `'missing.txt'`) and observe how the error is handled.
