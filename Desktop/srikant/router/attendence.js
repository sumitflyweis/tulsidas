const express = require("express");
const {
  getAttendenceOfStudentByIdByAdmin,
  getAllAttendenceOfStudentByAdmin,
} = require("../controllers/admin/attendence");
const {
  getAttendenceOfStudentByIdByStudent,
  getAllAttendenceOfStudentByStudent,
} = require("../controllers/student/attendence");
const {
  createAttendenceOfStudentByTeacher,
  createAllAttendenceOfStudentByTeacher,
  getMonthlyAttendance,
  getAttendenceOfStudentByIdByTeacher,
  getAttendenceOfStudentIdByTeacher,
  updateAttendenceOfStudentByTeacher,
  deleteAttendenceOfStudentByTeacher,
  getStudentAttendance
} = require("../controllers/teacher/attendence");
const attendence = express.Router();

//ADMIN
attendence.get(
  "/getAttendenceOfStudentByIdByAdmin/:id",
  getAttendenceOfStudentByIdByAdmin
);
attendence.get(
  "/getAllAttendenceOfStudentByAdmin",
  getAllAttendenceOfStudentByAdmin
);

//STUDENT
attendence.get(
  "/getAttendenceOfStudentByIdByStudent/:id",
  getAttendenceOfStudentByIdByStudent
);
attendence.get(
  "/getAllAttendenceOfStudentByStudent",
  getAllAttendenceOfStudentByStudent
);

//TEACHER
attendence.post(
  "/createAttendenceOfStudentByTeacher",
  createAttendenceOfStudentByTeacher
);
attendence.get(
  "/createAllAttendenceOfStudentByTeacher",
  createAllAttendenceOfStudentByTeacher
);
attendence.get(
  "/getMonthlyAttendance/:studentId/:month",
  getMonthlyAttendance
);

attendence.get(
  "/getAttendenceOfStudentByIdByTeacher/:id",
  getAttendenceOfStudentByIdByTeacher
);
attendence.get(
  "/getAttendenceOfStudentIdByTeacher/:id",
  getAttendenceOfStudentIdByTeacher
);
attendence.put(
  "/updateAttendenceOfStudentByTeacher/:id",
  updateAttendenceOfStudentByTeacher
);
attendence.delete(
  "/deleteAttendenceOfStudentByTeacher/:id",
  deleteAttendenceOfStudentByTeacher
);

attendence.get(
  "/getStudentAttendance/:id",
  getStudentAttendance
);



module.exports = attendence;
