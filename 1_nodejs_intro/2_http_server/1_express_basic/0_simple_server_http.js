const http = require("http"); // Import the http module

// Define the port to listen on
const port = 8080;

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); // Set response headers
  res.end("Hello, World!\n"); // Send the response body
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

/*
Historical Context:
- Node.js was introduced in 2009 by Ryan Dahl.
- Node.js allows for server-side scripting using JavaScript, providing a unified programming model for both client and server.
- The http module is part of Node.js's core libraries, enabling the creation of HTTP servers and clients.
*/
