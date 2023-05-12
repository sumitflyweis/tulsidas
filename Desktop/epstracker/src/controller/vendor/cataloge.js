const { toComparators } = require("semver");
const catalogueModel = require("../../model/cataloge"); // Import the catalogue model

module.exports.getAllcatalogueByVendor = async (req, res) => {
  try {
    const items = await catalogueModel.find();
    return res.json(items);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

module.exports.createcatalogueByVendor = async (req, res) => {
  try {
    const { image, vendorId, itemName, Price, desc } = req.body;
    const newItem = new catalogueModel({
      image,
      vendorId,
      itemName,
      Price,
      desc,
    });
    const savedItem = await newItem.save();
    return res.json(savedItem);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

module.exports.getcatalogueByIdByVendor = async (req, res) => {
  try {
    const item = await catalogueModel.findById(req.params.id);
    return res.json(item);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

module.exports.updatecatalogueByVendor = async (req, res) => {
  try {
    const { image, vendorId, itemName, Price, desc } = req.body;
    const updatedItem = await catalogueModel.findByIdAndUpdate(
      req.params.id,
      { image, vendorId, itemName, Price, desc },
      { new: true }
    );
    return res.json(updatedItem);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

module.exports.deletecatalogueByVendor = async (req, res) => {
  try {
    const deletedItem = await catalogueModel.findByIdAndDelete(req.params.id);
    return res.json(deletedItem);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};
