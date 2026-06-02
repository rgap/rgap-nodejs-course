import express from "express"; // Import the express module

// Create an instance of Express
const app = express();

// Define a route with a URL parameter
app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId; // Extract the userId from the URL
  res.send(`User ID: ${userId}`); // Send the response with the userId
});

export default app;

/*
 * Historical Context:
 * - URL parameters are a way to pass dynamic data in the URL.
 * - They allow for more flexible and dynamic URL structures.
 * - Express makes it easy to define and handle routes with URL parameters using the :paramName syntax.
 */
