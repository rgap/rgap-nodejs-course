# 🧶 Basic Yarn Project

This is a minimal Node.js project that uses **Yarn** as its package manager.

---

## 🚀 How to Run This Project

### 1. 📦 Install Dependencies

```bash
yarn install
```

_(No dependencies yet, but this creates `yarn.lock` and `node_modules/`)_

---

### 2. ▶️ Run the Project

```bash
yarn start
```

This runs the `index.js` file, as defined in `package.json`.

---

### 3. 🧪 Run the Test Script

```bash
yarn test
```

It just prints a placeholder message.

---

### 4. ➕ Add a Package

```bash
yarn add <package-name>
```

Example:

```bash
yarn add lodash
```

---

### 5. ➕ Add a Dev Dependency

```bash
yarn add --dev <package-name>
```

Example:

```bash
yarn add --dev eslint
```

---

### 6. 🗑 Remove a Package

```bash
yarn remove <package-name>
```

---

## 📄 Project Files

| File           | Purpose                             |
| -------------- | ----------------------------------- |
| `index.js`     | Main JavaScript file                |
| `package.json` | Project metadata and scripts        |
| `yarn.lock`    | Lockfile for deterministic installs |
| `.gitignore`   | Ignore `node_modules/`, etc.        |

---

### 📝 Notes

- Yarn does **not use** `package-lock.json` (that's for npm).
- Yarn is faster and uses a different caching strategy than npm.
