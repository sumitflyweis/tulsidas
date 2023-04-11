const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const internshipSchema = mongoose.Schema({
  data: {
    type: String,
  },
  });

module.exports = mongoose.model("internship", internshipSchema);
