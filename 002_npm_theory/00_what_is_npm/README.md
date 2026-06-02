# 00_what_is_npm: Introduction to Node Package Manager (npm)

In this lesson, you will learn the fundamentals of **npm (Node Package Manager)**—the default package manager for the Node.js runtime environment. We will explore why package managers are essential, how npm is structured, and the difference between local and global package installations.

---

## 1. Life Before Package Managers

In the early days of web development, if you wanted to use a third-party library like jQuery, Underscore, or Bootstrap, you had to follow a manual, error-prone workflow:

1. Visit the library's website in your browser.
2. Download the compiled `.js` or `.css` files (often as a zip file).
3. Copy those files into a folder in your project (usually named `vendor` or `lib`).
4. Link the files in your HTML using `<script src="vendor/jquery.min.js"></script>`.
5. Repeat this process whenever a library had to be updated.

### The Problems:
* **Dependency Hell**: If Library A required Library B, you had to manually download both and load them in the correct order in your HTML.
* **No Version Control**: It was difficult to know exactly which version of a library was in your project.
* **Security & Bloat**: Tracking security updates was a manual task, and checking third-party binaries directly into Git repos bloated version control history.

Node.js solved this by introducing **npm** as its built-in package manager.

---

## 2. What is npm?

**npm** stands for **Node Package Manager**. It is actually composed of three distinct parts:

1. **The Registry**: A massive public database containing over two million open-source JavaScript packages. Developers from all over the world publish code here so anyone can use it.
2. **The Command Line Interface (CLI)**: The command `npm` that runs in your terminal. This is the client tool you use to download packages from the registry, manage local dependencies, and run scripts.
3. **The Website**: A search engine at [npmjs.com](https://www.npmjs.com/) where you can discover packages, view documentation, check statistics, and manage user accounts.

---

## 3. "Package" vs. "Module"

In the Node.js universe, people often use the terms **package** and **module** interchangeably, but they have distinct technical definitions:

| Concept | Definition | Example |
| :--- | :--- | :--- |
| **Module** | Any single file or folder containing JavaScript code that can be loaded using Node's module system. | A file named `utils.js` or a core Node module like `fs` or `path`. |
| **Package** | A folder containing JavaScript files and a **`package.json`** file that describes the project's metadata and dependencies. | `lodash`, `express`, or your own project folder. |

> [!NOTE]
> **What are `require()` and `import`?**
> They are special functions/keywords in JavaScript used to load external modules into your script. For example, `require('fs')` tells Node to load its built-in File System module. You will learn about these module systems in a dedicated upcoming section.

* **Key takeaway**: A package must contain a `package.json` file. A package can contain one or more modules, but a module does not need to be a package.

---

## 4. Local vs. Global Installations

When you install a package using the npm CLI, you can install it in two ways:

### A. Local Installation (Default)
When you run `npm install <package-name>`, npm downloads the package specifically for your current project.
* **Where does it go?**: It is saved inside a `node_modules` folder in the root directory of your project.
* **Usage**: You can load and use it in your code using `require('<package-name>')` or `import` (once we learn how module loading works).
* **Scope**: It is only accessible within this specific project.

### B. Global Installation
When you run `npm install -g <package-name>`, npm installs the package globally on your operating system.
* **Where does it go?**: A shared system folder managed by Node/npm.
* **Usage**: It makes command-line tools (binaries) available globally across your entire terminal system. For example, `npm install -g http-server` (a utility that runs a local static web server) lets you run the `http-server` command in any directory to share files.
* **Scope**: Accessible everywhere on your machine.
* **Modern Alternative (`npx`)**: Today, installing tools globally is often discouraged. Instead, we use **`npx`** (Node Package Executable) to run command-line tools on-the-fly without permanently installing them globally.

---

## 5. Verification Exercise

Let's inspect the `npm` CLI on your machine.

### Step 1: Check your npm version
Open your terminal and type:
```bash
npm -v
```
You should see a version number output (e.g., `10.2.4`). If it prints successfully, npm is installed and configured in your path.

### Step 2: Run the Demonstration Script
We have provided a simple script `npm_info.js` in this directory. It will display your basic Node.js environment information and show you the npm commands you can use to inspect your setup. Run it using:

```bash
node npm_info.js
```

Observe the output showing your Node version, platform, and the terminal commands you can use to check your npm version, registry, and global root path.
