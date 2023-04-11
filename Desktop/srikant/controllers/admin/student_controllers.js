const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const student = require("../../models/student_models");

exports.RegisterStudentDataByAdmin = async (req, res) => {
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


exports.SignInByAdmin = async (req, res) => {
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


exports.UpdateProfileByAdmin = async (req, res) => {
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


exports.DeleteStudentByAdmin = async (req, res) => {
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

exports.getAllStudentByAdmin = async (req, res) => {
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

exports.studentgetByIdByAdmin = async (req, res) => {
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
