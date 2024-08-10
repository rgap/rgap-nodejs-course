// Load the MySQL client
const mysql = require("mysql2");

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "beautipol",
});

// Connect to the MySQL server
connection.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL!");

  // Query the database
  const query = "SELECT * FROM user"; // Replace 'users' with your table name
  connection.query(query, (err, results, fields) => {
    if (err) throw err;

    // Process the results
    console.log("User data:", results);

    // Close the connection
    connection.end(err => {
      if (err) throw err;
      console.log("Connection closed.");
    });
  });
});
