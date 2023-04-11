const Menu = require("../../models/menu");

exports.getAllMenuByStudent = async (req, res) => {
    try {
      const menuData = await Menu.find().populate('subMenu')
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
  
  
  exports.getMenuByIdByStudent = async (req, res) => {
      try {
        const menuData = await Menu.find({_id:req.params.id}).populate('subMenu')
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
  