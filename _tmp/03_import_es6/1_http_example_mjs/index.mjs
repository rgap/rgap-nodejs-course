// This is a modern approach enabled by the ES module system, which can be indicated by either using
// the .mjs file extension or setting "type": "module" in the package.json file

import http from "node:http";

const server = http.createServer((req, res) => {});

server.listen(8080, () => {
  console.log("Server running");
});
