const express = require("express"); // Import the express module

// Create an instance of Express
const app = express();
const port = 8080;

// Sample data
let users = [
  { id: 1, name: "User 1", items: [{ id: 1, name: "Item 1" }] },
  { id: 2, name: "User 2", items: [{ id: 2, name: "Item 2" }] },
];

// Define a route to get all users
app.get("/users", (req, res) => {
  res.json(users); // Send the array of users as a JSON response
});

// Define a route to get a user by ID
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  res.json(user); // Send the user as a JSON response
});

// Define a route to get items for a specific user
app.get("/users/:id/items", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  res.json(user.items); // Send the user's items as a JSON response
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

/**
 * This example demonstrates the following concepts:
 * - Designing URIs for accessing resources
 * - Using hierarchical structure to organize URIs
 * - Sending JSON responses
 *
 * Key Points:
 * - URIs should use nouns to represent resources.
 * - Use plural nouns for collections of resources.
 * - Organize URIs hierarchically to reflect relationships between resources.
 */
