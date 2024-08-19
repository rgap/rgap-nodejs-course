import mongoose from "mongoose";

// This file defines your Mongoose schema for the User model
// Mongoose uses this schema to generate the corresponding MongoDB collections and
// to provide an interface for interacting with the database through the User model.

// Define a Mongoose schema for the User model
const userSchema = new mongoose.Schema({
  name: {
    type: String, // 'name' field of type String
    required: true, // 'name' field is required
  },
  email: {
    type: String, // 'email' field of type String
    required: true, // 'email' field is required
    unique: true, // 'email' field must be unique
  },
  createdAt: {
    type: Date, // 'createdAt' field of type Date
    default: Date.now, // 'createdAt' field has a default value of the current date
  },
  updatedAt: {
    type: Date, // 'updatedAt' field of type Date
    // 'updatedAt' field will be set to the current date using a pre-save hook
  },
});

// Pre-save hook to update the 'updatedAt' field before saving the document
userSchema.pre("save", function (next) {
  this.updatedAt = Date.now(); // Update the 'updatedAt' field to the current date
  next(); // Continue to the next middleware or save operation
});

// Create a Mongoose model based on the schema
const User = mongoose.model("User", userSchema);

// Export the User model for use in other parts of the application
export default User;
