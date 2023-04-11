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
  getAttendenceOfStudentByIdByTeacher,
  getAttendenceOfStudentIdByTeacher,
  updateAttendenceOfStudentByTeacher,
  deleteAttendenceOfStudentByTeacher,
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

module.exports = attendence;
