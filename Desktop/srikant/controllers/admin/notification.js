const Notification = require("../../models/notification");
const moment =require("moment")

exports.createNotifications = async (req, res) => {
  try {

    var momentDate1 = moment(req.body.date,"YYYY-MM-DD hh:mm:ss")
    
    const diff = new Date() - momentDate1
   const seconds = Math.round(diff / 1000)
  const minutes = Math.round(seconds / 60)
  const hours = Math.round(minutes / 60)
    const days = Math.round(hours / 24)
    if (seconds < 60) {
      const notifiction = await Notification.create({
      message: req.body.message,
      post: req.body.post,
      timeInSeconds: seconds,
      image: req.body.image,
      date: req.body.date
    });
        return res.status(200).send({ msg: notifiction });
  } else if (minutes < 60) {
      const notifiction = await Notification.create({
      message: req.body.message,
      post: req.body.post,
      timeInMinutes: minutes,
      image: req.body.image,
      date: req.body.date
    });
        return res.status(200).send({ msg: notifiction });
  } else if (hours < 24) {
      const notifiction = await Notification.create({
      message: req.body.message,
      post: req.body.post,
      timeInHours: hours,
      image: req.body.image,
      date: req.body.date
    });
        return res.status(200).send({ msg: notifiction });
  } else {
    const notifiction = await Notification.create({
      message: req.body.message,
      post: req.body.post,
      timeInDays:days,
      image: req.body.image,
      date: req.body.date
    });
        return res.status(200).send({ msg: notifiction });
  }
}
  catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};





exports.getAllNotification = async (req, res) => {
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

exports.updateNotification = async (req, res) => {
  try {
    const notification = await Notification.findOneAndUpdate(
      { _id: req.params.id },
      { message: req.body.message },
      { new: true }
    );
    if (!notification) {
      return res.status(400).json({
        message: "Notification not found",
      });
    }
    return res.status(200).json({
      message: "notification updated",
      data: notification,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findOneAndDelete({
      _id: req.params.id,
    });
    if (!notification) {
      return res.status(400).json({
        message: "Notification not found",
      });
    }
    return res.status(200).json({
      message: "notification deleted",
      data: notification,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "internal server error",
    });
  }
};
