/**
 * 🧠 THEORY: process.cwd()
 *
 * `process.cwd()` stands for "current working directory". It returns the absolute path
 * of the directory from which the Node.js process was **invoked** (i.e., where `node yourScript.js`
 * was executed). This is **not necessarily** the same as `__dirname`, which refers to the
 * directory containing the currently executing script file.
 *
 * ✅ Example:
 *   If you are in `/Users/rgap/project` and run `node scripts/util.js`,
 *   - process.cwd() = '/Users/rgap/project'
 *   - __dirname = '/Users/rgap/project/scripts'
 *
 * 🔍 This makes `process.cwd()` particularly useful when writing CLI tools, file explorers,
 * or scripts that need to work relative to where the user is located, rather than
 * where the script itself resides.
 *
 * 🛠️ Real-world Use Case:
 *   - Many bundlers (Webpack, Vite), testing tools, and linters use this to locate configs.
 *   - Useful for reading config files or locating assets in CLI tools.
 */
console.log("📂 Current working directory:", process.cwd());
