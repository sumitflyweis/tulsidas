const path = require("path");
require("dotenv").config();
const categoryStore = require("../../model/subCategory");

exports.subCategoryAdmin = async (req, res) => {
  try {
    const data = {
      SC:req.body.SC,
      isSave:req.body.isSave,
      image:req.body.image
    }

  const categorydata = await categoryStore.create(data);
   console.log(categorydata);
    return res.status(200).json({
      id: categorydata._id,
      message: "categorydata created ",
      data: categorydata,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};


module.exports.updatesubCategoryAdmin  = async (req, res) => {
  try {

    const data = {
        SubCategory: req.body.SubCategory,
        };  
    const category = await categoryStore.findOneAndUpdate(
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


exports.deleteSubcategoryAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    await categoryStore.deleteOne({ _id: id });
    res.status(200).send({ message: "categoryStore deleted " });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
