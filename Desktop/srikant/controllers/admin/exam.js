const Exam = require("../../models/exam");

// Create a new exam
exports.createexam = async (req, res) => {
  try {
    const data = {
      important_Questions: req.body.important_Questions,
      previous_papers: req.body.previous_papers,
      examSchedule: req.body.examSchedule,
      date: req.body.date,
      viewResults: req.body.viewResults,
      student_enquiry: req.body.student_enquiry,
      revision: req.body.revision,
    };
    const exam = new Exam(data);
    await exam.save();
    res.status(201).json({ exam });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getAllexam = async (req, res) => {
  try {
    const exams = await Exam.find()
      .populate('student_enquiry')
      .populate('revision');
  return  res.status(200).json({ exams });
  } catch (error) {
  return  res.status(500).json({ message: error.message });
  }
};

// // Get a specific exam with populated fields
// const getExamById = async (req, res) => {
//   try {
//     const exam = await Exam.findById(req.params.id)
//       .populate('viewResults')
//       .populate('student_enquiry')
//       .populate('revision');
//     if (!exam) {
//       return res.status(404).json({ message: 'Exam not found' });
//     }
//     res.status(200).json({ exam });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


exports.updateexam = async (req, res) => {
  try {

    const data = {
        important_Questions: req.body.important_Questions,
        previous_papers: req.body.previous_papers,
        examSchedule: req.body.examSchedule,
        date: req.body.date,
        viewResults: req.body.viewResults,
        student_enquiry: req.body.student_enquiry,
        revision: req.body.revision,
      };
    const exam = await Exam.findByIdAndUpdate(req.params.id,data,{new:true});
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    
   return  res.status(200).json({ exam });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an existing exam
exports.deleteexam = async (req, res) => {
  try {
    const exam = await Exam.findByIdAndDelete(req.params.id);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
  return  res.status(200).json({ exam });
  } catch (error) {
  return  res.status(500).json({ message: error.message });
  }
};
