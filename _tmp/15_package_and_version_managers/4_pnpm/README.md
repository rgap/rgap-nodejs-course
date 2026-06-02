# ⚡ pnpm — Performant Node.js Package Manager

## 📜 What is `pnpm`?

`pnpm` is a fast, disk-efficient alternative to npm and Yarn, introduced in **2017**. It stands for "**Performant npm**" and was built to fix structural and performance issues in traditional package managers.

---

## 🚀 Key Differences from npm and Yarn

| Feature               | pnpm                                        | npm / Yarn                          |
| --------------------- | ------------------------------------------- | ----------------------------------- |
| 📂 Dependency storage | Uses a **global content-addressable store** | Copies everything into node_modules |
| 🔗 node_modules       | Uses **symlinks** to avoid duplication      | Physical nested folders             |
| 🧱 Project size       | Much smaller                                | Can become bloated                  |
| 📦 Install speed      | Very fast                                   | Slower (especially fresh installs)  |
| ✅ Integrity checks   | Built-in                                    | Not consistent across tools         |

---

## ⏳ Historical Context

- **2017**: `pnpm` introduced by Zoltan Kochan
- Inspired by Rust's `cargo` and deduplication techniques
- Gained traction in monorepos and large teams for:
  - Determinism
  - Speed
  - Disk savings

---

## ✅ Why Use `pnpm`?

- Saves **disk space** via symlinks and global cache
- Reproducible builds via `pnpm-lock.yaml`
- Compatibility with npm and Yarn projects
- Native support for **monorepos** (`pnpm workspaces`)

---

## 📁 Files Used

| File             | Description                             |
| ---------------- | --------------------------------------- |
| `package.json`   | Dependency definitions and scripts      |
| `pnpm-lock.yaml` | Exact install versions for all packages |
| `.npmrc`         | Used to opt-in: `package-manager=pnpm`  |

---

## 🔧 Common Commands

| Task               | Command                      |
| ------------------ | ---------------------------- |
| Initialize project | `pnpm init`                  |
| Install all deps   | `pnpm install`               |
| Add a dependency   | `pnpm add axios`             |
| Add dev dependency | `pnpm add eslint --save-dev` |
| Remove dependency  | `pnpm remove axios`          |
| Run a script       | `pnpm run start`             |
| Install globally   | `pnpm add -g nodemon`        |

---

## 🧪 Notes

- Requires **Node.js ≥ 16.14**
- Fully compatible with `.npmrc`, `.nvmrc`
- pnpm CLI is very similar to npm and Yarn

---

## 🛠️ How to Install pnpm

If you see an error like:

```bash
zsh: command not found: pnpm
```

it means pnpm is not installed yet. Here’s how to fix it:

### ✅ Option 1: Use Corepack (recommended for Node.js ≥ 16.13)

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

### ✅ Option 2: Install pnpm via npm

```bash
npm install -g pnpm
```

### ✅ Option 3: On macOS via Homebrew

```bash
brew install pnpm
```

> ⚠️ If you use `brew`, avoid installing Node at the same time to prevent version conflicts with nvm.

### ✅ Verify Installation

Run:

```bash
pnpm --version
```

You should see something like:

```
8.15.1
```

or whichever is the current version of pnpm.

---

## 📚 Resources

- [pnpm.io](https://pnpm.io/)
- [GitHub Repository](https://github.com/pnpm/pnpm)
