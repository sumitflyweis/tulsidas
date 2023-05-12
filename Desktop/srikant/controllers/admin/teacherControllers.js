const bcrypt = require("bcryptjs");

const teacher = require("../../models/teacher_model");

exports.RegisterTeacherByAdmin = async (req, res) => {
  try {
    if (
      !req.body.first &&
      !req.body.last &&
      !req.body.mobile &&
      !req.body.branch &&
      !req.body.Id &&
      !req.body.password
    ) {
      return res.status(400).json({
        message: "First,Last,mobile,branch,Id,password  are require",
      });
    }
    const teacherData = await teacher.findOne({ mobile: req.body.mobile });
    if (teacherData) {
      return res.status(401).json({
        message: "Mobile Number already register ",
      });
    }
    const Data = {
      first: req.body.first,
      last: req.body.last,
      mobile: req.body.mobile,
      branch: req.body.branch,
      Id: req.body.Id,
      password: bcrypt.hashSync(req.body.password, 8),
    };
    const teacherObj = await teacher.create(Data);
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

exports.teacherLoginByAdmin = async (req, res) => {
  try {
    if (!req.body.mobile && !req.body.password) {
      return res.status(400).json({
        message: "Mobile number and Password required ",
      });
    }
    const teacherId = await teacher.findOne({ mobile: req.body.mobile });
    if (teacherId) {
      return res.status(401).json({
        message: "Mobile number IS  REGISTER ",teacherId:teacherId
      });
    }else{
      return res.status(400).json({
        message: "Mobile number IS  NOTREGISTERED"
    })
  }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.UpdateTeacherIdByAdmin = async (req, res) => {
  try {
    await teacher.updateOne(
      { _id: req.params.id },
      {
        image: req.body.image,
        first: req.body.first,
        last: req.body.last,
        mobile: req.body.mobile,
        branch: req.body.branch,
        Id: req.body.Id,
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

exports.DeleteTeacherByAdmin = async (req, res) => {
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

exports.getByTeacherIdByAdmin = async (req, res) => {
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

exports.getAllteacherByAdmin = async (req, res) => {
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
