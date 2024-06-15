const express = require("express"); // Import the express module

// Create an instance of Express
const app = express();
const port = 8080;

// Sample data
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// Define a route to get all items
app.get("/items", (req, res) => {
  res.json(items); // Send the array of items as a JSON response
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

/**
 * This example demonstrates the following concepts:
 * - Handling GET requests
 * - Retrieving data from the server
 * - Sending JSON responses
 *
 * Key Points:
 * - GET requests are used to retrieve data from the server.
 * - Responses can be cached because GET requests do not alter the state of the server.
 * - GET requests are idempotent, meaning multiple identical requests have the same effect as a single request.
 */
