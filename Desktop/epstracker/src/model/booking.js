const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;

const BookingSchema = mongoose.Schema({
  vendorId: { type: objectid, ref: "vendorProfile" },
  vendor: { type: Object },

  user: { type: Object },
  userId: { type: objectid, ref: "customerProfile" },
  Status: {
    type: String,
    default: "pending",
    enum: ["pending", "success"],
  },
  amount: { type: Number, default: 0 },
});
const BookingModel = mongoose.model("BookingProfile", BookingSchema);
module.exports = BookingModel;
