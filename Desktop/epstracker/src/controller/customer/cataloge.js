const { toComparators } = require("semver");
const catalogueModel = require("../../model/cataloge"); // Import the catalogue model

module.exports.getAllcatalogueBycustomer = async (req, res) => {
  try {
    const items = await catalogueModel.find();
    return res.json(items);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};


module.exports.getcatalogueByIdBycustomer = async (req, res) => {
  try {
    const item = await catalogueModel.findById(req.params.id);
    return res.json(item);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};