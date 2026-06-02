# 03_dependencies: Production Dependencies

In this lesson, we will focus on **`dependencies`** (often referred to as production dependencies). You will learn how to install third-party code libraries and how Node.js integrates them into your application.

---

## 1. What are Dependencies?

A **dependency** is a library or framework of pre-written code that your application relies on to function correctly in production. 

For example, if your code needs to parse incoming HTTP request bodies, build a web server, or manipulate complex date structures, instead of writing everything from scratch, you install a package.

---

## 2. Installing a Dependency

To install a dependency locally in your project, use the npm CLI command:

```bash
npm install <package-name>
```
*(or the shorthand `npm i <package-name>`)*

For example, to install a fun utility library like **`figlet`** (used to turn text into ASCII art):
```bash
npm install figlet
```

### What happens when you run this command?
Under the hood, npm performs four actions:
1. **Fetch**: Connects to the public registry, resolves dependencies, and downloads the package files.
2. **Write files**: Extracts the files into a directory called **`node_modules/figlet`** at the root of your project.
3. **Register**: Adds `"figlet": "^1.8.0"` (or the latest version) under the **`"dependencies"`** key of your `package.json` file.
4. **Lock**: Creates or updates `package-lock.json` with the exact version and signature of the installed code.

---

## 3. Importing and Resolving Local Packages

Once a package is installed in `node_modules`, you can load it in your code using Node's standard module systems.

In Node's default module environment, you import it using `require()`:
```javascript
const figlet = require('figlet');
const art = figlet.textSync('Hello NPM!');
console.log(art);
```

### How Node.js resolves the path:
When you write `require('figlet')` (passing a plain package name rather than a relative path like `'./figlet'`), Node.js uses its **module resolution algorithm**:
1. It automatically looks inside a folder named `node_modules` in the current directory.
2. If it finds `node_modules/figlet`, it reads the package's configuration and loads the entry file.
3. If not found, it traverses up the parent directories (e.g. `../node_modules`, `../../node_modules`) searching for the package.

---

## 4. Verification Exercise

We have provided a script `app.js` in this folder that uses the `figlet` package.

To see dependencies in action:
1. Run the script **before** installing the package:
   ```bash
   node app.js
   ```
   *Notice the `Error: Cannot find module 'figlet'`. This is Node's native error telling you the dependency is missing!*

2. Now, install the dependency from the npm registry:
   ```bash
   npm install figlet
   ```

3. Run the script again:
   ```bash
   node app.js
   ```
   *Success! You should see big ASCII art text printed in the terminal.*
