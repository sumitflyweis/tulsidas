const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
  {
    // UserId: { type: String },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "customerProfile",
     // unique: true   
    },
    vendor: {
      type: mongoose.Schema.ObjectId,
      ref: "vendorProfile",
     // unique: true   
    },
  
    
   balance:{ type: Number, default: 0 },
   addbalance: { type: Number, default: 0 },
   removebalance: { type: Number, default: 0 },
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wallet", walletSchema);