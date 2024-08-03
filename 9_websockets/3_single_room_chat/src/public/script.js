const socket = io();

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
