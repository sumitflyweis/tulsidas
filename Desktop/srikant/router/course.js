const express = require('express') 
const {getAllcourseByAdmin} = require('../controllers/admin/course')
const {getallcourseByStudent } = require('../controllers/student/course')
const {createcourse,getAllcourse,updatecourse,deletecourse} = require('../controllers/teacher/course')
const course = express.Router()


//ADMIN
course.get('/getAllcourseByAdmin',getAllcourseByAdmin)

//STUDENT
course.get('/getallcourseByStudent',getallcourseByStudent)

//TEACHER
course.post('/createcourse',createcourse)
course.get('/getAllcourse',getAllcourse)
course.put('/updatecourse/:id',updatecourse)
course.delete('/deletecourse/:id',deletecourse)

module.exports =course