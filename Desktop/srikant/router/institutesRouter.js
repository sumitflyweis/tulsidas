const express = require("express");
const admin = require("../controllers/admin/institutes_controllers");
const student = require("../controllers/student/institute_controller");
const teacher = require("../controllers/teacher/institute_controllers");

const router = express();

//ADMIN
router.post("/add", admin.AddInstitiutes);
router.get("/get/all", admin.getAllInstitutes);
router.get("/get/Id/:id", admin.getByInstitutesId);
router.delete("/delete/:id", admin.DeleteInstitutes);
router.put("/update/:id", admin.updateInstitutes);

//STUDENT
router.get("/getAllInstitutesByStudent", student.getAllInstitutesByStudent);
router.get("/getByInstitutesIdByStudent/:id", student.getByInstitutesIdByStudent);

//TEACHER
router.get("/getAllInstitutesByTeacher", teacher.getAllInstitutesByTeacher);
router.get("/getByInstitutesIdByTeacher/:id", teacher.getByInstitutesIdByTeacher);


module.exports = router;
