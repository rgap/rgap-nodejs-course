# Local Dependency Installation (`npm install`)

The `npm install` command is used to fetch, resolve, and install dependencies recorded in your project manifest.

---

## Theory & Core Concepts

### 1. How `npm install` Works under the Hood

When you navigate to a directory containing a `package.json` and run `npm install` (with no arguments):

1. **Reads Manifest**: npm parses the `dependencies` and `devDependencies` listed in `package.json`.
2. **Resolves Tree**: npm references the `package-lock.json` (if present) or contacts the registry to construct a logical dependency tree that satisfies all version range qualifiers.
3. **Downloads Packages**: npm downloads the tarballs of those modules.
4. **Populates node_modules**: The contents are extracted into a local directory named `node_modules`.

### 2. What is `package-lock.json`?

When dependencies are installed, npm automatically generates or updates a `package-lock.json` file. 

> [!IMPORTANT]
> The `package-lock.json` file records the **exact** dependency tree and versions installed at the time. This guarantees that anyone checking out your source code (teammates, CI/CD runners, production servers) installs the *exact same* versions of all sub-dependencies, eliminating the risk of "it works on my machine" bugs.

### 3. What is `node_modules`?

This folder stores the downloaded code for all dependencies. It is notoriously large due to recursive dependencies (packages having dependencies of their own).

> [!WARNING]
> You should **never** commit `node_modules/` to your version control (Git). Always add `node_modules` to your `.gitignore` file. Anyone who clones your repository can easily recreate it by running `npm install`.

---

## Basic Usage

To install all dependencies listed in an existing project's `package.json`:

```bash
npm install
```

To install a specific package and add it to `package.json`'s dependencies:

```bash
npm install <package-name>
```
*(Example: `npm install express`)*

---

## Example Project

To see local dependency installation, directory creation, and the creation of `package-lock.json` in action, navigate to the `example-project` folder inside this directory.

First, change your directory to the example project:

```bash
cd 01_npm_theory/2_npm_install/example-project
```

Next, observe the initial directory (note that there is no `node_modules` folder and no `package-lock.json` file yet).

Then, install the dependencies:

```bash
npm install
```

Now, observe the changes in the directory:
* A `node_modules/` directory was created containing the `lodash` package code.
* A `package-lock.json` file was generated locking the exact installed version.

Finally, run the script:

```bash
npm start
```
