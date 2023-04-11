const express = require('express') 
 const {createCompetition,getAllCompetition,getCompetitionById,updateCompetition,deleteCompetition} = require('../controllers/admin/competition')
 const {getAllCompetitionbyStudent,getCompetitionByIdbyStudent} = require('../controllers/student/competition')
 const {getAllCompetitionByTeacher,getCompetitionByIdByTeacher} = require('../controllers/teacher/competition')
const competition = express.Router()


//ADMIN
competition.post('/createCompetition',createCompetition)
competition.get('/getAllCompetition',getAllCompetition)
competition.get('/getCompetitionById/:id',getCompetitionById)
competition.put('/updateCompetition/:id',updateCompetition)
competition.delete('/deleteCompetition/:id',deleteCompetition)

//STUDENT
competition.get('/getAllCompetitionbyStudent',getAllCompetitionbyStudent)
competition.get('/getCompetitionByIdbyStudent/:id',getCompetitionByIdbyStudent)

//TEACHER
competition.get('/getAllCompetitionByTeacher',getAllCompetitionByTeacher)
competition.get('/getCompetitionByIdByTeacher/:id',getCompetitionByIdByTeacher)

module.exports =competition