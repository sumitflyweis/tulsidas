const notificationModel = require('../../model/notification'); // Import the notification model

module.exports.getALlnotificationbyAdmin = async (req, res) => {
    try {
  // Find all notifications
  const notifications = await notificationModel.find();
 return  res.json(notifications);
}
catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

module.exports.createnotificationbyAdmin = async (req, res) => {
try{
  const { message } = req.body;
  const newNotification = new notificationModel({ message });
  const savedNotification = await newNotification.save();
return  res.json(savedNotification);
}
catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

module.exports.getnotificationByIdbyAdmin = async (req, res) => {
try{
  const notification = await notificationModel.findById(req.params.id);
 return  res.json(notification);
}
catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

module.exports.updatenotificationBybyAdmin = async (req, res) => {
 try{
  const { message, recipient } = req.body;
  const updatedNotification = await notificationModel.findByIdAndUpdate(req.params.id, { message }, { new: true });
return  res.json(updatedNotification);
}
catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

module.exports.deletenotificationBybyAdmin = async (req, res) => {
    try{
    const deletedNotification = await notificationModel.findByIdAndDelete(req.params.id);
 return  res.json(deletedNotification);
}
catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};
