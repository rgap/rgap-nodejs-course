# 01_command_line_args: Passing Arguments to Scripts

In this lesson, you will learn how to capture and use parameters passed to your Node.js scripts when running them from the command line.

---

## 1. What are Command Line Arguments?

When launching utility scripts, CLI tools, or starting backend servers, we often need to customize their behavior by sending input arguments directly from the shell.

For example, when running:
```bash
git commit -m "My commit message"
```
`-m` and `"My commit message"` are arguments passed to the `git` program.

In Node.js, we do this by adding arguments after the script filename:
```bash
node argv_demo.js Alice 25
```

---

## 2. Inspecting arguments: `process.argv`

All arguments passed to a Node.js process are stored in an array on the global process object: **`process.argv`** (argument vector).

If we run:
```bash
node argv_demo.js Alice 25
```

The `process.argv` array will contain:
1. **`process.argv[0]`**: The absolute file path to the Node.js executable running the script.
2. **`process.argv[1]`**: The absolute file path to the JavaScript file being executed.
3. **`process.argv[2]`**: The first user-provided argument (`'Alice'`).
4. **`process.argv[3]`**: The second user-provided argument (`'25'`).

### Why do index 0 and 1 exist?
The operating system needs to know *what* engine is running (Node.js) and *what* script is being fed into it. Node.js populates these two initial indices so you can trace execution.

---

## 3. Slicing User Arguments

Since we rarely need the Node executable or the file path, we extract only the user-provided arguments using JavaScript's `.slice()` method:

```javascript
// Remove the first two elements
const args = process.argv.slice(2);

console.log(args); // Output: ['Alice', '25']
```

---

## 4. Key Considerations

### A. All arguments are Strings
Any argument you pass in is captured as a **string**, even if it looks like a number. If you pass `25`, `process.argv[3]` is the string `"25"`. 
To perform math, you must parse it first:
```javascript
const age = parseInt(args[1], 10);
```

### B. Handling Multi-word Arguments
If an argument contains spaces, the terminal will split it into separate arguments unless you wrap it in quotes:
```bash
# Slices to ['John', 'Doe']
node argv_demo.js John Doe

# Slices to ['John Doe']
node argv_demo.js "John Doe"
```

---

## 5. Verification Exercise

Try running the demo script with various custom arguments in the terminal to inspect the output:

```bash
node argv_demo.js "Alice Smith" 30 --admin
```
