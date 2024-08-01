import express from "express"; // Import the express module

// Create an instance of Express
const app = express();

// Define a route that handles query parameters
app.get("/search", (req, res) => {
  const query = req.query.q; // Extract the query parameter
  res.send(`Search Query: ${query}`); // Send the response with the query parameter
});

export default app;

/*
 * Historical Context:
 * - Query parameters are a way to pass additional data to the server via the URL.
 * - They are commonly used in web applications to filter, sort, or search data.
 * - Express simplifies the handling of query parameters with the req.query object.
 */
