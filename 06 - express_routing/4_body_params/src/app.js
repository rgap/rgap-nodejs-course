import express from "express"; // Import the express module

// Create an instance of Express
const app = express();

// Use express.json() middleware to parse JSON bodies
app.use(express.json());

// Define a route that handles POST requests with body parameters
app.post("/data", (req, res) => {
  const body = req.body; // Extract the body parameters
  res.send(`Received data: ${JSON.stringify(body)}`); // Send the response with the body parameters
});

export default app;

/*
 * Historical Context:
 * - Body parameters are used to send data to the server in the body of a POST request.
 * - They are commonly used in web forms and APIs to send complex data structures.
 * - With Express, body parsing has become simpler with built-in middleware like express.json().
 */
