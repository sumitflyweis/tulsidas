const institutes = require("../../models/institutes_model");

exports.AddInstitiutes = async (req, res) => {
  try {
    if (!req.body.name && !req.body.location && !req.body.board) {
      return res.status(401).json({
        message: "All Filds ar Required ",
      });
    }
    const data = {
      name: req.body.name,
      location: req.body.location,
      board: req.body.board,
    };
    const Data = await institutes.create(data);
    res.status(200).json({
      message: "Institutes is Added ",
      Data: Data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getAllInstitutes = async (req, res) => {
  try {
    const data = await institutes.find();
    res.status(200).json({
      message: data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getByInstitutesId = async (req, res) => {
  try {
    const data = await institutes.findById({ _id: req.params.id });
    if (!data) {
      return res.status(401).json({
        message: "No Institutes found this ID ",
      });
    }
    res.status(200).json({
      message: data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.DeleteInstitutes = async (req, res) => {
  try {
    await institutes.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({
      message: "Institutes is Deleted ",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.updateInstitutes = async (req, res) => {
  try {
    await institutes.updateOne(
      { _id: req.params.id },
      {
        name: req.body.name,
        location: req.body.location,
        board: req.body.board,
      },
      { new: true }
    );
  return  res.status(200).json({
      message: "Updated institutes",
    });
  } catch (err) {
    console.log(err);
  return  res.status(400).json({
      message: err,
    });
  }
};
