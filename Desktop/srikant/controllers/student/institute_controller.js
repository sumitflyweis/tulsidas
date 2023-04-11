const institutes = require("../../models/institutes_model");


exports.getAllInstitutesByStudent = async (req, res) => {
    try {
      const data = await institutes.find();
    return  res.status(200).json({
        message: data,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        message: err,
      });
    }
  };
  
  exports.getByInstitutesIdByStudent = async (req, res) => {
    try {
      const data = await institutes.findById({ _id: req.params.id });
      if (!data) {
        return res.status(401).json({
          message: "No Institutes found this ID ",
        });
      }
    return  res.status(200).json({
        message: data,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        message: err,
      });
    }
  };