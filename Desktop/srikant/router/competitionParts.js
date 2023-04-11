const express = require('express'); 
const admin = require('../controllers/admin/competitionParts');
const student = require('../controllers/student/competitionParts');
const teacher = require('../controllers/teacher/competitionParts');
const competitionParts = express.Router()

//ADMIN
competitionParts.post('/createcompetitionParts',   admin.createcompetitionParts);
competitionParts.get('/getcompetitionParts',   admin.getcompetitionParts);
competitionParts.put('/updatecompetitionParts/:id', admin.updatecompetitionParts);
competitionParts.delete('/DeletecompetitionParts/:id', admin.DeletecompetitionParts);

//TEACHER
competitionParts.get('/getcompetitionPartsByTeacher',   teacher.getcompetitionPartsByTeacher);

//STUDENT
competitionParts.get('/getcompetitionPartsByStudent',   student.getcompetitionPartsByStudent);

module.exports = competitionParts;