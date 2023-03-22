const Wallet = require("../models/wallet");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

// ------------ ADMIN --------------
exports.getAllWallet = catchAsync(async (req, res, next) => {
  const wallet = await Wallet.find().populate({
    path: "user",
    select: "firstName lastName email",
  });

  res.status(200).json({
    status: "success",
    data: wallet,
  });
});

exports.getWalletById = catchAsync(async (req, res, next) => {
  const wallet = await Wallet.findOne({ user: req.params.id }).populate({
    path: "user",
    select: "firstName lastName email",
  });
  res.status(200).json({
    status: "success",
    data: wallet,
  });
});

// signed in user wallet
exports.getUserWallet = catchAsync(async (req, res, next) => {
  var wallet = await Wallet.findOne({ user: req.user._id }).populate({
    path: "user",
    select: "firstName lastName email",
  });

  if (!wallet) {
    wallet = await Wallet.create({ user: req.user._id });
  }

  res.status(200).json({
    status: "success",
    data: wallet,
  });
});

exports.payFromWallet = catchAsync(async (req, res, next) => {
  var wallets = await Wallet.findOne({ user: req.user._id }).populate({
    path: "user",
    select: "firstName lastName email",
  });

  if (!wallets) {
    wallets = await Wallet.create({ user: req.user._id });
  }

  wallets.balance = wallets.balance - req.body.amount;

  await wallets.save();

  res.status(200).json({
    status: "success",
    data: wallets,
  });
});

exports.addMoney = catchAsync(async (req, res, next) => {
  var wallets = await Wallet.findOne({ user: req.user._id }).populate({
    path: "user",
    select: "firstName lastName email",
  });

  if (!wallets) {
    wallets = await Wallet.create({ user: req.user._id });
  }

  wallets.balance = wallets.balance + req.body.amount;

  await wallets.save();

  res.status(200).json({
    status: "success",
    data: wallets,
  });
});
