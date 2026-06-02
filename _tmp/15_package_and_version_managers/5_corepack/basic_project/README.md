# 🧪 Basic Corepack Project

This is a minimal Node.js project that uses **Corepack** to manage Yarn or pnpm.

---

## 🚀 How to Use

### 1. Enable Corepack (Node ≥ 16.10)

```bash
corepack enable
```

---

### 2. Prepare the Package Manager

Choose either Yarn or pnpm:

```bash
corepack prepare yarn@stable --activate
# or
corepack prepare pnpm@latest --activate
```

---

### 3. Install Dependencies

```bash
yarn install
# or
pnpm install
```

---

### 4. Run the Script

```bash
yarn start
# or
pnpm start
```

---

## 📄 Files Included

| File           | Purpose                      |
| -------------- | ---------------------------- |
| `index.js`     | Main JavaScript entry point  |
| `package.json` | Defines scripts and metadata |

---

## 📝 Notes

- This project **requires Node.js v16.10+**
- Corepack avoids global installs for Yarn/pnpm
