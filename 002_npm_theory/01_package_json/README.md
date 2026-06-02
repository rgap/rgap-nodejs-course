# 01_package_json: The Project Manifest

In this lesson, we will explore the **`package.json`** file. Every Node.js application or library relies on this manifest file to describe its metadata, identity, and target setup.

---

## 1. What is `package.json`?

The `package.json` file is a standard JSON format file located in the root of your Node.js project. Think of it as the project's **manifest** or **identity card**.

It serves as the configuration hub for:
1. **Metadata**: Tells developers and npm who wrote the project, what its name is, its version, and how it is licensed.
2. **Setup Configurations**: References the entry point script and flags whether the code is open-source or proprietary.

---

## 2. Core Metadata Fields in `package.json`

A basic `package.json` file contains several top-level properties:

```json
{
  "name": "my-awesome-app",
  "version": "1.0.0",
  "description": "A simple demonstration app",
  "main": "index.js",
  "private": true,
  "license": "MIT"
}
```

Let's examine these fields in detail:

### A. Identification Metadata
* **`name`**: The name of your package. It must be **all lowercase**, contain **no spaces**, be **URL-friendly** (since it will be part of the package's URL on the npm registry), and be **unique** if you plan to publish it.
* **`version`**: The current version of your project, following Semantic Versioning rules (e.g., `1.0.0`).
* **`private`**: If set to `true`, npm will refuse to publish the package to the registry. This is a crucial safety feature to prevent accidental exposure of private company databases or proprietary tools.
* **`license`**: Specifies how other developers are allowed to use your package (e.g., `"MIT"`, `"ISC"`, `"Apache-2.0"`, or `"UNLICENSED"` for private packages).

### B. Entry Point
* **`main`**: The path to the primary JavaScript file of the project. If another project installs your package, the file pointed to by `main` is the primary file loaded by Node.js when referencing your package. The default is `index.js`.

---

## 3. How to Create a `package.json`

You do not need to write this file manually. The npm CLI has built-in tools to guide you.

### Interactive Mode: `npm init`
Run this command to start an interactive CLI wizard that asks you a series of questions:
```bash
npm init
```
It will prompt you for the package name, version, description, entry point, test command, git repository, keywords, author, and license, then generate the file based on your answers.

### Default Mode: `npm init -y`
If you want to skip the questions and immediately create a `package.json` with sensible defaults:
```bash
npm init -y
```
*(or `npm init --yes`)*.

---

## 4. Verification Exercise

Let's write a JavaScript script that dynamically reads and parses a mock `package.json` representation.

Run the demonstration script in this folder:
```bash
# If you are in the workspace root directory:
node package_loader.js

# Or, if you have navigated inside this folder:
node package_loader.js
```
The script will read a custom manifest representation, extract details, and print a formatted summary.
