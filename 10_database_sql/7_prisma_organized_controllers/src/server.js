// Server: Configures and starts the Express server
// The server is set up to use the routes defined in the routes directory
import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use("/api", userRoutes);

export default app;
