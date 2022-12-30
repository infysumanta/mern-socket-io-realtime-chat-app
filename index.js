require("dotenv").config();
require("./config/db").connectDB();
const app = require("./app");
const config = require("./config");

const server = app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT} 🔥`);
});

const io = require("socket.io")(server, {
  pingTimeout: 60 * 1000,
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  socket.on("setup", (userData) => {
    console.log("connected", userData._id);
    socket.join(userData._id);
    socket.emit("connected");
  });
});
