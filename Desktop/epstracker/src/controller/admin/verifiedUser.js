const verified = require("../../model/verifiedUser");

exports.getallVerifiedData = async (req, res) => {
    try {
      const verifiedData = await verified.find();
      if (!verifiedData || verifiedData.length === 0) {
        return res.status(400).json({
          message: "No verifiedData",
        });
      }
      return res.status(200).send(verifiedData)
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  }
  
  
exports.getVerifiedByIdByAdmin = async (req, res) => {
    try {
      const verifiedData = await verified.findById({_id: req.params.id});
      if (!verifiedData || verifiedData.length === 0) {
        return res.status(400).json({
          message: "No messageData",
        });
      }
      return res.status(200).send(verifiedData)
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  }


