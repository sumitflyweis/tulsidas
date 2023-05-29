const settingSchema = require("../../model/setting");


module.exports.getSettingBycustomer = async (req, res) => {
  try {
    const allSetting = await settingSchema.find();
    console.log(allSetting);
    if (allSetting) {
      return res.status(200).json(allSetting);
    } else {
      return res.status(400).json({ msg: "no setting found" });
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};
