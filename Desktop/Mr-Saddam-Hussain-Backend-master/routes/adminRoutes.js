const express = require("express");
const Router = express.Router();
const authController = require("../controllers/authController");
const adminController = require("../controllers/adminController");
const kycController = require("../controllers/kycController");
const walletController = require("../controllers/walletController");

Router.route("/sendOTP").post(authController.sendOTP);
Router.route("/verifyOTP").post(authController.verifyOTP);
Router.route("/login").post(authController.login);
Router.route("/signup").post(authController.signup);
Router.route("/logout").post(authController.logout);

Router.route("/privacy")
  .post(adminController.createPrivacy)
  .get(adminController.getPrivacy);
Router.route("/privacy/:id")
  .patch(adminController.updatePrivacy)
  .delete(adminController.deletePrivacy);

Router.route("/about")
  .post(adminController.createAbout)
  .get(adminController.getAbout);
Router.route("/about/:id")
  .patch(adminController.updateAbout)
  .delete(adminController.deleteAbout);

Router.route("/terms")
  .post(adminController.createTerms)
  .get(adminController.getTerms);
Router.route("/terms/:id")
  .patch(adminController.updateTerms)
  .delete(adminController.deleteTerms);

Router.route("/help")
  .get(adminController.getHelp)
  .post(adminController.createHelp);
Router.route("/help/:id")
  .patch(adminController.updateHelp)
  .delete(adminController.deleteHelp);

Router.route("/wallet").get(walletController.getAllWallet);
Router.route("/wallet/:id").get(walletController.getWalletById);

Router.route("/kyc").get(kycController.getAllKYC);
Router.route("/kyc/:id").get(kycController.getKYCbyId);

module.exports = Router;
