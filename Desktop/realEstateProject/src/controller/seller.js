var bcrypt = require("bcryptjs");
const path = require("path");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const sellerSchema = require("../model/seller");
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
    const { email, password } = req.body;

    const user = await sellerSchema.findOne({email});
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id.toString() }, process.env.KEY, {
      expiresIn: "1d",
    });
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp
    await user.save()
    res.setHeader("x-api-key", /* "Bearer "*/ +token);
    res.status(200).json({ message: "Login successful", token: token,otp:otp });

    

    // Store the OTP for the phone number

    //otps[phone] = otp;
    //const newUser = new userSchema({ phone: data.phone,otp:data.otp });

    // Send the OTP to the user's phone number
    // client.messages.create({
    //   body: `Your OTP is ${otp}`,
    //   from: "+16205071468",
    //   to: phone,
    // });

    // res
    //   .status(200)
    //   .send({ message: "OTP sent successfully", newUser: data, token: token });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};


exports.verifyseller = async (req, res) => {
  try {
    const { /*phone,*/ otp } = req.body;

    const verifyOtp = await sellerSchema.findOne({
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

// Number of salt rounds for bcrypt hashing

exports.sellerProfile1 = async (req, res) => {
  try {


    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    const hashedRePassword = await bcrypt.hash(req.body.RePassword, 8);
    const data = {
      phone: req.body.phone,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      address: req.body.address,
      email: req.body.email,
      password: hashedPassword,
      RePassword:  hashedRePassword  ,
      wantToSell: req.body.wantToSell,
      sellingYourHome: req.body.sellingYourHome,
      area: req.body.area,
      yearBuild: req.body.yearBuild,
      lotSize: req.body.lotSize,
      finishedSquareft: req.body.finishedSquareft,
      bedrooms: req.body.bedrooms,
      fullbath: req.body.fullbath,
      halfBath: req.body.halfBath,
      appliances: req.body.appliances,
      floors: req.body.floors,
      others: req.body.others,
      parking: req.body.parking,
      rooms: req.body.rooms,
      views: req.body.views,
      anyImprovement: req.body.anyImprovement,
      listingPrice: req.body.listingPrice,
      descriptionOfYourHome: req.body.descriptionOfYourHome,
      uploadPhoto: req.body.uploadPhoto,
      uploadVedio: req.body.uploadVedio,
      willingToWorkWithTheBuyerAgent: req.body.willingToWorkWithTheBuyerAgent,
      percentageOfAgent: req.body.percentageOfAgent,
      BuyerCreditOrRefund: req.body.BuyerCreditOrRefund,
      percentageOfBuyerCredit: req.body.percentageOfBuyerCredit,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      time: req.body.time,
      preApprovalLetter: req.body.preApprovalLetter,
      proofOfFunds: req.body.proofOfFunds,
      OfferAcceptNegotiate: req.body.OfferAcceptNegotiate,
    };

    //  const saltRounds = 10;
    // Hash the password using bcrypt
    // const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user with the hashed password
    const newUser = await sellerSchema.create(data);

    res
      .status(200)
      .send({ message: "Data created successfully", newUser: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};


exports.getAllUser = async (req, res) => {
  try {
    const data = await sellerSchema.find();
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
    const data = await sellerSchema.findById({ _id: req.params.id });
    console.log(data);
    return res.status(200).json({
      user: data,
    });
  } catch (err) {
    res.status(400).send({ mesage: err.mesage });
  }
};

exports.userUpdateseller = async (req, res) => {
  try {
    console.log("hi");
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    const hashedRePassword = await bcrypt.hash(req.body.RePassword, 8);
    const data = {
      phone: req.body.phone,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      address: req.body.address,
      email: req.body.email,
      password: hashedPassword,
      RePassword:  hashedRePassword  ,
      wantToSell: req.body.wantToSell,
      sellingYourHome: req.body.sellingYourHome,
      area: req.body.area,
      yearBuild: req.body.yearBuild,
      lotSize: req.body.lotSize,
      finishedSquareft: req.body.finishedSquareft,
      bedrooms: req.body.bedrooms,
      fullbath: req.body.fullbath,
      halfBath: req.body.halfBath,
      appliances: req.body.appliances,
      floors: req.body.floors,
      others: req.body.others,
      parking: req.body.parking,
      rooms: req.body.rooms,
      views: req.body.views,
      anyImprovement: req.body.anyImprovement,
      listingPrice: req.body.listingPrice,
      descriptionOfYourHome: req.body.descriptionOfYourHome,
      uploadPhoto: req.body.uploadPhoto,
      uploadVedio: req.body.uploadVedio,
      willingToWorkWithTheBuyerAgent: req.body.willingToWorkWithTheBuyerAgent,
      percentageOfAgent: req.body.percentageOfAgent,
      BuyerCreditOrRefund: req.body.BuyerCreditOrRefund,
      percentageOfBuyerCredit: req.body.percentageOfBuyerCredit,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      time: req.body.time,
      preApprovalLetter: req.body.preApprovalLetter,
      proofOfFunds: req.body.proofOfFunds,
      OfferAcceptNegotiate: req.body.OfferAcceptNegotiate,
    };
    
   
    const user = await sellerSchema.findByIdAndUpdate(
      { _id: req.params.id},
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



// exports.sellerProfile1 = async (req, res) => {
//     try {
//       const { password, RePassword, ...rest } = req.body;
  
//       // Hash the passwords using bcrypt
//       const hashedPassword = await bcrypt.hash(password, 8);
//       const hashedRePassword = await bcrypt.hash(RePassword, 8);
  
//       const data = {
//         ...rest,
//         password: hashedPassword,
//         RePassword: hashedRePassword
//       };
  
//       // Create a new seller profile using the Seller model
//       const newSeller = await Seller.create(data);
  
//       res.status(200).json({ message: "Data created successfully", newUser: newSeller });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ message: "Internal Server Error" });
//     }
//   };
  


exports.deleteseller = async (req, res) => {
  try {
    const id = req.params.id;
    await sellerSchema.deleteOne({ _id: id });
    return res.status(200).send({ message: "data deleted " });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

exports.forgetPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const admin = await userSchema.findOne({ email });
    if (!admin) return res.status(404).json({ message: " not found" });

    const newPassword = Math.random().toString(36).slice(-8);
    admin.password = newPassword;

    await admin.save();
    //    const transporter = nodemailer.createTransport({
    //      host: 'smtp.ethereal.email',
    //      port: 587,
    //      auth: {
    //          user: 'sandy.anderson@ethereal.email',
    //          pass: 'K26Eg8zmEvkHuAYBYm'
    //      }
    //  });

    //  const mailOptions = {
    //    from: 'node3@flyweis.technology',
    //    to: email,
    //    subject: 'hello',
    //    text: `Your new password is ${password}. Please login and change your password as soon as possible.`
    //  };

    //  transporter.sendMail(mailOptions, (error, info) => {
    //    if (error) {
    //      console.log(error);
    //    } else {
    //      console.log('Email sent: ' + info.response);
    //    }
    //  });

    res.json({ msg: admin });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    // Extract password and confirm password from request body
    const { password, RePassword } = req.body;
    const user = await userSchema.findOne({ _id: req.params.id });
    if (!user) {
      return res.status(400).json({ status: 400, message: "user not found" });
    } else {
      // if (user.accountVerification == true) {
      if (password !== RePassword) {
        return res.status(400).json({
          status: 400,
          message: "Passwords do not match",
        });
      } else {
        user.password = bcrypt.hashSync(password, 10);
        user.RePassword = bcrypt.hashSync(RePassword, 10);
        await user.save();
        res.status(200).json({
          status: 200,
          message: "Password reset successful",
        });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred. Please try again later.",
    });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { password, confirmPassword } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) {
      return res
        .status(400)
        .json({ status: 400, message: "Invalid or expired token" });
    } else {
      if (password !== confirmPassword) {
        return res
          .status(400)
          .json({ status: 400, message: "Passwords do not match" });
      } else {
        user.password = bcrypt.hashSync(password, 10);
        await user.save();
        res
          .status(200)
          .json({ status: 200, message: "Password Changed successful" });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred. Please try again later.",
    });
  }
};


exports.getthroughformdata = async (req, res) => {
  try {
    const obj = { ...req.query };

    // if (
    //   req.query.preApprovalLetter ||
    //   req.query.proofOfFunds ||
    //   req.query.BuyerCreditOrRefund ||
    //   req.query.willingToWorkWithTheBuyerAgent
    // ) {
    //   obj.preApprovalLetter = req.query.preApprovalLetter === "true";
    //   obj.proofOfFunds = req.query.proofOfFunds === "true";
    //   obj.BuyerCreditOrRefund = req.query.BuyerCreditOrRefund === "true";
    //   obj.willingToWorkWithTheBuyerAgent =
    //     req.query.willingToWorkWithTheBuyerAgent === "true";
    // }

    console.log(obj);

    const order = await sellerSchema.find(obj);
    console.log(order);
    res.status(200).json({
      success: true,
      total: order.length,
      data: order,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve orders",
      error: err.message,
    });
  }
};

