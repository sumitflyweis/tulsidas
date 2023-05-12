const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const teacher = require("../../models/teacher_model");

exports.RegisterTeacher = async (req, res) => {
  try {
    if (
      !req.body.first &&
      !req.body.last &&
      !req.body.mobile &&
      !req.body.branch &&
      !req.body.Id &&
      !req.body.password &&
      !req.body.wishes
    ) {
      return res.status(400).json({
        message: "All Fields are require",
      });
    }
    const teacherData = await teacher.findOne({ mobile: req.body.mobile });
    if (teacherData) {
      return res.status(401).json({
        message: "Mobile Number already register ",
      });
    }
    const Data = {
      fullName: req.body.fullName,
      mobile: req.body.mobile,
      branch: req.body.branch,
      Id: req.body.Id,
      password: bcrypt.hashSync(req.body.password, 8),
      wishes: req.body.wishes,
      semester: req.body.semester,
      year: req.body.year,
      email: req.body.email,
    };
    const teacherObj = await teacher.create(Data);

    const otp = Math.floor(1000 + Math.random() * 9000);
    teacherObj.otp = otp;
    await teacherObj.save();
    return res.status(200).json({
      message: "Teacher register done ",
      data: teacherObj,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};



exports.teacherLogin = async (req, res) => {
  try {
    const StudentData = await teacher.findOne({ email: req.body.email });
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






exports.UpdateTeacherId = async (req, res) => {
  try {
    await teacher.updateOne(
      { _id: req.params.id },
      {
        fullName: req.body.fullName,
        mobile: req.body.mobile,
        branch: req.body.branch,
        Id: req.body.Id,
        wishes: req.body.wishes,
        semester: req.body.semester,
        year: req.body.year,
        email: req.body.email,
      },
      { new: true }
    );
    return res.status(200).json({
      message: "Teacher profile upload ",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err.message,
    });
  }
};

exports.DeleteTeacher = async (req, res) => {
  try {
    await teacher.findByIdAndDelete({ _id: req.params.id });
    return res.status(200).json({
      message: "Teacher Profile is Deleted ",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err.message,
    });
  }
};

exports.getByTeacherId = async (req, res) => {
  try {
    const data = await teacher.findById({ _id: req.params.id });
    return res.status(200).json({
      message: "ok",
      data: data,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err.message,
    });
  }
};

exports.getAllteacher = async (req, res) => {
  try {
    const data = await teacher.find();
    return res.status(200).json({
      message: data,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err.message,
    });
  }
};

exports.forgetPasswordforteacher = async (req, res) => {
  try {
    const { mobile } = req.body;
    const user = await teacher.findOne({ mobile });
    if (!user) {
      return res.status(400).json({ message: "teacher not found" });
    }
    const otp = Math.floor(1000 + Math.random() * 9000);
    user.otp = otp;
    await user.save();
    res.status(200).json({
      taecher: user,
      message: "OTP sent to your registered mobile number",
      otp: otp,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.VerifyOtpforteacher = async (req, res, next) => {
  try {
    const { otp } = req.body;
    const requiredOtp = await teacher.findOne({ otp: otp });
    console.log("hi");
    //console.log(requiredOtp.email)

    if (otp !== requiredOtp.otp) return res.status(400).send(" wrong otp");

    return res.status(200).send({ msg: "otp verified", _id: requiredOtp._id });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.resetPasswordforteacher = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    // console.log(password, confirmpassword);
    // if (password !== confirmpassword) {
    //     return res.status(400).json({ message: "Password not matched" });
    // }
    const user = await teacher.findById(id);
    if (!user) {
      return res.status(400).json({ message: "teacher not found" });
    }
    user.password = bcrypt.hashSync(password, 8);
    await user.save();
    // user.confirmpassword = bcrypt.hashSync(confirmpassword, 8);
    await user.save();
    res.status(200).json({
      message: "Password reset successfully",
      password: user.password,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      message: err.message,
    });
  }
};
