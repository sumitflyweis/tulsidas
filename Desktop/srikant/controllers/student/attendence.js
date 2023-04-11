const Attendance = require('../../models/attendence');


// READ
exports.getAttendenceOfStudentByIdByStudent = async (req, res) => {
  try {
    const attendance = await Attendance.findById(req.params.id).populate('StudentId');
    return res.status(200).send(attendance)
  } catch (err) {
    console.error(err);
  }
}

exports.getAllAttendenceOfStudentByStudent = async (req, res) => {
  try {
    const attendanceList = await Attendance.find().populate('StudentId');
    return res.status(200).send(attendanceList)
  } catch (err) {
    console.error(err);
  }
}
