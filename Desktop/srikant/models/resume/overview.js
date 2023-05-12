const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;
const overviewSchema = mongoose.Schema(
  {
overview:{type:String}
  },   
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("overview", overviewSchema);
