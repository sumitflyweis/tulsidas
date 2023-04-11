const express = require('express') 
const { createseminarsOfStudentByAdmin,createAllseminarsOfStudentByAdmin,getseminarsOfStudentByIdByAdmin,updateseminarsOfStudentByAdmin,deleteseminarsOfStudentByAdmin } = require('../../controllers/admin/oppurtunityParts/seminars')
const { getseminarsOfStudentByIdByStudent,getAllseminarsOfStudentByStudent } = require('../../controllers/student/oppurtunityParts/seminars')
const { getseminarsOfStudentByIdByTeacher,getAllseminarsOfStudentByTeacher } = require('../../controllers/teacher/oppurtunityParts/seminars')
const seminars = express.Router()


//TEACHER
seminars.get('/getseminarsOfStudentByIdByTeacher/:id',getseminarsOfStudentByIdByTeacher)
seminars.get('/getAllseminarsOfStudentByTeacher',getAllseminarsOfStudentByTeacher)

//STUDENT
seminars.get('/getseminarsOfStudentByIdByStudent/:id',getseminarsOfStudentByIdByStudent)
seminars.get('/getAllseminarsOfStudentByStudent',getAllseminarsOfStudentByStudent)

//ADMIN
seminars.post('/createseminarsOfStudentByAdmin',createseminarsOfStudentByAdmin)
seminars.get('/createAllseminarsOfStudentByAdmin',createAllseminarsOfStudentByAdmin)
 seminars.get('/getseminarsOfStudentByIdByAdmin/:id',getseminarsOfStudentByIdByAdmin)
 seminars.put('/updateseminarsOfStudentByAdmin/:id',updateseminarsOfStudentByAdmin)
 seminars.delete('/deleteseminarsOfStudentByAdmin/:id',deleteseminarsOfStudentByAdmin)

module.exports =seminars