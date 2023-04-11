const express = require('express'); 
 const help = require('../controllers/admin/helpAndSupport');
const help1 = require('../controllers/student/helpAndSupport');
const help2= require('../controllers/teacher/helpAndSupport');

const helpRouter = express.Router()


//ADMIN
helpRouter.post('/createHelp',   help.createHelp);
helpRouter.get('/gethelp',   help.gethelp);
helpRouter.put('/updateHelp/:id', help.updateHelp);
helpRouter.delete('/DeleteHelp/:id', help.DeleteHelp);

//TEACHER
helpRouter.get('/getHelpByTeacher',   help2.getHelpByTeacher);

//STUDENT
helpRouter.get('/getHelpByStudent',   help1.getHelpByStudent);

module.exports = helpRouter;