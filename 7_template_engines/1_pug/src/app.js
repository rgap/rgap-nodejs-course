import express from "express";
import path from "path";
import { __dirname } from "./utils.js";

const app = express();

// Set Pug as the view engine
app.set("view engine", "pug");

// Define the directory for views
app.set("views", path.join(__dirname, "views"));

// Define a route to render a Pug template
app.get("/", (req, res) => {
  res.render("index", { name: "John" }); // Pass data to the Pug template
});

export default app;
