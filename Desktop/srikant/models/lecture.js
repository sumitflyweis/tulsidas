const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const lectureSchema = mongoose.Schema({
  vedio: {
    type: String,
    default:"https://www.youtube.com/watch?v=jYJDvM3oLcE"
  },
  percentage:{
    type:String
  },
  subject:{
    type:String
  },
  name:{
    type:String
  },
  year:{
    type:String
  },
  semester:{
    type:String
  },
  duration:{
    type:String
  },
  desc:{
    type:String
  },
 

},{timestamps: true});

module.exports = mongoose.model("lecture", lectureSchema);
