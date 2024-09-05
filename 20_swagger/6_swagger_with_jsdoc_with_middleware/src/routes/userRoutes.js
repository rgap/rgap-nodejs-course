import express from "express";

const router = express.Router();

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Returns a list of users
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: A JSON array of user objects
 *       401:
 *         description: Unauthorized
 */
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ]);
});

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Returns a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The user ID
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: A JSON object of the user
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */
router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  res.json({ id: userId, name: `User ${userId}` });
});

export default router;
