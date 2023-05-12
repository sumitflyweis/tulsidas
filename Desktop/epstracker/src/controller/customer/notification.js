const notificationModel = require('../../model/notification'); // Import the notification model

module.exports.getALlnotificationbyCustomer = async (req, res) => {
    try {
  // Find all notifications
  const notifications = await notificationModel.find();
 return  res.json(notifications);
}
catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

module.exports.getnotificationByIdbyCustomer = async (req, res) => {
try{
  const notification = await notificationModel.findById(req.params.id);
 return  res.json(notification);
}
catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};
