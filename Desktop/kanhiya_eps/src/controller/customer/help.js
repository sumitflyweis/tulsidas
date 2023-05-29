const helpSchema = require("../../model/help");


module.exports.getHelpBycustomer = async (req, res) => {
  try {
    const allHelp = await helpSchema.find();
    console.log(allHelp);
    if (allHelp) {
      return res.status(200).json(allHelp);
    } else {
      return res.status(400).json({ msg: "no help found" });
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};
