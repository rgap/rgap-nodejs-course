# 04_devDependencies: Development Tooling

In this lesson, we will focus on **`devDependencies`** (development dependencies). You will learn how to install utilities that are only needed while writing and testing code, and we will define the core tools used in JavaScript development.

---

## 1. What are DevDependencies?

A **development dependency** is a library or utility tool that is required *only* while you are actively writing, styling, or testing code. These tools are **not** needed when the application runs in production on a server.

### Why split dependencies?
In production environments (like hosting servers or cloud containers), we want the deployment package to be as small and secure as possible. 

By separating our tools into `devDependencies`, we can run:
```bash
npm install --production
```
This tells npm to skip installing development tools, which saves significant bandwidth, disk space, and deployment time.

---

## 2. Core JavaScript Development Tools

Before configuring scripts to run developer tools, we must understand what they do:

### A. Code Linters (e.g., **`ESLint`**)
* **What it does**: A linter statically analyzes your source code without executing it. It checks for syntax errors, anti-patterns, code formatting consistency, and potential bugs (like unused variables or undeclared functions).
* **Why use it**: Catching syntax bugs in the editor is much faster than waiting for the code to fail during execution.

### B. Test Runners (e.g., **`Jest`** or **`Mocha`**)
* **What it does**: A testing framework that automatically executes tests you write to verify that your business logic works correctly.
* **Why use it**: Instead of manually verifying that your code still works after every edit, you run a command to execute all your unit tests in seconds.

### C. Auto-Reloaders (e.g., **`Nodemon`**)
* **What it does**: A utility that monitors your project files. Whenever you save a file change, Nodemon automatically kills the running Node process and starts a fresh one.
* **Why use it**: Without it, you have to manually switch to your terminal, press `Ctrl+C` to terminate your app, and type `node index.js` again to see your changes.

---

## 3. Installing a DevDependency

To install a package specifically as a development dependency, use the `--save-dev` flag (or the shorthand `-D`):

```bash
npm install <package-name> --save-dev
```
*(or `npm i -D <package-name>`)*

For example, to install Nodemon as a development dependency:
```bash
npm install nodemon --save-dev
```

### What happens in `package.json`?
Instead of adding the package to the `"dependencies"` object, npm writes it to the **`"devDependencies"`** object:

```json
{
  "dependencies": {
    "uuid": "^10.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}
```

---

## 4. Running Local Dev Tools (The PATH Trick)

Now that you have installed development tools like **Nodemon**, how do you execute them?

Normally, if you install a command-line tool locally in your project, npm extracts its executable files into the folder:
```bash
./node_modules/.bin/
```
If you attempt to run the command directly in your terminal, the OS will fail with a "command not found" error because it doesn't know where to look:
```bash
# This fails (unless installed globally):
nodemon server.js

# This works but is long and tedious:
./node_modules/.bin/nodemon server.js
```

### The Solution:
To run these easily, we define them in our `package.json` **scripts**:
```json
{
  "scripts": {
    "dev": "nodemon server.js",
    "test": "jest --verbose",
    "lint": "eslint ."
  }
}
```
Whenever you execute `npm run <script-name>` (e.g. `npm run dev`), npm temporarily appends the local `./node_modules/.bin` directory to the system environment search path (**`PATH`**) of the running process. 

This enables the terminal process to automatically locate and execute the local installations of `nodemon`, `jest`, and `eslint` as if they were globally installed!

---

## 5. Verification Exercise

We have provided a `package.json` and an `app.js` in this folder that requires `nodemon` as a devDependency.

To see devDependencies in action:
1. Run the script **before** installing the package:
   ```bash
   node app.js
   ```
   *Notice the `Error: Cannot find module 'nodemon'`. The devDependency is missing!*

2. Install `nodemon` as a devDependency:
   ```bash
   npm install nodemon --save-dev
   ```
   *Notice npm adds it under `"devDependencies"` in `package.json`, not `"dependencies"`.*

3. Run the script again:
   ```bash
   node app.js
   ```
   *Success! nodemon is found.*
