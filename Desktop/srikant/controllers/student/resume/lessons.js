const lesson = require("../../../models/resume/lessons");


// READ all FAQs
exports.getAlllessonsByStudent = async (req, res) => {
  try {
    const lessons = await lesson.find();
   return  res.status(201).send(lessons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
