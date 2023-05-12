const doc = require("../../model/uploadDocument");


module.exports.getDocumentsByCustomer = async (req, res) => {
  try {
    const documents = await doc.find().populate("vendorId");
   return  res.json(documents);
  } catch (err) {
  return  res.status(500).json({ message: err.message });
  }
}


module.exports.getDocumentsByIdCustomer = async (req, res) => {
    try {
      const documents = await doc.find({vendorId:req.params.vendorId}).populate("vendorId");
     return  res.json(documents);
    } catch (err) {
    return  res.status(500).json({ message: err.message });
    }
  }
