import express from "express";

const app = express();

// Middleware to parse URL-encoded bodies
// Theory:
// URL-encoded data is commonly used for form submissions in web applications.
// The data is encoded as key-value pairs, where keys and values are URL-encoded.
// The express.urlencoded() middleware parses this URL-encoded data and makes it
// accessible via req.body. The extended option allows for richer data structures
// (e.g., nested objects) to be encoded and parsed.

// Example:
// If a client sends a POST request to /form-submit with the following form data:
// name=Jane+Doe&email=jane.doe%40example.com
// The express.urlencoded() middleware will parse this data and set req.body to:
// {
//   "name": "Jane Doe",
//   "email": "jane.doe@example.com"
// }
// With extended: true, it can also parse nested objects like:
// colors[primary]=blue&colors[secondary]=green
// Resulting in:
// {
//   "colors": {
//     "primary": "blue",
//     "secondary": "green"
//   }
// }

// Testing with cURL:
// To test this setup, you can use the following cURL command:
// curl -X POST http://localhost:3000/form-submit -d "name=Jane Doe&email=jane.doe@example.com"

app.use(express.urlencoded({ extended: true }));

app.post("/form-submit", (req, res) => {
  // Access the parsed form data from req.body
  console.log(req.body);
  res.send(`Form submitted: ${JSON.stringify(req.body)}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
