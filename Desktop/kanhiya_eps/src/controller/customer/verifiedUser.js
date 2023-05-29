const path = require("path");
require("dotenv").config();
const verified = require("../../model/verifiedUser");

exports.verifiedUser = async (req, res) => {
  try {
    const verifieddata = await verified.create({
      aadharCard: req.body.aadharCard,
    });
    console.log(verifieddata);
    return res.status(200).json({
      id: verifieddata._id,
      message: "verifieddata created ",
      data: verifieddata,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

module.exports.updateVerifiedUser = async (req, res) => {
  try {
    const verifiedData = await verified.findOneAndUpdate(
      { _id: req.params.id },
      { aadharCard: req.body.aadharCard },
      { new: true }
    );

    console.log(verifiedData);
    return res.status(200).json(verifiedData);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

exports.deleteVerifiedData = async (req, res) => {
  try {
    const id = req.params.id;
    await verified.deleteOne({ _id: id });
    res.status(200).send({ message: "verifiedData deleted " });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
