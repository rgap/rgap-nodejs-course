// 🟢 Express app that connects to MySQL
const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3000;

// Use env vars passed from docker-compose
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "compose_test",
});

app.get("/", async (req, res) => {
  try {
    const connection = await pool.getConnection();

    // Insert a new visit timestamp
    await connection.query("INSERT INTO visits () VALUES ()");

    // Count total visits
    const [rows] = await connection.query("SELECT COUNT(*) AS count FROM visits");
    const count = rows[0].count;

    res.send(`👋 This page has been visited ${count} times.`);

    connection.release();
  } catch (error) {
    console.error("❌ DB Error:", error);
    res.status(500).send("Database error");
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
