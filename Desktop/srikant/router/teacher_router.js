const { Router } = require("express");
const express = require("express");
const teacher = require("../controllers/teacher/teacherControllers");
const admin = require("../controllers/admin/teacherControllers");
const student = require("../controllers/student/teacherControllers");

const router = express();

//TEACHER
router.post("/register", teacher.RegisterTeacher);
router.post("/loginteacher", teacher.teacherLogin);
router.put("/update/:id", teacher.UpdateTeacherId);
router.delete("/delete/:id", teacher.DeleteTeacher);
router.get("/get/all", teacher.getAllteacher);
router.get("/get/:id", teacher.getByTeacherId);
router.post("/forgetPassword", teacher.forgetPasswordforteacher);
router.put("/resetPassword/:id", teacher.resetPasswordforteacher)
router.post("/verifyot", teacher.VerifyOtpforteacher)


//STUDENT
router.get("/getByTeacherIdByStudent/:id", student.getByTeacherIdByStudent);
router.get("/getAllteacherByStudent", student.getAllteacherByStudent);

//ADMIN
router.post("/RegisterTeacherByAdmin", admin.RegisterTeacherByAdmin);
router.post("/teacherLoginByAdmin", admin.teacherLoginByAdmin);
router.put("/UpdateTeacherIdByAdmin/:id", admin.UpdateTeacherIdByAdmin);
router.delete("/DeleteTeacherByAdmin/:id", admin.DeleteTeacherByAdmin);
router.get("/getAllteacherByAdmin", admin.getAllteacherByAdmin);
router.get("/getByTeacherIdByAdmin/:id", admin.getByTeacherIdByAdmin);

module.exports = router;
