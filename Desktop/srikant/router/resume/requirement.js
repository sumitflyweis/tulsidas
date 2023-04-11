const express = require('express'); 
 const admin = require('../../controllers/admin/resume/requirement');
const student = require('../../controllers/student/resume/requirement');

const requirement = express.Router()

//STUDENT
requirement.get('/getAllrequirementByStudent',student.getAllrequirementByStudent);

//ADMIN
requirement.post('/createrequirementByAdmin',admin.createrequirementByAdmin);
requirement.get('/getAllrequirementByAdmin', admin.getAllrequirementByAdmin);
requirement.put('/updaterequirementByAdmin/:id', admin.updaterequirementByAdmin);
requirement.delete('/deleterequirementByAdmin/:id', admin.deleterequirementByAdmin);


module.exports = requirement;