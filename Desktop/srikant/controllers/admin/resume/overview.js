const overviewD = require("../../../models/resume/overview");

// CREATE a new FAQ
exports.createoverviewByAdmin = async (req, res) => {
  try {
    const overviewData = await overviewD.create({overview:req.body.overview});
   return  res.status(201).json(overviewData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// READ all FAQs
exports.getAlloverviewByAdmin = async (req, res) => {
  try {
    const overviewData = await overviewD.find();
   return  res.status(201).send({msg:overviewData});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


// UPDATE a FAQ
exports.updateoverviewByAdmin = async (req, res) => {
  try {
    const updatedoverview = await overviewD.findById({_id:req.params.id},{overview:req.body.overview},{new:true})
   return res.json(updatedoverview);
  } catch (err) {
  return   res.status(400).json({ message: err.message });
  }
}

// DELETE a FAQ
exports.deleteoverviewByAdmin = async (req, res) => {
  try {
    const deleteoverview = await overviewD.findByIdAndRemove({_id:req.params.id})
   return  res.json({ message: "overview deleted" });
  } catch (err) {
   return  res.status(500).json({ message: err.message });
  }
}