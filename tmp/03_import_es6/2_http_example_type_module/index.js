import http from "node:http";

const server = http.createServer((req, res) => {});

server.listen(8080, () => {
  console.log("Server running");
});
