const mongoose = require("mongoose");

const TermsandCond = new mongoose.Schema(
  {
    data: {
      type: String,
      trim: true,
      required: [true, "Data is required"],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TermsAndCond", TermsandCond);
