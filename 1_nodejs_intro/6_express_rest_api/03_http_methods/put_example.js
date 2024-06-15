const express = require("express"); // Import the express module

// Create an instance of Express
const app = express();
const port = 8080;

// Use built-in middleware to parse JSON bodies
app.use(express.json());

// Sample data
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// Define a route to update an item by ID
app.put("/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("Item not found");
  item.name = req.body.name;
  res.json(item); // Send the updated item as a JSON response
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

/**
 * This example demonstrates the following concepts:
 * - Handling PUT requests
 * - Updating an existing resource on the server
 * - Parsing JSON request bodies
 *
 * Key Points:
 * - PUT requests are used to update existing resources on the server.
 * - PUT requests are idempotent, meaning multiple identical requests have the same effect as a single request.
 * - Responses to PUT requests are generally not cached.
 */
