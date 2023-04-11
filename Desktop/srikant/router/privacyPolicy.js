const express = require("express");
const {
  createPrivacy,
  updateprivacy,
  getprivacy,
  deleteprivacy,
} = require("../controllers/admin/privacyPolicy");
const { getprivacyByStudent } = require("../controllers/student/privacyPolicy");
const { getprivacyByTeacher } = require("../controllers/teacher/privacyPolicy");
const privacy = express.Router();

//ADMIN
privacy.post("/createPrivacy", createPrivacy);
privacy.put("/updateprivacy/:id", updateprivacy);
privacy.get("/getprivacy", getprivacy);
privacy.delete("/deleteprivacy/:id", deleteprivacy);

//STUDENT
privacy.get("/getprivacyByStudent", getprivacyByStudent);

//TEACHER
privacy.get("/getprivacyByTeacher", getprivacyByTeacher);

module.exports = privacy;
