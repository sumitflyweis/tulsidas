const schdule = require("../../models/schdule_models");

exports.GetAllAssigmentByAdmin = async (req, res) => {
  try {
    const data = await schdule.find();
    res.status(200).json({
      message: err.message,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getAssigmentByTeacherIDByAdmin = async (req, res) => {
  try {
    const data = await schdule.find({ teacherId: req.params.id });
    res.status(200).json({
      message: "ok",
      data: data,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getByStudentIdByAdmin = async (req, res) => {
  try {
    const data = await schdule.find({ studentId: req.params.id });
    res.status(200).json({
      message: data,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.DeletedSchduleByAdmin = async (req, res) => {
  try {
    const data = await schdule.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({
      message: "Schdule Assigment is Deleted ",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
