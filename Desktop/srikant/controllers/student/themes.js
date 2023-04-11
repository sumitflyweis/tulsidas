const theme = require("../../models/themes");
exports.getallThemeByStudent = async (req, res) => {
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