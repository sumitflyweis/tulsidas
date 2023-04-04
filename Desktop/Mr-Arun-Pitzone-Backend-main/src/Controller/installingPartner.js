const InstallingPartner = require('../Models/installerpartner');

// CREATE - create a new document in the collection
exports.createPartner = async(req,res) => {
  try {
    const newPartner = new InstallingPartner(req.body);
    const savedPartner = await newPartner.save();
    res.status(201).json(savedPartner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// READ - retrieve documents from the collection
exports.getAllPartners = async(req,res) => {
  try {
    const partners = await InstallingPartner.find();
    res.json(partners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.getPartnerById = async(req,res) => {
  try {
    const partner = await InstallingPartner.findById(req.params.id);
    if (!partner) {
      res.status(404).json({ message: 'Partner not found' });
      return;
    }
    res.json(partner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// UPDATE - update an existing document in the collection
exports.updatePartner = async(req,res) => {
  try {
    const updatedPartner = await InstallingPartner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return the updated document
    );
    if (!updatedPartner) {
      res.status(404).json({ message: 'Partner not found' });
      return;
    }
    res.json(updatedPartner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// DELETE - remove a document from the collection
exports.deletePartner = async(req,res) => {
  try {
    const deletedPartner = await InstallingPartner.findByIdAndDelete(req.params.id);
    if (!deletedPartner) {
      res.status(404).json({ message: 'Partner not found' });
      return;
    }
    res.json(deletedPartner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


