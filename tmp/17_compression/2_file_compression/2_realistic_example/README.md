# ⚡ Pre-Compressed Static Files with Express

This folder demonstrates how to serve **pre-compressed assets** (e.g., `.js.gz`) from an Express server based on the client’s `Accept-Encoding` header.

---

## 🧠 Why Pre-Compress Files?

Modern browsers support compression formats like **Gzip** and **Brotli**, which reduce the size of transferred files — often by 60–80%.

Instead of compressing assets dynamically on every request (CPU cost), you can:

1. Pre-compress assets (during build or manually)
2. Serve them directly if the client supports it

---

## 📦 Use Case

> Serve a **large JavaScript bundle** (`app.js`) in compressed form (`app.js.gz`) to reduce load times.

This is useful when delivering:

- Single-page apps (React, Vue, Angular)
- Large client-side libraries
- Pre-built dashboard scripts
- Any heavy `.js`, `.css`, `.html`, or even `.json` files

---

## 🔁 Request Flow

1. Client requests `/assets/app.js`
2. Server checks the `Accept-Encoding` header
3. If `gzip` is supported:
   - Serves `app.js.gz` with header `Content-Encoding: gzip`
4. Browser automatically decompresses and executes it

---

## 🗂️ Folder Structure

```
/
├── index.html               # Loads /assets/app.js (decompressed by browser)
├── server.js                # Serves either raw or gzipped JS
└── assets/
    ├── app.js               # Original script
    └── app.js.gz            # Gzip-compressed version
```

---

## 🧪 How to Test

1. Start the server:

```bash
node server.js
```

2. Visit:

```
http://localhost:3000
```

3. Open DevTools → Network → Find `app.js`  
   You should see:

```
Content-Encoding: gzip
```

> If the browser doesn't support compression, the server sends `app.js` instead.

---

## ✅ Summary

| Benefit                 | Description                             |
| ----------------------- | --------------------------------------- |
| 💨 Faster loads         | Smaller downloads reduce page latency   |
| 📉 Bandwidth savings    | Saves transfer costs for large assets   |
| 🔁 Reuse cacheable gzip | CDN or browser caches compressed assets |
| 🛠️ Easy integration     | Just serve `.gz` with correct headers   |

---

## 🛠️ Compression in Real Projects

In **modern frameworks** like:

- React (using Create React App or Vite)
- Angular
- Vue
- Next.js

👉 **Compression is handled automatically** during build. Tools like Webpack or Vite generate `.gz` or `.br` versions of bundles ready for CDN or server delivery.

This example shows how the same logic can be manually applied in custom Express apps or environments where no bundler is used.
