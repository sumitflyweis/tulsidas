const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  // phone: { type: String, require: false },
  // google_id: { type: String },
  name: {
    type: String,
    default:""
  },
  // age: {
  //   type: String,
  // },
  // address: {
  //   type: String,
  //   default:""
  // },
  // language: {
  //   type: String,
  //   default:""
  // },
  // location: {
  //   type: String,
  //   default:""
  // },
  email: {
    type: String,
    default:""
  },

  password: {
    type: String,
    default:""
  },
  confirmPassword: {
     type: String,
     default:""
   },
  //  emergencyContactNumber:{
  //   type:String,
  //   default:""
  //  },
  //  status:{
  //   type:String,
  //   default:"pending",
  //  },
  otp: { 
    type: String 
  },
  // Token: { 
  //   type: String 
  // },
  // profileImage: {
  //   type: String,
  //   default:
  //     "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
  // },
  // gender:{
  //   type:String,
  //   default:""
  // },
  // dateOfBirth:{
  //   type:String,
  //   default:""
  // },
  // bloodGroup:{
  //   type:String,
  //   default:""
  // },
  // plan:{
  //   type:String,
  //   default:""
  // },
  

});

const userModel = mongoose.model("userProfile", userSchema);

module.exports = userModel;
