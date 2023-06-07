const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
//   phone: { type: String, require: false },
//   google_id: { type: String },

  email: {
    type: String,
    default:""
  },

  password: {
    type: String,
    default:""
  },
  RePassword: {
     type: String,
     default:""
   },
  firstName:{
    type:String,
    default:""
  },
  middleName:{
    type:String,
    default:""
  },
  lastName:{
    type:String,
    default:""
  },
  phone:{
    type:String,
    default:""
  },
  country:{
    type:String,
    default:""
  },
  state:{
    type:String,
    default:""
  },
  district:{
    type:String,
    default:""
  },
  pincode:{
    type:String,
    default:""
  },
  otp:{
    type:String,
    default:""
  },

});

const userModel = mongoose.model("userProfile", userSchema);

module.exports = userModel;
