const express = require("express"); // Import the express module
const path = require("path"); // Import the path module

// Create an instance of Express
const app = express();
const port = 8080;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));
// The express.static middleware serves static files such as HTML, CSS, JavaScript, images, etc., from the specified directory.

// Define a route to serve dynamic content
app.get("/hello", (req, res) => {
  res.send("Hello, World!"); // Send the response body "Hello, World!"
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Express server serving static files is listening on port ${port}`);
});

/*
Historical Context:
- Serving static files (e.g., HTML, CSS, JavaScript, images) is a common requirement for web servers.
- Express provides a built-in middleware function, express.static, to serve static files.
- This simplifies the process of delivering static content to clients, compared to manually handling file reads and writes.

Sample Files in "public" directory:
1. index.html
2. styles.css
3. script.js

Sample Input:
1. GET request to '/'
   Output: Contents of index.html

2. GET request to '/hello'
   Output: "Hello, World!"
*/
