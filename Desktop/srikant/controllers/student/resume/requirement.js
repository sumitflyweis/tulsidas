const requirE = require("../../../models/resume/requirement");


// READ all FAQs
exports.getAllrequirementByStudent = async (req, res) => {
  try {
    const overviewData = await requirE.find();
   return  res.status(201).send(overviewData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
