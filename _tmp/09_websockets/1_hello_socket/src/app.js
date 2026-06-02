import express from "express";
import http from "http";
import { Server } from "socket.io";
import viewsRoute from "./routes/views.route.js";
import { __dirname } from "./utils.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the public directory
app.use(express.static(__dirname + "/public"));

// Use the views route for handling specific routes
app.use("/", viewsRoute);

// Socket.IO connection
io.on("connection", socket => {
  console.log("User connected");

  // Send a message to the client
  socket.emit("hello", "Hello World from the Server!");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Export the server instance for `index.js` to use
export default server;
