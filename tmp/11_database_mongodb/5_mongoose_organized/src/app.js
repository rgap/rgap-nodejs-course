import express from "express";
import connectDB from "../config/database.js";
import User from "../mongoose/schema.js";

const app = express();

connectDB();

// Define a route to get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

export default app;
