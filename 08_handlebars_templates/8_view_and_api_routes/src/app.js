import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import apiRouter from "./routes/api.route.js";
import viewRouter from "./routes/views.route.js";
import { __dirname } from "./utils.js";

const app = express();

// Set up Handlebars with default layout
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Use routers for different routes
app.use("/", viewRouter); // View routes for rendering pages
app.use("/api", apiRouter); // API routes for handling API requests

export default app;
