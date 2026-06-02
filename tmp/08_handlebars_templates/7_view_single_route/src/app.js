import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import viewRouter from "./routes/views.route.js";
import { __dirname } from "./utils.js";

const app = express();

// Set up Handlebars with default layout
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
app.use("/", viewRouter);

export default app;
