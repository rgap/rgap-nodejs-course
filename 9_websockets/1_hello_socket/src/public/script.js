const socket = io(); // Use the global io() provided by the script

socket.on("hello", message => {
  document.getElementById("message").innerText = message;
});
