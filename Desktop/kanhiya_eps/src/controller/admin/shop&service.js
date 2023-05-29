const path = require("path");
require("dotenv").config();
const shopAndService = require("../../model/shop&service");


exports.shopAndServiceAdmin = async (req, res) => {
  try {
    const data = {
      SubCategory: req.body.SubCategory,
      image:req.body.image,
     };
    const shopAndServiceData = await shopAndService.create(data);
    console.log(shopAndServiceData);
    return res.status(200).json({
      id: shopAndServiceData._id,
      message: "shopAndServiceData created ",
      data: shopAndServiceData,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};


module.exports.updateshopAndServiceAdmin  = async (req, res) => {
  try {

    const data = {
        SubCategory: req.body.SubCategory,
        image:req.body.image
        };  
    const category = await shopAndService.findOneAndUpdate(
      {_id: req.params.id},
      data,
      { new: true }
    );

    console.log(category);
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};


exports.deleteShopAndServiceAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    await shopAndService.deleteOne({ _id: id });
  return  res.status(200).send({ message: "shopAndService deleted " });
  } catch (err) {
    console.log(err);
 return   res.status(400).send({ message: err.message });
  }
};



exports.addServiceByAdmin = async (req, res) => {
  try {
    const data = {
      SubCategory: req.body.SubCategory,
      image:req.body.image,
      category: req.body.category,
      latitude:req.body.latitude,
      longitude:req.body.longitude,
      desc:req.body.desc,
     };
    const shopAndServiceData = await shopAndService.create(data);
    console.log(shopAndServiceData);
    return res.status(200).json({
      id: shopAndServiceData._id,
      message: "shopAndServiceData created ",
      data: shopAndServiceData,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};


module.exports.updateServiceByAdmin  = async (req, res) => {
  try {

    const data = {
      SubCategory: req.body.SubCategory,
      image:req.body.image,
      category: req.body.category,
      latitude:req.body.latitude,
      longitude:req.body.longitude,
      desc:req.body.desc,
        };  
    const category = await shopAndService.findOneAndUpdate(
      {_id: req.params.id},
      data,
      { new: true }
    );

    console.log(category);
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};
