const mongoose = require("mongoose");

const transSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    amount: {
      type: Number,
      required: [true, "Amount is required!"],
    },
    paymentStatus: {
      type: String,
      enum: ["successful", "pending", "failed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Transaction", transSchema);
