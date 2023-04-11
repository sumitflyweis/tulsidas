const lessons = require("../../models/course");

exports.getAllcourseByAdmin = async (req, res) => {
    try {
      const lessonsData = await lessons.find();
      if (! lessonsData || lessonsData.length === 0) {
        return res.status(400).json({
          message: "No lessonsData",
        });
      }
      return res.status(200).json({
        message:  "lessonsData found",
        data: lessonsData,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  };