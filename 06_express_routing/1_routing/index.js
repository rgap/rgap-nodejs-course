import app from "./src/app.js"; // Import the main application from the src directory

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
 * How to test:
 * 1. Start the server: Run the script using `node index.js`.
 * 2. Open a web browser or use a tool like cURL or Postman to test the different routes:
 *    - Home Page: Navigate to http://localhost:3000/ to see the "Home Page" response.
 *    - About Page: Navigate to http://localhost:3000/about to see the "About Page" response.
 *    - Contact Page: Navigate to http://localhost:3000/contact to see the "Contact Page" response.
 * 3. Verify that each route returns the expected response body.
 */
