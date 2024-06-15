const express = require("express"); // Import the express module

// Create an instance of Express
const app = express();
const port = 8080;

// Set the view engine to Pug
app.set("view engine", "pug");
// The app.set method sets the view engine to Pug. This tells Express to use Pug for rendering views.

// Set the directory for the views
app.set("views", "./views");
// The app.set method also sets the directory where the Pug templates are located.

// Define a route to render a Pug template
app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
  // The res.render method renders the 'index' template with the given title and message variables.
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Express server with Pug is listening on port ${port}`);
});

/*
Historical Context:
- Template engines allow for the dynamic generation of HTML content.
- Pug (formerly Jade) is one of the popular template engines for Express.
- Using a template engine simplifies the creation of dynamic web pages by separating the presentation layer from the business logic.

Sample Input:
1. GET request to '/'
   Output: Rendered HTML content with title 'Hey' and message 'Hello there!'
*/
