const jwt = require("jsonwebtoken");
const config = require(".");

const generateToken = (id) => {
  return jwt.sign({ id }, config.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = generateToken;
