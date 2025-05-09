import express from "express";

const router = express.Router();

// Fetch all products
router.get("/", (req, res) => {
  // Mock products data
  const products = [
    { id: 1, name: "Product A", price: 50 },
    { id: 2, name: "Product B", price: 100 },
  ];
  res.json(products);
});

// Fetch a specific product by ID
router.get("/:id", (req, res) => {
  const productId = req.params.id;
  // Mock product detail
  const product = { id: productId, name: `Product ${productId}`, price: 50 * productId };
  res.json(product);
});

export default router;
