const express = require("express");
const jwt = require("jsonwebtoken");
const commonLogin = require("../model/auth");
var bcrypt = require("bcryptjs");
var newOTP = require("otp-generators");
//const expressJwt = require('express-jwt');

const app = express();

const secret = "mysecret";

// Define user roles
// const roles = {
//   admin: "admin",
//   editor: "editor",
//   user: "user",
// };

module.exports.authregister = async (req, res) => {
  try {
    const { phone,role } = req.body;
    console.log(role);
    const data = {
      phone: phone,
      role:role,
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 8),
    };
    console.log(data);

    const otp = newOTP.generate(4, {
      alphabets: false,
      upperCase: false,
      specialChar: false,
    });
    console.log(otp);

    if (!phone) {
      return res.status(400).json({ msg: "phoneNumber is  required" });
    }

    const phoneNumber = await commonLogin.findOne({ phone: phone,role:role });
    console.log(phoneNumber)
    //console.log(phoneNumber.otp)
   // console.log(phoneNumber.role)
    if (phoneNumber) {
      return res.status(400).json({ msg: "phone number already exist",otp:phoneNumber.otp ,role:phoneNumber.role});
    }


    const dataCreated  = await commonLogin.create(data)
    console.log(dataCreated)
    dataCreated.otp = otp
    await dataCreated.save()
    console.log(dataCreated._id.toString())
    // const createWallet = await Wallet.create({ user: dataCreated._id.toString() });
    // console.log(createWallet);
      if (dataCreated) {
        return res
          .status(200)
          .json({ msg: "otp has been sent to your number", otp: otp,role:role });
      } else {
        return res.status(400).json({ msg: "Something went wrong, try again" });
      }
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};





exports.createlogin = async (req, res) => {
  try {
    const dataexists = await commonLogin.findOne({
      phone: req.body.phone 
    });
    console.log(dataexists);

    if (!dataexists || dataexists.length == 0)
      return res.status(403).json({ msg: "data does not exist" });

    const ispasswordValid = bcrypt.compareSync(
      req.body.password,
      dataexists.password
    );
    console.log(ispasswordValid);

    if (!ispasswordValid) {
      return res.status(501).json({
        message: "Wrong Password",
      });
    }
    const token = jwt.sign({ id: dataexists._id,role:dataexists.role }, process.env.KEY, {
      expiresIn: "15d",
    });

    console.log(token);
    res.setHeader("x-api-key", /* "Bearer "*/ +token);
    return res.status(200).json({
      msg: "login successfull",
      Token: token,
      _id: dataexists._id,
      name: dataexists.name,
      email: dataexists.email,
      role:dataexists.role
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

// // Create a function for each role
// const isAdmin = (req) => {
//   return req.user.role === roles.admin;
// }

// const isEditor = (req) => {
//   return req.user.role === roles.editor;
// }

// const isUser = (req) => {
//   return req.user.role === roles.user;
// }

// // Implement middleware
// const authorizeAdmin = (req, res, next) => {
//   if (!isAdmin(req)) {
//     return res.status(403).json({ error: 'Unauthorized' });
//   }
//   next();
// }

// const authorizeEditor = (req, res, next) => {
//   if (!isEditor(req)) {
//     return res.status(403).json({ error: 'Unauthorized' });
//   }
//   next();
// }

// const authorizeUser = (req, res, next) => {
//   if (!isUser(req)) {
//     return res.status(403).json({ error: 'Unauthorized' });
//   }
//   next();
// }

// // Route that requires admin authorization
// app.get('/admin', jwt({ secret }), authorizeAdmin, (req, res) => {
//   res.send('Hello Admin!');
// });

// // Route that requires editor authorization
// app.get('/editor', jwt({ secret }), authorizeEditor, (req, res) => {
//   res.send('Hello Editor!');
// });

// // Route that requires user authorization
// app.get('/user', jwt({ secret }), authorizeUser, (req, res) => {
//   res.send('Hello User!');
// });

// // Login route that issues a JWT token with user information and role
// app.post('/login', (req, res) => {
//   const user = {
//     username: req.body.username,
//     role: roles.user
//   };
//   const token = jwt.sign(user, secret);
//   res.json({ token });
// });
