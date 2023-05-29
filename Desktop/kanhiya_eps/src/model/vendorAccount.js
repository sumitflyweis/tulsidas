const mongoose = require("mongoose");
const objectId=mongoose.Schema.Types.ObjectId

const vendorSchema = mongoose.Schema({
 category:{type:String},
 subCategory:{type:String},

 phone: { type: String, required: true, unique: true },
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
Token: { type: String },
wallet: { type: Number },
country:{type: String},
KYC:{type:String},
Subscription_Status: {
  type: String,
  default: "unpaid",
  enum: ["unpaid", "paid"],
},
Subscription_id:{type:objectId},
Subcription_Price:{type:Number},
option:{type: String},
paymentMethod:{type:String},
typeOfGrocery: {type:String},
like:{type:Number,default:0},
comment:{type:String},
followers:{type:Number,default:0},
vendorCategory:{type:String},
msg:{type: String},
role:{
  type:String,
  default:'vendor'
},
// bookingStatus:{
//   type: String,
//   default: "pending",
//   enum: ["pending", "success"],
// },

});

const vendorModel = mongoose.model("vendorProfile", vendorSchema);

module.exports = vendorModel;
