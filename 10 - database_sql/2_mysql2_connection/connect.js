// Load the MySQL client
const mysql = require("mysql2");

// Define the MySQL connection URI
const uri = "mysql://root:root@localhost:3306/testdb";

// Create a connection to the MySQL server using the URI
const connection = mysql.createConnection(uri);

// Connect to the MySQL server
connection.connect(err => {
  if (err) {
    console.error("Failed to connect to MySQL:", err); // Log error message
    return;
  }
  console.log("Connected to MySQL!"); // Log success message when connected

  // Close the connection
  connection.end(err => {
    if (err) throw err;
    console.log("Connection closed.");
  });
});
