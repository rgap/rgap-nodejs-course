const express = require("express"); // Import the express module

// Create an instance of Express
const app = express();
const port = 8080;

// Custom middleware function to log request details
function logRequestDetails(req, res, next) {
  console.log(`${req.method} request for '${req.url}'`);
  next(); // Pass control to the next handler
}

// Use the custom middleware function
app.use(logRequestDetails);

// Define a simple route
app.get("/", (req, res) => {
  res.send("Home Page"); // Send the response body "Home Page"
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Express server with custom middleware is listening on port ${port}`);
});

/*
Historical Context:
- Middleware functions are a fundamental part of Express, allowing for the execution of code between receiving a request and sending a response.
- Custom middleware functions enable developers to implement specific functionality such as logging, authentication, and more.

Sample Input: GET request to '/'
Output in Console: GET request for '/'
Response: "Home Page"
*/
