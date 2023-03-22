const mongoose = require("mongoose");

const kycSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    document: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("KYC", kycSchema);
