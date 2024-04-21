const express = require("express");
const protect = require("../middleware/authMiddleWare");
const accessChat = require("../controllers/chatControllers");
const router = express.Router();
router.route("").post(protect, accessChat).get(protect, fetchChat);
router.route("/group").get(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupRemove").put(protect, removeFromGp);
router.route("/groupadd").put(protect, addGp);

module.exports = router;
