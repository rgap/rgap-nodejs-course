import User from "./mongoose/schema.js";
import mongoose from "./src/client.js";

// Function to perform a sample database operation
async function run() {
  try {
    // Connect to the database
    await mongoose.connection;

    // Query the database
    const users = await User.find({});
    console.log("User data:", users);
  } catch (err) {
    console.error("Database operation failed:", err);
  } finally {
    // Close the connection
    await mongoose.disconnect();
    console.log("Connection closed.");
  }
}

// Run the function
run();
