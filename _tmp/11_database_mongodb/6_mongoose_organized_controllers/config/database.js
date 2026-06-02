import mongoose from "mongoose";

// Create a connection to MongoDB
const uri = "mongodb://localhost:27017/testdb"; // Replace 'testdb' with your database name

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
