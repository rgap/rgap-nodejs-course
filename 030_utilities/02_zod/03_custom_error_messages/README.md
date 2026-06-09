# Custom Error Messages with `zod`

By default, `zod` gives useful but generic error messages.

For example:

```text
Too small: expected string to have >=3 characters
```

That is helpful for developers, but an app often needs clearer messages for users.

With Zod 4, pass an `error` option to a validation rule:

```javascript
username: z
  .string({ error: 'Username is required and must be text.' })
  .min(3, { error: 'Username must have at least 3 characters.' })
```

Now the schema still validates at runtime, but the error output is easier to read.

There are two common places to customize messages:

1. On the base type:

   ```javascript
   z.string({ error: 'Email is required and must be text.' })
   ```

2. On a validation rule:

   ```javascript
   z.string().email({ error: 'Email must be a valid email address.' })
   ```

When validation fails, the custom text is available on `issue.message`.

---

## Run

From this folder:

```bash
npm install
npm start
```

You can also run this file directly after installing:

```bash
node app.js
```

---

## Important Note

Many older Zod examples use `{ message: '...' }`.

This lesson uses the Zod 4 style: `{ error: '...' }`.
