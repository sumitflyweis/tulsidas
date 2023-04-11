const express = require('express'); 
 const admin = require('../../controllers/admin/resume/FAQ');
const student = require('../../controllers/student/resume/FAQ');

const faq = express.Router()

//STUDENT
faq.get('/getAllFAQByStudent',student.getAllFAQByStudent);

//ADMIN
faq.post('/createFAQByAdmin',admin.createFAQByAdmin);
faq.get('/getAllFAQByAdmin', admin.getAllFAQByAdmin);
faq.put('/updateFAQByAdmin/:id', admin.updateFAQByAdmin);
faq.delete('/deleteFAQByAdmin/:id', admin.deleteFAQByAdmin);


module.exports = faq;