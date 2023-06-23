var bcrypt = require("bcryptjs");
const path = require("path");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const userSchema = require("../model/userlogin");
// const newOTP = require("otp-generator");

// const SECRET = "demo@1234";

const twilio = require("twilio");

// Set up Twilio client with account SID and auth token

// const accountSid = "AC1983997bded6a9d0598cba6fe51a1340";
// const authToken = "73dd260489d1c668ff513ad34102cef4";
// const client = twilio(accountSid, authToken);

// API endpoint for generating and sending an OTP

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    const data = await userSchema.findOne({
      email: email,
    })

    if (!data || data.length == 0) {
      return res.status(400).json({ msg: "invalid phone" });
    }
    console.log(data.otp)

    const passwordIsValid = bcrypt.compareSync(
      password,
      data.password
    )

    if (!passwordIsValid) {
      return res.status(401).send({
        message: "Wrong password",
      });
    }

    const token = jwt.sign({ id: data._id.toString() }, process.env.KEY, {
      expiresIn: "1d",
    });
    console.log(token)

    res.setHeader("x-api-key", /* "Bearer "*/ +token);

    //const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store the OTP for the phone number

    //otps[phone] = otp;
    //const newUser = new userSchema({ phone: data.phone,otp:data.otp });

    // Send the OTP to the user's phone number
    // client.messages.create({
    //   body: `Your OTP is ${otp}`,
    //   from: "+16205071468",
    //   to: phone,
    // });

    res
      .status(200)
      .send({ message: "OTP sent successfully", newUser: data, token: token });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
}


exports.verify = async (req, res) => {
  try {
    const { /*phone,*/ otp } = req.body;

    const verifyOtp = await userSchema.findOne({
      otp: otp,
    });

    if (!verifyOtp || verifyOtp.length == 0) {
      return res.status(400).json({ msg: "invalid otp" });
    } else {
      // const data = { _id: verifyOtp._id, phone: verifyOtp.phone };

      // const token = jwt.sign(
      //   {id: verifyOtp._id.toString() },
      //    process.env.KEY,
      //   {
      //     expiresIn: "1d",
      //   }
      // );
      // console.log(token);
      // res.setHeader("x-api-key", /* "Bearer "*/ +token);
      return res
        .status(200)
        .json({ msg: "signIn successfull", data: verifyOtp /* Token: token*/ });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};


exports.userProfile1 = async (req, res) => {
  try {
    const { name, email } = req.body;

    const hash = bcrypt.hashSync(req.body.password, 8);
    const hash1 = bcrypt.hashSync(req.body.confirmPassword, 8);

    // // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // // Store the OTP for the phone number

    // //otps[phone] = otp;
    const newUser = await userSchema.create({
      otp: otp,
      name: name,
      email: email,
      password: hash,
      confirmPassword: hash1,
    });

    // // Send the OTP to the user's phone number
    // // client.messages.create({
    // //   body: `Your OTP is ${otp}`,
    // //   from: "+16205071468",
    // //   to: phone,
    // // });

    res
      .status(200)
      .send({ message: "data created successfully", newUser: newUser });

    // // Check if the phone number is already in the database
    // const existingUser = await userSchema.findOne({ phone: phone,otp:otp  });

    // if (existingUser) {
    //   res.status(409).send({ message: "User already exists" });
    //   return;
    // }

    // // Create a new user profile with the phone number
    // const newUser = new userSchema({ phone: phone });

    // // Save the user profile to the database
    // const savedUser = await newUser.save();

    // res.status(201).send({
    //   message: "User profile created successfully",
    //   newUser: savedUser,
    // });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};


exports.getAllUser = async (req, res) => {
  try {
    const data = await userSchema.find();
    console.log(data);
    return res.status(200).json({
      user: data,
    });
  } catch (err) {
    res.status(400).send({ mesage: err.mesage });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const data = await userSchema.findById({ _id: req.params.id });
    console.log(data);
    return res.status(200).json({
      user: data,
    });
  } catch (err) {
    res.status(400).send({ mesage: err.mesage });
  }
};


exports.userUpdate = async (req, res) => {
  try {
    console.log("hi");
    const data = {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 8),
      otp: req.body.otp,
    };
    let userId = req.user._id;
    console.log(userId);
    const user = await userSchema.findByIdAndUpdate(
      { _id: req.user._id },
      data,
      {
        new: true,
      }
    );
    console.log(user);
    return res.status(200).json({ msg: "profile details updated", user: user });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err.message,
    });
  }
};

exports.userUpdate1 = async (req, res) => {
  try {
    console.log("hi");
    const data = {
      name: req.body.name,
      gender: req.body.gender,
      dateOfBirth: req.body.dateOfBirth,
      bloodGroup: req.body.bloodGroup,
      plan: req.body.plan,
      status: req.body.status,
      address: req.body.address,
      phone: req.body.phone,
      emergencyContactNumber: req.body.emergencyContactNumber,
      email: req.body.email,
    };
    let userId = req.user._id;
    console.log(userId);
    const user = await userSchema.findByIdAndUpdate(
      { _id: req.user._id },
      data,
      {
        new: true,
      }
    );
    console.log(user);
    return res.status(200).json({ msg: "profile details updated", user: user });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err.message,
    });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await userSchema.deleteOne({ _id: id });
    return res.status(200).send({ message: "data deleted " });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

exports.socialLogin = async (req, res) => {
  try {
    const { google_id } = req.body;

    const user = await userSchema.findOne({ google_id: google_id });
    console.log(user);
    if (!user || user.length == 0) {
      const data1 = {
        google_id: req.body.google_id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      };

      const create = await userSchema.create(data1);
      console.log(create);

      const accessToken1 = jwt.sign({ id: create._id }, process.env.KEY, {
        expiresIn: "1d",
      });

      res.setHeader("x-api-key", /* "Bearer "*/ +accessToken1);
      return res.status(200).send({
        message: "logged in successfully",
        accessToken: accessToken1,
        data: create,
      });
    }

    console.log("hi");
    const accessToken = jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "1d",
    });

    res.setHeader("x-api-key", /* "Bearer "*/ +accessToken);
    return res.status(200).send({
      message: "logged in successfully",
      accessToken: accessToken,
      data: user,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ error: "internal server error" + err.message });
  }
};

