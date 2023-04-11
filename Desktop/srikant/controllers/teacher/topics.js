const topics = require("../../models/topics");


exports.getAlltopicsByTeacher = async (req, res) => {
    try {
      const topicsData = await topics.find();
      if (!topicsData || topicsData.length === 0) {
        return res.status(400).json({
          message: "No topicsData",
        });
      }
      return res.status(200).json({
        message: "topicsData found",
        data: topicsData,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  };

  
exports.getAlltopicsByIdByTeacher = async (req, res) => {
    try {
      const topicsData = await topics.find({_id:req.params.id});
      if (!topicsData || topicsData.length === 0) {
        return res.status(400).json({
          message: "No topicsData",
        });
      }
      return res.status(200).json({
        message: "topicsData found",
        data: topicsData,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  };