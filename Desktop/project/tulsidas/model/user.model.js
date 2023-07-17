const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
var userSchema = mongoose.Schema(
  {
    firstName : {
      type: String,
    },
    middleName : {
      type: String,
    },
    lastName : {
      type: String,
    },
    phone : {
      type: String,
      default: "",
    },
    otp : {
      type: String,
    },
    otpExpiration: {
      type : Date,
    },
    accountVerification: {
      type: Boolean,
      default: false,
    },
    DOB : {
      type: String,
    },
    gender : {
      type: String,
      enum : ["male", "female", "other"],
      default : "male",
    },
    martial: {
      type: String,
      enum: ["single", "married", "divorce", "widow"],
      default: "single",
    },
    uploadSelfie : {
      type: String,
    },
    userType: {
      type: String,
      enum: ["USER", "VENDOR", "ADMIN"],
    },
    status: {
      type: String,
      enum: ["Approved", "Reject", "Pending"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);

// companyName: {
//   type: String,
// },
// customerSupportNo: {
//   type: String,
// },
// customerRegistrationNo: {
//   type: String,
// },
// GST: {
//   type: String,
// },
// typeOfProducts:{
//   type:Array
// },
/////////////////////////////////////////
// fullName: {
//   type: String,
//   default: "",
// },
// currentLocation: {
//   type: {
//     type: String,
//     default: "Point",
//   },
//   coordinates: {
//     type: [Number],
//     default: [0, 0],
//   },
// },
// wallet: {
//   type: Number,
//   default: 0,
// },

///////////////////////////////////////////////
// uploadSelfie: {
//   type: String,
// },
// pancard: {
//   type: String,
// },
// uploadPanCard: {
//   type: String,
// },
// aadharCard: {
//   type: String,
// },
// frontSide: {
//   type: String,
// },
// backSide: {
//   type: String,
// },
// document: {
//   type: String,
// },
//////////////////////////////////////////
// BankName: {
//   type: String,
//   default: "",
// },
// BranchName: {
//   type: String,
//   default: "",
// },
// AccountNumber: {
//   type: String,
//   default: "",
// },
// confirmAccountNumber: {
//   type: String,
//   default: "",
// },
// ifscCode: {
//   type: String,
//   default: "",
// },
//////////////////////////////////////////////
// referalCodeUnique: {
//   type: String,
//   default: "",
// },
// referalCode: {
//   type: String,
//   default: "",
// },
// referalBy: {
//   type: objectId,
//   ref: "user",
// },
// referalData: [],
///////////////////////////////////////////////////
// Coin: {
//   type: Number,
//   default: 0,
// },
///////////////////////////////////////////////////
// subscriptionId: {
//   type: objectId,
//   ref: "Subscription",
// },
// subscriptionExpiration: {
//   type: Date,
// },
// subscriptionVerification: {
//   type: Boolean,
//   default: false,
// },
