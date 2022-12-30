const express = require("express");
const {
  accessChat,
  fetchChat,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chat.controller");
const { authProtect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(authProtect, accessChat).get(authProtect, fetchChat);

router
  .route("/group/save")
  .post(authProtect, createGroupChat)
  .get((req, res) => res.send("hi"));
router.route("/group/rename").put(authProtect, renameGroup);
router.route("/group/add").put(authProtect, addToGroup);
router.route("/group/remove").put(authProtect, removeFromGroup);

module.exports = router;
