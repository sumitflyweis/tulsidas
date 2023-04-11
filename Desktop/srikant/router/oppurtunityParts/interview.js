const express = require('express') 
const { createinterviewOfStudentByAdmin,createAllinterviewOfStudentByAdmin,getinterviewOfStudentByIdByAdmin,updateinterviewOfStudentByAdmin,deleteinterviewOfStudentByAdmin } = require('../../controllers/admin/oppurtunityParts/interview')
const { getinterviewOfStudentByIdByStudent,getAllinterviewOfStudentByStudent } = require('../../controllers/student/oppurtunityParts/interview')
const { getinterviewOfStudentByIdByTeacher,getAllinterviewOfStudentByTeacher } = require('../../controllers/teacher/oppurtunityParts/interview')
const interview = express.Router()


//TEACHER
interview.get('/getinterviewOfStudentByIdByTeacher/:id',getinterviewOfStudentByIdByTeacher)
interview.get('/getAllinterviewOfStudentByTeacher',getAllinterviewOfStudentByTeacher)

//STUDENT
interview.get('/getinterviewOfStudentByIdByStudent/:id',getinterviewOfStudentByIdByStudent)
interview.get('/getAllinterviewOfStudentByStudent',getAllinterviewOfStudentByStudent)

//ADMIN
interview.post('/createinterviewOfStudentByAdmin',createinterviewOfStudentByAdmin)
interview.get('/createAllinterviewOfStudentByAdmin',createAllinterviewOfStudentByAdmin)
 interview.get('/getinterviewOfStudentByIdByAdmin/:id',getinterviewOfStudentByIdByAdmin)
 interview.put('/updateinterviewOfStudentByAdmin/:id',updateinterviewOfStudentByAdmin)
 interview.delete('/deleteinterviewOfStudentByAdmin/:id',deleteinterviewOfStudentByAdmin)

module.exports =interview