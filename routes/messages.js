const express = require("express");
const {
  createMessage,
  getMessages,
  getMessage,
  deleteMessage,
} = require("../controllers/messageController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all subjects routes
router.use(requireAuth);

// GET all messages
router.get("/", getMessages);

// GET a single message
router.get("/:id", getMessage);

// POST a new message
router.post("/", createMessage);

// Delete a Message
router.delete("/:id", deleteMessage);

module.exports = router;
