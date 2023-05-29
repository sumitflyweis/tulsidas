const path = require("path");
require("dotenv").config();
const favourite = require("../../../src/model/myFavourite");
const vendor = require("../../../src/model/vendorAccount");

exports.createfavourite = async (req, res) => {
  try {
    const UserId = req.params.UserId;
   const vendorData = await vendor.findById({ _id: req.params.vendorId });
    if (!vendorData || vendorData.length == 0)
      return res.status(404).send({ message: "data not found" });

    const favouriteData = await favourite.create({
      UserId: UserId,
      vendorId:vendorData._id,
      shop: vendorData,
      status:req.body.status,
      image:req.body.image
    });
    return res.status(200).json(favouriteData);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
