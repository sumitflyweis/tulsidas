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
    const { email, password } = req.body;

    const user = await userSchema.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id.toString() }, process.env.KEY, { expiresIn: "1d" });

    res.setHeader("x-api-key", /* "Bearer "*/ +token);
    res.status(200).json({ message: "Login successful", token: token });

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

    // res
    //   .status(200)
    //   .send({ message: "OTP sent successfully", newUser: data, token: token });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};



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

 // Number of salt rounds for bcrypt hashing

exports.userProfile1 = async (req, res) => {
  try {
    const { email, password } = req.body;

    const saltRounds = 10;
    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user with the hashed password
    const newUser = await userSchema.create({ email: email, password: hashedPassword });

    res.status(200).send({ message: "Data created successfully", newUser: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};



exports.getAllUser = async(req,res) => {
  try {
      const data = await userSchema.find();
      console.log(data);
    return  res.status(200).json({
          user: data
      })
   
  }catch(err)
  {
      res.status(400).send({mesage : err.mesage});
  }
}



exports.getUserById = async(req,res) => {
  try {
      const data = await userSchema.findById({_id:req.params.id});
      console.log(data);
    return  res.status(200).json({
          user: data
      })
      
  }catch(err)
  {
      res.status(400).send({mesage : err.mesage});
  }
}



exports.userUpdatebuyer = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    const hashedRePassword = await bcrypt.hash(req.body.RePassword, 8);
    console.log("hi");
    const data = {
      email:req.body.email,
      password: hashedPassword,
      RePassword: hashedRePassword,
      firstName:req.body.firstName,
      middleName:req.body.middleName,
      lastName:req.body.lastName,
      phone:req.body.phone,
      country:req.body.country,
      state:req.body.state,
      district:req.body.district,
      pincode:req.body.pincode,
    }
     
    const user = await userSchema.findByIdAndUpdate(
      { _id:req.params.id},
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
      name:req.body.name,
      gender:req.body.gender,
      dateOfBirth:req.body.dateOfBirth,
      bloodGroup:req.body.bloodGroup,
      plan:req.body.plan,
      status:req.body.status,
      address: req.body.address,
      phone: req.body.phone,
      emergencyContactNumber:req.body.emergencyContactNumber,
      email: req.body.email,
    }
     let userId = req.user._id
    console.log(userId);
    const user = await userSchema.findByIdAndUpdate(
      { _id: req.user._id},
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


exports.deletebuyer = async (req, res) => {
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
    const { google_id } = req.body

     const user = await userSchema.findOne({ google_id: google_id });
     console.log(user)
     if (!user ||user.length == 0 ) {
      const data1 = {
        google_id: req.body.google_id,
        // name: req.body.name,
        email: req.body.email,
        // phone: req.body.phone,
      }

      const create = await userSchema.create(data1);
      console.log(create)

      const accessToken1 = jwt.sign({id: create._id }, process.env.KEY, {
        expiresIn: "1d",
      })

      res.setHeader("x-api-key", /* "Bearer "*/ +accessToken1);
      return res.status(200).send({
        message: "logged in successfully",
        accessToken: accessToken1,
        data: create,
      });
    }

    console.log("hi")
    const accessToken = jwt.sign({id: user._id }, process.env.KEY, {
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
}




exports.forgetPassword = async (req, res, next) => {
  const { email } = req.body;

 try {
   const admin = await userSchema.findOne({ email });
   if (!admin) return res.status(404).json({ message: " not found" });


   const newPassword = Math.random().toString(36).slice(-8);
   admin.password = newPassword;
   
  
   await admin.save()
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

   res.json({msg:admin});
 } catch (err) {
   res.status(400).json({ message: err.message });
 }
}




exports.forgotPasswordOtp = async (req, res) => {
  try {
      const { otp } = req.body;
      const user = await User.findById(req.params.id);
      if (!user) {
          return res.status(404).send({ message: "user not found" });
      }
      if (user.otp !== otp || user.otpExpiration < Date.now()) {
          return res.status(400).json({ message: "Invalid OTP" });
      }
      const updated = await User.findByIdAndUpdate(
          { _id: user._id },
          { accountVerification: true },
          { new: true }
      );
      res.status(200).send({
          message: "otp verified successfull update your passpword.",
          userId: updated._id,
      });
  } catch (err) {
      console.log(err.message);
      res.status(500).send({ error: "internal server error" + err.message });
  }
};


exports.resetPassword = async (req, res) => {
  try {
      // Extract password and confirm password from request body
      const { password, RePassword } = req.body;
      const user = await userSchema.findOne({ _id: req.params.id });
      if (!user) {
          return res
              .status(400)
              .json({ status: 400, message: "user not found" });
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
       
      }
   catch (error) {
      console.error(error);
      res.status(500).json({
          message: "An error occurred. Please try again later.",
      });
  }
};


exports.resendOTP = async (req, res) => {
  const { id } = req.params;
  try {
      const user = await User.findOne({ _id: id });
      if (!user) {
          return res.status(400).send({ message: "User not found" });
      }
      const otp = newOTP.generate(4, {
          alphabets: false,
          upperCase: false,
          specialChar: false,
      })
      const otpExpiration = new Date(Date.now() + 5 * 60 * 1000); // OTP expires in 5 minutes
      const accountVerification = false;
      const updated = await User.findOneAndUpdate(
          { _id: id },
          { otp, otpExpiration, accountVerification },
          { new: true }
      );
      res.status(200).send({ message: "OTP resent", otp: otp });
  } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Server error" + error.message });
  }
};
exports.changePassword = async (req, res) => {
  try {
      const { password, confirmPassword } = req.body;
      const user = await User.findById(req.user.id);
      if (!user) {
          return res.status(400).json({ status: 400, message: "Invalid or expired token" });
      } else {
              if (password !== confirmPassword) {
                  return res.status(400).json({status: 400,message: "Passwords do not match",});
              } else {
                  user.password = bcrypt.hashSync(password, 10);
                  await user.save();
                  res.status(200).json({status: 200,message: "Password Changed successful"});
              }
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({
          message: "An error occurred. Please try again later.",
      });
  }
};