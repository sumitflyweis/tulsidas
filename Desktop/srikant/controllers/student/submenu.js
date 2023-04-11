const SubMenu = require("../../models/submenu");

exports.getAllSubMenuByStudent = async (req, res) => {
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
  
  
  exports.getSubMenuByIdByStudent = async (req, res) => {
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
  