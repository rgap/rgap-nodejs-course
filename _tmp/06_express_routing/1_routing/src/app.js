import express from "express"; // Import the express module

// Create an instance of Express
const app = express();

// Define multiple routes directly in this file
app.get("/", (req, res) => {
  res.send("Home Page"); // Send the response body "Home Page"
});

app.get("/about", (req, res) => {
  res.send("About Page"); // Send the response body "About Page"
});

app.get("/contact", (req, res) => {
  res.send("Contact Page"); // Send the response body "Contact Page"
});

export default app;


/*
Historical Context:
- Routing is a core feature of Express that allows defining multiple routes to handle different HTTP requests.
- The concept of routing has been integral to web development since the early days of the web, allowing servers to respond differently based on the URL path.
- Express simplified routing compared to the traditional Node.js http module, making it easier to build RESTful APIs and web applications.
*/