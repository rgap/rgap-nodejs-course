const express = require("express"); // Import the express module

// Create an instance of Express
const app = express();

// Define the port to listen on
const port = 8080;

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Send the response body "Hello, World!"
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});

/*
Historical Context:
- Express.js was released in 2010 as a minimal and flexible Node.js web application framework.
- It provides robust features for web and mobile applications, simplifying the creation of web servers.
- Express.js has become one of the most popular Node.js frameworks due to its simplicity and flexibility.
*/
