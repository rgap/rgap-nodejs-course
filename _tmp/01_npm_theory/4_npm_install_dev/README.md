# Development Dependencies (`npm install -D`)

This directory covers development dependencies (`devDependencies`), which are libraries required only during local application development and testing, and are excluded from production builds.

---

## Theory & Core Concepts

### 1. Production vs. Development Dependencies

Node.js projects distinguish between two categories of dependencies:

* **`dependencies`**: Production libraries. The app cannot launch or perform its core functions without them (e.g., `express` for serving web traffic, `mongoose` for database access).
* **`devDependencies`**: Development libraries. These are tooling packages that developers use to write, test, build, lint, or debug code, but they are not executed in production (e.g., testing frameworks, linters, types).

### 2. Why Separate Them?

Separating production and development dependencies is crucial for:

* **Smaller Production Bundles**: When deploying to production platforms (like AWS, Heroku, or Docker container environments), you can run `npm install --production` to ignore all dev dependencies. This reduces deployment size, speeds up build pipelines, and minimizes container image footprint.
* **Security & Vulnerability Reduction**: Reducing the amount of third-party code in production reduces the potential attack surface.

---

## Common Examples of DevDependencies

* **Linters & Formatters**: `eslint`, `prettier`
* **Test Runners & Assertion Libraries**: `jest`, `mocha`, `chai`, `cypress`
* **Compilers & Transpilers**: `typescript`, `@babel/core`
* **Hot Reloading Utilities**: `nodemon`

---

## Commands and Usage

### Installing a Development Dependency

To register a library under `devDependencies` in `package.json`, use the `-D` or `--save-dev` flag:

```bash
npm install -D <package-name>
```
*(Example: `npm install -D jest`)*

### Installing ONLY Production Dependencies

To skip all dev dependencies in a staging or production environment, execute:

```bash
npm install --omit=dev
```
*(Note: Older npm versions used `npm install --production`)*

---

## Example Project

To see the difference between production and development dependencies, navigate to the `example-project` folder inside this directory.

First, change your directory to the example project:

```bash
cd 01_npm_theory/4_npm_install_dev/example-project
```

Next, install both production and development dependencies:

```bash
npm install
```

* Note that `jest` (devDependency) and `express` (dependency) are both installed under `node_modules`.
* Test execution works when running:
  ```bash
  npm test
  ```

Then, try installing only production dependencies. Clean the directory first:

```bash
rm -rf node_modules package-lock.json
```

Now run:

```bash
npm install --omit=dev
```

* Note that `express` is installed, but `jest` is omitted.
* Running `npm test` will fail because `jest` is not available. This simulates a lightweight production build!
