const accountSid = "ACb21a2250e0bae3a0e1c15eddd3c370ed";
const authToken = "2a04b800999f898232197a811f68f90b";
const verifySid = "VA84bc752a91abcf7df9f31c76832bafff";
const client = require("twilio")(accountSid, authToken);
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const validator = require("validator");
const User = require("../models/userModel");
const wallet = require("../models/wallet");
const crypto = require("crypto");
const { findByIdAndUpdate } = require("../models/userModel");
const bcrypt = require("bcryptjs")


const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  console.log(token);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  // Remove the password from the output
  user.password = undefined;

  console.log("hi");
  console.log(user.otp);
  res.status(statusCode).json({
    status: "success",
    token,
    // data,
    otp: user.otp,
  });
};

// exports.sendOTP = async (req, res) => {
//   await client.verify
//     .services(verifySid)
//     .verifications.create({
//       to: `+91${req.body.phone}`,
//       channel: "sms",
//     })
//     .then((data) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// exports.verifyOTP = async (req, res) => {
//   await client.verify
//     .services(verifySid)
//     .verificationChecks.create({
//       to: `+91${req.body.phone}`,
//       code: req.body.otp,
//     })
//     .then((data) => {
//       res.status(200).send({
//         status: data.status,
//       });
//       console.log("verified! 👍");
//     })
//     .catch((err) => {
//       res.status(404).send({
//         message: "Wrong OTP entered!",
//       });
//       console("wrong OTP !!");
//     });
// };

module.exports.verifyOTP = async (req, res) => {
  try {
    const { otp } = req.body;
    const verifyOtp = await User.findOne({
      otp: otp,
    });
    if (!verifyOtp || verifyOtp.length == 0) {
      return res.status(400).json({ msg: "invalid otp" });
    } else {
      const data = {id: verifyOtp._id, phone: verifyOtp.phone };
console.log(data)
      const token = jwt.sign(
        {id: verifyOtp._id.toString() },
         process.env.NODE_ENV,
        {
          expiresIn: "1d",
        }
      );
      console.log(token);
      res.setHeader("x-api-key", /* "Bearer "*/ +token);
      return res
        .status(200)
        .json({ msg: "signIn successfull", data: data, Token: token });
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  await wallet.create({ user: newUser._id });
  const url = `${req.protocol}://${req.get("host")}/me`;
  console.log(url);

  //   await new Email(newUser, url).sendWelcome();

  createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { input, password } = req.body;
  if (!input || !password) {
    return next(new AppError("Please provide e-mail and password!", 400));
  }

  if (validator.isEmail(input)) {
    // 1) Check if email and password exists.
    var email = input;

    // 2) Check if the user exists && password is correct.
    const user = await User.findOne({ email: email }).select("+password");
    console.log(user.password);

    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError("Incorrect Email or password", 401));
    }

    const otp = Math.floor(Math.random() * 10000 + 1);
    console.log(otp);
    user.otp = otp;
    await user.save();
    console.log("USer", user);

    // 3) If everything ok, send token to client
    createSendToken(user, 200, res);
  } else {
    var phone = input;
    const user = await User.findOne({ phone: phone }).select("+password");
    console.log(user.password);
    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError("Incorrect Phone or password", 401));
    }
    const otp1 = Math.floor(Math.random() * 10000 + 1);
    console.log("OTP", otp1);
    user.otp = otp1;

    await user.save();
    console.log("USer", user);

    createSendToken(user, 200, res);
  }
});

exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting Token & check if its there!
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies) {
    if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }
  }
  // console.log(token);
  // console.log(req.header.authorization);
  if (!token) {
    return next(
      new AppError("You are not logged in!, please login to get access!", 401)
    );
  }

  // 2) Verification of Token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) Check if user still exists.
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError("The user belonging to this token no  longer Exists!", 401)
    );
  }

  // // 4) Check if user changed password after the token was issued.
  // if (currentUser.changedPasswordAfter(decoded.iat)) {
  //   return next(
  //     new AppError("User recently changed password! Please login again.", 401)
  //   );
  // }

  // PUTS USER OBJECT ON OUR REQUEST OBJECT.
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    //roles = ['admin','lead-guide']. role = 'user'
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(
          "you do not have permission to perform this operation!",
          403
        )
      );
    }
    next();
  };
};

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on the token.
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) If token is not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError("Token is invalid or expired", 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // 3) Update changedPasswordAt property for the user
  // DONE IN THE USER MODEL.
  // 4) Log the user in, send JWT.
  createSendToken(user, 200, res);
});




exports.forgetPassword = async (req, res, next)=> {
 try{
  const user = await User.findOneAndUpdate({
    phone:req.body.phone},{password:bcrypt.hashSync(req.body.password, 8)},{new:true})
    console.log(user)
    return res.status(200).send({msg:true,user})
}catch (error) {
  console.log(error);
  return res.status(500).json({
      errorName: error.name,
      message: error.message
  })
}
}





exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get user from collection
  const user = await User.findById(req.user.id).select("+password");

  if (!user) {
    return next(
      new AppError("There is no user with this E-mail address!", 404)
    );
  }
  // 2) Check if POSTed current password is correct.
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError("The password is incorrect!", 401));
  }

  // 3) If so, Update the password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  // 4) Log user in, send JWT
  createSendToken(user, 200, res);
});

exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};
