// 2_file_compression/server.js

/**
 * 🌐 Express Server that Serves Pre-Compressed Assets (gzip)
 *
 * This server checks the client's `Accept-Encoding` header and,
 * if gzip is supported, serves the `.gz` version of the requested file.
 *
 * 🛠️ Use Case:
 * - Efficient static file delivery in production
 * - Works well with pre-built JS/CSS/HTML that were gzip-compressed
 */

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// 🔁 Serve `app.js.gz` if client supports gzip
app.get("/assets/app.js", (req, res) => {
  const supportsGzip = req.headers["accept-encoding"]?.includes("gzip");

  if (supportsGzip) {
    const gzipPath = path.join(__dirname, "assets", "app.js.gz");

    // Serve compressed version with correct headers
    res.set("Content-Encoding", "gzip");
    res.set("Content-Type", "application/javascript");
    fs.createReadStream(gzipPath).pipe(res);
  } else {
    const rawPath = path.join(__dirname, "assets", "app.js");

    // Serve original uncompressed
    res.set("Content-Type", "application/javascript");
    fs.createReadStream(rawPath).pipe(res);
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ▶️ Launch the server
app.listen(PORT, () => {
  console.log(`📡 Server listening at http://localhost:${PORT}`);
});
