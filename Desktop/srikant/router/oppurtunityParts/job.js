const express = require('express') 
const { createjobOfStudentByAdmin,createAlljobOfStudentByAdmin,getjobOfStudentByIdByAdmin,updatejobOfStudentByAdmin,deletejobOfStudentByAdmin } = require('../../controllers/admin/oppurtunityParts/job')
const { getjobOfStudentByIdByStudent,getAlljobOfStudentByStudent } = require('../../controllers/student/oppurtunityParts/job')
const { getjobOfStudentByIdByTeacher,getAlljobOfStudentByTeacher } = require('../../controllers/teacher/oppurtunityParts/job')
const job = express.Router()


//TEACHER
job.get('/getjobOfStudentByIdByTeacher/:id',getjobOfStudentByIdByTeacher)
job.get('/getAlljobOfStudentByTeacher',getAlljobOfStudentByTeacher)

//STUDENT
job.get('/getjobOfStudentByIdByStudent/:id',getjobOfStudentByIdByStudent)
job.get('/getAlljobOfStudentByStudent',getAlljobOfStudentByStudent)

//ADMIN
job.post('/createjobOfStudentByAdmin',createjobOfStudentByAdmin)
job.get('/createAlljobOfStudentByAdmin',createAlljobOfStudentByAdmin)
 job.get('/getjobOfStudentByIdByAdmin/:id',getjobOfStudentByIdByAdmin)
 job.put('/updatejobOfStudentByAdmin/:id',updatejobOfStudentByAdmin)
 job.delete('/deletejobOfStudentByAdmin/:id',deletejobOfStudentByAdmin)

module.exports =job