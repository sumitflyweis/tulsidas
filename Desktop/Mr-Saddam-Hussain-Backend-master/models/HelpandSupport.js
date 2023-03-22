const mongoose = require("mongoose");

const helpSchema = new mongoose.Schema({
  data: {
    type: String,
    required: [true, "Please provide Content for About Us."],
  },
  number: {
    type: Number,
    required: [true, "Please provide Number."],
  },
  email: {
    type: String,
    required: [true, "Please provide Email!"],
  },
});

module.exports = mongoose.model("Help", helpSchema);
