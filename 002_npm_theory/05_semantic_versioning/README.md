# 05_semantic_versioning: Semantic Versioning (SemVer)

In this lesson, we will explore **Semantic Versioning (SemVer)**. Understanding version syntax ranges is critical to maintaining stable, bug-free applications as third-party packages release updates.

---

## 1. What is Semantic Versioning?

Semantic Versioning is a formal specification for versioning software. Under SemVer, a version number is structured as three integers separated by dots:

$$\text{MAJOR} \,.\, \text{MINOR} \,.\, \text{PATCH}$$

For example: **`2.5.1`**

Here is what each number signifies:

1. **MAJOR Version (Breaking Changes)**: Incremented when you make incompatible API changes. Any code using the previous major version might break if it upgrades.
2. **MINOR Version (New Features)**: Incremented when you add functionality in a backwards-compatible manner. Old code will continue to work without modifications.
3. **PATCH Version (Bug Fixes)**: Incremented when you make backwards-compatible bug fixes or internal optimizations.

### Special Case: Pre-1.0.0 Versions
Versions starting with `0.y.z` (e.g., `0.4.2`) are for initial development. The API is considered unstable and can change arbitrarily at any time.

---

## 2. SemVer Range Operators in npm

When you install a package, npm does not write a single exact version to `package.json` by default. Instead, it writes a **version range** prefix. This allows your project to receive bug fixes or minor updates automatically without manual edits.

Here are the most common operators:

| Operator / Syntax | Example | Allowed Range | Meaning |
| :--- | :--- | :--- | :--- |
| **Caret (`^`)** *(Default)* | `^1.2.3` | `>=1.2.3 <2.0.0` | Allows backward-compatible updates (minor and patch). |
| **Tilde (`~`)** | `~1.2.3` | `>=1.2.3 <1.3.0` | Allows patch updates only. Minor updates are blocked. |
| **Exact** (No symbol) | `1.2.3` | `1.2.3` | Only this exact version is allowed. No updates. |
| **Wildcard (`*` or `x`)**| `1.x` or `1.2.x` | `>=1.0.0 <2.0.0` | Any version starting with `1`, or any patch of `1.2`. |
| **Inequality** | `>=2.0.0 <3.1.0` | Range bounds | Manually bounded range. |

---

## 3. The Crucial Caret (`^`) Exception for `0.x` Versions

A common point of confusion is how the Caret (`^`) operator behaves on pre-release versions (under `1.0.0`).

Under SemVer rules, caret matching allows updates that **do not change the left-most non-zero digit**.

* **`^1.2.3`**: The left-most non-zero digit is `1`. Therefore, it allows changes to minor (`2`) and patch (`3`) numbers. Range: `>=1.2.3 <2.0.0`.
* **`^0.2.3`**: The left-most non-zero digit is `2` (the minor version). Since `0.x` versions are unstable, a minor update (like `0.3.0`) is considered a breaking change. Therefore, `^0.2.3` will only allow patch updates. Range: `>=0.2.3 <0.3.0`.
* **`^0.0.3`**: The left-most non-zero digit is the patch digit `3`. Thus, no updates are allowed at all. Range: `0.0.3` exact.

This behavior prevents unstable API breaks in early-stage libraries from crashing your code.

---

## 4. Verification Exercise

We have created a demonstration script, `semver_simulator.js`, that builds a miniature version matching simulator in pure JavaScript. It evaluates whether updates to a dependency are accepted or rejected based on SemVer operators.

Run the demonstration script using:
```bash
# If you are in the workspace root directory:
node semver_simulator.js

# Or, if you have navigated inside this folder:
node semver_simulator.js
```
Examine the output to see how the matcher rules operate for various operator scenarios.
