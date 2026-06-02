// src/public/script.js
const socket = io();

document.getElementById("join").addEventListener("click", () => {
  const username = document.getElementById("username").value;

  if (username.trim()) {
    // Emit joinRoom event with username
    socket.emit("joinRoom", { username });

    // Display chat container and hide join section
    document.getElementById("chat-container").style.display = "block";
    document.getElementById("join").style.display = "none";

    // Listen for messages from the server
    socket.on("message", message => {
      const div = document.createElement("div");
      div.textContent = message;
      document.getElementById("messages").appendChild(div);
    });

    // Send message to the server
    document.getElementById("sendMessage").addEventListener("click", () => {
      const msg = document.getElementById("messageInput").value;
      if (msg.trim()) {
        socket.emit("chatMessage", msg);
        document.getElementById("messageInput").value = "";
      }
    });
  }
});
