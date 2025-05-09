import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import aboutRouter from "./routes/about.js";
import homeRouter from "./routes/home.js";
import { __dirname } from "./utils.js";

const app = express();

// Set up Handlebars with default layout
app.engine(
  "handlebars",
  handlebars.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Use routers for different views
app.use("/", homeRouter);
app.use("/about", aboutRouter);

export default app;
