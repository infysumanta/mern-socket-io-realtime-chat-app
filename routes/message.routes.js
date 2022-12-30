const express = require("express");
const {
  sendMessage,
  allMessageForChat,
} = require("../controllers/message.controller");
const { authProtect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(authProtect, sendMessage);
router.route("/:chatId").get(authProtect, allMessageForChat);

module.exports = router;
