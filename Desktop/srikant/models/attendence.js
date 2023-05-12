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
  month: {
    type: String,
    //required: true
  },
  presentDays: {
    type: Number,
    default: 0
  },
  absentDays: {
    type: Number,
    default: 0
  },
  StudentId:{type:objectId,ref:'student'}
});

module.exports = mongoose.model("attendence", attendenceSchema);



