const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;

const paymentSchema = mongoose.Schema({
  payment_Id: {
    type: String,
  },
  amount: {
    type: Number,
    // required: true
  },
  status: {
    type: Boolean,
    default: false,
  },
  receipt: {
    type: String,
    // required: true
  },
  amount_paid: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    // required: true
  },

  date: {
    type: Date,
    default: Date.now(),
  },
  paymentMethod: {
    type: String,
    default: "upi",
    enum: [
      "upi",
      "DebitCard",
      "Debitcard",
      "debitcard",
      "creditcard",
      "CreditCard",
    ],
  },
  product: {
    type: String,
  },
  orderStatus: {
    type: String,
    default: "In Progress",
    enum: ["Cancelled", "In Progress", "Ordered"],
  },
  bookingId:{type:objectid , ref:"bookings"},
  studentId: { type: objectid, ref: "student" },
  InstituteId: { type: objectid,ref:"institutes" },
  orderId: { type: String },
});

const payment = mongoose.model("payment", paymentSchema);

module.exports = payment;
