const express = require('express') 
const { createinternshipOfStudentByAdmin,createAllinternshipOfStudentByAdmin,getinternshipOfStudentByIdByAdmin,updateinternshipOfStudentByAdmin,deleteinternshipOfStudentByAdmin } = require('../../controllers/admin/oppurtunityParts/intership')
const { getinternshipOfStudentByIdByStudent,getAllinternshipOfStudentByStudent } = require('../../controllers/student/oppurtunityParts/intership')
const { getinternshipOfStudentByIdByTeacher,getAllinternshipOfStudentByTeacher } = require('../../controllers/teacher/oppurtunityParts/intership')
const internship = express.Router()


//TEACHER
internship.get('/getinternshipOfStudentByIdByTeacher/:id',getinternshipOfStudentByIdByTeacher)
internship.get('/getAllinternshipOfStudentByTeacher',getAllinternshipOfStudentByTeacher)

//STUDENT
internship.get('/getinternshipOfStudentByIdByStudent/:id',getinternshipOfStudentByIdByStudent)
internship.get('/getAllinternshipOfStudentByStudent',getAllinternshipOfStudentByStudent)

//ADMIN
internship.post('/createinternshipOfStudentByAdmin',createinternshipOfStudentByAdmin)
internship.get('/createAllinternshipOfStudentByAdmin',createAllinternshipOfStudentByAdmin)
 internship.get('/getinternshipOfStudentByIdByAdmin/:id',getinternshipOfStudentByIdByAdmin)
 internship.put('/updateinternshipOfStudentByAdmin/:id',updateinternshipOfStudentByAdmin)
 internship.delete('/deleteinternshipOfStudentByAdmin/:id',deleteinternshipOfStudentByAdmin)

module.exports =internship