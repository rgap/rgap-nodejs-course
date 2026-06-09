# Validating Data, then Using `zod`

This lesson builds the validation idea in four small projects:

1. what validation means
2. validating with plain `if` / `else`
3. validating the same kind of data with **`zod`**
4. customizing validation error messages with **`zod`**

---

## 1. Why validate data?

JavaScript does not validate object shapes automatically.

If an API request, form submission, command line argument, or config file contains bad data, your application can fail later in a harder place to debug.

Validation means checking unknown data before your program trusts it.

In this lesson, both the manual `if` / `else` example and the `zod` example validate data at runtime.

---

## 2. When can validation happen?

Validation can happen at different times:

1. **Development time**

   Tools like TypeScript, ESLint, or editor hints can catch mistakes while writing code. This helps developers, but it does not check unknown data coming from users, APIs, files, or environment variables while the program is running.

2. **Startup time**

   A Node.js app can validate configuration when it starts. For example, it can check that `DATABASE_URL` exists before the server begins accepting requests.

3. **Runtime**

   A Node.js app validates data while it is running. This is where request bodies, form submissions, query parameters, command line arguments, and file contents are usually checked.

4. **Database time**

   A database can reject bad data with constraints such as `NOT NULL`, `UNIQUE`, or foreign keys. This is useful, but the application should still validate input earlier so it can return clear errors.

---

## 3. What is `zod` for?

`zod` is not useful because it validates at runtime while `if` / `else` does not. Both can validate at runtime.

`zod` is useful because it replaces repetitive manual checks with a reusable schema.

Manual validation:

```javascript
if (typeof user.email !== 'string') {
  errors.push('email must be a string');
} else if (!user.email.includes('@')) {
  errors.push('email must include @');
}
```

Zod validation:

```javascript
email: z.string().email()
```

With `zod`, you get:

1. one schema that describes the expected data
2. automatic validation
3. consistent error details
4. reusable schemas
5. support for objects, arrays, enums, optional fields, defaults, and more

So the main comparison is:

- `if` / `else`: runtime validation written manually
- `zod`: runtime validation described with schemas

---

## 4. Lesson Folders

- `00_what_is_validation` shows the smallest possible validation idea
- `01_validation_with_if_else` validates a user object with plain JavaScript
- `02_validation_with_zod` validates a similar user object with `zod`
- `03_custom_error_messages` shows how to replace default `zod` messages with clearer messages

---

## 5. Install and Run

Each subfolder is its own small Node.js project with its own `package.json`.

For the first example:

```bash
cd 00_what_is_validation
npm start
```

For the manual validation example:

```bash
cd ../01_validation_with_if_else
npm start
```

For the `zod` example:

```bash
cd ../02_validation_with_zod
npm install
npm start
```

For the custom Zod messages example:

```bash
cd ../03_custom_error_messages
npm install
npm start
```

Only the `zod` examples need `npm install` because they use a third-party package.

---

## 6. Important Note

`zod` validates data at runtime.

This is different from TypeScript types, which are checked while writing or compiling code. In real applications, both can work together: TypeScript helps during development, and `zod` protects your app from unknown data while the program is running.
