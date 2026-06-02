import app from "./src/app.js"; // Import the main application from the src directory

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
 * How to test:
 * 1. Start the server: Run the script using `node index.js`.
 * 2. Open a web browser or use a tool like cURL or Postman to test the route with a URL parameter:
 *    - Navigate to http://localhost:3000/users/123 to see the response with User ID: 123.
 *    - Replace 123 with any other value to test with different user IDs.
 */
