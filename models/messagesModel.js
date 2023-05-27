const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messagesSchema = new Schema(
  {
    subject: {
      type: String,
    },
    userMessage: {
      type: String,
    },
    aiMessage: {
      type: String,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messagesSchema);
