import express from "express";

const router = express.Router();

// Home page route
router.get("/", (req, res) => {
  res.render("home", { title: "Home Page", message: "Welcome to the Home Page!" });
});

export default router;
