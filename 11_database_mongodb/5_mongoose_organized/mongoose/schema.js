import mongoose from "mongoose";

// Define a Mongoose schema for the User model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // 'name' field of type String, required
  email: { type: String, required: true, unique: true }, // 'email' field of type String, required, and must be unique
  createdAt: { type: Date, default: Date.now }, // 'createdAt' field with a default value of the current date
  updatedAt: { type: Date }, // 'updatedAt' field without a default value
});

// Pre-save hook to update the 'updatedAt' field before saving the document
userSchema.pre("save", function (next) {
  this.updatedAt = Date.now(); // Update the 'updatedAt' field to the current date
  next(); // Continue to the next middleware
});

// Create a Mongoose model based on the schema
const User = mongoose.model("User", userSchema);

// Export the User model for use in other parts of the application
export default User;
