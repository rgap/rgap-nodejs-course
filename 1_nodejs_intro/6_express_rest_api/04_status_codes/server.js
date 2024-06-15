const express = require("express"); // Import the express module

// Create an instance of Express
const app = express();
const port = 8080;

// Define a route to send a 200 OK response
app.get("/success", (req, res) => {
  res.status(200).send("Success!"); // Send a 200 OK response
});

// Define a route to send a 201 Created response
app.post("/create", (req, res) => {
  res.status(201).send("Resource created!"); // Send a 201 Created response
});

// Define a route to send a 404 Not Found response
app.get("/not-found", (req, res) => {
  res.status(404).send("Resource not found!"); // Send a 404 Not Found response
});

// Define a route to send a 500 Internal Server Error response
app.get("/error", (req, res) => {
  res.status(500).send("Internal server error!"); // Send a 500 Internal Server Error response
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

/**
 * This example demonstrates the following concepts:
 * - Using different HTTP status codes in responses
 * - Sending appropriate status codes based on the outcome of the request
 *
 * Key Points:
 * - 200 OK indicates a successful request.
 * - 201 Created indicates a successful creation of a resource.
 * - 404 Not Found indicates that the requested resource could not be found.
 * - 500 Internal Server Error indicates that the server encountered an error it doesn't know how to handle.
 */
