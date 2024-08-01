import express from "express";
import productsRouter from "./api/products.route.js";

const router = express.Router();

// Example API route to fetch general data
router.get("/data", (req, res) => {
  // Mock data
  const data = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  };
  res.json(data);
});

// Use the products router for all /api/products routes
router.use("/products", productsRouter);

export default router;
