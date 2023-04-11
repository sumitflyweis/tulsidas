const express = require('express') 
const {createexam,getAllexam,updateexam,deleteexam} = require('../controllers/admin/exam')
const {getallexamByStudent} = require('../controllers/student/exam')
const {getAllexamByTeacher} = require('../controllers/teacher/exam')
const exam = express.Router()


//ADMIN
exam.post('/createexam',createexam)
exam.get('/getAllexam',getAllexam)
 exam.put('/updateexam/:id',updateexam)
exam.delete('/deleteexam/:id',deleteexam)


//STUDENT
exam.get('/getallexamByStudent',getallexamByStudent)

//TEACHER
exam.get('/getAllexamByTeacher',getAllexamByTeacher)

module.exports =exam