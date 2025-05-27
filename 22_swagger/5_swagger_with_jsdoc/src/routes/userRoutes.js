// - **JSDoc Integration**: API documentation is generated
// from JSDoc comments within the route files, ensuring
// that your documentation stays up-to-date with your code.

import express from "express";

const router = express.Router();

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Returns a list of users
 *     responses:
 *       200:
 *         description: A JSON array of user objects
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
 *     responses:
 *       200:
 *         description: A JSON object of the user
 *       404:
 *         description: User not found
 */
router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  res.json({ id: userId, name: `User ${userId}` });
});

export default router;
