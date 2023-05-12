const Attendance = require("../../models/attendence");

// CREATE
exports.createAttendenceOfStudentByTeacher = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      date: req.body.date,
      present: req.body.present,
      StudentId: req.body.StudentId,
    };

    const d = new Date(data.date);
    console.log(d)
    const month = d.getMonth()+1;
    console.log(month)

    // router.get('/getMonth/:dateString', (req, res) => {
    //   const dateString = req.params.dateString;
    //   const date = new Date(dateString);
    //   const month = date.getMonth();

    //   res.status(200).json({ month: month });
    // });

    const savedAttendance = await Attendance.create(data);
    savedAttendance.month = month;
    await savedAttendance.save();
    return res.status(200).send(savedAttendance);
  } catch (err) {
    console.error(err);
  }
};

exports.getMonthlyAttendance = async (req, res) => {
  const studentId = req.params.studentId;
  const month = req.params.month;

  try {
    const attendance = await Attendance.find({
      StudentId: studentId,
      month: month,
    })/*.select("date present -_id");*/

    let monthlyAttendance = {
      presentDays: 0,
      absentDays: 0,
      records: attendance,
    };

    attendance.forEach((record) => {
      if (record.present === "p") {
        monthlyAttendance.presentDays++;
      } else {
        monthlyAttendance.absentDays++;
      }
    });

    res.status(200).json(monthlyAttendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ
exports.getAttendenceOfStudentByIdByTeacher = async (req, res) => {
  try {
    const attendance = await Attendance.findById(req.params.id).populate(
      "StudentId"
    );
    return res.status(200).send(attendance);
  } catch (err) {
    console.error(err);
  }
};

exports.getAttendenceOfStudentIdByTeacher = async (req, res) => {
  try {
    const attendance = await Attendance.find({
      StudentId: req.params.id,
    }).populate("StudentId");
    const presentDays = attendance.filter((a) => a.present == "p").length;
    const absentDays = attendance.filter((a) => a.present == "a").length;
    console.log(absentDays);
    return res
      .status(200)
      .send({
        totalNoOfDaysPresent: presentDays,
        totalNoOfDaysAbsent: absentDays,
        data: attendance,
      });
  } catch (err) {
    console.error(err);
  }
};

exports.createAllAttendenceOfStudentByTeacher = async (req, res) => {
  try {
    const attendanceList = await Attendance.find().populate("StudentId");
    return res.status(200).send({msg:attendanceList});
  } catch (err) {
    console.error(err);
  }
};

// UPDATE
exports.updateAttendenceOfStudentByTeacher = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      date: req.body.date,
      present: req.body.present,
      StudentId: req.body.StudentId,
    };
    const updatedAttendance = await Attendance.findByIdAndUpdate(
      req.params.id,
      data,
      {
        new: true,
      }
    );
    console.log(updatedAttendance);
    return res.status(200).send(updatedAttendance);
  } catch (err) {
    console.error(err);
  }
};

// DELETE
exports.deleteAttendenceOfStudentByTeacher = async (req, res) => {
  try {
    const deletedAttendance = await Attendance.findByIdAndDelete(req.params.id);
    return res.status(200).send(deletedAttendance);
  } catch (err) {
    console.error(err);
  }
};


exports.getStudentAttendance = async (req, res, next) => {
  try {
    const studentId = req.params.id;
    const month = req.query.month;

    const student = await Attendance.find({StudentId:studentId});
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    console.log(student)

    const presentDays = student.filter((a) => a.present == "p").length;
    const absentDays = student.filter((a) => a.present == "a").length;
    console.log(absentDays);
    // return res
    //   .status(200)
    //   .send({
    //     totalNoOfDaysPresent: presentDays,
    //     totalNoOfDaysAbsent: absentDays,
    //     data: attendance,
    //   });






    const attendance = student./*attendance.*/filter((a) => {
      // console.log(new Date(a.date).getMonth()+1)
      return new Date(a.date).getMonth()+1 === parseInt(month);
    });
    console.log(attendance)

    return res.status(200).send({presentDays:presentDays ,absentDays:absentDays , data: attendance });
  } catch (error) {
    return next(error);
  }
};
