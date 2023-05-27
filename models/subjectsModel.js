const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subjectsSchema = new Schema(
  {
    subject: {
      type: String,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subject", subjectsSchema);
