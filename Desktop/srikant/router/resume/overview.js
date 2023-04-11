const express = require('express'); 
 const admin = require('../../controllers/admin/resume/overview');
const student = require('../../controllers/student/resume/overview');

const overview = express.Router()

//STUDENT
overview.get('/getAlloverviewByStudent',student.getAlloverviewByStudent);

//ADMIN
overview.post('/createoverviewByAdmin',admin.createoverviewByAdmin);
overview.get('/getAlloverviewByAdmin', admin.getAlloverviewByAdmin);
overview.put('/updateoverviewByAdmin/:id', admin.updateoverviewByAdmin);
overview.delete('/deleteoverviewByAdmin/:id', admin.deleteoverviewByAdmin);


module.exports = overview;