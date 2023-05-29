const path = require("path");
require("dotenv").config();
const categoryStore = require("../../model/categoryStore");


exports.categoryStoreAdmin = async (req, res) => {
  try {
    const data = {
      categoryName: req.body.categoryName,
      SubCategory:req.body.SubCategory,
      image:req.body.image
    };

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


  
module.exports.getcategoryStoreByAdmin= async (req, res) => {
  try {
   
    const categoryData = await categoryStore.findById({_id:req.params.id}).populate('SubCategory')
    console.log(categoryData);
    if (!categoryData || categoryData.length == 0) {
      return res.status(400).json({ msg: "No categoryData added" });
    } else {
      return res.status(200).json(categoryData);
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};



module.exports.updatecategoryStoreAdmin  = async (req, res) => {
  try {

    const data = {
      categoryName: req.body.categoryName,
      SubCategory: req.body.SubCategory,
      image:req.body.image
  
    };

    const category = await categoryStore.findOneAndUpdate(
      {_id: req.params.id},
     data.SubCategory,
      { new: true }
    );

    console.log(category);
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};


exports.deletecategoryStoreAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    await categoryStore.deleteOne({ _id: id });
    res.status(200).send({ message: "categoryStore deleted " });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
