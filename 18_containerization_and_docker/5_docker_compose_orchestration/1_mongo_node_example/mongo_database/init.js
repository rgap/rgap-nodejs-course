// 📜 Mongo init script (run during container startup)

// This script inserts an initial document into the "visits" collection
db = db.getSiblingDB("compose-test"); // creates and uses the DB

// Create the "visits" collection
db.createCollection("visits");

// Insert initial data into the "visits" collection
db.visits.insertMany([
  { time: new Date(), message: "Seed visit 1" },
  { time: new Date(), message: "Seed visit 2" },
]);
