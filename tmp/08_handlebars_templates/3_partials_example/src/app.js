import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import { __dirname } from "./utils.js";

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Route rendering a view with partials
app.get("/", (req, res) => {
  res.render("index", { title: "Welcome to My App", message: "This is the home page content." });
});

export default app;
