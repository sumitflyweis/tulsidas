const StudentEnquiry = require('../../models/student_enquiry');
const student = require('../../models/student_models')


exports. getstudentEnquiryByIdByAdmin = async (req, res) => {
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
exports.getAllstudentEnquiryByAdmin = async (req, res) => {
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
