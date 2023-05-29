const path = require("path");
require("dotenv").config();
const activity = require("../../model/activityMaker");

exports.activityMakerVendor = async (req, res) => {
  try {
    const data = {
      SerialNumber: req.body.SerialNumber,
      taskName: req.body.taskName,
      TotalTask: req.body.TotalTask,
      Achieved: req.body.Achieved,
      taskAssignedTo: req.body.taskAssignedTo,
    };

    const activitydata = await activity.create(data);

    console.log(activitydata);
    return res.status(200).json({
      id: activitydata._id,
      message: "activitydata created ",
      data: activitydata,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

module.exports.UpdateActivityMakerVendor = async (req, res) => {
  try {
    const data = {
      SerialNumber: req.body.serialNumber,
      taskName: req.body.taskName,
      TotalTask: req.body.TotalTask,
      Achieved: req.body.Achieved,
      taskAssignedTo: req.body.taskAssignedTo,
    };
    const activitydata = await activity.findOneAndUpdate(
      { _id: req.params.id },
      data,
      { new: true }
    );

    console.log(activitydata);
    return res.status(200).json(activitydata);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

exports.deleteActivityMakerVendor = async (req, res) => {
  try {
    const id = req.params.id;
    await setting.deleteOne({ _id: id });
    res.status(200).send({ message: "activity deleted " });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
