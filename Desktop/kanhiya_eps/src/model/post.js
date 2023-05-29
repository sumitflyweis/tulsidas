const mongoose = require("mongoose");
const objectId=mongoose.Schema.Types.ObjectId

const postSchema = mongoose.Schema({
  vendorId:{type:objectId,ref:"vendorProfile"},
  name: { type: String },
  date: { type: String },
  comment: { type: String },
  like: { type: Number ,default:0},
  dislike: { type: Number ,default:0},
  image: {
    type: String, 
    default: "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg"
},
});

const postModel = mongoose.model("post",postSchema);
module.exports = postModel;
