import app from "./src/app.js"; // Import the main app from src/app.js

// Define the port to listen on
const port = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
