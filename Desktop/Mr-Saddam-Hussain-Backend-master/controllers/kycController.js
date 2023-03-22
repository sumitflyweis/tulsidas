const KYC = require("../models/KYC");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.upload = catchAsync(async (req, res, next) => {
  const kyc = await KYC.create({
    user: req.user._id,
    document: req.body.document,
  });

  res.status(201).json({
    status: "success",
    message: kyc,
  });
});

exports.getUsersKYC = catchAsync(async (req, res, next) => {
  const kyc = await KYC.findOne({ user: req.user._id });

  if (!kyc) {
    return next(new AppError(`User hasn't uploaded KYC details yet!`));
  }

  res.status(200).json({
    status: "success",
    data: kyc,
  });
});

exports.updateKYCuser = catchAsync(async (req, res, next) => {
  const kyc = await KYC.findOneAndUpdate({ user: req.user._id }, req.body, {
    new: true,
  });

  res.status(200).json({
    status: "success",
    data: kyc,
  });
});

// -----------ADMIN-----------------
exports.getKYCbyId = catchAsync(async (req, res, next) => {
  const kyc = await KYC.findOne({ user: req.params.id });

  if (!kyc) {
    return next(new AppError(`User hasn't uploaded KYC yet.`));
  }

  res.status(200).json({
    status: "success",
    data: kyc,
  });
});

exports.getAllKYC = catchAsync(async (req, res, next) => {
  const kyc = await KYC.find();

  res.status(200).json({
    status: "success",
    data: kyc,
  });
});
