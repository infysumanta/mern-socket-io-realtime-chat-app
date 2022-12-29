const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const chats = require("./data/data");

const app = express();

app.use(cors());
app.use(logger("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

module.exports = app;
