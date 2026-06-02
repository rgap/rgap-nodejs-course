# 02_promises: Cleaner Async with Promises

In this lesson, you will learn what a Promise is, how to create and consume one, and how chaining solves the callback hell problem.

---

## 1. What is a Promise?

A **Promise** is an object that represents the eventual result of an asynchronous operation. It can be in one of three states:

| State | Meaning |
| :--- | :--- |
| **pending** | The operation is still running |
| **fulfilled** | The operation completed successfully (has a value) |
| **rejected** | The operation failed (has an error) |

Once a Promise is fulfilled or rejected, it stays in that state forever — it never changes back.

---

## 2. Consuming a Promise

Most of the time, you will **consume** Promises returned by libraries (not create them yourself).

```javascript
const fs = require('fs/promises'); // the promise-based version of fs

fs.readFile('message.txt', 'utf8')
  .then(function (data) {
    console.log('File contents:', data);
  })
  .catch(function (err) {
    console.error('Error:', err.message);
  });
```

- `.then(callback)` runs when the Promise resolves (succeeds)
- `.catch(callback)` runs when the Promise rejects (fails)

---

## 3. Chaining Promises

Instead of nesting, Promises allow you to **chain** operations:

```javascript
fs.readFile('step1.txt', 'utf8')
  .then(data => {
    console.log('Step 1:', data);
    return fs.readFile('step2.txt', 'utf8'); // return next Promise
  })
  .then(data => {
    console.log('Step 2:', data);
    return fs.readFile('step3.txt', 'utf8');
  })
  .then(data => {
    console.log('Step 3:', data);
  })
  .catch(err => {
    // One .catch() handles errors from any step above
    console.error('Something failed:', err.message);
  });
```

Compare this to the nested callback version — the flat chain is much easier to follow.

---

## 4. Running Promises in Parallel

Use `Promise.all()` to run multiple async operations at the same time and wait for all of them:

```javascript
const p1 = fs.readFile('a.txt', 'utf8');
const p2 = fs.readFile('b.txt', 'utf8');
const p3 = fs.readFile('c.txt', 'utf8');

Promise.all([p1, p2, p3])
  .then(([dataA, dataB, dataC]) => {
    console.log(dataA, dataB, dataC);
  })
  .catch(err => {
    console.error('One of the files failed:', err.message);
  });
```

All three reads start simultaneously — this is much faster than reading them one by one.

---

## 5. Verification Exercise

This folder has `message.txt` and `app.js`.

Run the script:
```bash
node app.js
```

Then modify `app.js` to try reading a file that doesn't exist and confirm that the `.catch()` handles the error gracefully.
