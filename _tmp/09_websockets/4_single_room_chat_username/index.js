import { createServer } from "http";
import app from "./src/app.js";
import { setupSocket } from "./src/socket.js";

// Create the HTTP server
const server = createServer(app);

// Setup Socket.IO with the server
setupSocket(server);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
