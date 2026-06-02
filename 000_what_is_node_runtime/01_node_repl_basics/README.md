# 002: Node.js REPL Basics

Sometimes you want to test a quick snippet of JavaScript code without having to create a physical `.js` file first. For this, Node.js provides a built-in interactive playground called the **REPL**.

---

## 1. What is a REPL?

REPL is an acronym that stands for:

1. **Read**: The environment reads the JavaScript code you type in.

2. **Eval**: The underlying JavaScript engine (V8) evaluates the expression to compute the result.

3. **Print**: The environment prints the result to your terminal screen.

4. **Loop**: The environment loops back to step 1 and waits for your next line of code.

---

## 2. Using the REPL

Let's try it out!

### Step 1: Start the REPL
Open your terminal, type `node` without any file names, and press `Enter`:

```bash
node
```

Your prompt will change to `>` (or show a welcome message), indicating that you are now inside the interactive Node.js REPL session.

### Step 2: Try Basic Commands
Type the following expressions one-by-line and press `Enter` after each:

```javascript
> 10 + 5
15

> let name = "Alice"
undefined

> `Hello, ${name}!`
'Hello, Alice!'
```

> [!NOTE]
> Declaring a variable like `let name = "Alice"` returns `undefined` because variable declarations themselves do not evaluate to a value that can be printed.

### Step 3: The Special Underscore (`_`) Variable
The REPL provides a special variable called `_` (underscore). It automatically stores the result of the **most recently evaluated expression**.

Try this:

```javascript
> 5 + 5
10

> _ * 2
20
```

### Step 4: Autocomplete
Type `fs.` (with the period) and press `Tab` twice. The REPL will show you all available methods and properties on the built-in File System module!

---

## 3. How to Exit the REPL

If you want to leave the REPL and return to your standard terminal environment, you have three options:

* Type `.exit` and press `Enter`.

* Press `Ctrl + D` on your keyboard.

* Press `Ctrl + C` twice on your keyboard.

---

## What's Next?

In the next lesson, **`003_node_global_object`**, we will explore the `global` object, which holds all of these global utilities and variables within a Node.js process!
