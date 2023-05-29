const express = require("express");
const Router = express.Router();
const auth = require("../controller/auth");


// Router.route("/verifyOTP").post(authController.verifyOTP);
Router.route("/createlogin").post(auth.createlogin);
Router.route("/authregister").post(auth.authregister);
// Router.route("/updateadmin/:id").put(adminController.updateadmin);
// Router.route("/deleteadmin/:id").delete(adminController.deleteadmin)
// Router.route("/logout").post(authController.logout);
// Router.route("/forgetPassword").put(adminController.forgetPassword);

//=================

module.exports = Router;
