// Load the MongoDB client
const { MongoClient } = require("mongodb");

// Define the MongoDB connection URI
const uri = "mongodb://localhost:27017/testdb"; // Replace 'testdb' with your database name

// Async function to handle the database operations
async function run() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db(); // Get the database
    const collection = db.collection("users"); // Replace 'users' with your collection name

    // Query the collection
    const results = await collection.find({}).toArray(); // Replace '{}' with your query filter if needed

    // Process the results
    console.log("User data:", results);
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err); // Log error message
  } finally {
    // Ensure the connection is closed
    await client.close();
    console.log("Connection closed.");
  }
}

// Run the async function
run();
