import { Server } from "socket.io";

export const setupSocket = server => {
  const io = new Server(server);

  io.on("connection", socket => {
    console.log("A user connected");

    // Welcome the current user
    socket.emit("message", "Welcome to the chat!");

    // Broadcast when a user connects, except to the sender
    socket.broadcast.emit("message", "A user has joined the chat");

    // Listen for chat messages
    socket.on("chatMessage", msg => {
      io.emit("message", msg);
    });

    // Runs when client disconnects
    socket.on("disconnect", () => {
      console.log("A user disconnected");
      io.emit("message", "A user has left the chat");
    });
  });
};
