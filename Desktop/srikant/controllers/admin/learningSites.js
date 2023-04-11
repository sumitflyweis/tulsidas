const learningSites = require("../../models/learningSites");


exports.getLearningSitesByAdmin = async (req, res) => {
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
  
  
  exports.getLearningSitesByIdByAdmin = async (req, res) => {
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
  