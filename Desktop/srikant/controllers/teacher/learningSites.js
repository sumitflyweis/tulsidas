const learningSites = require("../../models/learningSites");

exports.createLearningSitesByTeacher = async (req, res) => {
  try {
    const learningSitesData = await learningSites.create({
      message: req.body.message,
    });
    return res.status(200).send({ msg: learningSitesData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.getLearningSitesByTeacher = async (req, res) => {
  try {
    const learningSitesData = await learningSites.find();
    if (!learningSitesData || learningSitesData.length === 0) {
      return res.status(400).json({
        message: "No learningSitesData",
      });
    }
    return res.status(200).json({
      message: "learningSitesData found",
      data: learningSitesData,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};//


exports.getLearningSitesByIdByTeacher = async (req, res) => {
    try {
      const learningSitesData = await learningSites.findById({_id:req.params.id});
      if (!learningSitesData || learningSitesData.length === 0) {
        return res.status(400).json({
          message: "No learningSitesData",
        });
      }
      return res.status(200).json({
        message: "learningSitesData found",
        data: learningSitesData,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  };


exports.updateLearningSitesByIdByTeacher = async (req, res) => {
  try {
    const learningSitesData = await learningSites.findOneAndUpdate(
      { _id: req.params.id },
      { message: req.body.message },
      { new: true }
    );
    if (!learningSitesData) {
      return res.status(400).json({
        message: "learningSitesData not found",
      });
    }
    return res.status(200).json({
      message: "learningSitesData updated",
      data: learningSitesData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.deleteLearningSitesByIdByTeacher = async (req, res) => {
  try {
    const learningSitesData = await learningSites.findOneAndDelete({
      _id: req.params.id,
    });
    if (!learningSitesData) {
      return res.status(400).json({
        message: "learningSitesData not found",
      });
    }
    return res.status(200).json({
      message: "learningSitesData deleted",
      data: learningSitesData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "internal server error",
    });
  }
};
