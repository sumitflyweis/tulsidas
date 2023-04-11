const Menu = require("../../models/menu");

exports.getAllMenuByTeacher = async (req, res) => {
    try {
       const menuData = await Menu.find().populate('subMenu')
     // const menuData = await Menu.find()
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
  
  
  exports.getMenuByIdByTeacher = async (req, res) => {
      try {
         const menuData = await Menu.find({_id:req.params.id}).populate('subMenu')
        //const menuData = await Menu.find({_id:req.params.id})
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