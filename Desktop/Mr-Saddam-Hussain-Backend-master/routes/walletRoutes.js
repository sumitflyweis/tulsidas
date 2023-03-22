const express = require("express");
const Router = express.Router();
const walletController = require("../controllers/walletController");
const { protect } = require("../controllers/authController");

Router.route("/").get(protect, walletController.getUserWallet);
Router.route("/add").patch(protect, walletController.addMoney);
Router.route("/pay").patch(protect, walletController.payFromWallet);

module.exports = Router;
