// This will throw the error
// (node:17273) Warning: To load an ES module, set "type": "module"
// in the package.json or use the .mjs extension

import http from "node:http";

const server = http.createServer((req, res) => {});

server.listen(8080, () => {
  console.log("Server running");
});
w