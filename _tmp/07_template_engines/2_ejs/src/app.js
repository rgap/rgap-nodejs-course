import express from "express";
import path from "path";
import { __dirname } from "./utils.js";

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Define the directory for views
app.set("views", path.join(__dirname, "views"));

// Define a route to render an EJS template
app.get("/", (req, res) => {
  res.render("index", { name: "John" }); // Pass data to the EJS template
});

export default app;
