const Exam = require("../../models/exam");

exports.getallexamByStudent = async (req, res) => {
    try {
      const exams = await Exam.find()
        .populate('student_enquiry')
        .populate('revision');
    return  res.status(200).json({ exams });
    } catch (error) {
    return  res.status(500).json({ message: error.message });
    }
  };