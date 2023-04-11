const express = require('express') 
const {createoppurtunities,getAlloppurtunities,updateoppurtunities,deleteoppurtunities} = require('../controllers/admin/oppurtunities')
const {getalloppurtunitiesByStudent} = require('../controllers/student/oppurtunities')
const {getAlloppurtunitiesByTeacher} = require('../controllers/teacher/oppurtunities')
const oppurtunities = express.Router()


//ADMIN
oppurtunities.post('/createoppurtunities',createoppurtunities)
oppurtunities.get('/getAlloppurtunities',getAlloppurtunities)
 oppurtunities.put('/updateoppurtunities/:id',updateoppurtunities)
oppurtunities.delete('/deleteoppurtunities/:id',deleteoppurtunities)


//STUDENT
oppurtunities.get('/getalloppurtunitiesByStudent',getalloppurtunitiesByStudent)

//TEACHER
oppurtunities.get('/getAlloppurtunitiesByTeacher',getAlloppurtunitiesByTeacher)

module.exports =oppurtunities