const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const librarySchema = mongoose.Schema({
  bookName: {
    type: String
  },
  available:{
    type:String
  },
  date:{
    type:String
  },
  booking:{
    type:String
  },
  studentId:{
    type:objectId,ref:'student'
  }

},{timestamps: true});

module.exports = mongoose.model("library", librarySchema);
