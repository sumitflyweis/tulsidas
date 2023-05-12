const doc = require("../../model/uploadDocument");

// CREATE
module.exports.uploadDocumentsBByVendor = async (req, res) => {
  try {
    const { vendorId, status, uploadIdProof, uploadAddressProof, uploadPoliceVerification } = req.body;
    const document = await doc.create({
      vendorId,
      status,
      uploadIdProof,
      uploadAddressProof,
      uploadPoliceVerification
    });
   document.status ="success"
   await document.save()
    return res.status(200).json(document);
  } catch (err) {
  return  res.status(400).json({ message: err.message });
  }
}


module.exports.getDocumentsByVendor = async (req, res) => {
  try {
    const documents = await doc.find().populate("vendorId");
   return  res.json(documents);
  } catch (err) {
  return  res.status(500).json({ message: err.message });
  }
}


module.exports.getDocumentsByIdVendor = async (req, res) => {
    try {
      const documents = await doc.find({vendorId:req.params.vendorId}).populate("vendorId");
     return  res.json(documents);
    } catch (err) {
    return  res.status(500).json({ message: err.message });
    }
  }


module.exports.updateDocumentsByIdVendor = async (req, res) => {
  try {
    const { vendorId, status, uploadIdProof, uploadAddressProof, uploadPoliceVerification } = req.body;
    const updatedDocument = await doc.findByIdAndUpdate(
      req.params.id,
      {
        vendorId,
        status,
        uploadIdProof,
        uploadAddressProof,
        uploadPoliceVerification
      },
      { new: true }
    );
    updatedDocument.status ="success"
    await updatedDocument.save()
   return  res.json(updatedDocument);
  } catch (err) {
  return  res.status(400).json({ message: err.message });
  }
}


module.exports.deleteDocumentsByIdVendor = async (req, res) => {
  try {
    const deletedDocument = await doc.findByIdAndRemove(req.params.id);
   return res.json(deletedDocument);
  } catch (err) {
  return  res.status(500).json({ message: err.message });
  }
}


