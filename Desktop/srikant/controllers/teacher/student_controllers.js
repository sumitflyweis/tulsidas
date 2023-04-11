const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const student = require("../../models/student_models");


exports.getAllStudentByTeacher = async (req, res) => {
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
  
  exports.studentgetByIdByTeacher = async (req, res) => {
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
  