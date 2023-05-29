const path = require("path");
require("dotenv").config();
const favourite = require("../../model/myFavourite");


module.exports.getFavouritebyAdmin = async (req, res) => {
  try {
    const UserId = req.params.UserId;
    const favoriteData = await favourite.find({ UserId: UserId });
    console.log(favoriteData);
    if (!favoriteData || favoriteData.length == 0) {
      return res.status(400).json({ msg: "No favourite added" });
    } else {
      return res.status(200).json(favoriteData);
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};


module.exports.getAllFavourite = async (req, res) => {
  try {
    const getAll = await favourite.find();
    console.log(getAll);
    if (!getAll || getAll.length == 0) {
      return res.status(400).json({ msg: "No Favourite added" });
    } else {
      return res.status(200).json(getAll);
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};
