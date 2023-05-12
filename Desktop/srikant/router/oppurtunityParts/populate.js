const express = require('express') 
 const { } = require('../../controllers/admin/oppurtunityParts/populate')
//  const { getAllpopulate1ByStudent,getpopulate1ByIdByStudent} = require('../controllers/student/populate1')
//  const { getAllpopulate1ByTeacher,getpopulate1ByIdByTeacher} = require('../controllers/teacher/populate1')
const populate1 = express.Router()


//ADMIN
populate1.post('/createpopulate1AndSubpopulate1',createpopulate1AndSubpopulate1)
// populate1.get('/getAllpopulate1',getAllpopulate1)
// populate1.get('/getpopulate1ById/:id',getpopulate1ById)
// populate1.put('/updatepopulate1/:id',updatepopulate1)
// populate1.delete('/deletepopulate1/:id',deletepopulate1)

//STUDENT
// populate1.get('/getAllpopulate1ByStudent',getAllpopulate1ByStudent)
// populate1.get('/getpopulate1ByIdByStudent/:id',getpopulate1ByIdByStudent)

//TEACHER
// populate1.get('/getAllpopulate1ByTeacher',getAllpopulate1ByTeacher)
// populate1.get('/getpopulate1ByIdByTeacher/:id',getpopulate1ByIdByTeacher)

module.exports =populate1