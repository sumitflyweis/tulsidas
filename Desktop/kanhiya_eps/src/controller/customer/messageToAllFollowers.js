const msg = require("../../model/messageToAllFollowers");

exports.getallMessageByCustomer = async (req, res) => {
    try {
      const messageData = await msg.find();
      if (!messageData || messageData.length === 0) {
        return res.status(400).json({
          message: "No messageData",
        });
      }
      return res.status(200).send(messageData)
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  }
  
  
exports.getMessageByIdByCustomer = async (req, res) => {
    try {
      const messageData = await msg.find({_id: req.params.id});
      if (!messageData || messageData.length === 0) {
        return res.status(400).json({
          message: "No messageData",
        });
      }
      return res.status(200).send(messageData)
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  }