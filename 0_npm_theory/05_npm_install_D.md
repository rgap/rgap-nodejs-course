# npm install -D

## What does npm install -D do?

The `npm install -D` command installs a package as a development dependency. Development dependencies are packages that are only needed during development and not in production.

## Usage

```sh
npm install -D <package-name>
```

## How it works

1. Downloads the package from the npm registry.
2. Installs the package into the `node_modules` directory.
3. Adds the package to the `devDependencies` section of the `package.json` file.

## Benefits

- Keeps development dependencies separate from production dependencies.
- Helps in managing the project dependencies more efficiently.

## Example

```sh
npm install -D jest
```

This command installs `jest` as a development dependency, meaning it is only needed during development and testing.
