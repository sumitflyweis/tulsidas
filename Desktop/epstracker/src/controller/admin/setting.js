const path = require("path");
require("dotenv").config();
const setting = require("../../model/setting");

exports.settingAdmin = async (req, res) => {
  try {
    const data = {
    liveLocation: req.body.liveLocation,
    notification : req.body.notification
    }; 

    const settingdata = await setting.create(data);

    console.log(settingdata);
    return res.status(200).json({
      id: settingdata._id,
      message: "settingdata created ",
      data: settingdata,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

module.exports.updatesubscriptionAdmin = async (req, res) => {
  try {
    const data = {
        liveLocation: req.body.liveLocation,
        notification : req.body.notification
        };
    const settingdata = await setting.findOneAndUpdate(
      { _id: req.params.id },
      data,
      { new: true }
    );

    console.log(settingdata);
    return res.status(200).json(settingdata);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

exports.deleteSubcriptionAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    await setting.deleteOne({ _id: id });
    res.status(200).send({ message: "setting deleted " });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
