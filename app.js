const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

app.use(cors());
app.use(logger("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

module.exports = app;
