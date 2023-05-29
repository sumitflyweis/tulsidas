const path = require("path");
require("dotenv").config();
// const rasor = require("../../model/CustomerAccount");
const vendorAccount = require("../../model/vendorAccount");
const subscription = require("../../model/subscription");
const payment = require("../../model/paymentSubscription");
const razerpay = require("razorpay");
const crypto = require("crypto");
const uuid = require("uuid");
const id = uuid.v4();
//const payment = require('../models/payment_module');
const Razorpay = new razerpay({
  key_id: "rzp_live_xhEiJ4uMcMKT1r",
  key_secret: "JSwRiz3kcqggnJSTohP1pJPy",
});

exports.CreatePaymentOrder = async (req, res) => {
  try {
    const subscriptionData = await subscription.findById({
      _id: req.params.id,
    });
    if (!req.params.id) {
      return res.status(500).json({
        message: "subscriptionId is required",
      });
    }
    console.log(subscriptionData.Price);
    console.log(subscriptionData.vendorCategory)

    // const data = {
    //     amount: subscriptionData.Price,
    //     currency: 'INR',
    //     receipt: id,
    //     partial_payment: false,
    // }
    // console.log(data)
    // const result = await Razorpay.orders.create(data);
    // console.log(result)

    const DBData = {
      subscriptionId: req.params.id,
      vendorId: req.params.vendorId,
      //user: subscriptionData,
      invoice: "123" + req.body.name,
      payment_Id: /* result.id*/ id,
      amount: subscriptionData.Price,
      // amount_paid:/* result.amount_paid*/,
      receipt: /* result.receipt*/ id,
      currency: "INR",
      // receipt: id,
      partial_payment: false,
    };
    console.log(DBData);
    //subscriptionData.Status = "success";
    const vendor = await vendorAccount.findByIdAndUpdate(
      { _id: req.params.vendorId },
      { Subscription_Status: "paid",Subscription_id:req.params.id,Subcription_Price: subscriptionData.Price,vendorCategory:subscriptionData.vendorCategory },
      { new: true }
    );
    await vendor.save();
    await subscriptionData.save();
    const AmountData = await payment.create(DBData);
    return res.status(200).json({
      details: AmountData,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.GetPaymentsByUserId = async (req, res) => {
  try {
    const Data = await payment.find({ user: req.params.user });
    return res.status(200).json({ details: Data });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
