const SubMenu = require("../../../../models/oppurtunityParts.js/submenu/submenu");

exports.createSubMenu1 = async (req, res) => {
    try {
      const menuData = await SubMenu.create({
     subMenu:req.body.subMenu,image:req.body.image
      });
      return res.status(200).send({ msg: menuData });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  };



exports.getAllSubMenu1 = async (req, res) => {
  try {
    const menuData = await SubMenu.find();
    if (!menuData || menuData.length === 0) {
      return res.status(400).json({
        message: "No menuData",
      });
    }
    return res.status(200).json({
      message: "menuData found",
      data: menuData,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};


exports.getSubMenuById1 = async (req, res) => {
    try {
      const menuData = await SubMenu.findById({_id:req.params.id})
      if (!menuData || menuData.length === 0) {
        return res.status(400).json({
          message: "No menuData",
        });
      }
      return res.status(200).json({
        message: "menuData found",
        data: menuData,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  };



exports.updateSubMenu1 = async (req, res) => {
  try {
    const menuData = await SubMenu.findOneAndUpdate(
      { _id: req.params.id },
      {subMenu:req.body.subMenu,
        image:req.body.image},
      { new: true }
    );
    if (!menuData) {
      return res.status(400).json({
        message: "menuData not found",
      });
    }
    return res.status(200).json({
      message: "menuData updated",
      data: menuData,
    });
  } catch (err) {
    console.log(err.message);
  return  res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.deleteSubMenu1 = async (req, res) => {
  try {
    const menuData = await SubMenu.findOneAndDelete({
      _id: req.params.id,
    });
    if (!menuData) {
      return res.status(400).json({
        message: "menuData not found",
      });
    }
    return res.status(200).json({
      message: "menuData deleted",
      data: menuData,
    });
  } catch (err) {
    console.log(err.message);
   return  res.status(500).json({
      message: "internal server error",
    });
  }
};
