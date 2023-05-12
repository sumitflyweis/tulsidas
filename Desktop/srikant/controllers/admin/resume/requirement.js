const requirE = require("../../../models/resume/requirement");

// CREATE a new FAQ
exports.createrequirementByAdmin = async (req, res) => {
  try {
    const requirementData = await requirE.create({requirement:req.body.requirement});
   return  res.status(201).json(requirementData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// READ all FAQs
exports.getAllrequirementByAdmin = async (req, res) => {
  try {
    const overviewData = await requirE.find();
   return  res.status(201).send({msg:overviewData});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


// UPDATE a FAQ
exports.updaterequirementByAdmin = async (req, res) => {
  try {
    const updatedrequirement = await requirE.findById({_id:req.params.id},{requirement:req.body.requirement},{new:true})
   return res.json(updatedrequirement);
  } catch (err) {
  return   res.status(400).json({ message: err.message });
  }
}

// DELETE a FAQ
exports.deleterequirementByAdmin = async (req, res) => {
  try {
    const deleterequirement = await requirE.findByIdAndRemove({_id:req.params.id})
   return  res.json({ message: "requirement deleted" });
  } catch (err) {
   return  res.status(500).json({ message: err.message });
  }
}