// 2_file_compression/compress_file.js

/**
 * 🌐 Compress Static Web Asset using Gzip
 *
 * This script compresses a static web file (e.g., HTML, CSS, JS)
 * using Node.js streams and outputs a `.gz` version.
 *
 * 📦 Common Use Cases:
 * - Precompress assets like `style.css`, `app.js`, or `index.html`
 * - Deploy compressed files to a CDN or static host (e.g., S3 + CloudFront)
 * - Archive web logs or HTML snapshots efficiently
 *
 * 💡 Gzipped files are typically served with:
 *   - `Content-Encoding: gzip` header
 *   - Matching `Content-Type` (e.g., text/html or text/css)
 */

const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

// 🔧 Customize the input file
const inputFile = "assets/app.js"; // or "public/index.html"
const outputFile = `${inputFile}.gz`;

const input = fs.createReadStream(inputFile);
const output = fs.createWriteStream(outputFile);

// Pipe the input through gzip and write to output
input.pipe(zlib.createGzip()).pipe(output);

output.on("finish", () => {
  console.log(`✅ Compressed: ${outputFile}`);
});
