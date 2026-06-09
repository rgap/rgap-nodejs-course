# Validation with `zod`

This example validates a small user object with `zod`.

Instead of writing every `if` / `else` branch by hand, we define a schema:

```javascript
const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  age: z.number().min(18),
});
```

Then `safeParse()` checks the input and returns either valid data or validation errors.

---

## Run

From this folder:

```bash
npm install
npm start
```

You can also run this file directly:

```bash
node app.js
```
