const competition = require("../../models/competition");

exports.getAllCompetitionByTeacher = async (req, res) => {
    try {
      const competitionData = await competition
        .find()
        .populate("competitionParts");
      if (!competitionData || competitionData.length === 0) {
        return res.status(400).json({
          message: "No competitionData",
        });
      }
      return res.status(200).json({
        message: "competitionData found",
        data: competitionData,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  };
  
  exports.getCompetitionByIdByTeacher = async (req, res) => {
    try {
      const competitionData = await competition
        .findById({ _id: req.params.id })
        .populate("competitionParts");
      if (!competitionData || competitionData.length === 0) {
        return res.status(400).json({
          message: "No competitionData",
        });
      }
      return res.status(200).json({
        message: "competitionData found",
        data: competitionData,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  };