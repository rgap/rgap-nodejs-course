# 📦 npm — Node Package Manager

## 📜 What is `npm`?

`npm` is the **default package manager** for Node.js. It lets you:

- Install packages (open-source libraries or tools)
- Manage project dependencies
- Run project-specific scripts (`npm run`)
- Publish your own packages to the npm registry

It was introduced in **2010**, one year after Node.js, and quickly became the world's largest software registry.

---

## 🧠 Why Use `npm`?

| Benefit                     | Explanation                                           |
| --------------------------- | ----------------------------------------------------- |
| 📦 Install dependencies     | Easily add external libraries to your project         |
| 🔒 Lockfile support         | Ensure consistent versions via `package-lock.json`    |
| 🔁 Local vs global installs | Isolate project tools or make them globally available |
| 🏃 Run lifecycle scripts    | Use `npm run` to automate build/test/start steps      |
| 🌐 Huge ecosystem           | Access 2M+ open-source packages via the npm registry  |

---

## ⏳ Historical Context

- **2010** — npm is created by [Isaac Z. Schlueter](https://github.com/isaacs)
- **2017** — `package-lock.json` introduced for reproducible installs
- **2022+** — Alternatives like `yarn`, `pnpm`, and `bun` gain popularity, but npm remains dominant

---

## 📁 Key Files

| File                | Purpose                                           |
| ------------------- | ------------------------------------------------- |
| `package.json`      | Declares dependencies, scripts, project info      |
| `package-lock.json` | Ensures exact versions are installed              |
| `node_modules/`     | Directory where packages are physically installed |

---

## 🚀 Basic Workflow

1. ✅ Initialize a project:

   ```bash
   npm init -y
   ```

2. 📦 Install a package (e.g. `lodash`):

   ```bash
   npm install lodash
   ```

3. 📄 Add a script:
   Inside `package.json`:

   ```json
   "scripts": {
     "start": "node index.js"
   }
   ```

4. 🏃 Run the script:

   ```bash
   npm run start
   ```

5. 🔧 Install dev dependencies:

   ```bash
   npm install eslint --save-dev
   ```

6. 🌎 Install packages globally (optional):
   ```bash
   npm install -g nodemon
   ```

---

## 📝 Common Commands

| Task                     | Command                       |
| ------------------------ | ----------------------------- |
| Install all dependencies | `npm install`                 |
| Add a dependency         | `npm install axios`           |
| Add a dev dependency     | `npm install jest --save-dev` |
| Remove a dependency      | `npm uninstall axios`         |
| Update packages          | `npm update`                  |
| Check outdated versions  | `npm outdated`                |
| Run a defined script     | `npm run <script-name>`       |
| Publish a package        | `npm publish`                 |

---

## 🔒 About `package-lock.json`

- Introduced in `npm@5` (2017)
- Ensures that every environment installs the **same dependency tree**
- Automatically created and updated with `npm install`

---

## 📎 Notes

- `npm` works with the **npm registry**, hosted at [https://www.npmjs.com](https://www.npmjs.com)
- Packages can be scoped (`@my-org/package-name`)
- Version ranges (e.g. `^1.2.3`) follow **semantic versioning (semver)**

---

## 🛠️ How to Install npm

If you see an error like:

```bash
zsh: command not found: npm
```

it means Node.js (and thus npm) is not installed yet. Here's how to fix that:

### ✅ Option 1: Install via Node.js official website

- Go to: [https://nodejs.org/](https://nodejs.org/)
- Download the LTS version (recommended for most users)
- This automatically installs `npm` along with Node.js

### ✅ Option 2: Install via Node Version Manager (nvm)

If you prefer flexible control over Node versions:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# Restart terminal, then:
nvm install --lts
nvm use --lts
```

> 🧠 Tip: After installing via `nvm`, you get `npm` automatically.

### ✅ Verify Installation

Run:

```bash
npm --version
```

You should see output like:

```
10.5.0
```

Or similar, depending on your installed version.

---

## 📚 References

- [npm Official Docs](https://docs.npmjs.com/)
- [npm Registry](https://www.npmjs.com/)
