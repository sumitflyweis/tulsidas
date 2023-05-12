const path = require("path");
require("dotenv").config();
const activity = require("../../model/activityMaker");

module.exports.getActivityMAkerVendor = async (req, res) => {
    try {
      const allActivity = await activity.find();
      console.log(allActivity);
      if (allActivity) {
        return res.status(200).json(allActivity);
      } else {
        return res.status(400).json({ msg: "no activity found" });
      }
    } catch (error) {
      return res.status(400).json({ msg: error.message, name: error.name });
    }
  };