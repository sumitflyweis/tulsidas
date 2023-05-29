const mongoose = require("mongoose");

const commonLoginSchema = mongoose.Schema({
  phone: { type: String,/* required: true, unique: true */},
  name: {
    type: String,
  },
  email: {
    type: String,
  },

  password: {
    type: String,
  },
  confirmPassword: { type: String },
  otp: { type: String },
//   Token: { type: String },
//   wallet: { type: Number },
//   country: { type: String },
//   KYC: { type: String },
//   wallet: { type: Number, default: 0 },
  image: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
  },
  role:{
    type:String,
    default:'user',
    enum: ["user", "admin","vendor"],
  }
  // bookingStatus:{
  //   type: String,
  //   default: "pending",
  //   enum: ["pending", "success"],
  // },
});



const commonLoginModel = mongoose.model("commonLogin", commonLoginSchema);

module.exports = commonLoginModel;
