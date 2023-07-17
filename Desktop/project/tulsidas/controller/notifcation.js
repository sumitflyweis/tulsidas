const Notification = require("../model/notifcation");

exports.createNotification = async (req, res) => {
  try {
    console.log("hi");
    let front = req.files["Image"];
    req.body.frontSide = front[0].path;

    const user = await Notification.create({
      image: req.body.frontSide,
      title: req.body.title,
      message: req.body.message,
    });
    return res
      .status(200)
      .json({ msg: "profile updated successfully", user: user });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    if (!notifications) {
      return res.status(400).send({ msg: "not found" });
    }
    return res
    .status(200)
    .json({ msg: " success", user: notifications });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification) {
      return res.status(400).send({ msg: "not found" });
    }
    return res
    .status(200)
    .json({ msg: " success", user: notification });

  } catch (err) {
    res.status(404).json({ message: "Notification not found" });
  }
};

exports.updateNotificationById = async (req, res) => {
  try {

    console.log("hi");
    let front = req.files["Image"];
    req.body.frontSide = front[0].path;

    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      {
        message: req.body.message,
        image: req.body.frontSide,
        title: req.body.title,
      },
      { new: true }
    );
    res.json(notification);
  } catch (err) {
    res.status(404).json({ message: "Notification not found" });
  }
};

exports.deleteNotificationById = async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id);
    res.json({ message: "Notification deleted" });
  } catch (err) {
    res.status(404).json({ message: "Notification not found" });
  }
};
