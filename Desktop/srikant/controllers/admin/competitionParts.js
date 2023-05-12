const competitionParts = require("../../models/competitionParts");

exports.createcompetitionParts = async (req, res) => {
    try {
      const competitionPartsData = await competitionParts.create({
        competitionParts:req.body.competitionParts,image:req.body.image
      });
      return res.status(200).send({ msg: competitionPartsData });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  };



exports.getcompetitionParts = async (req, res) => {
  try {
    const competitionPartsData = await competitionParts.find();
    if (!competitionPartsData || competitionPartsData.length === 0) {
      return res.status(400).json({
        message: "No competitionPartsData",
      });
    }
    return res.status(200).json({
      message: "competitionPartsData found",
      data: competitionPartsData,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};


// exports.getSubMenuById = async (req, res) => {
//     try {
//       const menuData = await SubMenu.findById({_id:req.params.id})
//       if (!menuData || menuData.length === 0) {
//         return res.status(400).json({
//           message: "No menuData",
//         });
//       }
//       return res.status(200).json({
//         message: "menuData found",
//         data: menuData,
//       });
//     } catch (err) {
//       console.log(err.message);
//       return res.status(500).json({
//         message: "internal server error",
//       });
//     }
//   };



exports.updatecompetitionParts = async (req, res) => {
  try {
    const competitionPartsData = await competitionParts.findOneAndUpdate(
      { _id: req.params.id },
     {$push:{competitionParts:req.body.competitionParts}},{image:req.body.image},
      { new: true }
    );
    if (!competitionPartsData) {
      return res.status(400).json({ 
        message: "competitionPartsData not found",
      });
    }
    return res.status(200).json({
      message: "competitionPartsData updated",
      data: competitionPartsData,
    });
  } catch (err) {
    console.log(err.message);
  return  res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.DeletecompetitionParts = async (req, res) => {
  try {
    const competitionPartsData = await competitionParts.findOneAndDelete({
      _id: req.params.id,
    });
    if (!competitionPartsData) {
      return res.status(400).json({
        message: "competitionPartsData not found",
      });
    }
    return res.status(200).json({
      message: "competitionPartsData deleted",
      data: competitionPartsData,
    });
  } catch (err) {
    console.log(err.message);
   return  res.status(500).json({
      message: "internal server error",
    });
  }
};
