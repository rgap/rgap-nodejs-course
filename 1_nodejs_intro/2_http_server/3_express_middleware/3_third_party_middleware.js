const express = require('express'); // Import the express module
const morgan = require('morgan'); // Import the morgan module

// Create an instance of Express
const app = express();
const port = 8080;

// Use Morgan middleware for logging HTTP requests
app.use(morgan('combined'));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Home Page'); // Send the response body "Home Page"
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Express server with third-party middleware is listening on port ${port}`);
});

/*
Historical Context:
- Third-party middleware extends the functionality of Express by providing additional features and utilities.
- Morgan is a popular logging middleware for Express, used to log details of incoming HTTP requests.

Sample Input: GET request to '/'
Output in Console (Morgan): [Morgan log output]
Response: "Home Page"
*/
