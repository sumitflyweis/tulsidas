const path = require("path");
require("dotenv").config();
const subscription = require("../../model/subscription");


module.exports.getsubscription = async (req, res) => {
    try {

        const services = await subscription.find();
      console.log(services);
      if (!services || services.length == 0) {
        return res.status(400).json({ msg: "No subscription added" });
      } else {
        return res.status(200).json(services);
      }
    } catch (error) {
      return res.status(400).json({ msg: error.message, name: error.name });
    }
  };
  
  