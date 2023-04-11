const schdule = require("../../models/schdule_models");

exports.AddSchduleTime = async (req, res) => {
  try {
    const data = {
      date: req.body.name,
      time: req.body.time,
      name: req.body.name,
      month: req.body.month,
      studentId: req.body.studentId,
      teacherId: req.body.teacherId,
    };
    const Data = await schdule.create(data);

    res.status(200).json({
      message: "Assigment Schdule ",
      Data: Data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.GetAllAssigment = async (req, res) => {
  try {
    const data = await schdule.find();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

exports.getAssigmentByTeacherID = async (req, res) => {
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

exports.getByStudentId = async (req, res) => {
  try {
    const data = await schdule.find({ studentId: req.params.id });
  return  res.status(200).json({
      message: data,
    });
  } catch (err) {
   return  res.status(400).json({
      message: err.message,
    });
  }
};


exports.DeletedSchdule = async (req, res) => {
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
