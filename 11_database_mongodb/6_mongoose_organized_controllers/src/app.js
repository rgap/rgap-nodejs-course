import express from "express";
import connectDB from "../config/database.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

connectDB();

app.use("/users", userRoutes);

export default app;
