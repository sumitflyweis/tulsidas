const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const student = require("../../models/student_models");

exports.RegisterStudentData = async (req, res) => {
  try {
    if (
      !req.body.name &&
      !req.body.email &&
      !req.body.roll_number &&
      !req.body.branch &&
      !req.body.semester &&
      !req.body.year &&
      !req.body.password &&
      !req.body.confirmpassword
    ) {
      return res.status(401).json({
        message: "All Fields are required ",
      });
    }
    if (req.body.password !== req.body.confirmpassword) {
      return res.status(402).json({
        message: "Password and ConfirmPassword not Matched ",
      });
    }
    const StudentData = await student.findOne({
      $and: [{ email: req.body.email }, { roll_number: req.body.roll_number }],
    });
    if (StudentData) {
      return res.status(403).json({
        message: "Email and Roll_Number is already register ",
      });
    }
    const data = {
      name: req.body.name,
      email: req.body.email,
      roll_number: req.body.roll_number,
      branch: req.body.branch,
      semester: req.body.semester,
      year: req.body.year,
      password: bcrypt.hashSync(req.body.password, 8),
      confirmpassword: bcrypt.hashSync(req.body.confirmpassword, 8),
    };
    const Data = await student.create(data);
   return  res.status(200).json({
      message: "SignUp Done ",
      data: Data,
    });
  } catch (err) {
  return   res.status(400).json({
      message: err.message,
    });
  }
};


exports.SignIn = async (req, res) => {
  try {
    const StudentData = await student.findOne({ email: req.body.email });
    if (!StudentData) {
      return res.status(400).send({
        message: "Failed! email or email passed dosen't exist",
      });
    }
 
      const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      StudentData.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({
        message: "Wrong password",
      });
    }
    const accessToken = jwt.sign({ id: StudentData._id }, process.env.SECRET, {
      expiresIn: "1d",
    });
  return   res.status(200).json({
      message: "Ok",
      token: accessToken,
      user: StudentData,
    });
  } catch (err) {
    console.log(err);
  return  res.status(400).json({
      message: err.message,
    });
  }
};


exports.UpdateProfile = async (req, res) => {
  try {
    const data = await student.updateOne(
      { _id: req.params.id },
      {
        image: req.body.image,
        name: req.body.name,
        email: req.body.email,
        roll_number: req.body.roll_number,
        branch: req.body.branch,
        semester: req.body.semester,
        year: req.body.year,
      },
      { new: true }
    );
  return   res.status(200).json({
      message: "Student Data is Updated ",
    });
  } catch (err) {
    console.log(err);
  return  res.status(400).json({
      message: err.message,
    });
  }
};


exports.DeleteStudent = async (req, res) => {
  try {
    await student.findByIdAndDelete({ _id: req.params.id });
  return  res.status(200).json({
      message: "Student is Deleted ",
    });
  } catch (err) {
    console.log(err);
 return  res.status(400).json({
      message: err.message,
    });
  }
};

exports.getAllStudent = async (req, res) => {
  try {
    const data = await student.find();
  return  res.status(200).json({
      message: "ok",
      data: data,
    });
  } catch (err) {
    console.log(err);
  return  res.status(400).json({
      message: err.message,
    });
  }
};

exports.studentgetById = async (req, res) => {
  try {
    const data = await student.findById({ _id: req.params.id });
    if (!data) {
      return res.status(401).json({
        message: "No Data Found this User ",
      });
    }
   return  res.status(200).json({
      message: "ok",
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};


exports.forgetPassword = async (req, res) => {
  try {
      const { email } = req.body;
      const user = await student.findOne({ email });
      if (!user) {
          return res.status(400).json({ message: "User not found" });
      }
      const otp = Math.floor(1000 + Math.random() * 9000);
      user.otp = otp;
      await user.save();
      res.status(200).json({
          userId: user._id,
          message: "OTP sent to your registered mobile number",
          otp: otp,
      });
  } catch (err) {
      res.status(400).json({
          message: err.message,
      });
  }
};




exports.VerifyOtp = async (req, res, next) => {
  try {
    const { otp } = req.body;
    const requiredOtp = await student.findOne({ otp: otp });
    console.log("hi")
    console.log(requiredOtp.email)

    if (otp !== requiredOtp.otp) return res.status(400).send(" wrong otp")

    return res.status(200).send({msg:"otp verified",_id:requiredOtp._id})

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};



exports.UpdateProfilepassword = async (req, res) => {
  try {
    const data = await student.updateOne(
      { _id: req.params.id },
      {
       password: bcrypt.hashSync(req.body.password, 8) ,      
       confirmpassword:  bcrypt.hashSync(req.body.confirmpassword,8) ,
      },
      { new: true }
    );
  return   res.status(200).json({
      message: "Student password is Updated ",
    });
  } catch (err) {
    console.log(err);
  return  res.status(400).json({
      message: err.message,
    });
  }
};



exports.resetPassword = async (req, res) => {
  try {
      const { id } = req.params;
      const { password, confirmpassword } = req.body;
      // console.log(password, confirmpassword);
      if (password !== confirmpassword) {
          return res.status(400).json({ message: "Password not matched" });
      }
      const user = await astrologer.findById(id);
      if (!user) {
          return res.status(400).json({ message: "User not found" });
      }
      user.password = bcrypt.hashSync(password, 8);
      user.confirmpassword = bcrypt.hashSync(confirmpassword, 8);
      await user.save();
      res.status(200).json({
          message: "Password reset successfully",
      });
  } catch (err) {
      console.log(err.message);
      res.status(400).json({
          message: err.message,
      });
  }
};