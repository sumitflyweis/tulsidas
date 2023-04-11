const schedule = require("../../models/schedule");
exports.getAllscheduleByStudent = async (req, res) => {
    try {
      const scheduleData = await schedule.find();
      if (!scheduleData || scheduleData.length === 0) {
        return res.status(400).json({
          message: "No scheduleData",
        });
      }
      return res.status(200).json({
        message: "scheduleData found",
        data: scheduleData,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  };
  
  exports.getscheduleByIdByStudent = async (req, res) => {
    try {
      const scheduleData = await schedule.findById({ _id: req.params.id });
  
      if (!scheduleData) {
        return res.status(400).json({
          message: "scheduleData not found",
        });
      }
      return res.status(200).json({
        message: "scheduleData updated",
        data: scheduleData,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "internal server error",
      });
    }
  };
  