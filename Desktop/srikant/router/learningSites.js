const express = require('express'); 
 const admin = require('../controllers/admin/learningSites');
const student = require('../controllers/student/learningSites');
const teacher = require('../controllers/teacher/learningSites');

const helpRouter = express.Router()


//ADMIN
helpRouter.get('/getLearningSitesByAdmin',admin.getLearningSitesByAdmin);
helpRouter.get('/getLearningSitesByIdByAdmin/:id',admin.getLearningSitesByIdByAdmin);

//TEACHER
helpRouter.post('/createLearningSitesByTeacher',teacher.createLearningSitesByTeacher);
helpRouter.get('/getLearningSitesByTeacher',   teacher.getLearningSitesByTeacher);
helpRouter.get('/getLearningSitesByIdByTeacher/:id',   teacher.getLearningSitesByIdByTeacher);
helpRouter.put('/updateLearningSitesByIdByTeacher/:id', teacher.updateLearningSitesByIdByTeacher);
helpRouter.delete('/deleteLearningSitesByIdByTeacher/:id', teacher.deleteLearningSitesByIdByTeacher);


//STUDENT
helpRouter.get('/getLearningSitesByStudent',student.getLearningSitesByStudent);
helpRouter.get('/getLearningSitesByIdByStudent/:id',student.getLearningSitesByIdByStudent);

module.exports = helpRouter;