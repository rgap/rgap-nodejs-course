# 🧰 Package and Version Managers

JavaScript has grown from a browser-only scripting language into one of the most important platforms for both client-side and server-side development. This growth demanded powerful tools for managing:

- **Packages** (third-party libraries)
- **Versions** (different Node.js runtimes)
- **Scripts** (commands like build, start, test)

This folder focuses on **package and version managers** only: tools like `npm`, `nvm`, `yarn`, `pnpm`, `corepack`, and `npx`.

## 📜 Historical Background

### 🌐 Before Package Managers

In the early 2000s:

- Developers downloaded `.js` files manually (e.g. jQuery, Moment.js).
- Libraries were copied into a `lib/` or `vendor/` folder.
- There was **no central registry**, **no dependency tracking**, and **no lockfiles**.
- Version mismatches and duplication were common.

---

## 📦 What Is a Package Manager?

A **package manager** is a tool that automates:

- Installing packages and their dependencies
- Tracking versions
- Managing updates
- Running project-specific scripts (`build`, `test`, etc.)

JavaScript package managers manage a central file: `package.json`, which declares dependencies and scripts.

---

## 🧭 What Is a Version Manager?

A **version manager** (like `nvm`) allows developers to:

- Install multiple versions of Node.js
- Switch between them per project
- Avoid conflicts across environments (local, staging, CI/CD)

This is critical in JS where new Node.js versions ship frequently, sometimes breaking compatibility.

---

## 🔧 📆 JavaScript Tooling Timeline: Package & Version Managers (with Influences)

Below is a curated timeline of JavaScript-focused tooling for **package managers**, **version managers**, and **toolchain runners**, including key milestones from other ecosystems that influenced JavaScript’s evolution.

| 📅 Year | Tool                        | Category                     | Platform      | Purpose / Motivation                                  |
| ------: | --------------------------- | ---------------------------- | ------------- | ----------------------------------------------------- |
|    2004 | RubyGems                    | Package Manager              | Ruby          | Central library system for Ruby                       |
|    2004 | RVM                         | Version Manager              | Ruby          | Manage and switch between Ruby versions               |
|    2007 | rbenv                       | Version Manager              | Ruby          | Lightweight Ruby version switcher                     |
|    2007 | phpenv                      | Version Manager              | PHP           | Manage PHP versions                                   |
|    2008 | pip                         | Package Manager              | Python        | Replace `easy_install` as Python’s standard installer |
|    2009 | ⚡ **Node.js**              | Runtime                      | 🟨 JavaScript | Run JavaScript outside the browser                    |
|    2010 | 📦 **npm**                  | Package Manager              | 🟨 JavaScript | Manage & install packages for Node.js                 |
|    2011 | 🌀 **nvm**                  | Version Manager              | 🟨 JavaScript | Switch Node.js versions per user/project              |
|    2011 | virtualenv                  | Virtual Env Manager          | Python        | Create isolated Python environments                   |
|    2012 | Bundler                     | Lockfile Manager             | Ruby          | Reproducible Gem installs via `Gemfile.lock`          |
|    2012 | 📦 **Bower** _(deprecated)_ | Frontend PM                  | 🟨 JavaScript | Manage browser libraries before npm supported them    |
|    2013 | Composer                    | Package Manager              | PHP           | PHP dependency and autoloading manager                |
|    2014 | 📦 **jspm**                 | PM + Module Loader           | 🟨 JavaScript | Load ES6 modules in browsers using SystemJS           |
|    2014 | cargo                       | Package Manager (built-in)   | Rust          | Rust’s official toolchain + PM in one                 |
|    2015 | rustup                      | Version Manager              | Rust          | Install and switch Rust versions easily               |
|    2015 | sdkman                      | Version Manager              | Java/Kotlin   | Manage SDK versions across JVM-based languages        |
|    2015 | gradle                      | Package Manager / Build Tool | Java          | Modern JVM build tool with flexible scripting         |
|    2016 | ⚡ **Yarn**                 | Package Manager              | 🟨 JavaScript | Facebook’s faster, lockfile-based npm alternative     |
|    2016 | pyenv                       | Version Manager              | Python        | Manage multiple Python versions globally              |
|    2016 | poetry                      | Package Manager              | Python        | Modern Python PM with lockfiles and venv              |
|    2017 | 🏃‍♂️ **npx**                  | CLI Tool Runner              | 🟨 JavaScript | Run CLI binaries from npm registry without install    |
|    2017 | ⚡ **pnpm**                 | Package Manager              | 🟨 JavaScript | Efficient, symlink-based alternative to npm/yarn      |
|    2018 | esy                         | Native Dev PM                | ReasonML      | Package manager for native ReasonML/OCaml projects    |
|    2019 | go mod (built-in)           | Module System                | Go            | Built-in versioned dependency and package manager     |
|    2020 | 🌀 **Volta**                | Toolchain Manager            | 🟨 JavaScript | Fast Node + binary manager per project                |
|    2021 | 🧰 **Corepack**             | PM Proxy                     | 🟨 JavaScript | Node’s built-in wrapper for Yarn and pnpm             |
|    2021 | pipx                        | CLI Tool Runner              | Python        | Run isolated Python CLI tools in virtualenvs          |
|    2022 | ⚡ **Bun**                  | Runtime + Tooling            | 🟨 JavaScript | JS runtime with PM, bundler, test runner              |
|    2022 | 📦 **deno.land/x**          | Hosted Module Registry       | 🟨 JavaScript | Deno's official third-party package registry          |

---

## 🧪 Package Managers in Other Laguages

JavaScript arrived later in the tooling ecosystem, but eventually caught up with advanced features like lockfiles and CLI scripting. Here's a chronological comparison of package managers across major languages.

| Language | Package Manager         | Year | Lockfile?              | Common Commands                     |
| -------- | ----------------------- | ---- | ---------------------- | ----------------------------------- |
| Ruby     | `gem`                   | 2004 | ❌                     | `gem install <pkg>`                 |
| Java     | `maven`                 | 2004 | ✅ `pom.xml`           | `mvn install`, `mvn test`           |
| Java     | `gradle`                | 2007 | ✅ `gradle.lockfile`   | `gradle build`, `gradle run`        |
| Python   | `pip`                   | 2008 | ✅ `requirements.txt`  | `pip install -r requirements.txt`   |
| ⚡ JS    | 📦 **npm**              | 2010 | ✅ `package-lock.json` | `npm install`, `npm run <script>`   |
| PHP      | `composer`              | 2012 | ✅ `composer.lock`     | `composer install`, `composer run`  |
| Ruby     | `bundler`               | 2011 | ✅ `Gemfile.lock`      | `bundle install`, `bundle exec`     |
| Rust     | `cargo` (built-in)      | 2014 | ✅ `Cargo.lock`        | `cargo build`, `cargo run`          |
| 📦 JS    | 📦 **yarn**             | 2016 | ✅ `yarn.lock`         | `yarn install`, `yarn run <script>` |
| Python   | `poetry`                | 2016 | ✅ `poetry.lock`       | `poetry install`, `poetry run`      |
| 📦 JS    | 📦 **pnpm**             | 2017 | ✅ `pnpm-lock.yaml`    | `pnpm install`, `pnpm run <script>` |
| Go       | `go mod` (built-in)     | 2019 | ✅ `go.sum`            | `go mod tidy`, `go run .`           |
| 📦 JS    | ⚡ **deno** (URL-based) | 2020 | ❌ _(cached modules)_  | `deno run`, `deno task`             |
| 📦 JS    | ⚡ **bun**              | 2022 | ✅ `bun.lockb`         | `bun install`, `bun run <script>`   |
