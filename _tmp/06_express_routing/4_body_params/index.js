import app from "./src/app.js"; // Import the main application from the src directory

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
 * How to test:
 * 1. Start the server: Run the script using `node index.js`.
 * 2. Use a tool like cURL or Postman to send a POST request to test the body parameter handling:
 *    - Example cURL command:
 *      curl -X POST http://localhost:8080/data -H "Content-Type: application/json" -d '{"name": "John", "age": 30}'
 *    - This should return a response with the received JSON data.
 */
