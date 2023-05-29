const Manpower = require('../../model/manpower');

// CREATE
module.exports.createManpowerByVendor = async (req, res) => {
  try {

    const Data = {
        name:req.body.name,
        post:req.body.post,
        image: req.body.image,
        vendorId:req.body.vendorId
    }
    const newManpower = await Manpower.create(Data)
    return res.status(200).send(newManpower)
  } catch (err) {
    throw new Error(`Error creating manpower: ${err.message}`);
  }
};


module.exports.getManpowerByNameByVendor = async (req, res) => {
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

module.exports.getAllManpowerByVendor = async (req, res) => {
  try {
    const foundManpowers = await Manpower.find().populate('vendorId');
    return res.status(200).send({total:foundManpowers.length,data:foundManpowers})
  } catch (err) {
    throw new Error(`Error finding manpowers: ${err.message}`);
  }
};


module.exports.getManpowerByVendorIdByVendor = async (req, res) => {
    try {
      const foundManpower = await Manpower.find({vendorId:req.params.vendorId}).populate('vendorId');
      if (!foundManpower) {
        throw new Error('Manpower not found');
      }
      return res.status(200).send({total:foundManpower.length,data:foundManpower})
    } catch (err) {
      throw new Error(`Error finding manpower: ${err.message}`);
    }
  };


// UPDATE
module.exports.updateManpowerByVendor = async (req, res) => {
  try {

    const Data = {
        name:req.body.name,
        post:req.body.post,
        image: req.body.image,
        vendorId:req.body.vendorId
    }
    const updatedManpower = await Manpower.findByIdAndUpdate(req.params.id, Data,{new:true}).populate('vendorId');
    console.log(updatedManpower)
    if (!updatedManpower) {
      throw new Error('Manpower not found');
    }
    return res.status(200).send(updatedManpower);
  } catch (err) {
    throw new Error(`Error updating manpower: ${err.message}`);
  }
};

// // DELETE
module.exports.deleteManpowerByVendor = async (req, res) => {
  try {
    const deletedManpower = await Manpower.findByIdAndDelete(req.params.id);
    if (!deletedManpower) {
      throw new Error('Manpower not found');
    }
    return res.status(200).send(deletedManpower);
  } catch (err) {
    throw new Error(`Error deleting manpower: ${err.message}`);
  }
};
