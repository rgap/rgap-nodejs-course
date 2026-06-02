# 02_npm_scripts: Task Automation with Scripts

In this lesson, we will focus on the **`scripts`** field of `package.json`. You will learn how npm scripts allow you to automate tasks and run CLI tools installed locally in your project.

---

## 1. What are NPM Scripts?

NPM scripts are predefined command-line shortcuts configured inside the `scripts` object of your `package.json` file. 

Instead of typing long, complex commands in your terminal, you can define a short alias. For example:

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

---

## 2. Standard vs. Custom Scripts

NPM divides scripts into two categories:

### A. Standard Lifecycle Scripts
NPM has built-in support for standard lifecycle tasks. These can be run directly using:
```bash
npm <script-name>
```
* **`npm start`**: Runs the command mapped to the `"start"` script. (Commonly used to start your production application).
* **`npm test`**: Runs the command mapped to the `"test"` script. (Commonly used to run test suites).

### B. Custom Scripts
For any other script name (such as `"dev"`, `"lint"`, `"build"`, or `"db:migrate"`), you **must** prefix the script name with `run`:
```bash
npm run <script-name>
```
For example, if you have a script named `"dev"`, running `npm dev` will fail; you must run `npm run dev`.

## 3. Running Custom Commands

An npm script can run any command you would normally type directly into your terminal. This includes running a node file, writing messages, or cleaning up folder directories.

For example, you could define a script to output a greeting:
```json
{
  "scripts": {
    "hello": "echo 'Hello from NPM scripts!'"
  }
}
```
You would execute it in the terminal using:
```bash
npm run hello
```

---

## 4. Verification Exercise

We have provided a `package.json` file and an `app.js` file in this folder to demonstrate how npm scripts are used in the real world. 

To see it in action:
1. Run the standard start script:
   ```bash
   npm start
   ```
   *Notice how you don't need to type `run` for standard scripts!*

2. Run the custom greeting script:
   ```bash
   npm run say-hi
   ```
   *Notice how you **must** use the `run` command for custom script names!*
