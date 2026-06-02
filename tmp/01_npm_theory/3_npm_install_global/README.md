# Global Installation (`npm install -g`)

Global installation places a package inside a system-wide directory, making its binaries executable anywhere in your command-line environment rather than just the current project folder.

---

## Theory & Core Concepts

### 1. Global vs. Local Packages

* **Local Package**: Installed inside the current project's `node_modules` folder. It can only be imported or run within that specific project.
* **Global Package**: Installed inside a single central system-wide directory. Any executable binaries packaged with the library are symlinked into your system's global shell path (like `/usr/local/bin` or equivalent).

### 2. Common Use Cases

Global installation is primarily reserved for **Command-Line Interface (CLI) tools** and developer utilities that you want to run directly from your shell, such as:

* **`nodemon`**: A tool that automatically restarts node applications when file changes are detected.
* **`typescript`**: The TypeScript compiler (`tsc`).
* **`npm`**: The package manager itself can be updated globally.

---

## Commands and Usage

### Installing a Package Globally

To install a package globally, append the `-g` (or `--global`) flag:

```bash
npm install -g <package-name>
```
*(Example: `npm install -g nodemon`)*

### Finding Where Global Packages are Stored

To discover the directory where npm stores your global files, execute:

```bash
npm root -g
```

### Listing Global Packages

To see a tree of all globally installed tools:

```bash
npm list -g --depth=0
```

---

## Modern Alternative: `npx`

Rather than polluting your global environment or dealing with permission restrictions, Node.js provides **`npx`** (Node Package Execute). 

> [!TIP]
> `npx` allows you to download and execute command-line utilities on-the-fly without installing them globally or locally beforehand. For example, running `npx create-react-app my-app` fetches the latest version of the utility, runs it, and discards it when finished.

---

## Example Project

To see global tools and dynamic execution via `npx` in action, navigate to the `example-project` folder inside this directory.

First, change your directory to the example project:

```bash
cd 01_npm_theory/3_npm_install_global/example-project
```

Next, execute the script directly using Node:

```bash
npm start
```

Finally, execute dynamically using `npx`. Instead of installing `nodemon` globally, run it dynamically to watch files:

```bash
npx nodemon index.js
```

*(Make a small change to `index.js` and see how it automatically restarts without ever needing a manual global install!)*
