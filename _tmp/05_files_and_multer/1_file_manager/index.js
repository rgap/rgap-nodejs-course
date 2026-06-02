import express from "express";
import fs from "fs";
import path from "path";
import { __dirname } from "./utils.js";

const app = express();

// File path to be used for create and read operations
const filePath = path.join(__dirname, "example.txt");

// Route to create and write to a file
app.get("/create-file", (req, res) => {
  fs.writeFile(filePath, "Hello, this is a sample file content!", err => {
    if (err) {
      return res.status(500).send("Error writing file.");
    }
    res.send("File created successfully.");
  });
});

// Route to read the content of the file
app.get("/read-file", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file.");
    }
    res.send(`File content: ${data}`);
  });
});

// Prueba:
// 1. Inicia el servidor
// 2. Navega a http://localhost:3000/create-file para crear el archivo.
// 3. Navega a http://localhost:3000/read-file para leer el contenido del archivo.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
