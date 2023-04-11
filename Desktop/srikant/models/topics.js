const mongoose = require("mongoose");

const topicsSchema = mongoose.Schema({
  date: { type: String },
  time: { type: String },
  semester: { type: String },
  branch: { type: String },
});

module.exports = mongoose.model("topics", topicsSchema);
