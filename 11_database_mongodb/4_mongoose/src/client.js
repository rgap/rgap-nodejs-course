import mongoose from "mongoose";

// Define the MongoDB connection URI
const uri = "mongodb://localhost:27017/testdb"; // Replace 'testdb' with your database name

// Create a connection to MongoDB
mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB!")) // Log success message when connected
  .catch(err => console.error("Failed to connect to MongoDB:", err)); // Log error message if connection fails

// Export the mongoose instance for use in other parts of the application
export default mongoose;
