// Load the MongoDB client
const { MongoClient } = require("mongodb");

// Define the MongoDB connection URI
const uri = "mongodb://localhost:27017/testdb";

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB!"); // Log success message when connected
    return client.close(); // Close the connection
  })
  .then(() => {
    console.log("Connection closed."); // Log message after connection is closed
  })
  .catch(err => console.error("Failed to connect to MongoDB:", err)); // Log error message
