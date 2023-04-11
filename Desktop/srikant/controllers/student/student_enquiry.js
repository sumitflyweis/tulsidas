const StudentEnquiry = require('../../models/student_enquiry');
const student = require('../../models/student_models')


exports. getstudentEnquiryByIdByStudent = async (req, res) => {
try{
  const data =  await StudentEnquiry.findById(req.params.id)
  return res.status(200).send(data)
}
catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
}

// Read all enquiries
exports.getAllstudentEnquiryByStudent = async (req, res) => {
    try{
        const data =  await StudentEnquiry.find().populate('studentId');
        return res.status(200).send(data)
}catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
}
