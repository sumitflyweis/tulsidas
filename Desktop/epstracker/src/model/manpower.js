const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId

const manpowerSchema = mongoose.Schema({
  name: { type: String },
  post: { type: String },
  image: {
    type: String,
    default: "https://www.youtube.com/results?search_query=dubay+pathway+",
  },
  vendorId:{type:objectId,ref:"vendorProfile"}
})

const manpowerModel = mongoose.model("manpower", manpowerSchema);

module.exports = manpowerModel;
