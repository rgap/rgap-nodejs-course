# 🛍️ Realistic HTTP Compression Example – Product Catalog API

This folder contains a realistic example of HTTP response compression in a Node.js + Express application. The goal is to simulate a public product catalog API that benefits from **gzip compression** to reduce payload size and improve response times.

---

## 🌐 What This Project Does

- **Serves a simulated catalog of 1000 products** in JSON format
- Each product has:
  - `id`
  - `name`
  - `description`
  - `price`
  - `imageUrl`
- **Uses the `compression` middleware** to gzip responses sent from `/products`
- **Serves static images** from the `/images` folder (images are _not_ compressed again — they’re already optimized)

---

## 🧠 Why This Is Useful

In real-world APIs, catalog or listing endpoints often return large JSON arrays. Compressing these responses can:

| Benefit                        | Description                                                             |
| ------------------------------ | ----------------------------------------------------------------------- |
| 📉 Lower bandwidth             | Smaller responses sent over the wire                                    |
| ⚡ Faster client experience    | Especially helpful on mobile or slow networks                           |
| 🔁 Better performance at scale | Less strain on networks and infrastructure                              |
| 💸 Cost-efficient              | Reduces data transfer costs when APIs are hosted on cloud/CDN providers |

---

## ⏳ Historical Context

HTTP compression has been a web performance standard since **the early 2000s**, when browsers and servers began supporting the `Accept-Encoding` and `Content-Encoding` headers.

- `gzip` is one of the oldest and most widely supported compression algorithms
- `brotli` was introduced by Google in **2015**, offering better compression ratios
- Express has supported middleware compression since **Express 4.x**

---

## ▶️ How to Run

Make sure you have Node.js installed, then:

```bash
cd 2_realistic_api/
npm install express compression
node server.js
```

Visit:

- http://localhost:3000/products → will return a compressed JSON list
- http://localhost:3000/images/product1.jpg → sample image (uncompressed)

---

## 🧪 How to Test Compression

Use a tool like [Postman](https://www.postman.com/), [curl](https://curl.se/), or the browser dev tools:

```bash
curl -H "Accept-Encoding: gzip" -I http://localhost:3000/products
```

Check for:

```
Content-Encoding: gzip
```

---

## 📝 Notes

- Compression is **lossless** — no data is lost, only compressed
- Images are typically **not compressed again** with gzip or brotli because:
  - JPG/PNG/WebP are already compressed formats
  - Recompressing them wastes CPU without reducing size
