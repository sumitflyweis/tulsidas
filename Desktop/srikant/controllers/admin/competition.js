const competition = require("../../models/competition");

exports.createCompetition = async (req, res) => {
  try {
    const competitionData = await competition.create({
      competition: req.body.competition,
      competitionParts: req.body.competitionParts,
      image:req.body.image
    });
    return res.status(200).send({ msg: competitionData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.getAllCompetition = async (req, res) => {
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

exports.getCompetitionById = async (req, res) => {
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

exports.updateCompetition = async (req, res) => {
  try {
    const competitionData = await competition.findOneAndUpdate(
      { _id: req.params.id },
      {
        competition: req.body.competition,
        competitionParts: req.body.competitionParts,
        image:req.body.image,
      },
      { new: true }
    );
    if (!competitionData) {
      return res.status(400).json({
        message: "competitionData not found",
      });
    }
    return res.status(200).json({
      message: "competitionData updated",
      data: competitionData,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.deleteCompetition = async (req, res) => {
  try {
    const competitionData = await competition.findOneAndDelete({
      _id: req.params.id,
    });
    if (!competitionData) {
      return res.status(400).json({
        message: "competitionData not found",
      });
    }
    return res.status(200).json({
      message: "competitionData deleted",
      data: competitionData,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};
