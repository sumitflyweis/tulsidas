var bcrypt = require("bcryptjs");
const path = require("path");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const vendorSchema = require("../../model/vendorAccount");
const newOTP = require("otp-generator");
const Wallet = require("../../model/wallet");
const SECRET = "demo@1234";

module.exports.vendorRegister = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ msg: "phoneNumber is  required" });
    }

    const otp = Math.floor(Math.random() * 10000 + 1);
    console.log(otp);
    const vendor = await vendorSchema.create({
      phone: phone,
      otp: otp,
    });
    console.log(vendor);
    console.log(vendor._id.toString());
    const createWallet = await Wallet.create({ vendor: vendor._id.toString() });
    console.log(createWallet);
    if (vendor) {
      return res
        .status(200)
        .json({ msg: "otp has been sent to your number", otp: otp });
    } else {
      return res.status(400).json({ msg: "Something went wrong, try again" });
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

module.exports.verifySignIn = async (req, res) => {
  try {
    const { otp } = req.body;
    const verifyOtp = await vendorSchema.findOne({
      otp: otp,
    });
    if (!verifyOtp || verifyOtp.length == 0) {
      return res.status(400).json({ msg: "invalid otp" });
    } else {
      const token = jwt.sign({ _id: verifyOtp._id }, process.env.KEY, {
        expiresIn: "1d",
      });
      console.log(token);
      res.setHeader("x-api-key", /* "Bearer "*/ +token);
      return res
        .status(200)
        .json({ msg: "signIn successfull", data: verifyOtp, Token: token });
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

module.exports.updateVendorForLikes = async (req, res) => {
  try {
    const userId = req.token._id;
    const user = await vendorSchema.findById({ _id: userId });

    console.log(user);
    user.like += 1;
    await user.save();
    return res.status(200).json({ msg: "profile details updated", user: user });
  } catch (error) {
    return res.status(500).json({ msg: error.message, name: error.name });
  }
};

module.exports.updateVendorForFollowers = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      country: req.body.country,
      KYC: req.body.KYC,
      password: bcrypt.hashSync(req.body.password, 8),
      confirmPassword: bcrypt.hashSync(req.body.password, 8),
      option: req.body.option,
      paymentMethod: req.body.paymentMethod,
      typeOfGrocery: req.body.typeOfGrocery,
      comment: req.body.comment,
      vendorCategory:req.body.vendorCategory
    };
    const userId = req.token._id;
    const user = await vendorSchema.findByIdAndUpdate({ _id: userId }, data, {
      new: true,
    });
    console.log(user);
    user.followers += 1;
    await user.save();
    return res.status(200).json({ msg: "profile details updated", user: user });
  } catch (error) {
    return res.status(500).json({ msg: error.message, name: error.name });
  }
};

exports.login = async (req, res) => {
  try {
    const userexists = await vendorSchema.findOne({
      email: req.body.email,
    });
    console.log(userexists);

    if (!userexists || userexists.length == 0)
      return res.status(403).json({ msg: "user does not exist" });

    const ispasswordValid = bcrypt.compareSync(
      req.body.password,
      userexists.password
    );
    console.log(ispasswordValid);

    if (!ispasswordValid) {
      return res.status(501).json({
        message: "Wrong Password",
      });
    }
    const token = jwt.sign({ _id: userexists._id }, SECRET, {
      expiresIn: "15d",
    });

    console.log(token);
    res.setHeader("x-api-key", /* "Bearer "*/ +token);
    return res.status(200).json({
      msg: "login successfull",
      Token: token,
      _id: userexists._id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};
