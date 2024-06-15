const express = require("express"); // Import the express module

// Create an instance of Express
const app = express();
const port = 8080;

// Sample data representing a collection of items
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// Define a route to get all items
app.get("/items", (req, res) => {
  res.json(items); // Send the array of items as a JSON response
});

// Define a route to get an item by ID
app.get("/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("Item not found");
  res.json(item); // Send the item as a JSON response
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

/**
 * This example demonstrates the following concepts:
 * - Defining resources in a RESTful API
 * - Representing resources using JSON
 * - Using URIs to access resources
 * - Sending JSON responses
 *
 * Key Points:
 * - Resources are identified by URIs.
 * - Resource representations consist of data, metadata, and hypermedia links.
 * - URIs provide a uniform way to access and manipulate resources.
 */
