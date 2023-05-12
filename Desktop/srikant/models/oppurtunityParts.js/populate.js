const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const menuSchema = mongoose.Schema({
  part: {
    type: String,
    require: true,
  },
  subpart: {
    type: [objectId],
    ref: "Submenu",
  },
  image: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
  },
});

module.exports = mongoose.model("menu", menuSchema);
