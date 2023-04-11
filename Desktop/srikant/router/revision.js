const express = require("express");
const {createrevision,getrevision,updaterevision ,deleterevision} = require("../controllers/admin/revision");
const { getrevisionByStudent} = require("../controllers/student/revision");
const { getrevisionByTeacher} = require("../controllers/teacher/revision");
const revision = express.Router();

//ADMIN
revision.post("/createrevision", createrevision);
revision.put("/updaterevision/:id", updaterevision);
revision.get("/getrevision", getrevision);
revision.delete("/deleterevision/:id", deleterevision);

// //STUDENT
revision.get("/getrevisionByStudent", getrevisionByStudent);

// //TEACHER
revision.get("/getrevisionByTeacher", getrevisionByTeacher);

module.exports = revision;
