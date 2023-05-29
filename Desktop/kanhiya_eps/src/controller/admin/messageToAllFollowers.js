const msg = require("../../model/messageToAllFollowers");
 const vendor = require('../../model/vendorAccount')


exports.createMessageByAdmin = async (req, res) => {
  try {
    const data = {
      msg: req.body.msg,
      Subscription_Status: req.body.Subscription_Status,
      Subcription_Price:req.body.Subcription_Price,
      vendorID: req.body.vendorID,
    };

    const vendorData =await vendor.updateMany({ Subscription_Status: req.body.Subscription_Status, Subcription_Price:req.body.Subcription_Price},{msg:req.body.msg},{new:true})
    console.log(vendorData)

    const messageData = await msg.create(vendorData);
    return res.status(200).send({msg:"msg send to selected vendor"});
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.getallMessage = async (req, res) => {
  try {
    const messageData = await msg.find();
    if (!messageData || messageData.length === 0) {
      return res.status(400).json({
        message: "No messageData",
      });
    }
    return res.status(200).send(messageData);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};


exports.getallvendorsMsgByAdmin = async (req, res) => {
  try {
    const messageData = await vendor.find({Subcription_Price:req.body.Subcription_Price,Subscription_Status:req.body.Subscription_Status})
    
    if (!messageData || messageData.length === 0) {
      return res.status(400).json({
        message: "No messageData",
      });
    }
    const msg = req.body.msg
    return res.status(200).send({msg:msg,data:messageData});
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.updateMessage = async (req, res) => {
  try {
    const data = {
      msg: req.body.msg,
      Subscription_Status: req.body.Subscription_Status,
      Subcription_Price:req.body.Subcription_Price,
      vendorID: req.body.vendorID,
    };
    const msgData = await msg.findOneAndUpdate({ _id: req.params.id }, data, {
      new: true,
    });
    if (!msgData) {
      return res.status(400).json({
        message: "msgData not found",
      });
    }
    return res.status(200).send(msgData);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    const deleteMsg = await msg.findOneAndDelete({ _id: req.params.id });
    if (!deleteMsg) {
      return res.status(400).json({
        message: "deleteMsg not found",
      });
    }
    return res.status(200).send(deleteMsg);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "internal server error",
    });
  }
};
