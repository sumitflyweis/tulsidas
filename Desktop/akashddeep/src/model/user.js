const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  phoneNumber: { type: String, require: false },
  google_id: { type: String },
  FullName: {
    type: String,
  },
  email: {
    type: String,
  },

//   password: {
//     type: String,
//   },
//   confirmPassword: { type: String },
  otp: { type: String },
  Token: { type: String },
//   profileImage: {
//     type: String,
//     default:
//       "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
//   },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