// const passport = require('passport');
// const FacebookStrategy = require('passport-facebook').Strategy;

// passport.use(new FacebookStrategy({
//     clientID: process.env.FACEBOOK_APP_ID,
//     clientSecret: process.env.FACEBOOK_APP_SECRET,
//     callbackURL: process.env.FACEBOOK_CALLBACK_URL,
//     profileFields: ['id', 'displayName', 'email', 'picture.type(large)']
//   },
//   async (accessToken, refreshToken, profile, done) => {
//     try {
//       const existingUser = await userSchema.findOne({ 'facebook.id': profile.id });

//       if (existingUser) {
//         return done(null, existingUser);
//       }

//       const newUser = new userSchema({
//         facebook: {
//           id: profile.id,
//           displayName: profile.displayName,
//           email: profile.emails[0].value,
//           profileImage: profile.photos[0].value
//         }
//       });

//       const savedUser = await newUser.save();
//       done(null, savedUser);
//     } catch (error) {
//       done(error, false);
//     }
//   }
// ))
// catch (err) {
//   console.log(err);
//   return res
//     .status(500)
//     .send({ error: "internal server error" + err.message });
// }
// }

// router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

// router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect('/dashboard');
// });

// exports.userProfile1 = async (req, res) => {
//   try {
//     // const data = {
//     //   name: req.body.name,
//     //   email: req.body.email,
//     //   phone: req.body.phone,
//     //   password: req.body.password,
//     //   confirmPassword: req.body.confirmPassword,
//     //   profileImage: req.body.profileImage
//     // };
//     // const userexists = await userSchema.findOne({ email: data.email });

//     // if (!userexists || userexists.length == 0) {
//     //   const userexists1 = await userSchema.findOne({ phone: data.phone });

//     //   if (!userexists1 || userexists1.length == 0) {
//     //     if (!req.body.password == req.body.confirmPassword) {
//     //       return res.status(500).json({
//     //         message: "Password Not Match  ",
//     //       });
//     //     } else {
//     //       const create = await userSchema.create({
//     //         name: req.body.name,
//     //         email: req.body.email,
//     //         phone: req.body.phone,
//     //         // password: bcrypt.hashSync(req.body.password, 8),
//     //         // confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 8),
//     //         profileImage : req.body.profileImage
//     //       });
//     //       return res.status(200).json({
//     //         msg: "registred successfully",
//     //         create: create,
//     //       });
//     //     }
//     //   } else {
//     //     return res.status(200).json({ msg: "phone already exists" });
//     //   }
//     // } else {
//     //   return res.status(200).json({ msg: "email already exists" });
//     // }
//     const { phone } = req.body;

