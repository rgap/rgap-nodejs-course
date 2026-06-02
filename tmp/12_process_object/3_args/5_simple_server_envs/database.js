/**
 * 🧠 THEORY: MongoDB Connection using Mongoose
 *
 * Mongoose is an ODM (Object Data Modeling) library for MongoDB in Node.js.
 * This file isolates database setup from the main server logic.
 */

import { connect } from "mongoose";

/**
 * 🔗 Connect to MongoDB using the connection string from `.env`
 */
export const initMongoDB = async () => {
  try {
    await connect(process.env.MONGO_URL);
  } catch (error) {
    throw new Error(error); // Rethrow so the caller (server.js) can handle it
  }
};
