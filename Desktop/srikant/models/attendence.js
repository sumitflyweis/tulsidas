const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const attendenceSchema = mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  present:{
    type:String,
  },
  StudentId:{type:objectId,ref:'student'}
});

module.exports = mongoose.model("attendence", attendenceSchema);
