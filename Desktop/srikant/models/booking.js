const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;
const bookingSchema = mongoose.Schema(
  {
    InstituteId: { type: objectid, ref: "institutes" },
    insttuteobject: { type: Object },
    Date: { type: String, default: new Date() },
    studentId: { type: objectid, ref: "student" },
    studentobject: { type: Object },
    Status: {
      type: String,
      default: "pending",
      enum: ["pending", "success", "ongoing"],
    },
    amount: { type: Number, default: 0 },
    payment: {
      type: String,
      enum: ["online", "cash"],
      default: "online",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("bookings", bookingSchema);
