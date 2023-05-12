const mongoose = require("mongoose");
//const objectId=mongoose.Schema.Types.ObjectId

const enquirySchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  enquiry: { type: String },
});
const enquiryModel = mongoose.model("enquiryform", enquirySchema);
module.exports = enquiryModel;
