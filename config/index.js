module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI:
    process.env.MONGO_URI ||
    "mongodb://localhost/mern-socket-io-realtime-chat-app",
  JWT_SECRET: process.env.JWT_SECRET || "thisisjwtsecret",
  NODE_ENV: process.env.NODE_ENV || "development",
};
