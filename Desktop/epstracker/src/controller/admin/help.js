const path = require("path");
require("dotenv").config();
const help = require("../../model/help");

exports.helpAdmin = async (req, res) => {
  try {
    const data = {
    name: req.body.name,
    email : req.body.email,
    phone:req.body.phone,
    enquiry: req.body.enquiry
    }; 

    const helpdata = await help.create(data);

    console.log(helpdata);
    return res.status(200).json({
      id: helpdata._id,
      message: "helpdata created ",
      data: helpdata,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

module.exports.updateHelpAdmin = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email : req.body.email,
      phone:req.body.phone,
      enquiry: req.body.enquiry
      }; 
    const helpdata = await help.findOneAndUpdate(
      { _id: req.params.id },
      data,
      { new: true }
    );

    console.log(helpdata);
    return res.status(200).json(helpdata);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

exports.deleteHelpAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    await help.deleteOne({ _id: id });
  return  res.status(200).send({ message: "help deleted " });
  } catch (err) {
    console.log(err);
  return  res.status(400).send({ message: err.message });
  }
};
