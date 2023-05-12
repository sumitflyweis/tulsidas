const Manpower = require('../../model/manpower');

module.exports.getManpowerByNameByAdmin = async (req, res) => {
  try {
    const foundManpower = await Manpower.findOne({name:req.params.name}).populate('vendorId');
    if (!foundManpower) {
      throw new Error('Manpower not found');
    }
    return res.status(200).send(foundManpower)
  } catch (err) {
    throw new Error(`Error finding manpower: ${err.message}`);
  }
};

module.exports.getAllManpowerByAdmin = async (req, res) => {
  try {
    const foundManpowers = await Manpower.find().populate('vendorId');
    return res.status(200).send(foundManpowers)
  } catch (err) {
    throw new Error(`Error finding manpowers: ${err.message}`);
  }
};
