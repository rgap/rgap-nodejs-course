# 🌀 Node Version Manager (nvm)

## 📜 What is `nvm`?

`nvm` (Node Version Manager) is a command-line tool that lets you **install**, **manage**, and **switch** between different versions of Node.js on your system.

> It works by manipulating environment variables and shell initialization files, allowing projects to be pinned to specific versions of Node.js.

---

## 🧠 Why Use `nvm`?

| Problem Without `nvm`                      | What `nvm` Solves                             |
| ------------------------------------------ | --------------------------------------------- |
| You install Node.js globally via a package | Different projects require different versions |
| System-wide updates break older projects   | You can isolate versions per project          |
| CI/CD pipelines fail on version mismatch   | You can replicate specific versions easily    |

---

## ⏳ Historical Context

- **Released in 2011** as a way to manage Node.js versions locally without needing root access.
- It became especially popular after npm and Node.js started evolving independently, leading to version conflicts.
- Alternatives emerged later (`n`, `asdf`, `volta`), but `nvm` remains the most widely used for _shell-based workflows_.

---

## ✅ Key Features

- Install and switch between any Node.js version
- Use `.nvmrc` files to pin project-specific versions
- No root access required
- Works on Linux, macOS, WSL

---

## 🚫 Limitations

- **Does not work on Windows natively** (use `nvm-windows` instead)
- Shell-specific: works best with `bash`, `zsh`, or `fish`
- Requires restarting the shell or sourcing `.nvm/nvm.sh`

---

## 💡 When to Use

- You work on multiple projects using **different versions of Node.js**
- You want **easy upgrades/downgrades** of Node
- You're using **CI environments** that rely on version switching

---

## 📘 Commands Cheat Sheet

| Task                           | Command                     |
| ------------------------------ | --------------------------- |
| Install latest LTS version     | `nvm install --lts`         |
| Install specific version       | `nvm install 18.17.1`       |
| List installed versions        | `nvm ls`                    |
| List available versions        | `nvm ls-remote`             |
| Use specific version           | `nvm use 18.17.1`           |
| Set default version            | `nvm alias default 18.17.1` |
| Check current version          | `node -v`                   |
| Use `.nvmrc` from project root | `nvm use`                   |

---

## 📄 See Also

- [nvm GitHub Repo](https://github.com/nvm-sh/nvm)
- [nvm-windows](https://github.com/coreybutler/nvm-windows) (for Windows)
