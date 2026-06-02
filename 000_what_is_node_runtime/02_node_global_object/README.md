# 003: The Node.js Global Object

In JavaScript, there is always a top-level global object. In this lesson, we will look at Node's global object, how variables are scoped inside Node files, and how this differs from web browsers.

---

## 1. What is the Global Object?

Any variable, function, or object that is accessible anywhere in your code without needing to import it is part of the global scope. The environment stores these values on a single **Global Object**.

* **In the Browser**: The global object is `window`. Anything you attach to `window` can be accessed from any script on the page.

* **In Node.js**: The global object is named `global`. 

* **Cross-Environment Standard**: Modern JavaScript introduced `globalThis`, which acts as a standard pointer to the global object whether your code is running in a browser (`window`), a worker (`self`), or Node.js (`global`).

---

## 2. Global vs. Module Scope in Node.js

There is a major structural difference in how variables are scoped between web browsers and Node.js:

### Browser Behavior
If you create a script file in a browser and declare a variable using `var` at the top level:

```javascript
// Browser
var username = "Alice";
console.log(window.username); // Prints: "Alice"
```

The variable automatically pollutes the global namespace.

### Node.js Behavior
In Node.js, every JavaScript file is treated as its own isolated capsule called a **module**. 

If you declare a variable at the top level of a file in Node.js (even with `var`), it is scoped **locally to that module (file)**. It is **not** added to the `global` object.

```javascript
// Node.js
var username = "Alice";
console.log(global.username); // Prints: undefined
```

---

## 3. The Hands-on Exercise

We have created an `index.js` file in this folder to demonstrate these concepts.

### Step 1: Run the File
Execute the script using Node.js:

```bash
node index.js
```

### Step 2: Observe the Output
You should see:

```text
Accessed globally without prefix:  NODE_COURSE_KEY_999
Accessed with global prefix:      NODE_COURSE_KEY_999
Are global.setTimeout and setTimeout identical? true
Are global.console and console identical? true
Is localScopedVariable attached to global? false
```

> [!TIP]
> While you *can* attach variables to `global` (e.g., `global.secret = "xyz"`), doing so is generally considered a bad practice in Node.js development because it can lead to name collisions and makes your code harder to test. Instead, use modules to export and import values (which we will learn in later lessons).

---

## What's Next?

In the next lesson, **`004_node_without_browser_dom`**, we will see what happens when we try to run standard browser UI commands (like accessing the DOM or alert boxes) inside Node.js!
