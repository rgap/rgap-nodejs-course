const mongoose = require("mongoose");

// Define the User Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Create the User Model
const User = mongoose.model("User", userSchema);

module.exports = User;
