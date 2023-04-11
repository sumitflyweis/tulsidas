const Attendance = require('../../models/attendence');

// CREATE
exports.createAttendenceOfStudentByTeacher = async (req, res) => {
  try {
    const data = {
        name:req.body.name,
        date:req.body.date,
        present:req.body.present,
        StudentId:req.body.StudentId
    }
    const savedAttendance = await Attendance.create(data);
    return res.status(200).send( savedAttendance)
  } catch (err) {
    console.error(err);
  }
}

// READ
exports.getAttendenceOfStudentByIdByTeacher = async (req, res) => {
  try {
    const attendance = await Attendance.findById(req.params.id).populate('StudentId');
    return res.status(200).send(attendance)
  } catch (err) {
    console.error(err);
  }
}

exports.getAttendenceOfStudentIdByTeacher = async (req, res) => {
  try {
    const attendance = await Attendance.find({StudentId:req.params.id}).populate('StudentId');
    const presentDays = attendance.filter(a=> a.present == 'p').length
    const absentDays = attendance.filter(a => a.present == 'a').length;
    console.log(absentDays)
    return res.status(200).send({totalNoOfDaysPresent:presentDays,totalNoOfDaysAbsent:absentDays,data:attendance})
  } catch (err) {
    console.error(err);
  }
}

exports.createAllAttendenceOfStudentByTeacher = async (req, res) => {
  try {
    const attendanceList = await Attendance.find().populate('StudentId');
    return res.status(200).send(attendanceList)
  } catch (err) {
    console.error(err);
  }
}

// UPDATE
exports.updateAttendenceOfStudentByTeacher = async (req, res) => {
  try {
    const data = {
        name:req.body.name,
        date:req.body.date,
        present:req.body.present,
        StudentId:req.body.StudentId
    }
    const updatedAttendance = await Attendance.findByIdAndUpdate(req.params.id, data, {
      new: true
    })
    console.log(updatedAttendance)
    return res.status(200).send(updatedAttendance)
      } catch (err) {
    console.error(err);
  }
}

// DELETE
exports.deleteAttendenceOfStudentByTeacher = async (req, res) => {
  try {
    const deletedAttendance = await Attendance.findByIdAndDelete(req.params.id);
    return res.status(200).send(deletedAttendance)
   
  } catch (err) {
    console.error(err);
  }
}









// const attendence = require("../../models/attendence");

// exports.createAttendence = async (req, res) => {
//   try {
//     let students = [];
//     return res.send(students);
//   } catch (err) {
//     console.log(err.message);
//     return res.status(500).json({
//       message: "internal server error",
//     });
//   }
// };

// exports.getcompetitionPartsByTeacher = async (req, res) => {
//   try {
//     const competitionPartsData = await competitionParts.find();
//     if (!competitionPartsData || competitionPartsData.length === 0) {
//       return res.status(400).json({
//         message: "No competitionPartsData",
//       });
//     }
//     return res.status(200).json({
//       message: "competitionPartsData found",
//       data: competitionPartsData,
//     });
//   } 
// };

// app.post('/students', (req, res) => {
//   const { name } = req.body;

//   if (!name) {
//     return res.status(400).json({ error: 'Name is required' });
//   }

//   const id = students.length + 1;
//   const student = { id, name, attendance: [] };

//   students.push(student);
//   res.status(201).json(student);
// });

// app.put('/students/:id', (req, res) => {
//   const { id } = req.params;
//   const { date, present } = req.body;

//   const student = students.find((s) => s.id === parseInt(id));

//   if (!student) {
//     return res.status(404).json({ error: 'Student not found' });
//   }

//   const attendance = { date, present };
//   student.attendance.push(attendance);

//   res.json(student);
// });

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });
