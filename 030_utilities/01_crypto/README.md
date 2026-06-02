# 01_crypto: Using Node's Built-in `crypto` Module

This project shows how to use Node.js's built-in **`crypto`** module for common utility tasks:

1. generating random tokens
2. hashing data with SHA-256
3. creating an HMAC signature

Because `crypto` is built into Node.js, no third-party package is required.

---

## 1. Why use `crypto`?

The `crypto` module is useful when your application needs to:

- generate secure random values
- hash strings or files
- sign data with a secret
- verify that data has not been changed

It is commonly used in authentication, password reset links, API signatures, and data integrity checks.

---

## 2. Install

This lesson has no dependencies, so there is nothing to install.

You only need Node.js available on your machine.

---

## 3. Project Files

- `app.js` contains the demo code
- `package.json` defines a `start` script

---

## 4. What the Demo Does

The script will:

1. generate a secure random token
2. hash a string with SHA-256
3. create an HMAC signature using a secret key

Example hashing code:

```javascript
const hash = crypto.createHash('sha256').update(text).digest('hex');
```

Example HMAC code:

```javascript
const signature = crypto.createHmac('sha256', secret).update(text).digest('hex');
```

---

## 5. Run the Demo

```bash
npm start
```

You should see:

- a random token
- the original text
- the SHA-256 hash
- the HMAC signature

---

## 6. Important Note

`crypto.createHash()` is useful for hashing general data.

For password storage, use a password hashing tool such as **`bcryptjs`** from lesson `00_bcryptjs`, not a plain fast hash like SHA-256 by itself.

---

## 7. Clean Up

This lesson creates no extra files.
