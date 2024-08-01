import express from "express";
import fs from "fs/promises"; // Import fs from fs/promises to use Promises
import path from "path";
import { fileURLToPath } from "url";
import { __dirname } from "./utils.js";

const app = express();

// File path to be used for create and read operations
const filePath = path.join(__dirname, "example.txt");

// Route to create and write to a file using fs.promises
app.get("/create-file", async (req, res) => {
  const content = "Hello, this is a sample file content!";

  try {
    // Create and write content to the file
    await fs.writeFile(filePath, content);
    res.send("File created successfully using fs.promises.");
  } catch (err) {
    res.status(500).send("Error writing file: " + err.message);
  }
});

// Route to read the content of the file using fs.promises
app.get("/read-file", async (req, res) => {
  try {
    // Read the content of the file asynchronously
    const data = await fs.readFile(filePath, "utf8");
    res.send(`File content: ${data}`);
  } catch (err) {
    res.status(500).send("Error reading file: " + err.message);
  }
});

// Testing:
// 1. Start the server: node create_and_read_file_promises.js
// 2. Navigate to http://localhost:3000/create-file to create the file.
// 3. Navigate to http://localhost:3000/read-file to read the file's content.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
 * Difference between fs.promises and fs (callbacks):
 *
 * 1. Both are asynchronous:
 *    - Both `fs.promises` and the traditional `fs` methods are asynchronous, meaning they don't block
 *      the main thread while waiting for I/O operations to complete.
 *
 * 2. fs.promises:
 *    - Uses promises to handle asynchronous operations, allowing the use of `async/await`.
 *    - This results in cleaner, more readable code with centralized error handling using `try/catch` blocks.
 *    - Each method in `fs.promises` returns a promise that resolves with the result of the operation or rejects
 *      with an error.
 *
 * 3. fs (callbacks):
 *    - Uses callbacks to handle asynchronous operations, where results and errors are handled in callback functions.
 *    - This can lead to "callback hell" if there are multiple nested operations, making the code harder to read and maintain.
 *    - Error handling is less structured and can be prone to errors if not handled properly in each callback.
 *
 * In summary, while both methods are asynchronous, `fs.promises` offers a more modern and structured way to handle
 * asynchronous I/O operations using promises and the `async/await` syntax, improving code readability and error handling.
 */