//     if (!phone) {
//       return res.status(400).json({ msg: "phoneNumber is  required" });
//     }

//     const phoneNumber = await userSchema.findOne({ phone: phone });
//     if (phoneNumber) {
//       return res.status(400).json({ msg: "phone number already exist" });
//     }

//     const otp = Math.floor(Math.random() * 10000 + 1);
//     console.log(otp);
//     const user = await userSchema.create({
//       phone: phone,
//       otp: otp,
//       name: req.body.name,
//       email: req.body.email,
//       profileImage: req.body.profileImage,
//       password: bcrypt.hashSync(req.body.password, 8),
//       confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 8),

//     });
//     console.log(user);
//     console.log(user._id.toString());
//     // const createWallet = await Wallet.create({ user: user._id.toString() });
//     // console.log(createWallet);
//     if (user) {
//       return res
//         .status(200)
//         .json({ msg: "otp has been sent to your number", otp: otp });
//     } else {
//       return res.status(400).json({ msg: "Something went wrong, try again" });
//     }
//   } catch (err) {
//     console.log(err);
//     return res.status(400).send({ message: err.message });
//   }
// };

// module.exports.verifySignIn = async (req, res) => {
//   try {
//     const { otp } = req.body;
//     const verifyOtp = await userSchema.findOne({
//       otp: otp,
//     });
//     if (!verifyOtp || verifyOtp.length == 0) {
//       return res.status(400).json({ msg: "invalid otp" });
//     } else {
//       const data = { _id: verifyOtp._id, phone: verifyOtp.phone };

//       const token = jwt.sign(
//         {id: verifyOtp._id.toString() },
//          process.env.KEY,
//         {
//           expiresIn: "1d",
//         }
//       );
//       console.log(token);
//       res.setHeader("x-api-key", /* "Bearer "*/ +token);
//       return res
//         .status(200)
//         .json({ msg: "signIn successfull", data: data, Token: token });
//     }
//   } catch (error) {
//     return res.status(400).json({ msg: error.message, name: error.name });
//   }
// };

// exports.loginProfile1 = async (req, res) => {
//   try {
//     const userexists = await userSchema.findOne({
//       phone: req.body.phone,
//     });
//     console.log(userexists);
//     //console.log(userexists.otp)

//     if (!userexists || userexists.length == 0) {
//       return res.status(400).json({ msg: "user does not exist" });
//     }

//     // const ispasswordValid = bcrypt.compareSync(
//     //   req.body.password,
//     //   userexists.password
//     // );
//     // console.log(ispasswordValid);

//     // if (!ispasswordValid) {
//     //   return res.status(501).json({
//     //     message: "Wrong Password",
//     //   });
//     // }
//     if (userexists.phone != req.body.phone) {
//       return res.status(400).json({
//         message: "phoneNumber Not Match  ",
//       });
//     }

//     // const token = jwt.sign({ _id: userexists._id }, SECRET, {
//     //   expiresIn: "15d",
//     // });

//     // console.log(token);
//     // res.setHeader("x-api-key", /* "Bearer "*/ +token);
//     return res.status(200).json({
//       msg: "login successfull",
//       otp: userexists.otp,
//       //  Token: token,
//       _id: userexists._id,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "internal server error" });
//   }
// };

// exports.getUserById = async (req, res) => {
//   try {
//     const user = await userSchema.findOne({ _id: req.params.id });
//     return res.status(200).json({
//       User: user,
//     });
//   } catch (err) {
//     console.log(err);
//     return res.status(400).json({
//       message: err.message,
//     });
//   }
// };

// exports.customerUpdatePassword = async (req, res) => {
//   try {
//     const UpdatedData = await userSchema
//       .findOneAndUpdate(
//         { _id: req.params.id },
//         {
//           password: bcrypt.hashSync(req.body.password, 8),
//           // confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 8),
//         }
//       )
//       .select({ password: 1 /*confirmPassword: 1 */ })
//       .exec();
//     console.log(UpdatedData);
//     return res.status(200).send({
//       message: "user Profile Updated ",
//       data: UpdatedData,
//     });
//   } catch (err) {
//     console.log(err);
//     return res.status(400).send({ message: err.message });
//   }
// };
