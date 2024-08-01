import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import { __dirname } from "./utils.js";

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Route rendering a list of items
app.get("/", (req, res) => {
  const fruits = ["Apple", "Banana", "Cherry"];
  res.render("index", { fruits });
});

export default app;
