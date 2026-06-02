# Understanding `package.json`

The `package.json` file is the central manifest for a Node.js project. It hosts project metadata, script configurations, and maps dependency versions needed for your code.

---

## Theory & Core Concepts

### 1. What is `package.json`?

Every Node.js project requires a `package.json` at its root directory. This manifest acts as:

* A configuration record for your application.
* A descriptor of project metadata (name, license, author).
* An official list of dependencies, ensuring consistency across different environments (development, staging, production).

### 2. Key Fields in `package.json`

* **`name`**: The unique identifier of your application (must be lowercase, URL-friendly, and contain no spaces).
* **`version`**: The current semantic version of your project (e.g., `1.0.0`).
* **`main`**: The primary entry point file of your script or module (e.g., `index.js`).
* **`scripts`**: A dictionary specifying shell commands that can be run with `npm run <script-name>` (e.g., `start`, `test`, `build`).
* **`dependencies`**: Production-critical libraries required by your application to run (e.g., `express`, `pg`).
* **`devDependencies`**: Development-only libraries (e.g., test runners like `jest`, linters like `eslint`, compilers like `typescript`).
* **`license`**: The distribution license (e.g., `MIT`, `ISC`).

---

## Example `package.json` Manifest

```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "A sample backend project demonstrating package.json fields",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "jest": "^29.7.0",
    "nodemon": "^3.1.0"
  },
  "author": "Jane Doe <jane.doe@example.com>",
  "license": "MIT"
}
```

---

## Example Project

To see these package configuration fields and custom scripts in action, navigate to the `example-project` folder inside this directory.

First, change your directory to the example project:

```bash
cd 01_npm_theory/1_package_json/example-project
```

Next, install the dependencies:

```bash
npm install
```

Finally, you can run the custom scripts.

To run the application entry point (`app.js`):

```bash
npm start
```

To run the test suite hook:

```bash
npm test
```
