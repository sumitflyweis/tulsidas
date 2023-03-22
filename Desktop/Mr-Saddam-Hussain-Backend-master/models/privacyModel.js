const mongoose = require("mongoose");

const privcaySchema = new mongoose.Schema({
  data: {
    type: String,
    required: [true, "Please provide Content for privacy"],
  },
});

module.exports = mongoose.model("Privacy", privcaySchema);
