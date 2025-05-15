# 💡 Basic pnpm Project

This is a minimal Node.js project that uses **pnpm** as its package manager.

---

## 🚀 How to Run This Project

### 1. 📦 Install Dependencies

```bash
pnpm install
```

_(No dependencies yet, but this creates `pnpm-lock.yaml` and `node_modules/`)_

---

### 2. ▶️ Run the Project

```bash
pnpm start
```

This runs the `index.js` file, as defined in `package.json`.

---

### 3. 🧪 Run the Test Script

```bash
pnpm test
```

It just prints a placeholder message.

---

### 4. ➕ Add a Package

```bash
pnpm add <package-name>
```

Example:

```bash
pnpm add lodash
```

---

### 5. ➕ Add a Dev Dependency

```bash
pnpm add -D <package-name>
```

Example:

```bash
pnpm add -D eslint
```

---

### 6. 🗑 Remove a Package

```bash
pnpm remove <package-name>
```

---

## 📄 Project Files

| File             | Purpose                             |
| ---------------- | ----------------------------------- |
| `index.js`       | Main JavaScript file                |
| `package.json`   | Project metadata and scripts        |
| `pnpm-lock.yaml` | Lockfile for deterministic installs |
| `.gitignore`     | Ignore `node_modules/`, etc.        |

---

### 📝 Notes

- pnpm does **not use** `package-lock.json` or `yarn.lock`.
- pnpm is known for being faster and more space-efficient than both npm and yarn.
