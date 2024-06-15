const express = require('express'); // Import the express module
const bodyParser = require('body-parser'); // Import the body-parser module

// Create an instance of Express
const app = express();

// Define the port to listen on
const port = 8080;

// Use body-parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Define a route that handles POST requests with body parameters
app.post('/data', (req, res) => {
  const body = req.body; // Extract the body parameters
  res.send(`Received data: ${JSON.stringify(body)}`); // Send the response with the body parameters
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Express server with body parameters is listening on port ${port}`);
});

/*
Historical Context:
- Body parameters are used to send data to the server in the body of a POST request.
- They are commonly used in web forms and APIs to send complex data structures.
- Express, combined with body-parser, makes it easy to handle and parse body parameters.
*/
