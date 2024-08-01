import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import { __dirname } from "./utils.js";

const app = express();

app.engine("handlebars", handlebars.engine());

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Route rendering a view with nested templates
app.get("/", (req, res) => {
  const items = ["Item 1", "Item 2", "Item 3"];
  res.render("index", { items });
});

export default app;
