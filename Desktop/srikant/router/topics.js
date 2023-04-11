const express = require('express') 
const {createtopics,getAlltopics,updatetopics,deletetopics} = require('../controllers/admin/topics')
const {getAlltopicsByStudent,getAlltopicsByIdByStudent} = require('../controllers/student/topics')
const {getAlltopicsByTeacher,getAlltopicsByIdByTeacher} = require('../controllers/teacher/topics')
const topics = express.Router()


// //ADMIN
topics.post('/createtopics',createtopics)
topics.get('/getAlltopics',getAlltopics)
topics.put('/updatetopics/:id',updatetopics)
topics.delete('/deletetopics/:id',deletetopics)

// //STUDENT
topics.get('/getAlltopicsByStudent',getAlltopicsByStudent)
topics.get('/getAlltopicsByIdByStudent/:id',getAlltopicsByIdByStudent)

// //TEACHER
topics.get('/getAlltopicsByTeacher',getAlltopicsByTeacher)
topics.get('/getAlltopicsByIdByTeacher/:id',getAlltopicsByIdByTeacher)

module.exports =topics