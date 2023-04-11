const express = require('express'); 
 const admin = require('../../controllers/admin/resume/lessons');
const student = require('../../controllers/student/resume/lessons');

const lessons = express.Router()

//STUDENT
lessons.get('/getAlllessonsByStudent',student.getAlllessonsByStudent);

//ADMIN
lessons.post('/createlessonsByAdmin',admin.createlessonsByAdmin);
lessons.get('/getAlllessonsByAdmin', admin.getAlllessonsByAdmin);
lessons.put('/updatelessonsByAdmin/:id', admin.updatelessonsByAdmin);
lessons.delete('/deletelessonsByAdmin/:id', admin.deletelessonsByAdmin);


module.exports = lessons;