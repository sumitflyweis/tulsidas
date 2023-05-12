var bcrypt = require("bcryptjs");
const path = require("path");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const userSchema = require("../../model/customerAccount");
const commonLogin =  require("../../model/auth")
const Wallet = require("../../model/wallet");
var newOTP = require("otp-generators");

module.exports.register = async (req, res) => {
  try {
    const { phone } = req.body;
    console.log(phone);
    const data = {
      name: req.body.name,
      email: req.body.email,
      country: req.body.country,
      password: bcrypt.hashSync(req.body.password, 8),
      confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 8),
      wallet: req.body.wallet,
      image: req.body.image,
      role : req.body.role
    };
    console.log(data);
    if (!phone) {
      return res.status(400).json({ msg: "phoneNumber is  required" });
    }

    const phoneNumber = await userSchema.findOne({ phone: phone });
    console.log(phoneNumber);
    if (phoneNumber) {
      return res.status(400).json({ msg: "phone number already exist" });
    }

    const otp = newOTP.generate(4, {
      alphabets: false,
      upperCase: false,
      specialChar: false,
    });
    console.log(otp);
    const user = await userSchema.create({
      phone: phone,
      otp: otp,
      name: data.name,
      email: data.email,
      country: data.country,
      password: bcrypt.hashSync(req.body.password, 8),
      confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 8),
      wallet: req.body.wallet,
      image: req.body.image,
      role:req.body.role
    });
    console.log(user);
    console.log(user._id.toString());
    const createWallet = await Wallet.create({ user: user._id.toString() });
    console.log(createWallet);
    if (user) {
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


// // Define user roles
// const roles = {
//   admin: 'admin',
//   editor: 'editor',
//   user: 'user'
// };

// // Middleware for role-based authentication
// const authorizeRole = (requiredRole) => {
//   return (req, res, next) => {
//     if (req.user.role === requiredRole) {
//       next();
//     } else {
//       res.status(403).json({ error: 'Unauthorized' });
//     }
//   }
// };

// // Example route that requires admin authorization
// app.get('/admin', authorizeRole(roles.admin), (req, res) => {
//   res.send('Hello Admin!');
// });

// // Example route that requires editor authorization
// app.get('/editor', authorizeRole(roles.editor), (req, res) => {
//   res.send('Hello Editor!');
// });

// // Example route that requires user authorization
// app.get('/user', authorizeRole(roles.user), (req, res) => {
//   res.send('Hello User!');
// });




// const express = require('express');
// const jwt = require('jsonwebtoken');
// const expressJwt = require('express-jwt');

// const app = express();

// const secret = 'mysecret';

// // Define user roles
// const roles = {
//   admin: 'admin',
//   editor: 'editor',
//   user: 'user'
// };

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
// app.get('/admin', expressJwt({ secret }), authorizeAdmin, (req, res) => {
//   res.send('Hello Admin!');
// });

// // Route that requires editor authorization
// app.get('/editor', expressJwt({ secret }), authorizeEditor, (req, res) => {
//   res.send('Hello Editor!');
// });

// // Route that requires user authorization
// app.get('/user', expressJwt({ secret }), authorizeUser, (req, res) => {
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

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });








