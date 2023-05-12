const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;
const lessonsSchema = mongoose.Schema(
  {
lessons:{
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
  }
  }, 
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("lessons", lessonsSchema);
