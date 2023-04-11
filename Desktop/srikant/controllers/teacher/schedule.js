const schedule = require("../../models/schedule");

exports.createschedule = async (req, res) => {
  try {
    const data = {
      date: req.body.date,
      time: req.body.time,
      assignment: req.body.assignment,
    };
    const scheduleData = await schedule.create(data);
    return res.status(200).send({ msg: scheduleData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.getAllschedule = async (req, res) => {
  try {
    const scheduleData = await schedule.find();
    if (!scheduleData || scheduleData.length === 0) {
      return res.status(400).json({
        message: "No scheduleData",
      });
    }
    return res.status(200).json({
      message: "scheduleData found",
      data: scheduleData,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.getscheduleById = async (req, res) => {
  try {
    const scheduleData = await schedule.findById({ _id: req.params.id });

    if (!scheduleData) {
      return res.status(400).json({
        message: "scheduleData not found",
      });
    }
    return res.status(200).json({
      message: "scheduleData updated",
      data: scheduleData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.updateschedule = async (req, res) => {
  try {
    const data = {
      date: req.body.date,
      time: req.body.time,
      assignment: req.body.assignment,
    };

    const scheduleData = await schedule.findOneAndUpdate(
      { _id: req.params.id },
      data,
      { new: true }
    );
    if (!scheduleData) {
      return res.status(400).json({
        message: "scheduleData not found",
      });
    }
    return res.status(200).json({
      message: "scheduleData updated",
      data: scheduleData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.deleteschedule = async (req, res) => {
  try {
    const scheduleData = await schedule.findOneAndDelete({
      _id: req.params.id,
    });
    if (!scheduleData) {
      return res.status(400).json({
        message: "scheduleData not found",
      });
    }
    return res.status(200).json({
      message: "scheduleData deleted",
      data: scheduleData,
    });
  } catch (err) {
    console.log(err)
   return  res.status(500).json({
      message: "internal server error",
    });
  }
};
