const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;
const requirementSchema = mongoose.Schema(
  {
requirement:{type:String}
  },   
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("requirement", requirementSchema);
