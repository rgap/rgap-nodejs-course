# 📦 Basic NPM Project

This is a minimal Node.js project that uses `npm` as its package manager.

---

## 🚀 How to Run This Project

### 1. 📦 Install Dependencies

```bash
npm install
```

_(No dependencies yet, but this creates `package-lock.json` and `node_modules/`)_

---

### 2. ▶️ Run the Project

```bash
npm start
```

This runs the `index.js` file, as defined in `package.json`.

---

### 3. 🧪 Run the Test Script

```bash
npm test
```

It just prints a placeholder message.

---

### 4. ➕ Add a Package

```bash
npm install <package-name>
```

Example:

```bash
npm install lodash
```

---

### 5. ➕ Add a Dev Dependency

```bash
npm install --save-dev <package-name>
```

Example:

```bash
npm install --save-dev eslint
```

---

### 6. 🗑 Remove a Package

```bash
npm uninstall <package-name>
```

---

## 📜 Scripts

- `npm start` – runs the main file
- `npm test` – placeholder test script

---

## ⚙️ Configuration

Includes:

- `.npmrc` for version and logging control
- `.gitignore` to exclude `node_modules`

> Created as a clean starting point for Node.js apps using npm.
