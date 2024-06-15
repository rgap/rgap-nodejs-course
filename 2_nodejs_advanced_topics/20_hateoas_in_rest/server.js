// To implement HATEOAS, include links in the responses that indicate
// how to perform actions on resources. Use standard link relations (e.g., self, next, prev) to provide guidance to clients.

const express = require("express"); // Import the express module

// Create an instance of Express
const app = express();
const port = 8080;

// Sample data
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// Function to generate HATEOAS links for an item
function getItemLinks(itemId) {
  return {
    self: `/items/${itemId}`,
    collection: "/items",
    next: `/items/${itemId + 1}`,
  };
}

// Define a route to get all items
app.get("/items", (req, res) => {
  const itemsWithLinks = items.map(item => ({
    ...item,
    links: getItemLinks(item.id),
  }));
  res.json(itemsWithLinks); // Send the array of items with links as a JSON response
});

// Define a route to get an item by ID
app.get("/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("Item not found");
  res.json({
    ...item,
    links: getItemLinks(item.id),
  }); // Send the item with links as a JSON response
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

/**
 * This example demonstrates the following concepts:
 * - Implementing HATEOAS in a RESTful API
 * - Including hypermedia links in responses
 * - Using standard link relations (e.g., self, next, prev)
 *
 * Key Points:
 * - HATEOAS enables discoverability and decoupling of clients and servers.
 * - Hypermedia links guide clients on how to interact with the API.
 * - Servers can evolve independently by adding new links and actions.
 */
