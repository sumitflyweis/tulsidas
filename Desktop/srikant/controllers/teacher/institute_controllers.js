const institutes = require("../../models/institutes_model");


exports.getAllInstitutesByTeacher = async (req, res) => {
    try {
      const data = await institutes.find();
      res.status(200).json({
        message: data,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        message: err.message,
      });
    }
  };
  
  exports.getByInstitutesIdByTeacher = async (req, res) => {
    try {
      const data = await institutes.findById({ _id: req.params.id });
      if (!data) {
        return res.status(401).json({
          message: "No Institutes found this ID ",
        });
      }
      res.status(200).json({
        message: data,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        message: err.message,
      });
    }
  };