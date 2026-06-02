import express from "express";
import path from "path";
import viewsRoute from "./routes/views.route.js";
import { __dirname } from "./utils.js";

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Use the views route for handling specific routes
app.use("/", viewsRoute);

export default app;
