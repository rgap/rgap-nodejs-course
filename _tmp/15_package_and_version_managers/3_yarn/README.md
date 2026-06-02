# ⚡ Yarn — Fast, Reliable JavaScript Package Manager

## 📜 What is Yarn?

Yarn is an alternative JavaScript package manager developed by Facebook and launched in 2016. It was created in response to performance and consistency problems developers were experiencing with `npm`.

Yarn uses the same `package.json` as npm, but introduces:

- A **lockfile** (`yarn.lock`) for deterministic installs
- **Offline caching**
- **Faster and more secure installs**
- **Workspaces** to support monorepos

---

## ⏳ Historical Context

- 📅 **2016** — Yarn v1 released by Facebook
- 🔄 Designed to work with the npm registry
- 🧱 Became very popular in large projects needing reproducible builds
- 🧪 **Yarn v2 (Berry)** released later with plug'n'play architecture, but not backward compatible with v1
- Most tutorials and projects today still refer to **Yarn v1**

---

## ✅ Why Use Yarn?

| Feature                | Benefit                                     |
| ---------------------- | ------------------------------------------- |
| `yarn.lock`            | Exact dependency tree is reproducible       |
| Offline cache          | Faster reinstalls from local cache          |
| Checksum verification  | Ensures package integrity and security      |
| Deterministic installs | Same install result every time              |
| Workspace support      | Native monorepo support (`yarn workspaces`) |

---

## 🧠 Yarn vs npm (v1)

- Yarn introduced `yarn.lock` before npm had `package-lock.json`
- It improved install speeds via parallelization and caching
- Yarn added `yarn add`, `yarn remove`, `yarn upgrade` as simpler commands

---

## 🚀 Common Commands

| Task                     | Yarn v1 Command         |
| ------------------------ | ----------------------- |
| Initialize project       | `yarn init -y`          |
| Install all dependencies | `yarn install`          |
| Add a dependency         | `yarn add lodash`       |
| Add a dev dependency     | `yarn add --dev eslint` |
| Remove a dependency      | `yarn remove lodash`    |
| Upgrade a dependency     | `yarn upgrade axios`    |
| Run a defined script     | `yarn start`            |
| Check outdated packages  | `yarn outdated`         |

---

## 🧪 Notes

- Yarn **can be used alongside npm**, but it's best to pick one per project.
- Yarn still relies on the npm registry (by default).
- Yarn is compatible with `.npmrc` and `.nvmrc` files.

---

## 🛠️ How to Install Yarn

If you see an error like:

```bash
zsh: command not found: yarn
```

it means Yarn is not installed yet. Here’s how to fix it:

### ✅ Option 1: Use Corepack (recommended for Node.js ≥ 16.10)

```bash
corepack enable
corepack prepare yarn@stable --activate
```

### ✅ Option 2: Install Yarn via npm

```bash
npm install -g yarn
```

### ✅ Option 3: On macOS via Homebrew

```bash
brew install yarn
```

> ⚠️ If you use `brew`, avoid installing Node at the same time to prevent version conflicts with nvm.

### ✅ Verify Installation

Run:

```bash
yarn --version
```

You should see something like:

```
1.22.19
```

or a 3.x version if you're using Yarn Berry (v2+).

---

## 📚 References

- [Yarn v1 Docs](https://classic.yarnpkg.com/lang/en/)
- [Yarn GitHub](https://github.com/yarnpkg/yarn)
- [Why Yarn?](https://yarnpkg.com/features)
