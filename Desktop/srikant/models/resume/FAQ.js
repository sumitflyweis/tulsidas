const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;
const FAQSchema = mongoose.Schema(
  {
FAQ:{type:String}
  },   
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FAQ", FAQSchema);
