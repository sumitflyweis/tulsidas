const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const seminarSchema = mongoose.Schema({
  data: {
    type: String,
  },
  });

module.exports = mongoose.model("seminar", seminarSchema)
