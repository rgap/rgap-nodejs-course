const express = require("express"); // Import the express module

// Create an instance of Express
const app = express();
const port = 8080;

// Sample data
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// Define a route to delete an item by ID
app.delete("/items/:id", (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).send("Item not found");
  const deletedItem = items.splice(itemIndex, 1);
  res.json(deletedItem); // Send the deleted item as a JSON response
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

/**
 * This example demonstrates the following concepts:
 * - Handling DELETE requests
 * - Removing a resource from the server
 * - Sending JSON responses
 *
 * Key Points:
 * - DELETE requests are used to remove resources from the server.
 * - DELETE requests are idempotent, meaning multiple identical requests have the same effect as a single request.
 * - Responses to DELETE requests are generally not cached.
 */
