import express from "express";

const router = express.Router();

// Mock user data
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// Route to get all users
router.get("/", (req, res) => {
  res.json(users);
});

export default router;
