const path = require("path");
require("dotenv").config();
const categoryStore = require("../../model/categoryStore");

module.exports.getcategorybyCustomer = async (req, res) => {
    try {

        const services = await categoryStore.find();
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
  
  
module.exports.getcategoryByIdByCustomer= async (req, res) => {
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