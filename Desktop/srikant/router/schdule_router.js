const express = require("express");
const teacher = require("../controllers/teacher/schduleSchema");
const admin = require("../controllers/admin/schduleSchema");
const student = require("../controllers/student/schduleSchema");
const router = express();

//TEACHER
router.post("/add", teacher.AddSchduleTime);
router.get("/get/all", teacher.GetAllAssigment);
router.get("/student/:id", teacher.getByStudentId);
router.get("/teacher/:id", teacher.getAssigmentByTeacherID);
router.delete("/delete/:id", teacher.DeletedSchdule);

//ADMIN

router.get("/GetAllAssigmentByAdmin", admin.GetAllAssigmentByAdmin);
router.get("/getByStudentIdByAdmin/:id", admin.getByStudentIdByAdmin);
router.get("/getAssigmentByTeacherIDByAdmin/:id", admin.getAssigmentByTeacherIDByAdmin);
router.delete("/DeletedSchduleByAdmin/:id", admin.DeletedSchduleByAdmin);


//STUDENT
router.get("/GetAllAssigmentByStudent", student.GetAllAssigmentByStudent);
router.get("/getByStudentIdByStudent/:id", student.getByStudentIdByStudent);
router.get("/getAssigmentByTeacherIDByStudent/:id", student.getAssigmentByTeacherIDByStudent);

module.exports = router;
