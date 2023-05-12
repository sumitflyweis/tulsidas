const StudentEnquiry = require('../../models/student_enquiry');
const student = require('../../models/student_models')

// Create a new enquiry
exports.createstudentEnquiry = async (req, res) => {
    try{
    const enquiry = {
        studentId: req.body.studentId,
          query:req.body.query
    }

    const studentData = await student.findById({_id:enquiry.studentId})
    console.log(studentData)

    const data = {
        studentId:studentData._id,
        rollno:studentData.roll_number,
        firstName:studentData.name,
        lastName:studentData.name,
        branch: studentData.branch,
        query:req.body.query
    }

  const newEnquiry = await  StudentEnquiry.create(data);
  return res.status(200).send(newEnquiry)
}
catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
}


exports.getstudentEnquiryById = async (req, res) => {
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
exports.getAllstudentEnquiry = async (req, res) => {
    try{
        const data =  await StudentEnquiry.find().populate('studentId');
        return res.status(200).send({msg:data})
}catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
}


exports.updatestudentEnquiry = async (req, res) => {
    try{
        const enquiry = {
            studentId: req.body.studentId,
              query:req.body.query
        }
  const update =  await StudentEnquiry.findByIdAndUpdate(req.params.id, enquiry, { new: true }).populate('studentId');
  console.log(update)
  return res.status(200).send(update)
}catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
}


exports.deletestudentEnquiry = async (req, res) => {
    try{
  const data =  await StudentEnquiry.findByIdAndDelete(req.params.id);
  console.log(data)
  return res.status(200).send(data)
}catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
}