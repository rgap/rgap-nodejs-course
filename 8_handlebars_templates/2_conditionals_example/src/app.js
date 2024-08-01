import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import { __dirname } from "./utils.js";

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Route with conditional rendering
app.get("/", (req, res) => {
  const user = { name: "John", age: 30, isAdult: true };
  res.render("index", user);
});

export default app;
