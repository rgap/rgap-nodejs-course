const express = require("express"); // Import the express module

// Create an instance of Express
const app = express();
const port = 8080;

// Use built-in middleware to parse JSON bodies
app.use(express.json());

// Sample data
let users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
];

// Middleware to simulate authentication
app.use((req, res, next) => {
  const token = req.header("Authorization");
  if (!token || token !== "Bearer valid_token") {
    return res.status(401).send("Unauthorized");
  }
  next();
});

// Define a route to get user data
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  res.json(user); // Send the user data as a JSON response
});

// Define a route to update user data
app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  user.name = req.body.name;
  res.json(user); // Send the updated user data as a JSON response
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

/**
 * This example demonstrates the following concepts:
 * - Implementing statelessness in a RESTful API
 * - Sending all necessary information with each request
 * - Using middleware to simulate authentication
 *
 * Key Points:
 * - Statelessness allows servers to handle more requests by not storing session data.
 * - Each request is independent, reducing the chance of errors caused by previous requests.
 * - Clients must send all necessary information with each request.
 */
