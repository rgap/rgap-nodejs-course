const express = require("express"); // Import the express module

// Create an instance of Express
const app = express();
const port = 8080;

// Middleware to log request details
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next(); // Pass control to the next handler
});

// Define a route that triggers an error
app.get("/error", (req, res) => {
  throw new Error("Something went wrong!");
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).send("Something broke!"); // Send a 500 Internal Server Error response
});

// Handle other requests with a 404 Not Found response
app.use((req, res) => {
  res.status(404).send("Not Found");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Express server with error-handling middleware is listening on port ${port}`);
});

/*
Historical Context:
- Error-handling middleware is essential for identifying and responding to errors in web applications.
- Express provides a built-in mechanism for defining error-handling middleware to catch and handle errors.
- Proper error handling improves the robustness and reliability of web applications.

Sample Input: GET request to '/error'
Output in Console: Error stack trace
Response: "Something broke!"

Sample Input: GET request to an undefined route
Response: "Not Found"
*/
