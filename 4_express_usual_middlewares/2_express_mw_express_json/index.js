import express from "express";

const app = express();

// Middleware to parse JSON bodies
// Theory:
// JSON (JavaScript Object Notation) is a lightweight data interchange format
// widely used in web applications. When clients send JSON data to the server,
// it needs to be parsed into JavaScript objects to be useful. The express.json()
// middleware automatically parses incoming JSON payloads and makes the data
// available on req.body.

// Example:
// If a client sends a POST request to /api/data with the following JSON payload:
// {
//   "name": "John Doe",
//   "email": "john.doe@example.com"
// }
// The express.json() middleware will parse this JSON and set req.body to:
// {
//   "name": "John Doe",
//   "email": "john.doe@example.com"
// }

// Testing with cURL:
// To test this setup, you can use the following cURL command:
// curl -X POST http://localhost:3000/api/data -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john.doe@example.com"}'

app.use(express.json());

app.post("/api/data", (req, res) => {
  // Access the parsed JSON data from req.body
  console.log(req.body);
  res.send(`Received data: ${JSON.stringify(req.body)}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
