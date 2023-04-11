const help = require("../../models/helpAndSupport");

exports.getHelpByTeacher = async (req, res) => {
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