const help = require("../../models/helpAndSupport");

exports.createHelp = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
    };

    const helpData = await help.create(data);
    console.log(helpData);
    res.status(200).json({
      message: " please contact below ",
      details: helpData,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.updateHelp = async (req, res) => {
  try {

    const data = {
        name: req.body.name,
        email: req.body.email,
      };
    const UpdatedTerms = await help.findOneAndUpdate(
      { _id: req.params.id },
      data
    ); //.exec();
    console.log(UpdatedTerms);
    res.status(200).json({
      message: "Terms Update",
      data: UpdatedTerms,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      mesage: err.mesage,
    });
  }
};

exports.DeleteHelp = async (req, res) => {
  try {
    const id = req.params.id;
    await help.deleteOne({ _id: id });
    return res.status(200).send({ message: "Terms deleted " });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

exports.gethelp = async (req, res) => {
  try {
    const data = await help.find();
    console.log(data);
    return res.status(200).json({
      terms: data,
    });
  } catch (err) {
    return res.status(400).send({ mesage: err.mesage });
  }
};
