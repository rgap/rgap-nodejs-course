# ⚔️ Yarn vs npm — Comparison

This table compares Yarn v1 with npm (especially versions 5+), highlighting the similarities, differences, and strengths of each package manager.

| Feature                      | Yarn v1                            | npm (v5+)                         |
|------------------------------|-------------------------------------|-----------------------------------|
| 🔒 Lockfile Support          | ✅ `yarn.lock`                      | ✅ `package-lock.json`            |
| ⚡ Install Speed             | Faster (parallel, cached)          | Improved (but sequential)        |
| 🌐 Registry Used             | npm registry (same as npm)         | npm registry                      |
| 📦 Install All Dependencies  | `yarn install`                     | `npm install`                    |
| ➕ Add Package               | `yarn add <pkg>`                   | `npm install <pkg>`              |
| ➖ Remove Package            | `yarn remove <pkg>`                | `npm uninstall <pkg>`            |
| 🔁 Upgrade Package           | `yarn upgrade <pkg>`               | `npm update <pkg>`               |
| 📄 Scripts                   | `yarn run <script>` or `yarn <script>` | `npm run <script>`            |
| 🔍 Outdated Check            | `yarn outdated`                    | `npm outdated`                   |
| 🧰 Monorepo Workspaces       | ✅ Native with `workspaces`         | ✅ As of npm v7+                  |
| 📁 Offline Install Support   | ✅ Built-in                        | ❌ (Some support via `npm ci`)    |
| 🧪 Checksum Verification     | ✅ Yes                             | ❌ Not by default                 |
| 📦 Plug'n'Play (Yarn 2+)     | ✅ Optional                        | ❌ Not supported                  |
| ⏱️ Default Parallel Installs | ✅ Yes                             | ❌ No (sequential)                |
| 🛠️ Used in CI/CD             | ✅ Widely adopted in large projects| ✅ Default with Node.js           |

---

## 📝 Summary

- Yarn v1 became popular for **speed**, **determinism**, and **caching**.
- npm caught up in later versions (v7+) with lockfiles and workspaces.
- Yarn remains a strong choice for **monorepos**, **offline use**, and legacy projects.