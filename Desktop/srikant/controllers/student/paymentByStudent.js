const razerpay = require("razorpay");
const crypto = require("crypto");
const uuid = require("uuid");
const id = uuid.v4();
const payment = require("../../models/paymentByStudent");
const booking = require("../../models/booking");
//const Wallet = require("../../models/wallet");
const StudentSchema = require("../../models/student_models");
const InstituteSchema = require("../../models/institutes_model");

// const Razorpay = new razerpay({
//   key_id: "rzp_live_oe2m9rifPN1OM5",
//   key_secret: "lVgPoYfEbRchEnFISM6yJAdr",
// });

exports.CreatePaymentOrder = async (req, res) => {
  try {
    const bookingData = await booking.findById({ _id: req.params.id });

    if (!bookingData || bookingData.length == 0) {
      return res.status(500).json({
        message: "No Booking  is their",
      });
    }

    console.log(bookingData.amount);
    console.log(bookingData.studentId);
    console.log(bookingData.InstituteId);

    const studentdata = await StudentSchema.findById({
      _id: bookingData.studentId,
    });

    if (!studentdata || studentdata.length == 0) {
      return res.status(500).json({
        message: "No studentdata  is their",
      });
    }

    console.log(studentdata);

    const instituteData = await InstituteSchema.findById({
      _id: bookingData.InstituteId,
    });

    if (!instituteData || instituteData.length == 0) {
      return res.status(500).json({
        message: "No instituteData  is their",
      });
    }

    console.log(instituteData);

    // const data1 = {
    //   amount: bookingData.amount,
    //   currency: "INR",
    //   receipt: id,
    //   partial_payment: false,
    // };
    //   console.log(data1.receipt);
    //  const result1 = await Razorpay.orders.create(data1);
    // console.log(result1);

    const DBData = {
      // orderId: result1.id,
      // invoice: "123" + req.body.name,
      // amount: bookingData.userobject.wallet,
      amount: /* result1.amount,*/ bookingData.amount,
      currency: "INR",
      // receipt: data1.receipt,
      partial_payment: false,
      bookingId:bookingData._id,
      studentId: bookingData.studentId,
      InstituteId: bookingData.InstituteId,

      //  payment_Id: result1.id,
      //  amount: result1.amount,
      //  amount_paid: result1.amount_paid,
      //  receipt: result1.receipt,
      //  product: req.body.product,
      //status: req.body.status,
    };
    console.log(DBData);
    const AmountData = await payment.create(DBData);
    console.log(AmountData);
    // const AmountData = await payment.create(data1);
    bookingData.Status = "success";
    await bookingData.save();
    return res.status(200).json(AmountData);
  } catch (err) {
    console.log(err);
 return    res.status(400).send({ message: err.message });
  }
};
