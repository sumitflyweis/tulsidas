const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  username: {
    type: String,
  },
  email:{
    type:String
  },
  image: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
  },
  password: {
    type: String,
  },
  confirmpassword:{
    type:String,
  },
  role:{
    type:String,
    // default:"admin"
  },
  otp:{
    type:Number,
    default:""
  }
});

module.exports = mongoose.model("admin", authSchema);
