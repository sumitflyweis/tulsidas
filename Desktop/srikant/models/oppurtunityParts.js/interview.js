const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const interviewSchema = mongoose.Schema({
  data: {
    type: String,
  },
  });

module.exports = mongoose.model("interview", interviewSchema);
