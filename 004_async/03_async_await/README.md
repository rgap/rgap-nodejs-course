# 03_async_await: The Modern Way to Write Async Code

In this lesson, you will learn `async`/`await` — the cleanest syntax for working with Promises, making asynchronous code read like synchronous code.

---

## 1. What is async/await?

`async`/`await` is not a new async mechanism — it is **syntactic sugar on top of Promises**. Under the hood, everything is still a Promise; `async`/`await` just gives you a cleaner way to write it.

- **`async`** — marks a function as asynchronous. It always returns a Promise.
- **`await`** — pauses execution inside an `async` function until a Promise resolves, then returns its value.

> [!IMPORTANT]
> You can only use `await` inside a function marked with `async`.

---

## 2. Before and After

**With Promises:**
```javascript
function readAndLog() {
  return fs.readFile('message.txt', 'utf8')
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err.message);
    });
}
```

**With async/await:**
```javascript
async function readAndLog() {
  try {
    const data = await fs.readFile('message.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
}
```

Both do the exact same thing. The async/await version reads top-to-bottom like regular code.

---

## 3. Error Handling with try/catch

Instead of `.catch()`, you wrap `await` calls in a standard `try`/`catch` block:

```javascript
const fs = require('fs/promises');

async function main() {
  try {
    const data = await fs.readFile('message.txt', 'utf8');
    console.log('Contents:', data);
  } catch (err) {
    console.error('Failed:', err.message);
  }
}

main();
```

---

## 4. Sequential vs. Parallel

`await` pauses until the Promise resolves. If you `await` multiple operations in a row, they run **sequentially** — one after another:

```javascript
// Sequential — total time = time1 + time2
const a = await fs.readFile('a.txt', 'utf8');
const b = await fs.readFile('b.txt', 'utf8');
```

To run them **in parallel**, start all Promises first, then await them together:

```javascript
// Parallel — total time = max(time1, time2)
const [a, b] = await Promise.all([
  fs.readFile('a.txt', 'utf8'),
  fs.readFile('b.txt', 'utf8'),
]);
```

---

## 5. Top-Level await

In ES Modules (`"type": "module"` in `package.json`), you can use `await` at the top level without wrapping it in an `async` function:

```javascript
// Only works in ES Modules
const data = await fs.readFile('message.txt', 'utf8');
console.log(data);
```

In CommonJS files, you still need to wrap `await` in an `async` function.

---

## 6. Verification Exercise

Run the provided script:
```bash
node app.js
```

Expected output:
```
1. Starting...
3. File contents: Hello from the file system! ...
2. This runs synchronously before awaiting...
```

Wait — why does `2` print before `3`? Look carefully at where `main()` is called and where `await` pauses the function.
