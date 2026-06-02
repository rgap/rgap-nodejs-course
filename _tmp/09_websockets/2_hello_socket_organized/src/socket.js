// src/socket.js
import { Server } from "socket.io";

export const setupSocket = server => {
  const io = new Server(server);

  io.on("connection", socket => {
    console.log("A user connected");

    // Emit a welcome message to the connected client
    socket.emit("hello", "Hello World!");

    // Log a message when the client disconnects
    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};
