import express from "express";

const router = express.Router();

// About page route
router.get("/", (req, res) => {
  res.render("about", { title: "About Us", description: "This is the about page content." });
});

export default router;
