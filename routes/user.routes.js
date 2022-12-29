const express = require("express");
const {
  registerUser,
  loginUser,
  allUsers,
} = require("../controllers/user.controller");
const { authProtect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/").get(authProtect, allUsers);

module.exports = router;
