const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const scheduleSchema = mongoose.Schema({
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  assignment: {
    type: String,
  },
});

module.exports = mongoose.model("schedule", scheduleSchema);
