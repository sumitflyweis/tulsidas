const competitionParts = require("../../models/competitionParts");

exports.getcompetitionPartsByStudent = async (req, res) => {
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