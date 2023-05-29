const Attend = require("../../model/attendence");

// CREATE
module.exports.createAttendenceByadmin = async (req, res) => {
  try {
    const data = {
      vendorId: req.body.vendorId,
      vendorname: req.body.vendorname,
      vendorCategory: req.body.vendorCategory,
      In: req.body.In,
      Out: req.body.Out,
    }

    const Attendence = await Attend.create(data);
    return res.status(200).send(Attendence);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

// READ
module.exports.getAllAttendenceByadmin = async (req, res) => {
  try {
    const foundAttendence = await Attend.find().populate("vendorId");
    if (!foundAttendence) {
      throw new Error("Attendence not found");
    }
    return res.status(200).send(foundAttendence);
  } catch (err) {
    throw new Error(`Error finding attendence: ${err.message}`);
  }
};

module.exports.getAttendenceByIdByadmin = async (req, res) => {
  try {
    const foundAttendences = await Attend.find({
      vendorId: req.params.vendorId,
    }).populate("vendorId");
    return res.status(200).send(foundAttendences);
  } catch (err) {
    throw new Error(`Error finding attendences: ${err.message}`);
  }
};

// UPDATE
module.exports.updateAttendenceByIdByadmin = async (req, res) => {
  try {
    const data = {
      vendorId: req.body.vendorId,
      vendorname: req.body.vendorname,
      vendorCategory: req.body.vendorCategory,
      In: req.body.In,
      Out: req.body.Out,
    };

    const updatedAttendence = await Attend.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true }
    );
    console.log(updatedAttendence);
    if (!updatedAttendence) {
        return res.status(400).send("data not found");
    }
    return res.status(200).send(updatedAttendence);
  } catch (err) {
    throw new Error(`Error updating attendence: ${err.message}`);
  }
};

// DELETE
module.exports.deleteAttendenceByIdByadmin = async (req, res) => {
  try {
    const deletedAttendence = await Attend.findByIdAndDelete(req.params.id);
    if (!deletedAttendence) {
      throw new Error("Attendence not found");
    }
    return res.status(200).send(deletedAttendence);
  } catch (err) {
    throw new Error(`Error deleting attendence: ${err.message}`);
  }
};
