const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;

const attendenceSchema = mongoose.Schema({
  image: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
  },
  status: { type: String },
  vendorId: { type: objectid, ref: "vendorProfile" },
  vendorname: { type: String },
  vendorCategory: { type: String },
  In: { type: String },
  Out: { type: String },
});
const attendenceModel = mongoose.model("attendence", attendenceSchema);
module.exports = attendenceModel;
