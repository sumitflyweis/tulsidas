const Notification = require("../../models/notification");


exports.getAllNotificationByTeacher = async (req, res) => {
  try {
    const notifications = await Notification.find();
    if (!notifications || notifications.length === 0) {
      return res.status(400).json({
        message: "No notifications",
      });
    }
    return res.status(200).json({
      message: "notifications found",
      data: notifications,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};