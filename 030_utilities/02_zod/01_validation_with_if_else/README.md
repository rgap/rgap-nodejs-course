# Validation with `if` / `else`

This example validates a small user object with plain JavaScript.

The user is valid only when:

1. `username` is a string with at least 3 characters
2. `email` is a string that includes `@`
3. `age` is a number and is at least 18

This works, but the checks become repetitive as the object grows.

---

## Run

From this folder:

```bash
npm start
```

You can also run this file directly:

```bash
node app.js
```
