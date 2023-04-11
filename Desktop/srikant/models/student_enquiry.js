const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const studentEnquirySchema = mongoose.Schema({
  studentId: {
    type: objectId,
    ref:"student"
  },
  rollno: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  branch: {
    type: String,
  },
  query: {
    type: String,
  },
});

module.exports = mongoose.model("studentEnquiry", studentEnquirySchema);
