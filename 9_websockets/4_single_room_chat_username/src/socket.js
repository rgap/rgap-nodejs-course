import { Server } from "socket.io";

export const setupSocket = server => {
  const io = new Server(server);

  io.on("connection", socket => {
    console.log("A user connected");

    socket.on("joinRoom", ({ username }) => {
      console.log(`${username} joined the chat`);

      // Welcome the current user
      socket.emit("message", `Welcome to the chat, ${username}!`);

      // Broadcast when a user connects, except to the sender
      socket.broadcast.emit("message", `${username} has joined the chat`);

      // Listen for chat messages
      socket.on("chatMessage", msg => {
        io.emit("message", `${username}: ${msg}`);
      });

      // Runs when client disconnects
      socket.on("disconnect", () => {
        console.log(`${username} has left the chat`);
        io.emit("message", `${username} has left the chat`);
      });
    });
  });
};
