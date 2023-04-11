const topics = require("../../models/topics");

exports.createtopics = async (req, res) => {
  try {
    const data = {
        date: req.body.date,
        time:req.body.time,
        semester:req.body.semester,
        branch:req.body.branch,
    }
    const topicsData = await topics.create(data)

    return res.status(200).send({ msg: topicsData });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.getAlltopics = async (req, res) => {
  try {
    const topicsData = await topics.find();
    if (!topicsData || topicsData.length === 0) {
      return res.status(400).json({
        message: "No topicsData",
      });
    }
    return res.status(200).json({
      message: "topicsData found",
      data: topicsData,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.updatetopics = async (req, res) => {
  try {
    const data = {
        date: req.body.date,
        time:req.body.time,
        semester:req.body.semester,
        branch:req.body.branch,
    }
    const topicsData = await topics.findOneAndUpdate(
      { _id: req.params.id },
    data,
      { new: true }
    );
    if (!topicsData) {
      return res.status(400).json({
        message: "topicsData not found",
      });
    }
    return res.status(200).json({
      message: "topicsData updated",
      data: topicsData,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.deletetopics = async (req, res) => {
  try {
    const topicsData = await topics.findOneAndDelete({
      _id: req.params.id,
    });
    if (!topicsData) {
      return res.status(400).json({
        message: "topicsData not found",
      });
    }
    return res.status(200).json({
      message: "topicsData deleted",
      data: topicsData,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "internal server error",
    });
  }
};
