const lesson = require("../../../models/resume/lessons");

// CREATE a new FAQ
exports.createlessonsByAdmin = async (req, res) => {
  try {
    const lessons = await lesson.create({lessons:req.body.lessons});
   return  res.status(201).json(lessons);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// READ all FAQs
exports.getAlllessonsByAdmin = async (req, res) => {
  try {
    const lessons = await lesson.find();
   return  res.status(201).send({msg:lessons});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


// UPDATE a FAQ
exports.updatelessonsByAdmin = async (req, res) => {
  try {
    const updatedlessons = await lesson.findById({_id:req.params.id},{lessons:req.body.lessons},{new:true})
   return res.json(updatedlessons);
  } catch (err) {
  return   res.status(400).json({ message: err.message });
  }
}

// DELETE a FAQ
exports.deletelessonsByAdmin = async (req, res) => {
  try {
    const deletelessons = await lesson.findByIdAndRemove({_id:req.params.id})
   return  res.json({ message: "lessons deleted" });
  } catch (err) {
   return  res.status(500).json({ message: err.message });
  }
}
