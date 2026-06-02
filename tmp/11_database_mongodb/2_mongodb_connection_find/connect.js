// Load the MongoDB client
const { MongoClient } = require("mongodb");

// Define the MongoDB connection URI
const uri = "mongodb://localhost:27017/testdb"; // Replace 'testdb' with your database name

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB!"); // Log success message when connected

    const db = client.db(); // Get the database
    const collection = db.collection("users"); // Replace 'users' with your collection name

    // Query the collection
    return collection.find({}).toArray(); // Replace '{}' with your query filter if needed
  })
  .then(results => {
    // Process the results
    console.log("User data:", results);

    // Close the connection
    return client.close();
  })
  .then(() => {
    console.log("Connection closed."); // Log message after connection is closed
  })
  .catch(err => console.error("Failed to connect to MongoDB:", err)); // Log error message
