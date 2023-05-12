const Attend = require("../../model/attendence");


// READ
module.exports.getAllAttendenceByCustomer = async (req, res) => {
  try {
    const foundAttendence = await Attend.find().populate( "vendorId" );
    if (!foundAttendence) {
      throw new Error("Attendence not found");
    }
    return res.status(200).send(foundAttendence)
  } catch (err) {
    throw new Error(`Error finding attendence: ${err.message}`);
  }
};

module.exports.getAttendenceByIdByCustomer = async (req, res) => {
  try {
    const foundAttendences = await Attend.find({vendorId:req.params.vendorId}).populate("vendorId");
    return res.status(200).send(foundAttendences)
  } catch (err) {
    throw new Error(`Error finding attendences: ${err.message}`);
  }
};
