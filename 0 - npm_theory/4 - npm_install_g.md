# npm install -g

## What does npm install -g do?

The `npm install -g` command installs a package globally on the system. This means that the package is available for use in any project on the system, not just the current project.

## Usage

```sh
npm install -g <package-name>
```

## How it works

1. Downloads the package from the npm registry.
2. Installs the package globally on the system.
3. Adds the package to the global `node_modules` directory.

## Benefits

- Makes the package available for use in any project.
- Useful for CLI tools and globally required packages.

## Example

```sh
npm install -g nodemon
```

This command installs `nodemon` globally, allowing it to be used in any project without needing to install it locally.

## Check installed packages

This command will output the directory where global npm packages are installed.

```sh
npm root -g
```
