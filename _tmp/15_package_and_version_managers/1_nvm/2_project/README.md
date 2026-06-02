# 📦 Using .nvmrc with NVM

This project uses [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) to manage the Node.js version.

---

## 🔧 Required Node.js Version

See the `.nvmrc` file:

```bash
18.16.0
```

---

## 🚀 How to Use

1. Make sure you have NVM installed.  
   👉 https://github.com/nvm-sh/nvm#installing-and-updating

2. Run this in your terminal:

```bash
nvm use
```

This will:

- Read the .nvmrc file,
- Switch to Node.js version 18.16.0,
- Or install it if it’s missing:

```bash
nvm install
```
