const theme = require("../../models/themes");

exports.createtheme = async (req, res) => {
  try {
    const themeData = await theme.create({
      image: req.body.image,
    });
    return res.status(200).send({ msg: themeData });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.getAlltheme = async (req, res) => {
  try {
    const themeData = await theme.find();
    if (!themeData || themeData.length === 0) {
      return res.status(400).json({
        message: "No themeData",
      });
    }
    return res.status(200).json({
      message: "themeData found",
      data: themeData,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.updatetheme = async (req, res) => {
  try {
    const themeData = await theme.findOneAndUpdate(
      { _id: req.params.id },
      { image: req.body.image },
      { new: true }
    );
    if (!themeData) {
      return res.status(400).json({
        message: "themeData not found",
      });
    }
    return res.status(200).json({
      message: "themeData updated",
      data: themeData,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.deletetheme = async (req, res) => {
  try {
    const themeData = await theme.findOneAndDelete({
      _id: req.params.id,
    });
    if (!themeData) {
      return res.status(400).json({
        message: "themeData not found",
      });
    }
    return res.status(200).json({
      message: "themeData deleted",
      data: themeData,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "internal server error",
    });
  }
};
