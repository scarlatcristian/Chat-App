const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");
const Filter = require("bad-words");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectory = path.join(__dirname, "../public");

app.use(express.static(publicDirectory));

io.on("connection", (socket) => {
  let count = 0;
  console.log("New Websocket connection");

  count++;
  socket.emit("countUpdated", count);

  socket.emit("helloMessage", "Hello, nice to meet you!");

  socket.on("sendMessage", (message) => {
    io.emit("message", message);
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
