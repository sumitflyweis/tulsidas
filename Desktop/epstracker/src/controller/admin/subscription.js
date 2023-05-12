const path = require("path");
require("dotenv").config();
const subscription = require("../../model/subscription");

exports.subscriptionAdmin = async (req, res) => {
  try {
    const data = {
      Price : req.body.Price,
      validity : req.body.validity,
      vendorCategory:req.body.vendorCategory
    };

    const subscriptiondata = await subscription.create(data);

    console.log(subscriptiondata);
    return res.status(200).json({
      id: subscriptiondata._id,
      message: "subscriptiondata created ",
      data: subscriptiondata,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

module.exports.updatesubscriptionAdmin = async (req, res) => {
  try {
    const data = {
        Price: req.body.Price,
        validity: req.body.validity,
        vendorCategory:req.body.vendorCategory
       
      };
    const subscriptiondata = await subscription.findOneAndUpdate(
      { _id: req.params.id },
      data,
      { new: true }
    );

    console.log(subscriptiondata);
    return res.status(200).json(subscriptiondata);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

exports.deleteSubcriptionAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    await subscription.deleteOne({ _id: id });
    res.status(200).send({ message: "subscription deleted " });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
