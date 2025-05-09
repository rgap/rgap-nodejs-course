import express from "express";
import path from "path";
import { __dirname } from "./utils.js";

const app = express();

// Middleware to serve static files
// Theory:
// The express.static() middleware serves static files, such as HTML, CSS, JavaScript, images, etc.,
// from a specified directory. When a request is made for a file, Express will check the given directory
// for the file and serve it if found. This is commonly used to serve assets for a web application.

// Example:
// If you have a directory structure like:
// /public
//   ├── index.html
//   ├── styles.css
//   └── script.js
// And a request is made to /index.html, the file public/index.html will be served.

// Setting up static file serving
app.use(express.static(path.join(__dirname, "public")));

// Example usage:
// To test this, create an `index.html` file in the `public` directory with some content,
// like a simple HTML page. Then start the server and navigate to `http://localhost:3000/index.html`
// in a web browser. The contents of the `index.html` file should be displayed.

// Direct route to serve index.html
// This is unnecessary since index.html is already served by default for any path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Direct route to serve about.html
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running and serving static files on port ${PORT}`);
});
