const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide Topic Name!"],
  },
});

module.exports = mongoose.model("Topic", topicSchema);
