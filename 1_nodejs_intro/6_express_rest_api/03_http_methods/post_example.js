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

// Define a route to create a new item
app.post("/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
  };
  items.push(newItem);
  res.status(201).json(newItem); // Send the new item as a JSON response
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

/**
 * This example demonstrates the following concepts:
 * - Handling POST requests
 * - Sending data to the server to create a new resource
 * - Parsing JSON request bodies
 *
 * Key Points:
 * - POST requests are used to create new resources on the server.
 * - POST requests are not idempotent, meaning multiple identical requests may result in multiple resources being created.
 * - Responses to POST requests are generally not cached.
 */
