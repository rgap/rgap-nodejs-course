// Load the MySQL client with Promises
const mysql = require("mysql2/promise");

async function main() {
  // Create a connection to the MySQL server
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "beautipol",
  });

  console.log("Connected to MySQL!");

  try {
    // Query the database using async/await
    const [rows, fields] = await connection.execute("SELECT * FROM user"); // Replace 'users' with your table name

    // Process the results
    console.log("User data:", rows);
  } catch (err) {
    // Handle any errors that occur during the query
    console.error("An error occurred:", err.message);
  } finally {
    // Close the connection
    await connection.end();
    console.log("Connection closed.");
  }
}

main().catch(err => console.error(err));
