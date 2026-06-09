# Hashing Passwords with `bcryptjs`

This project shows how to use **`bcryptjs`** to hash passwords before storing them and how to verify a login attempt later.

---

## 1. Why use `bcryptjs`?

Passwords should **never** be stored as plain text.

If a database is leaked and passwords were stored directly, every user's password is exposed immediately.

`bcryptjs` helps by:

1. Generating a **salt**
2. Creating a **hash** from the password
3. Letting us compare a future login password against the stored hash

The original password is not stored.

---

## 2. Install

From this lesson folder:

```bash
npm install
```

---

## 3. Project Files

- `app.js` contains a small in-memory registration and login demo
- `package.json` defines the dependency and a `start` script

---

## 4. How the Demo Works

When a user registers:

```javascript
const hashedPassword = bcrypt.hashSync(plainPassword, 10);
```

- `plainPassword` is the password typed by the user
- `10` is the number of salt rounds
- the result is a secure hash string

When a user logs in:

```javascript
const isValid = bcrypt.compareSync(loginPassword, storedHash);
```

- `loginPassword` is the password attempt
- `storedHash` is the hash saved during registration
- the result is `true` or `false`

---

## 5. Run the Demo

```bash
npm start
```

You should see:

- a new user being registered
- the plain password
- the generated bcrypt hash
- one successful login attempt
- one failed login attempt

---

## 6. Important Note

`bcryptjs` is useful for learning and for JavaScript-only environments, but the key concept here is broader:

- never store plain-text passwords
- always hash passwords before saving them
- always compare with the hash instead of comparing raw strings
