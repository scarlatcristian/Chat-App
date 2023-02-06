const socket = io();

// Elements
const form = document.querySelector("#message-form");

socket.on("countUpdated", (count) => {
  console.log("The count has been updated!", count);
});

socket.on("helloMessage", (message) => {
  console.log(message);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = e.target.elements.message.value;
  socket.emit("sendMessage", message);

  socket.on("message", (message) => {
    console.log(message);
  });
});
