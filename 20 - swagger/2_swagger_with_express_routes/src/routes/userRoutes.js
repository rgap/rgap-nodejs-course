import { Router } from "express";

const router = Router();

// Route to get user list
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ]);
});

// Route to get a specific user by ID
router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  res.json({ id: userId, name: `User ${userId}` });
});

export default router;
