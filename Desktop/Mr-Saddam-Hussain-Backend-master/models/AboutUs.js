const mongoose = require("mongoose");

const AboutusSchema = new mongoose.Schema({
  data: {
    type: String,
    required: [true, "Please provide Content for About Us."],
  },
});

module.exports = mongoose.model("About", AboutusSchema);
