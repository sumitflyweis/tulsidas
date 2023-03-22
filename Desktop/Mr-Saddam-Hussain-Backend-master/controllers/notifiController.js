const Notification = require("../models/Notification");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.sendNotification = catchAsync(async (req, res, next) => {
  const noti = await Notification.create({
    user: req.body.user,
    message: req.body.message,
  });

  res.status(200).json({
    status: "success",
    data: noti,
  });
});

exports.getNotificationOfUser = catchAsync(async (req, res, next) => {
  const noti = await Notification.find({ user: req.user._id });

  res.status(200).json({
    status: "success",
    data: noti,
  });
});

exports.deleteCurrentNotification = catchAsync(async (req, res, next) => {
  await Notification.findOneAndDelete({ user: req.user._id });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.deleteNotiById = catchAsync(async (req, res, next) => {
  await Notification.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});
