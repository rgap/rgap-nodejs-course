const express = require("express"); // Import the express module
const bodyParser = require("body-parser"); // Import the body-parser module for parsing request bodies

// Create an instance of Express
const app = express();
const port = 8080;

// Use built-in middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// The express.urlencoded middleware parses URL-encoded bodies (typically form submissions) and makes the data available in req.body.

// Use built-in middleware to parse JSON bodies
app.use(express.json());
// The express.json middleware parses JSON bodies and makes the data available in req.body.

// Custom middleware to log request details
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next(); // Pass control to the next handler
});
// This custom middleware logs the HTTP method and URL of the incoming request to the console.

// Define a route to handle POST requests with JSON data
app.post("/data", (req, res) => {
  const body = req.body; // Extract the body parameters
  res.send(`Received JSON data: ${JSON.stringify(body)}`); // Send the response with the body parameters
});

// Define a route with a URL parameter
app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId; // Extract the userId from the URL
  res.send(`User ID: ${userId}`); // Send the response with the userId
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).send("Something broke!"); // Send a 500 Internal Server Error response
});
// This error-handling middleware logs the error stack trace to the console and sends a 500 Internal Server Error response to the client.

// Handle other requests with a 404 Not Found response
app.use((req, res) => {
  res.status(404).send("Not Found");
});
// This middleware handles requests to undefined routes by sending a 404 Not Found response to the client.

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Express server with practical middleware example is listening on port ${port}`);
});

/*
Historical Context:
- Middleware functions are a fundamental part of Express, allowing for the execution of code between receiving a request and sending a response.
- Custom middleware functions enable developers to implement specific functionality such as logging, authentication, and more.
- Built-in middleware simplifies application development by providing ready-to-use solutions for common tasks.
- Error-handling middleware is essential for identifying and responding to errors in web applications.

Sample Input:
1. POST request to '/data' with body '{"name":"John","age":30}'
   Output: "Received JSON data: {"name":"John","age":30}"

2. GET request to '/users/123'
   Output: "User ID: 123"

3. GET request to '/error'
   Output in Console: Error stack trace
   Response: "Something broke!"

4. GET request to an undefined route
   Response: "Not Found"
*/
