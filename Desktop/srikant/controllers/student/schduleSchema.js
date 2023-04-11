const schdule = require("../../models/schdule_models");


exports.GetAllAssigmentByStudent = async (req, res) => {
  try {
    const data = await schdule.find();
   return  res.status(200).send(data)
  } catch (err) {
  return   res.status(400).json({
      message: err.message,
    });
  }
};


exports.getByStudentIdByStudent = async (req, res) => {
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

exports.getAssigmentByTeacherIDByStudent = async (req, res) => {
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

