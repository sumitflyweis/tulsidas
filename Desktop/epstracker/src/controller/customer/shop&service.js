const path = require("path");
require("dotenv").config();
const categoryStore = require("../../model/categoryStore");
const shopAndService = require("../../model/shop&service");
const vendorData = require("../../model/vendorAccount");

module.exports.subcategoryShopAndServicebyCustomer = async (req, res) => {
    try {
        const subcategoryData = await shopAndService.find({
          SubCategory: req.params.SubCategory,
        });
        console.log(subcategoryData);
        if (!subcategoryData || subcategoryData.length == 0) {
          return res.status(400).json({ msg: "No subcategory added" });
        } else {
          const vendor = await vendorData.find({ option: req.params.option });
          if (!vendor || vendor.length == 0) {
            return res.status(400).json({ msg: "No vendor added" });
          }
          return res.status(200).json({subcategoryData,vendor});
        }
      } catch (error) {
        return res.status(400).json({ msg: error.message, name: error.name });
      }
    };
  
  
module.exports.subcategoryShopAndServiceByIdByCustomer= async (req, res) => {
    try {
     
      const services = await categoryStore.findById({_id:req.params.id});
      console.log(services);
      if (!services || services.length == 0) {
        return res.status(400).json({ msg: "No category added" });
      } else {
        return res.status(200).json(services);
      }
    } catch (error) {
      return res.status(400).json({ msg: error.message, name: error.name });
    }
  };