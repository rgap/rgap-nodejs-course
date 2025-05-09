import axios from "axios";
import express from "express";

const router = express.Router();

// Dashboard main route
router.get("/", async (req, res) => {
  try {
    // Fetch data from the /api/products endpoint
    const response = await axios.get("http://localhost:3000/api/products");
    const products = response.data;

    // Render the dashboard view with the fetched products
    res.render("dashboard", { title: "Dashboard", info: "Welcome to the dashboard!", products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.render("dashboard", { title: "Dashboard", info: "Error fetching products." });
  }
});

// Specific dashboard subroute
router.get("/settings", (req, res) => {
  res.render("dashboard", { title: "Dashboard Settings", info: "Adjust your settings here." });
});

export default router;
