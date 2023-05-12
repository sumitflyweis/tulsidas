const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;

const ActivityMakerSchema = mongoose.Schema({
  SerialNumber: { type: Number,default:0 },
  taskName: { type: String },
  TotalTask: { type: Number ,default:0},
  Achieved: { type: Number,default:0 },
  taskAssignedTo: { type: objectid, ref: "vendorProfile" },
});
const ActivityMakerModel = mongoose.model(
  "ActivityMakerProfile",
  ActivityMakerSchema
);
module.exports = ActivityMakerModel;