module.exports.registerUser = async (req, res) => {
  try {
    const { phone ,role} = req.body;

    
    if (!phone) {
      return res.status(400).json({ msg: "phoneNumber is  required" });
    }

    const phoneNumber = await userSchema.findOne({ phone: phone });
    console.log(phoneNumber);
    if (phoneNumber) {
      // const otp = newOTP.generate(4, {
      //   alphabets: false,
      //   upperCase: false,
      //   specialChar: false,
      // });
      console.log(phoneNumber.otp);
      //phoneNumber.otp = otp
     // await phoneNumber.save()

      return res
        .status(200)
        .json({ msg: "otp has been sent to your number", otp: phoneNumber.otp,role:phoneNumber.role });
    }

    const otp = newOTP.generate(4, {
      alphabets: false,
      upperCase: false,
      specialChar: false,
    });
    console.log(otp);
    const user = await userSchema.create({
      role : role,
      phone: phone,
      otp: otp,
      phone: phone,
      otp: otp,
      name: req.body.name,
      email: req.body.email,
      country: req.body.country,
      password: bcrypt.hashSync(req.body.password, 8),
      confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 8),
      wallet: req.body.wallet,
      image: req.body.image,
      role:req.body.role
    });
    console.log(user);
    console.log(user._id.toString());
    const createWallet = await Wallet.create({ user: user._id.toString() });
    console.log(createWallet);
    if (user) {
      return res
        .status(200)
        .json({ msg: "otp has been sent to your number", otp: otp ,role:role});
    } else {
      return res.status(400).json({ msg: "Something went wrong, try again" });
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

module.exports.resendOTP = async (req, res) => {
  try {
    const otp = Math.floor(Math.random() * 10000 + 1);
    console.log(otp);
    const user = await userSchema.updateOne(
      { phone: req.params.phone},
      { otp: otp },
      { new: true }
    );

    if (!user || user.length == 0) {
      return res.status(400).json({ msg: "user not registered" });
    }

    console.log(user);
    console.log(user._id);

    if (user) {
      return res
        .status(200)
        .json({ msg: "otp has been resent to your number", otp: otp });
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
    const verifyOtp = await userSchema.findOne({
      otp: otp,
    });
    if (!verifyOtp || verifyOtp.length == 0)
      return res.status(400).json({ msg: "invalid otp" });

    const token = jwt.sign({ id: verifyOtp._id }, process.env.KEY, {
      expiresIn: "1d",
    });
    console.log(token);
    res.setHeader("x-api-key", /* "Bearer "*/ +token);
    return res
      .status(200)
      .json({ msg: "signIn successfull", data: verifyOtp, Token: token,role:verifyOtp.role });
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

// module.exports.updateUser = async (req, res) => {
//   try {
//     const data = {
//       name: req.body.name,
//       phone: req.body.phone,
//       email: req.body.email,
//       country: req.body.country,
//       KYC: req.body.KYC,
//       wallet: req.body.wallet,
//       password: bcrypt.hashSync(req.body.password, 8),
//       confirmPassword: bcrypt.hashSync(req.body.password, 8),
//       image: req.body.image,
//     };
//     const userId = req.token.id;
//     console.log(userId)
//     const user = await userSchema.findByIdAndUpdate({ _id: userId }, data, {
//       new: true,
//     });
//     console.log(user)
//     return res.status(200).json({ msg: "profile details updated", user: user });
//   } catch (error) {
//     return res.status(500).json({ msg: error.message, name: error.name });
//   }
// };



module.exports.updateUser = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      country: req.body.country,
      KYC: req.body.KYC,
      wallet: req.body.wallet,
      password: bcrypt.hashSync(req.body.password, 8),
      confirmPassword: bcrypt.hashSync(req.body.password, 8),
      image: req.body.image,
    };
    const userId = req.token.id;
    console.log(userId)
    const user = await commonLogin.findByIdAndUpdate({ _id: userId }, data, {
      new: true,
    });
    console.log(user)
    return res.status(200).json({ msg: "profile details updated", user: user });
  } catch (error) {
    return res.status(500).json({ msg: error.message, name: error.name });
  }
};

exports.login = async (req, res) => {
  try {
    const userexists = await userSchema.findOne({
      phone: req.body.phone 
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
    const token = jwt.sign({ id: userexists._id }, process.env.KEY, {
      expiresIn: "15d",
    });

    console.log(token);
    res.setHeader("x-api-key", /* "Bearer "*/ +token);
    return res.status(200).json({
      msg: "login successfull",
      Token: token,
      _id: userexists._id,
      name: userexists.name,
      email: userexists.email,
      role :userexists.role
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

exports.forgotPassword = async (req, res, next) => {
  try {
    const result = await userSchema.findByIdAndUpdate(
      { _id: req.params.id },
      { password: req.body.password },
      { new: true }
    );

    return res.status(200).send(result);
  } catch (error) {
    if (error instanceof ValidationError) {
      error.status = 400;
    }
    console.log(error);
    next(error);
  }
};

module.exports.getAllUserbyCustomer = async (req, res) => {
  try {
    const AllUser = await userSchema.find();
    console.log(AllUser);
    if (!AllUser || AllUser.length == 0) {
      return res.status(400).json({ msg: "No AllUser added" });
    } else {
      return res.status(200).json(AllUser);
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

module.exports.getAllUserByIdbyCustomer = async (req, res) => {
  try {
    const AllUser = await userSchema.findById({ _id: req.params.id });
    console.log(AllUser);
    if (!AllUser || AllUser.length == 0) {
      return res.status(400).json({ msg: "No AllUser added" });
    } else {
      return res.status(200).json(AllUser);
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};
