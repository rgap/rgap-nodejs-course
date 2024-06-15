const express = require("express"); // Import the express module

// Create an instance of Express
const app = express();

// Define the port to listen on
const port = 8080;

// Define multiple routes
app.get("/", (req, res) => {
  res.send("Home Page"); // Send the response body "Home Page"
});

app.get("/about", (req, res) => {
  res.send("About Page"); // Send the response body "About Page"
});

app.get("/contact", (req, res) => {
  res.send("Contact Page"); // Send the response body "Contact Page"
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Express server with basic routing is listening on port ${port}`);
});

/*
Historical Context:
- Routing is a core feature of Express that allows defining multiple routes to handle different HTTP requests.
- The concept of routing has been integral to web development since the early days of the web, allowing servers to respond differently based on the URL path.
- Express simplified routing compared to the traditional Node.js http module, making it easier to build RESTful APIs and web applications.
*/
