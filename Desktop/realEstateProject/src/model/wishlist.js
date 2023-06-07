const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;
const wishlistSchema = mongoose.Schema(
  {
    sellerId: {
      type: objectid,
      ref: "sellerProfile",
    },
    userId: {
      type: objectid,
      ref: "userProfile",
    },
    wish:{
      type:String,
      default:""
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("wishlist", wishlistSchema);
