const FAq = require("../../../models/resume/FAQ");

// READ all FAQs
exports.getAllFAQByStudent = async (req, res) => {
  try {
    const faqs = await FAq.find();
   return  res.status(201).send(faqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
