import express from "express";

const router = express.Router();

// Home page route
router.get("/", (req, res) => {
  res.render("home", { title: "Home Page", message: "Welcome to the Home Page!" });
});

// About page route
router.get("/about", (req, res) => {
  res.render("about", { title: "About Us", description: "This is the about page content." });
});

export default router;
