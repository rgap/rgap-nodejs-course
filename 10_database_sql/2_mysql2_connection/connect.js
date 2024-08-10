// Load the MySQL client
const mysql = require("mysql2");

// Define the MySQL connection URI
const uri = "mysql://root:root@localhost:3306/beautipol";

// Create a connection to the MySQL server using the URI
const connection = mysql.createConnection(uri);

// Connect to the MySQL server
connection.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});
