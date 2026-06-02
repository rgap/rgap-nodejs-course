# Understanding Semantic Versioning (SemVer)

Semantic Versioning (SemVer) is a universal specification for versioning software that communicates the level of changes (bug fixes, additions, breaking changes) between releases.

---

## Theory & Core Concepts

### 1. The SemVer Structure

A semantic version consists of three numbers separated by dots: `MAJOR.MINOR.PATCH` (e.g., `4.17.1`).

* **`MAJOR` (Incompatible Changes)**: Incremented when you make breaking, backward-incompatible API changes. Users must modify their code to upgrade safely.
* **`MINOR` (Backward-Compatible Additions)**: Incremented when you add new functionality in a backward-compatible manner. Old code still runs unchanged.
* **`PATCH` (Backward-Compatible Fixes)**: Incremented when you make backward-compatible bug fixes or minor performance optimizations.

---

## SemVer Range Specifiers inside `package.json`

When dependencies are saved in `package.json`, they are usually prefixed with symbols that dictate how npm is allowed to update them:

### Caret (`^`) — Default Range

* **Rule**: Permits updates that do not change the leftmost non-zero digit.
* **Example**: `"express": "^4.17.1"`
* **Behavior**: Allows any version `>= 4.17.1` but `< 5.0.0` (e.g., `4.18.0` is allowed; `5.0.0` is blocked).
* **Usage**: Ideal for getting minor feature updates and bug fixes automatically while preventing breaking major version upgrades.

### Tilde (`~`) — Patch-only Range

* **Rule**: Permits updates to the most specific version part, typically patch releases.
* **Example**: `"express": "~4.17.1"`
* **Behavior**: Allows any version `>= 4.17.1` but `< 4.18.0` (e.g., `4.17.5` is allowed; `4.18.0` is blocked).
* **Usage**: Used when you want to lock in a specific minor release branch but still want to receive safety hotfixes automatically.

### Exact Version (No Prefix)

* **Rule**: Installs only the exact version specified.
* **Example**: `"express": "4.17.1"`
* **Behavior**: npm will install exactly version `4.17.1`. No updates of any kind will occur.
* **Usage**: Best when stability is paramount and you want to manually verify every single update.

---

## Summary Matrix

| Dependency Entry | Version Range Allowed | Upgrade Category |
| :--- | :--- | :--- |
| `"express": "4.17.1"` | `4.17.1` only | Exact |
| `"express": "~4.17.1"` | `4.17.1` to `< 4.18.0` | Patch updates only |
| `"express": "^4.17.1"` | `4.17.1` to `< 5.0.0` | Minor & Patch updates |
| `"express": "*"` | Any version | Unrestricted (Not recommended) |

---

## Example Project

To see how Semantic Versioning (SemVer) ranges dictate dependency updates in `package.json`, navigate to the `example-project` folder inside this directory.

First, change your directory to the example project:

```bash
cd 01_npm_theory/5_semantic_versioning/example-project
```

Next, install the dependencies:

```bash
npm install
```

Then, execute the script:

```bash
npm start
```

Finally, compare package versions by checking the `package-lock.json` file to see the exact versions installed:
* **`express`**: Locked strictly at the exact version `4.19.2`.
* **`lodash`**: Allowed the latest minor/patch release matching `^4.17.20`.
* **`dotenv`**: Allowed only patch updates matching `~16.4.0` (keeping minor version `16.4`).
