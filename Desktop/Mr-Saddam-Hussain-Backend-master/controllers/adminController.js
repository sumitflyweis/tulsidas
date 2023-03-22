// ------ MODELS -----------
const Privacy = require("../models/privacyModel");
const Terms = require("../models/TermsCond");
const AboutUs = require("../models/AboutUs");
const Topic = require("../models/Topics");
const Help = require("../models/HelpandSupport");

// -------- UTILS -----------
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.createPrivacy = catchAsync(async (req, res, next) => {
  const privacy = await Privacy.create(req.body);

  res.status(200).json({
    status: "success",
    data: privacy,
  });
});

exports.getPrivacy = catchAsync(async (req, res, next) => {
  const privacy = await Privacy.find();

  res.status(200).json({
    status: "success",
    data: privacy,
  });
});

exports.updatePrivacy = catchAsync(async (req, res, next) => {
  const privacy = await Privacy.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!privacy) {
    return next(new AppError("No Privacy with this ID"));
  }

  res.status(200).json({
    status: "success",
    data: privacy,
  });
});

exports.deletePrivacy = catchAsync(async (req, res, next) => {
  await Privacy.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});

// ------- TERMS AND CONDITIONS ---------

exports.createTerms = catchAsync(async (req, res, next) => {
  const term = await Terms.create(req.body);

  res.status(200).json({
    status: "success",
    data: term,
  });
});

exports.getTerms = catchAsync(async (req, res, next) => {
  const term = await Terms.find();

  res.status(200).json({
    status: "success",
    data: term,
  });
});

exports.updateTerms = catchAsync(async (req, res, next) => {
  const term = await Terms.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!term) {
    return next(new AppError("No Privacy with this ID"));
  }

  res.status(200).json({
    status: "success",
    data: term,
  });
});

exports.deleteTerms = catchAsync(async (req, res, next) => {
  await Terms.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});

// ------ ABOUT US ----------
exports.createAbout = catchAsync(async (req, res, next) => {
  const about = await AboutUs.create(req.body);

  res.status(200).json({
    status: "success",
    data: about,
  });
});

exports.getAbout = catchAsync(async (req, res, next) => {
  const about = await AboutUs.find();

  res.status(200).json({
    status: "success",
    data: about,
  });
});

exports.updateAbout = catchAsync(async (req, res, next) => {
  const about = await AboutUs.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!about) {
    return next(new AppError("No Privacy with this ID"));
  }

  res.status(200).json({
    status: "success",
    data: about,
  });
});

exports.deleteAbout = catchAsync(async (req, res, next) => {
  await AboutUs.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});

// ------------------ TOPICS ----------------
exports.createTopic = catchAsync(async (req, res, next) => {
  const topic = await Topic.create(req.body);

  res.status(200).json({
    status: "success",
    data: topic,
  });
});

exports.getTopic = catchAsync(async (req, res, next) => {
  const topic = await Topic.find();

  res.status(200).json({
    status: "success",
    data: topic,
  });
});

exports.updateTopic = catchAsync(async (req, res, next) => {
  const topic = await Topic.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!topic) {
    return next(new AppError("No Privacy with this ID"));
  }

  res.status(200).json({
    status: "success",
    data: topic,
  });
});

exports.deleteTopic = catchAsync(async (req, res, next) => {
  await Topic.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});

// ---------------HELP-------------------
exports.createHelp = catchAsync(async (req, res, next) => {
  const help = await Help.create(req.body);

  res.status(200).json({
    status: "success",
    data: help,
  });
});

exports.getHelp = catchAsync(async (req, res, next) => {
  const help = await Help.find();

  res.status(200).json({
    status: "success",
    data: help,
  });
});

exports.updateHelp = catchAsync(async (req, res, next) => {
  const help = await Help.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!help) {
    return next(new AppError("No Privacy with this ID"));
  }

  res.status(200).json({
    status: "success",
    data: help,
  });
});

exports.deleteHelp = catchAsync(async (req, res, next) => {
  await Help.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});
