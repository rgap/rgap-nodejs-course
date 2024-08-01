import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import { __dirname } from "./utils.js";

const app = express();

// Set Handlebars as the view engine, using the .handlebars extension
app.engine("handlebars", handlebars.engine({ defaultLayout: false }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Define a route to render a Handlebars template
app.get("/", (req, res) => {
  res.render("index", { name: "John" }); // Pass data to the Handlebars template
});

export default app;
