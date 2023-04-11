const bcrypt = require("bcryptjs");

const teacher = require("../../models/teacher_model");

exports.getByTeacherIdByStudent = async (req, res) => {
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
  
  exports.getAllteacherByStudent = async (req, res) => {
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
  