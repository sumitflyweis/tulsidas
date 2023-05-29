const vendor = require("../../model/vendorAccount");


module.exports.getAllVendorBycustomer = async (req, res) => {
  try {
    const allvendor = await vendor.find();
    console.log(allvendor);
    if (allvendor) {
      return res.status(200).json(allvendor);
    } else {
      return res.status(400).json({ msg: "no vendor found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};