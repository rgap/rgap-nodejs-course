# 00_what_is_async: Synchronous vs. Asynchronous Code

In this lesson, you will learn what asynchronous code means, why Node.js is built around it, and why it matters for building fast applications.

---

## 1. Synchronous Code

In **synchronous** (sync) code, each line executes one at a time, in order. The next line cannot run until the current one finishes.

```javascript
console.log('Start');
const result = doSomethingThatTakesTime(); // blocks here
console.log('Result:', result);
console.log('End');
```

If `doSomethingThatTakesTime()` takes 3 seconds, **nothing else in your program can run during those 3 seconds**. The program is blocked.

---

## 2. Why Blocking Is a Problem

Imagine a web server receiving 1,000 simultaneous requests, and each request needs to read a file from disk.

In a **blocking** model:
- Request 1 starts → reads file → waits 50ms → responds
- Request 2 starts → reads file → waits 50ms → responds
- ... and so on, one at a time

Total time for 1,000 requests: **1,000 × 50ms = 50 seconds**.

In a **non-blocking** model:
- All 1,000 read operations are started simultaneously
- As each one completes, its response is sent
- Total time: ~50ms regardless of how many requests

---

## 3. Asynchronous Code

In **asynchronous** (async) code, a long-running operation is started and then your code moves on immediately. When the operation finishes, a **callback** (or Promise) is invoked to handle the result.

```javascript
console.log('Start');

setTimeout(() => {
  console.log('Timer fired after 1 second');
}, 1000);

console.log('End');
```

Output:
```
Start
End
Timer fired after 1 second
```

`End` prints **before** the timer fires because `setTimeout` does not block — it schedules the callback and returns immediately.

---

## 4. The Event Loop

Node.js uses a single thread and an **event loop** to handle asynchronous operations.

The event loop works roughly like this:
1. Execute your JavaScript code from top to bottom
2. When an async operation is started (file read, timer, HTTP request), hand it off to the OS/system
3. Continue running other JavaScript
4. When the OS signals that the async operation is done, put the callback in the queue
5. When the current code finishes, pick up the next callback from the queue and run it

This is why Node.js can handle thousands of concurrent I/O operations with a single thread.

---

## 5. Three Approaches to Async Code

Over the history of Node.js, three patterns have emerged for handling async operations:

| Pattern | Era | Style |
| :--- | :--- | :--- |
| **Callbacks** | Original Node.js | Functions passed as arguments |
| **Promises** | ES6 (2015) | Chainable `.then()` / `.catch()` |
| **async/await** | ES8 (2017) | Synchronous-looking syntax on top of Promises |

> [!NOTE]
> Modern Node.js code overwhelmingly uses **async/await**. Callbacks still appear in older APIs and libraries. Promises are the foundation that async/await is built on.

The next three lessons cover each pattern in turn.
