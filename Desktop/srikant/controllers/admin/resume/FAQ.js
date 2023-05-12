const FAq = require("../../../models/resume/FAQ");

// CREATE a new FAQ
exports.createFAQByAdmin = async (req, res) => {
  try {
    const newFAQ = await FAq.create({FAQ : req.body.FAQ});
   return  res.status(201).json(newFAQ);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// READ all FAQs
exports.getAllFAQByAdmin = async (req, res) => {
  try {
    const faqs = await FAq.find();
   return  res.status(201).send({msg:faqs});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


// UPDATE a FAQ
exports.updateFAQByAdmin = async (req, res) => {
  try {
    const updatedFAQ = await FAq.findById({_id:req.params.id},{FAQ:req.body.FAQ},{new:true})
   return res.json(updatedFAQ);
  } catch (err) {
  return   res.status(400).json({ message: err.message });
  }
}

// DELETE a FAQ
exports.deleteFAQByAdmin = async (req, res) => {
  try {
    const deleteFAQ = await FAq.findByIdAndRemove({_id:req.params.id})
   return  res.json({ message: "FAQ deleted" });
  } catch (err) {
   return  res.status(500).json({ message: err.message });
  }
}
