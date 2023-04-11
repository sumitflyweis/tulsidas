const overviewD = require("../../../models/resume/overview");


// READ all FAQs
exports.getAlloverviewByStudent = async (req, res) => {
  try {
    const overviewData = await overviewD.find();
   return  res.status(201).send(overviewData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
