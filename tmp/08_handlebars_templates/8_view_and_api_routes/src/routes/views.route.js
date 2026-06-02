import express from "express";
import dashboardRouter from "./views/dashboard.route.js";

const router = express.Router();

// Home page route
router.get("/", (req, res) => {
  res.render("home", { title: "Home Page", message: "Welcome to the Home Page!" });
});

// About page route
router.get("/about", (req, res) => {
  res.render("about", { title: "About Us", description: "This is the about page content." });
});

// Use the dashboard router for all /dashboard routes
router.use("/dashboard", dashboardRouter);

export default router;
