const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const messageToAllFollowersSchema = mongoose.Schema({
  msg: { type: String },
  Subscription_Status: { type: String },
  Subcription_Price: { type: Number },
  vendorID: { type: objectId, ref: "vendorProfile" },
 
});

const messageModel = mongoose.model(
  "messageToAllFollowers",
  messageToAllFollowersSchema
);

module.exports = messageModel;
