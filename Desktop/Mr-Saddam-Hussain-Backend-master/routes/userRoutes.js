const express = require("express");
const Router = express.Router();
const authController = require("../controllers/authController");
// const userController = require("../controllers/userController");
// const kycController = require("../controllers/kycController");
// const authController = require("../controllers/authController");

// Router.route("/sendOTP").post(authController.sendOTP);
Router.route("/verifyOTP").post(authController.verifyOTP);
Router.route("/login").post(authController.login);
Router.route("/signup").post(authController.signup);
Router.route("/logout").post(authController.logout);
Router.route("/forgetPassword").put(authController.forgetPassword);


// Router.route("/me")
  // .get(authController.protect, userController.getCurrent)
  // .patch(authController.protect, userController.updateUser);

// Router.route("/kyc")
  // .get(authController.protect, kycController.getUsersKYC)
  // .post(authController.protect, kycController.upload)
  // .patch(authController.protect, kycController.updateKYCuser);

module.exports = Router;
