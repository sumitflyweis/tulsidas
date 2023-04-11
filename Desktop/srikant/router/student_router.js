const express = require("express");
const student = require("../controllers/student/student_controllers");
const admin = require("../controllers/admin/student_controllers");
const teacher = require("../controllers/teacher/student_controllers");

const router = express();

//STUDENT
router.post("/register", student.RegisterStudentData);
router.post("/login", student.SignIn);
router.put("/update/:id", student.UpdateProfile);
router.delete("/delete/:id", student.DeleteStudent);
router.get("/getAllStudent", student.getAllStudent);
router.get("/studentgetById/:id", student.studentgetById);
router.post("/forgetPassword", student.forgetPassword);
router.post("/VerifyOtp", student.VerifyOtp)
router.put("/UpdateProfilepassword/:id", student.UpdateProfilepassword)

//TEACHER
router.get("/getAllStudentByTeacher", teacher.getAllStudentByTeacher);
router.get("/studentgetByIdByTeacher/:id", teacher.studentgetByIdByTeacher);

//ADMIN
router.post("/RegisterStudentDataByAdmin", admin.RegisterStudentDataByAdmin);
router.post("/SignInByAdmin", admin.SignInByAdmin);
router.put("/UpdateProfileByAdmin/:id", admin.UpdateProfileByAdmin);
router.delete("/DeleteStudentByAdmin/:id", admin.DeleteStudentByAdmin);
router.get("/getAllStudentByAdmin", admin.getAllStudentByAdmin);
router.get("/studentgetByIdByAdmin/:id", admin.studentgetByIdByAdmin);

module.exports = router;
