const express = require("express"); // Import the express module

// Create an instance of Express
const app = express();
const port = 8080;

// Use built-in middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Use built-in middleware to parse JSON bodies
app.use(express.json());

// Define a route to handle POST requests with URL-encoded data
app.post("/urlencoded", (req, res) => {
  res.send(`Received URL-encoded data: ${JSON.stringify(req.body)}`);
});

// Define a route to handle POST requests with JSON data
app.post("/json", (req, res) => {
  res.send(`Received JSON data: ${JSON.stringify(req.body)}`);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Express server with built-in middleware is listening on port ${port}`);
});

/*
Historical Context:
- Express includes several built-in middleware functions for common tasks such as parsing request bodies.
- Built-in middleware simplifies application development by providing ready-to-use solutions for common tasks.

Sample Input: POST request to '/urlencoded' with body 'name=John&age=30'
Output: "Received URL-encoded data: {"name":"John","age":"30"}"

Sample Input: POST request to '/json' with body '{"name":"John","age":30}'
Output: "Received JSON data: {"name":"John","age":30}"
*/
