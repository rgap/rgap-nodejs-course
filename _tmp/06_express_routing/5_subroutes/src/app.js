import express from "express";
import UserRoute from "./routes/users.router.js"; // Import the user routes

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the UserRoute for handling routes starting with /api/users
app.use("/api/users", UserRoute);

export default app;
