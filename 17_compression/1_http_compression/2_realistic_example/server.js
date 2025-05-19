/**
 * 🛍️ Realistic HTTP Compression Example: Product Catalog with Images
 *
 * - Serves a JSON API with a product list
 * - Each product has a name, price, and image URL
 * - Uses gzip compression to reduce JSON size
 * - Images are served as static files (not compressed here)
 */

const express = require("express");
const compression = require("compression");
const path = require("path");

const app = express();
const PORT = 3000;

// ✅ Enable compression (e.g. gzip, brotli)
app.use(compression());

// 📁 Serve static images from /images directory
app.use("/images", express.static(path.join(__dirname, "images")));

// 🧪 Simulated product list
const products = Array.from({ length: 1000 }).map((_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  description: "High quality item with detailed description.",
  price: (Math.random() * 500).toFixed(2),
  imageUrl: `/images/product${(i % 5) + 1}.jpg`, // cycle through sample images
}));

// 📦 Product API endpoint (compressed JSON)
app.get("/products", (req, res) => {
  res.json(products);
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🟢 Catalog API running at http://localhost:${PORT}`);
});
